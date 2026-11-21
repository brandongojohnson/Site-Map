// Global colour replacement engine.
//
// Reads every colour used by the page's stylesheets, SVG paint attributes and
// inline styles, and lets you swap one colour for another everywhere at once.
//
//  - Rewrites colour *tokens* inside existing declarations (CSSOM, in place), so
//    the rule's selector, specificity, order and every other property are kept.
//  - Keeps each usage's transparency: rgba(41,151,255,.3) -> rgba(new, .3).
//  - Works for hex, rgb()/rgba() (comma or space syntax, incl. `rgb(r g b / var(--o))`),
//    `white`/`black`, hover/focus/breakpoint rules, keyframes and CSS variables.
//  - Preview (pending) changes can be cancelled; applied ones are kept in a
//    history, persisted to localStorage and re-applied on load.

const STORAGE_KEY = 'sortly-color-replacements';
const COLOR_RE = /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})\b|rgba?\((?:[^()]|\([^()]*\))*\)|\b(?:white|black)\b/gi;
const PAINT_ATTRS = ['fill', 'stroke', 'stop-color', 'flood-color', 'lighting-color', 'color'];
const TOOL_SELECTOR = '[data-color-tool]';

/* ------------------------------------------------------------------ colour helpers */

export const toHex = ({ r, g, b }) => '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');
export const keyOf = ({ r, g, b }) => (r << 16) | (g << 8) | b;
export const fromKey = (k) => ({ r: (k >> 16) & 255, g: (k >> 8) & 255, b: k & 255 });
export const clamp255 = (n) => Math.max(0, Math.min(255, Math.round(Number(n) || 0)));

/** "#abc", "abc", "#aabbcc", "aabbcc" -> {r,g,b} or null */
export function parseHex(str) {
  let h = String(str || '').trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(h)) h = [...h].map((c) => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}

/** Any CSS colour string the browser reports (computed style) -> {r,g,b,a} or null */
export function parseCssColor(str) {
  const p = parseToken(String(str || ''));
  return p ? { r: p.r, g: p.g, b: p.b, a: p.a } : null;
}

const FUNC_RE = /^rgba?\(\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)(?:\s*[,/]\s*([\s\S]+?))?\s*\)$/i;

function parseToken(tok) {
  const s = tok.trim().toLowerCase();
  if (s === 'white') return { r: 255, g: 255, b: 255, a: 1, fmt: 'named' };
  if (s === 'black') return { r: 0, g: 0, b: 0, a: 1, fmt: 'named' };
  if (s[0] === '#') {
    let h = s.slice(1);
    if (h.length <= 4) h = [...h].map((c) => c + c).join('');
    const n = (i) => parseInt(h.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1, fmt: 'hex', alphaHex: h.length === 8 ? h.slice(6, 8) : '' };
  }
  const m = FUNC_RE.exec(s);
  if (!m) return null;
  const alphaText = m[4];
  const a = alphaText === undefined ? 1 : /^[\d.]+%?$/.test(alphaText) ? (alphaText.endsWith('%') ? parseFloat(alphaText) / 100 : parseFloat(alphaText)) : 1;
  return { r: Math.round(+m[1]), g: Math.round(+m[2]), b: Math.round(+m[3]), a, fmt: 'func' };
}

/** Rebuild a colour token with a new RGB, keeping its syntax and alpha. */
function formatToken(tokenText, parsed, rgb) {
  if (parsed.fmt === 'func') {
    return tokenText.replace(/^(rgba?\(\s*)(\d+(?:\.\d+)?)(\s*[, ]\s*)(\d+(?:\.\d+)?)(\s*[, ]\s*)(\d+(?:\.\d+)?)/i,
      (_m, p, _a, s1, _b, s2) => `${p}${rgb.r}${s1}${rgb.g}${s2}${rgb.b}`);
  }
  return toHex(rgb) + (parsed.fmt === 'hex' ? parsed.alphaHex : '');
}

function tokensOf(value) {
  const out = [];
  COLOR_RE.lastIndex = 0;
  let m;
  while ((m = COLOR_RE.exec(value))) {
    const parsed = parseToken(m[0]);
    if (parsed) out.push({ index: m.index, text: m[0], parsed, key: keyOf(parsed), invisible: parsed.a === 0 });
  }
  return out;
}

/* ------------------------------------------------------------------ state */

let entries = [];                 // every colour-bearing declaration found
let byKey = new Map();            // colour key -> Set(entry)
let built = false;
const originals = new WeakMap();  // rule/element -> Map(prop|attr -> original value)
let history = [];                 // applied replacements, oldest first: { id, from:[key], to:{r,g,b} }
let committed = new Map();        // key -> {r,g,b}   (derived from history)
let pending = new Map();          // key -> {r,g,b}   (live preview, not yet applied)
const listeners = new Set();

const effective = (key) => pending.get(key) || committed.get(key) || null;
const emit = () => listeners.forEach((fn) => fn());
export const subscribe = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };

function rememberOriginal(owner, name, current) {
  let m = originals.get(owner);
  if (!m) { m = new Map(); originals.set(owner, m); }
  if (!m.has(name)) m.set(name, current);
  return m.get(name);
}

function addEntry(e) {
  if (!e.toks.length) return;
  entries.push(e);
  for (const t of e.toks) {
    let set = byKey.get(t.key);
    if (!set) { set = new Set(); byKey.set(t.key, set); }
    set.add(e);
  }
}

function walkRules(rules, fn) {
  for (const r of rules) {
    if (r.style) { fn(r); if (r.cssRules && r.cssRules.length) walkRules(r.cssRules, fn); }
    else if (r.cssRules) walkRules(r.cssRules, fn);
  }
}

function build() {
  entries = [];
  byKey = new Map();

  for (const sheet of document.styleSheets) {
    let rules;
    try { rules = sheet.cssRules; } catch { continue; } // cross-origin (fonts etc.)
    walkRules(rules, (rule) => {
      const st = rule.style;
      for (let i = 0; i < st.length; i += 1) {
        const prop = st[i];
        // utility-framework defaults declared on `*` (e.g. --tw-ring-color) aren't real usages
        if (prop.startsWith('--tw-') && /\*/.test(rule.selectorText || '')) continue;
        const cur = st.getPropertyValue(prop);
        if (!cur) continue;
        const original = rememberOriginal(rule, prop, cur);
        const toks = tokensOf(original);
        addEntry({ kind: 'rule', owner: rule, st, prop, priority: st.getPropertyPriority(prop), original, toks, current: cur, selector: rule.selectorText || '' });
      }
    });
  }

  for (const el of document.querySelectorAll('svg *, [style]')) {
    if (el.closest(TOOL_SELECTOR)) continue;
    for (const attr of PAINT_ATTRS) {
      if (!el.hasAttribute(attr)) continue;
      const cur = el.getAttribute(attr);
      const original = rememberOriginal(el, 'attr:' + attr, cur);
      addEntry({ kind: 'attr', owner: el, el, prop: attr, original, toks: tokensOf(original), current: cur });
    }
    if (el.getAttribute && el.hasAttribute('style')) {
      const st = el.style;
      for (let i = 0; i < st.length; i += 1) {
        const prop = st[i];
        const cur = st.getPropertyValue(prop);
        if (!cur) continue;
        const original = rememberOriginal(el, 'style:' + prop, cur);
        addEntry({ kind: 'inline', owner: el, el, st, prop, priority: st.getPropertyPriority(prop), original, toks: tokensOf(original), current: cur });
      }
    }
  }
  built = true;
}

const ensureBuilt = () => { if (!built) build(); };

function write(entry, value) {
  if (value === entry.current) return;
  entry.current = value;
  if (entry.kind === 'rule' || entry.kind === 'inline') entry.st.setProperty(entry.prop, value, entry.priority);
  else entry.el.setAttribute(entry.prop, value);
}

function recompute(entry) {
  let v = entry.original;
  let changed = false;
  for (let i = entry.toks.length - 1; i >= 0; i -= 1) {
    const t = entry.toks[i];
    const to = effective(t.key);
    if (to) { v = v.slice(0, t.index) + formatToken(t.text, t.parsed, to) + v.slice(t.index + t.text.length); changed = true; }
  }
  write(entry, changed ? v : entry.original);
}

function touch(keys) {
  const done = new Set();
  for (const k of keys) {
    const set = byKey.get(k);
    if (!set) continue;
    for (const e of set) if (!done.has(e)) { done.add(e); recompute(e); }
  }
}

function rebuildCommitted() {
  committed = new Map();
  for (const item of history) for (const k of item.from) committed.set(k, item.to);
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.map((h) => ({ from: h.from.map((k) => toHex(fromKey(k))), to: toHex(h.to) }))));
  } catch { /* storage unavailable */ }
}

/* ------------------------------------------------------------------ public API */

/** Re-scan the document (new screens, hot reload) and re-apply all replacements. */
export function refresh() {
  build();
  const keys = new Set([...committed.keys(), ...pending.keys()]);
  touch(keys);
  emit();
}

/** Load saved replacements from localStorage and apply them. */
export function restore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    history = saved.map((h, i) => ({ id: i + 1, from: h.from.map((x) => keyOf(parseHex(x))), to: parseHex(h.to) }))
      .filter((h) => h.to && h.from.every((k) => Number.isFinite(k)));
  } catch { history = []; }
  rebuildCommitted();
  refresh();
}

let elementCache = new WeakMap();
function elementsFor(entry) {
  if (entry.kind !== 'rule') return [entry.el];
  if (elementCache.has(entry.owner)) return elementCache.get(entry.owner);
  let list = [];
  const sel = entry.selector
    .replace(/::?[a-zA-Z-]+(\([^)]*\))?/g, '')   // drop pseudo-classes / pseudo-elements
    .replace(/,\s*(,|$)/g, '$1').replace(/\s+([>+~,])\s*$/, '').trim();
  if (sel && !/@/.test(sel)) { try { list = [...document.querySelectorAll(sel)].filter((el) => !el.closest(TOOL_SELECTOR)); } catch { list = []; } }
  elementCache.set(entry.owner, list);
  return list;
}

/**
 * Distinct colours currently in use, most used first.
 * pageOnly: only colours whose rules match elements that exist right now.
 */
export function getPalette({ pageOnly = true } = {}) {
  ensureBuilt();
  elementCache = new WeakMap();
  const groups = new Map(); // current key -> group
  for (const [origKey, set] of byKey) {
    const curRgb = effective(origKey) || fromKey(origKey);
    const curKey = keyOf(curRgb);
    for (const e of set) {
      const tok = e.toks.find((t) => t.key === origKey);
      if (tok && tok.invisible) continue;
      let g = groups.get(curKey);
      if (!g) { g = { key: curKey, rgb: curRgb, hex: toHex(curRgb), origKeys: new Set(), declarations: 0, elements: new Set() }; groups.set(curKey, g); }
      g.origKeys.add(origKey);
      g.declarations += 1;
      for (const el of elementsFor(e)) g.elements.add(el);
    }
  }
  return [...groups.values()]
    .map((g) => ({ ...g, origKeys: [...g.origKeys], elements: g.elements.size }))
    .filter((g) => !pageOnly || g.elements > 0)
    .sort((a, b) => b.elements - a.elements || b.declarations - a.declarations);
}

/** Live preview: show `rgb` in place of every colour in `origKeys` (not saved). */
export function setPending(origKeys, rgb) {
  ensureBuilt();
  const touched = new Set(pending.keys());
  pending = new Map(origKeys.map((k) => [k, rgb]));
  origKeys.forEach((k) => touched.add(k));
  touch(touched);
  emit();
}

export function cancelPending() {
  if (!pending.size) return;
  const keys = [...pending.keys()];
  pending = new Map();
  touch(keys);
  emit();
}

/** Make the live preview permanent (adds an entry to the history). */
export function commitPending() {
  if (!pending.size) return null;
  const to = [...pending.values()][0];
  const item = { id: Date.now() + Math.random(), from: [...pending.keys()], to };
  pending = new Map();
  history.push(item);
  rebuildCommitted();
  touch(item.from);
  persist();
  emit();
  return item;
}

export function getHistory() {
  return history.map((h) => ({ id: h.id, from: h.from.map((k) => toHex(fromKey(k))), to: toHex(h.to), toRgb: h.to }));
}

/** Undo one applied replacement; later ones that overlap keep working. */
export function revert(id) {
  const item = history.find((h) => h.id === id);
  if (!item) return;
  history = history.filter((h) => h.id !== id);
  rebuildCommitted();
  touch(item.from);
  persist();
  emit();
}

export function resetAll() {
  const keys = new Set([...committed.keys(), ...pending.keys()]);
  history = [];
  pending = new Map();
  committed = new Map();
  touch(keys);
  persist();
  emit();
}

export const hasPending = () => pending.size > 0;
