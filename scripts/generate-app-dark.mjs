// Generates src/styles/app-dark.css — a dark theme for the Sitemap, Card Sort and
// Tree Test screens, derived from their existing (light) stylesheets.
//
//   node scripts/generate-app-dark.mjs
//
// Every rule that uses a light-theme color gets a twin under `html.app-dark`
// with that color remapped by ROLE (surface / text / border), so the screens
// follow the landing page's dark mode without touching each component's CSS.
// Re-run after editing any of the source stylesheets.
import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';

const ROOT = process.cwd();
const SOURCES = [
  'src/card-sort',
  'src/tree-test',
  'src/sitemap-editor',
  'src/dashboard',
  'src/shared/components',
];
const OUT = 'src/styles/app-dark.css';

/* ---------- colour helpers ---------- */
const COLOR_RE = /#[0-9a-fA-F]{8}\b|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{4}\b|#[0-9a-fA-F]{3}\b|rgba?\([^)]*\)|\b(?:white|black)\b/g;

function parse(str) {
  const s = str.trim().toLowerCase();
  if (s === 'white') return { r: 255, g: 255, b: 255, a: 1 };
  if (s === 'black') return { r: 0, g: 0, b: 0, a: 1 };
  if (s.startsWith('#')) {
    let h = s.slice(1);
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
    const n = (i) => parseInt(h.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
  }
  const m = s.match(/rgba?\(([^)]*)\)/);
  if (!m) return null;
  const parts = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  if (parts.length < 3 || parts.some(Number.isNaN)) return null;
  return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
}
const lum = ({ r, g, b }) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
const sat = ({ r, g, b }) => (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
const rgba = (r, g, b, a) => `rgba(${r}, ${g}, ${b}, ${+a.toFixed(3)})`;

// palette (matches the landing page's dark mode)
const D = {
  bg: '#0a0a0b', surface: '#141416', inset: '#0f0f11', raised: '#1c1d20',
  line: '#2a2b2e', line2: '#3a3b3f', ink: '#f5f5f7', ink2: '#b8b8c1', muted: '#8e8e96',
};

function tint(c) {
  // light colour tint (e.g. red/green/purple badge backgrounds) -> translucent version of the hue
  if (c.r > c.g && c.r > c.b) return rgba(220, 38, 38, 0.16);
  if (c.g > c.r && c.g > c.b) return rgba(34, 197, 94, 0.16);
  return rgba(0, 113, 227, 0.2);
}

function mapBg(c) {
  if (c.a < 1) {
    const L = lum(c);
    if (L > 0.9) return rgba(20, 20, 22, c.a);                       // translucent white glass
    if (L < 0.15) return c.a <= 0.15 ? rgba(255, 255, 255, Math.min(0.12, c.a * 1.5)) : null; // hover tint vs scrim
    return null;
  }
  const L = lum(c);
  if (L > 0.985) return D.surface;
  if (L > 0.96) return sat(c) > 0.04 ? tint(c) : D.inset;
  if (L > 0.9) return sat(c) > 0.06 ? tint(c) : D.raised;
  if (L > 0.8) return D.line;
  if (L > 0.65) return D.line2;
  if (L <= 0.25 && sat(c) < 0.15) return D.ink;                      // black buttons -> light buttons
  return null;
}
function mapText(c) {
  if (c.a < 1) return lum(c) < 0.2 ? rgba(255, 255, 255, c.a) : null;
  const L = lum(c);
  const hex = `#${[c.r, c.g, c.b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
  if (hex === '#dc2626') return '#f87171';
  if (hex === '#15803d' || hex === '#166534') return '#4ade80';
  if (sat(c) > 0.2) return null;                                      // coloured text stays
  if (L <= 0.3) return D.ink;
  if (L <= 0.4) return D.ink2;
  if (L <= 0.6) return D.muted;
  return null;                                                        // white text stays white
}
function mapBorder(c) {
  if (c.a < 1) return lum(c) < 0.2 ? rgba(255, 255, 255, Math.min(0.2, c.a * 1.4)) : null;
  const L = lum(c);
  if (sat(c) > 0.2) return null;
  if (L > 0.96) return D.line;
  if (L > 0.9) return D.line;
  if (L > 0.8) return D.line;
  if (L > 0.65) return D.line2;
  if (L <= 0.25) return D.ink;
  return null;
}

const ROLE = (prop) => {
  if (/^(background|background-color|background-image)$/.test(prop)) return mapBg;
  if (/^(color|fill|stroke|caret-color|text-decoration-color|-webkit-text-fill-color)$/.test(prop)) return mapText;
  if (/^(border|border-(top|right|bottom|left)(-color)?|border-color|outline|outline-color|border-inline.*|border-block.*)$/.test(prop)) return mapBorder;
  return null;
};

function remapValue(value, mapper) {
  let changed = false;
  const out = value.replace(COLOR_RE, (tok) => {
    const c = parse(tok);
    if (!c) return tok;
    const m = mapper(c);
    if (m) { changed = true; return m; }
    return tok;
  });
  return changed ? out : null;
}

/* ---------- selector prefixing ---------- */
function prefixSelector(sel) {
  return sel.split(',').map((s) => {
    const t = s.trim();
    if (!t) return null;
    if (/^(html|:root)\b/.test(t)) return t.replace(/^(html|:root)/, 'html.app-dark');
    if (/^body\b/.test(t)) return `html.app-dark ${t}`;
    return `html.app-dark ${t}`;
  }).filter(Boolean).join(',\n');
}

/* ---------- walk ---------- */
function listCss(dir) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith('.css')).map((f) => path.join(dir, f));
}

function overridesFor(rule) {
  const decls = [];
  rule.each((n) => { if (n.type === 'decl') decls.push(n); });
  // "inverted surface": background goes dark->light, so white text on it must flip to dark
  const inverted = decls.some((d) => /^background(-color)?$/.test(d.prop)
    && (() => { const c = parse((d.value.match(COLOR_RE) || [''])[0] || ''); return c && c.a === 1 && lum(c) <= 0.25 && sat(c) < 0.15; })());
  const out = [];
  for (const d of decls) {
    if (/var\(/.test(d.value) && !COLOR_RE.test(d.value)) continue;
    COLOR_RE.lastIndex = 0;
    const mapper = ROLE(d.prop);
    if (!mapper) continue;
    let v = remapValue(d.value, mapper);
    if (d.prop === 'color' && inverted) {
      const c = parse((d.value.match(COLOR_RE) || [''])[0] || '');
      if (c && c.a === 1 && lum(c) > 0.9) v = D.bg;
    }
    if (v) out.push({ prop: d.prop, value: v, important: d.important });
  }
  return out;
}

let css = `/* GENERATED by scripts/generate-app-dark.mjs — do not edit by hand.
   Dark theme for the Sitemap / Card Sort / Tree Test screens. It applies when
   <html> carries .app-dark, which App.jsx sets from the landing page's saved
   light/dark choice. */
html.app-dark {
  color-scheme: dark;
  /* values for colours that live in JSX (SVG fills/strokes, inline styles) */
  --app-ink: ${D.ink};
  --app-node-fill: ${D.surface};
  --app-node-stroke: ${D.line};
  --app-node-stroke-hover: ${D.muted};
  --app-line-2: ${D.line2};
  --app-canvas-bg: ${D.bg};
  --app-canvas-dot: #2a2b2e;
  --app-matrix-empty: ${D.surface};
  --app-matrix-diag: ${D.line};
  /* accent: fills stay #0071e3 (white text on #2997ff would be low-contrast) */
  --app-accent-text: #2997ff;
  --app-accent-tint: rgba(0, 113, 227, 0.2);
}
html.app-dark body { background: ${D.bg}; color: ${D.ink}; }
html.app-dark ::placeholder { color: ${D.muted}; }
html.app-dark ::selection { background: rgba(113, 97, 239, 0.45); color: #fff; }
`;

let ruleCount = 0;
for (const dir of SOURCES) {
  for (const file of listCss(dir)) {
    const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const root = postcss.parse(src, { from: file });
    let block = '';
    root.walkRules((rule) => {
      // skip rules inside keyframes
      let p = rule.parent; let skip = false; const media = [];
      while (p && p.type !== 'root') {
        if (p.type === 'atrule') {
          if (/keyframes|font-face/.test(p.name)) skip = true;
          if (p.name === 'media' || p.name === 'supports') media.unshift(`@${p.name} ${p.params}`);
        }
        p = p.parent;
      }
      if (skip) return;
      const ov = overridesFor(rule);
      if (!ov.length) return;
      ruleCount += 1;
      let text = `${prefixSelector(rule.selector)} {\n${ov.map((d) => `  ${d.prop}: ${d.value}${d.important ? ' !important' : ''};`).join('\n')}\n}\n`;
      for (let i = media.length - 1; i >= 0; i -= 1) text = `${media[i]} {\n${text.split('\n').map((l) => (l ? `  ${l}` : l)).join('\n')}}\n`;
      block += text;
    });
    if (block) css += `\n/* ---- ${file} ---- */\n${block}`;
  }
}

fs.writeFileSync(path.join(ROOT, OUT), css);
console.log(`wrote ${OUT}: ${ruleCount} dark rules, ${(css.length / 1024).toFixed(1)} KB`);
