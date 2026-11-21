import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as CR from './colorReplace';

// Floating "Color replacement" tool: pick an existing colour (swatches or click
// anything on the page), choose a replacement (visual picker, HEX, RGB or
// eyedropper), preview it live everywhere, then Apply to keep it.
//
// Styled with inline styles on purpose: the tool must never be recoloured by
// the very replacements it applies. Everything inside carries data-color-tool,
// which the engine skips when scanning.

export const SHOW_COLOR_TOOL = true;

const UI = {
  bg: 'rgba(16,16,19,0.96)', card: 'rgba(255,255,255,0.05)', line: 'rgba(255,255,255,0.12)',
  text: '#f4f4f5', muted: '#a1a1aa', accent: '#8b9bff', danger: '#ff6b6b', ok: '#7ee0a3',
  font: "Geist, Inter, system-ui, -apple-system, sans-serif",
};
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };
const label = { fontSize: 11, color: UI.muted, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 8, display: 'block' };
const btn = (primary, disabled) => ({
  height: 34, padding: '0 14px', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: disabled ? 'not-allowed' : 'pointer',
  border: primary ? 'none' : `1px solid ${UI.line}`, background: primary ? UI.text : 'transparent', color: primary ? '#0b0b0f' : UI.text,
  opacity: disabled ? 0.4 : 1, fontFamily: UI.font,
});
const field = { height: 34, borderRadius: 8, border: `1px solid ${UI.line}`, background: 'rgba(0,0,0,0.35)', color: UI.text, padding: '0 10px', fontSize: 13, outline: 'none', boxSizing: 'border-box' };
const Icon = ({ name, size = 18, color }) => (
  <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: size, color: color || 'inherit', lineHeight: 1 }}>{name}</span>
);

const rgbCss = ({ r, g, b }) => `rgb(${r}, ${g}, ${b})`;

/** The distinct colours an element is painted with right now */
function colorsOfElement(el) {
  const cs = getComputedStyle(el);
  const raw = [['Text', cs.color], ['Background', cs.backgroundColor]];
  if (parseFloat(cs.borderTopWidth) > 0 && cs.borderTopStyle !== 'none') raw.push(['Border', cs.borderTopColor]);
  if (el instanceof SVGElement) {   // fill / stroke only mean something on SVG shapes
    if (cs.fill && cs.fill !== 'none') raw.push(['Fill', cs.fill]);
    if (cs.stroke && cs.stroke !== 'none') raw.push(['Stroke', cs.stroke]);
  }
  if (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) raw.push(['Outline', cs.outlineColor]);
  const out = new Map();
  for (const [role, value] of raw) {
    const c = CR.parseCssColor(value);
    if (!c || c.a === 0) continue;
    const key = CR.keyOf(c);
    if (out.has(key)) out.get(key).roles.push(role);
    else out.set(key, { key, rgb: { r: c.r, g: c.g, b: c.b }, hex: CR.toHex(c), roles: [role] });
  }
  return [...out.values()];
}

export default function ColorReplacer() {
  const [open, setOpen] = useState(false);
  const [pageOnly, setPageOnly] = useState(true);
  const [palette, setPalette] = useState([]);
  const [history, setHistory] = useState([]);
  const [selected, setSelected] = useState(null);   // { key, hex, rgb, origKeys, elements, declarations, adhoc? }
  const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 });
  const [hexText, setHexText] = useState('#000000');
  const [dirty, setDirty] = useState(false);
  const [picking, setPicking] = useState(false);
  const [picked, setPicked] = useState(null);       // colours of the clicked element
  const [note, setNote] = useState('');
  const frame = useRef(0);
  const latest = useRef(null);
  const overlay = useRef(null);
  const canEyedrop = typeof window !== 'undefined' && 'EyeDropper' in window;

  const reload = useCallback(() => {
    setPalette(CR.getPalette({ pageOnly }));
    setHistory(CR.getHistory());
  }, [pageOnly]);

  // open / filter change -> rescan
  useEffect(() => { if (open) { CR.refresh(); reload(); } }, [open, reload]);

  const cancel = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    latest.current = null;
    CR.cancelPending();
    setDirty(false);
    if (selected) { setRgb(selected.rgb); setHexText(CR.toHex(selected.rgb)); }
  }, [selected]);

  const close = useCallback(() => { cancel(); setPicking(false); setPicked(null); setOpen(false); }, [cancel]);

  const select = useCallback((group) => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    latest.current = null;
    CR.cancelPending();
    setDirty(false);
    setNote('');
    setSelected(group);
    setRgb(group.rgb);
    setHexText(CR.toHex(group.rgb));
  }, []);

  // live preview, one engine update per animation frame
  const preview = useCallback((next) => {
    if (!selected) return;
    setRgb(next);
    setHexText(CR.toHex(next));
    setDirty(true);
    latest.current = next;
    if (!frame.current) {
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        if (latest.current) CR.setPending(selected.origKeys, latest.current);
      });
    }
  }, [selected]);

  const apply = () => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    if (latest.current) CR.setPending(selected.origKeys, latest.current);
    CR.commitPending();
    setDirty(false);
    setSelected(null);
    setPicked(null);
    reload();
  };

  const onHex = (v) => {
    setHexText(v);
    const p = CR.parseHex(v);
    if (p) preview(p);
  };
  const onChannel = (ch, v) => preview({ ...rgb, [ch]: CR.clamp255(v) });
  const hexValid = !!CR.parseHex(hexText);

  const eyedrop = async () => {
    try { const res = await new window.EyeDropper().open(); const p = CR.parseHex(res.sRGBHex); if (p) preview(p); } catch { /* cancelled */ }
  };

  // ---- "pick from page": hover outline + click to read an element's colours
  useEffect(() => {
    if (!picking) return undefined;
    const target = (e) => { const el = document.elementFromPoint(e.clientX, e.clientY); return el && !el.closest('[data-color-tool]') ? el : null; };
    const move = (e) => {
      const box = overlay.current; if (!box) return;
      const el = target(e);
      if (!el) { box.style.display = 'none'; return; }
      const r = el.getBoundingClientRect();
      Object.assign(box.style, { display: 'block', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
    };
    const click = (e) => {
      const el = target(e);
      if (!el) return;
      e.preventDefault(); e.stopPropagation();
      setPicked(colorsOfElement(el));
      setPicking(false);
      setNote('');
    };
    const key = (e) => { if (e.key === 'Escape') setPicking(false); };
    document.addEventListener('mousemove', move, true);
    document.addEventListener('click', click, true);
    document.addEventListener('keydown', key, true);
    const prev = document.body.style.cursor;
    document.body.style.cursor = 'crosshair';
    return () => {
      document.removeEventListener('mousemove', move, true);
      document.removeEventListener('click', click, true);
      document.removeEventListener('keydown', key, true);
      document.body.style.cursor = prev;
    };
  }, [picking]);

  const choosePicked = (chip) => {
    const all = CR.getPalette({ pageOnly: false });
    const group = all.find((g) => g.key === chip.key);
    if (group) { select(group); return; }
    setSelected(null);
    setNote(`${chip.hex} is blended or inherited — it isn't written in any stylesheet, so there is nothing to replace.`);
  };

  const revertItem = (id) => { CR.revert(id); reload(); };
  const resetAll = () => { cancel(); CR.resetAll(); setSelected(null); reload(); };

  if (!SHOW_COLOR_TOOL) return null;

  return (
    <div data-color-tool style={{ fontFamily: UI.font, color: UI.text }}>
      {picking && (
        <>
          <div ref={overlay} style={{ position: 'fixed', zIndex: 2147483000, pointerEvents: 'none', border: `2px solid ${UI.accent}`, background: 'rgba(139,155,255,0.15)', display: 'none', boxSizing: 'border-box', borderRadius: 4 }} />
          <div style={{ position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 2147483001, background: UI.bg, border: `1px solid ${UI.line}`, borderRadius: 999, padding: '10px 18px', fontSize: 13, boxShadow: '0 10px 30px rgba(0,0,0,.5)' }}>
            Click any element to pick one of its colors · <b>Esc</b> to cancel
          </div>
        </>
      )}

      {!open && (
        <button
          type="button" onClick={() => setOpen(true)} aria-label="Open color replacement tool"
          style={{ position: 'fixed', left: 20, bottom: 20, zIndex: 2147482000, display: 'flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px 0 12px', borderRadius: 999, background: UI.bg, color: UI.text, border: `1px solid ${UI.line}`, boxShadow: '0 10px 30px rgba(0,0,0,.45)', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: UI.font }}
        >
          <Icon name="palette" size={20} color={UI.accent} /> Colors
        </button>
      )}

      {open && (
        <section
          role="dialog" aria-label="Color replacement"
          style={{ position: 'fixed', left: 20, bottom: 20, zIndex: 2147482000, width: 352, maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', background: UI.bg, border: `1px solid ${UI.line}`, borderRadius: 20, boxShadow: '0 24px 60px rgba(0,0,0,.6)', backdropFilter: 'blur(20px)', padding: 16, boxSizing: 'border-box' }}
        >
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 15 }}><Icon name="palette" size={20} color={UI.accent} /> Color replacement</div>
            <button type="button" onClick={close} aria-label="Close" style={{ background: 'none', border: 'none', color: UI.muted, cursor: 'pointer', display: 'flex' }}><Icon name="close" /></button>
          </header>

          {/* 1 — pick an existing colour */}
          <span style={label}>1 · Pick the color to replace</span>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
            <button type="button" onClick={() => { cancel(); setPicking(true); }} style={{ ...btn(false), display: 'flex', alignItems: 'center', gap: 6, height: 30, fontSize: 12 }}>
              <Icon name="ads_click" size={16} /> Pick from page
            </button>
            <button type="button" onClick={() => { CR.refresh(); reload(); }} aria-label="Rescan colors" title="Rescan" style={{ ...btn(false), width: 30, padding: 0, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="refresh" size={16} />
            </button>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: UI.muted, marginLeft: 'auto', cursor: 'pointer' }}>
              <input type="checkbox" checked={!pageOnly} onChange={(e) => setPageOnly(!e.target.checked)} /> other screens
            </label>
          </div>

          {picked && (
            <div style={{ background: UI.card, border: `1px solid ${UI.line}`, borderRadius: 12, padding: 10, marginBottom: 10 }}>
              <div style={{ fontSize: 12, color: UI.muted, marginBottom: 8 }}>Colors of the element you clicked:</div>
              {picked.length === 0 && <div style={{ fontSize: 12 }}>No visible color on that element.</div>}
              {picked.map((c) => (
                <button key={c.key} type="button" onClick={() => choosePicked(c)} style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', background: 'none', border: 'none', color: UI.text, cursor: 'pointer', padding: '5px 4px', borderRadius: 8, fontFamily: UI.font, textAlign: 'left' }}>
                  <span style={{ width: 22, height: 22, borderRadius: 6, background: rgbCss(c.rgb), border: `1px solid ${UI.line}`, flex: 'none' }} />
                  <span style={{ ...mono, fontSize: 12 }}>{c.hex}</span>
                  <span style={{ fontSize: 12, color: UI.muted }}>{c.roles.join(' · ')}</span>
                </button>
              ))}
            </div>
          )}

          <div role="listbox" aria-label="Colors in use" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 6, marginBottom: 8 }}>
            {palette.map((g) => {
              const on = selected && selected.key === g.key;
              return (
                <button
                  key={g.key} type="button" role="option" aria-selected={!!on} onClick={() => select(g)}
                  title={`${g.hex} · ${g.elements} element${g.elements === 1 ? '' : 's'} · ${g.declarations} rule${g.declarations === 1 ? '' : 's'}`}
                  style={{ aspectRatio: '1', borderRadius: 8, background: rgbCss(g.rgb), cursor: 'pointer', padding: 0, border: on ? `2px solid ${UI.accent}` : `1px solid ${UI.line}`, outline: on ? `2px solid rgba(139,155,255,.35)` : 'none', outlineOffset: 1 }}
                />
              );
            })}
            {palette.length === 0 && <div style={{ gridColumn: '1 / -1', fontSize: 12, color: UI.muted }}>No colors found.</div>}
          </div>
          <div style={{ fontSize: 12, color: UI.muted, minHeight: 18, marginBottom: 14 }}>
            {selected
              ? <><b style={{ ...mono, color: UI.text }}>{selected.hex}</b> · used by {selected.elements} element{selected.elements === 1 ? '' : 's'} · {selected.declarations} rule{selected.declarations === 1 ? '' : 's'}{selected.origKeys.length > 1 ? ` · merges ${selected.origKeys.length} earlier colors` : ''}</>
              : note || `${palette.length} colors in use — hover a swatch for details`}
          </div>

          {/* 2 — choose the replacement */}
          <span style={label}>2 · Choose the replacement</span>
          <div style={{ opacity: selected ? 1 : 0.45, pointerEvents: selected ? 'auto' : 'none', marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
              <input type="color" aria-label="Visual color picker" value={hexValid ? CR.toHex(CR.parseHex(hexText)) : CR.toHex(rgb)} onChange={(e) => preview(CR.parseHex(e.target.value))}
                style={{ width: 44, height: 34, padding: 0, border: `1px solid ${UI.line}`, borderRadius: 8, background: 'none', cursor: 'pointer' }} />
              <input type="text" aria-label="HEX color" aria-invalid={!hexValid} value={hexText} onChange={(e) => onHex(e.target.value)} spellCheck={false} maxLength={7}
                style={{ ...field, ...mono, width: 96, borderColor: hexValid ? UI.line : UI.danger }} />
              {canEyedrop && (
                <button type="button" onClick={eyedrop} title="Pick a color from anywhere on screen" style={{ ...btn(false), width: 34, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="colorize" size={18} /></button>
              )}
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }} aria-label="Before and after">
                <span title="Before" style={{ width: 24, height: 24, borderRadius: 6, background: selected ? rgbCss(selected.rgb) : 'transparent', border: `1px solid ${UI.line}` }} />
                <Icon name="arrow_forward" size={14} color={UI.muted} />
                <span title="After" style={{ width: 24, height: 24, borderRadius: 6, background: rgbCss(rgb), border: `1px solid ${UI.line}` }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {['r', 'g', 'b'].map((ch) => (
                <label key={ch} style={{ fontSize: 11, color: UI.muted, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ textTransform: 'uppercase', width: 10 }}>{ch}</span>
                  <input type="number" min={0} max={255} aria-label={`${ch.toUpperCase()} channel`} value={rgb[ch]} onChange={(e) => onChannel(ch, e.target.value)} style={{ ...field, ...mono, width: '100%', padding: '0 6px', minWidth: 0 }} />
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <button type="button" onClick={apply} disabled={!dirty} style={btn(true, !dirty)}>Apply everywhere</button>
            <button type="button" onClick={cancel} disabled={!dirty} style={btn(false, !dirty)}>Cancel</button>
            {dirty && <span style={{ alignSelf: 'center', fontSize: 11, color: UI.ok }}>Live preview</span>}
          </div>

          {/* applied history */}
          {history.length > 0 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ ...label, marginBottom: 0 }}>Applied</span>
                <button type="button" onClick={resetAll} style={{ background: 'none', border: 'none', color: UI.danger, cursor: 'pointer', fontSize: 12, fontFamily: UI.font }}>Reset all</button>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 6 }}>
                {history.map((h) => (
                  <li key={h.id} style={{ display: 'flex', alignItems: 'center', gap: 8, background: UI.card, borderRadius: 10, padding: '6px 8px' }}>
                    <span style={{ display: 'flex' }}>
                      {h.from.slice(0, 3).map((hex, i) => (
                        <span key={hex} title={hex} style={{ width: 18, height: 18, borderRadius: 5, background: hex, border: `1px solid ${UI.line}`, marginLeft: i ? -6 : 0 }} />
                      ))}
                    </span>
                    <Icon name="arrow_forward" size={14} color={UI.muted} />
                    <span style={{ width: 18, height: 18, borderRadius: 5, background: h.to, border: `1px solid ${UI.line}` }} />
                    <span style={{ ...mono, fontSize: 12 }}>{h.to}</span>
                    <button type="button" onClick={() => revertItem(h.id)} aria-label={`Revert ${h.to}`} title="Revert this change" style={{ marginLeft: 'auto', background: 'none', border: 'none', color: UI.muted, cursor: 'pointer', display: 'flex' }}><Icon name="undo" size={16} /></button>
                  </li>
                ))}
              </ul>
            </>
          )}

          <p style={{ fontSize: 11, color: UI.muted, margin: '14px 0 0', lineHeight: 1.5 }}>
            Replaces the color in every rule, hover/focus state, breakpoint, SVG shape and inline style that uses it — keeping each use's transparency and all other styling. Saved in this browser.
          </p>
        </section>
      )}
    </div>
  );
}

