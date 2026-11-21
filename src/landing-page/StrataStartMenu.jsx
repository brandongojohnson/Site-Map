import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Same three destinations the previous landing page's "Get started" menu offered.
const OPTIONS = [
  { target: 'editor', icon: 'account_tree', label: 'Sitemap', desc: 'Start building a sitemap' },
  { target: 'cardsort', icon: 'style', label: 'Card Sort', desc: 'Start a sorting study' },
  { target: 'treetest', icon: 'alt_route', label: 'Tree Test', desc: 'Start a tree test' },
];

const MENU_WIDTH = 270;

/**
 * "Start for free" button that opens a menu: Sitemap / Card Sort / Tree Test.
 * `className` styles the trigger (so each placement keeps its own look);
 * `align` is where the menu hangs from: 'left' | 'center' | 'right'.
 *
 * The panel is rendered in a portal at the page root, positioned under the button.
 * That's what lets it be frosted: a backdrop-filter can't blur the page behind it
 * when it sits inside another glass element (the navbar), only when it's a
 * sibling of the page content.
 */
const StrataStartMenu = ({ onSelect, className, wrapClassName = '', align = 'center', children }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const itemRefs = useRef([]);

  // keep the portaled panel glued under its button (scroll / resize / first paint)
  const place = () => {
    const b = btnRef.current;
    if (!b) return;
    const r = b.getBoundingClientRect();
    const raw = align === 'right' ? r.right - MENU_WIDTH : align === 'left' ? r.left : r.left + r.width / 2 - MENU_WIDTH / 2;
    const left = Math.max(8, Math.min(raw, window.innerWidth - MENU_WIDTH - 8));
    setPos({ top: r.bottom + 8, left });
  };
  useLayoutEffect(() => {
    if (!open) return undefined;
    place();
    window.addEventListener('scroll', place, true);
    window.addEventListener('resize', place);
    return () => {
      window.removeEventListener('scroll', place, true);
      window.removeEventListener('resize', place);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, align]);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      const inside = (wrapRef.current && wrapRef.current.contains(e.target)) || (panelRef.current && panelRef.current.contains(e.target));
      if (!inside) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    setActive(0);
    itemRefs.current[0]?.focus();
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const pick = (target) => {
    setOpen(false);
    if (onSelect) onSelect(target);
  };

  const onMenuKey = (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const n = OPTIONS.length;
    const next = e.key === 'ArrowDown' ? (active + 1) % n : (active - 1 + n) % n;
    setActive(next);
    itemRefs.current[next]?.focus();
  };

  // the landing page root, so the scoped styles (.strata-lp ...) still apply to the portaled panel
  const portalTarget = typeof document !== 'undefined' ? (document.querySelector('.strata-lp') || document.body) : null;

  return (
    <div ref={wrapRef} className={`relative inline-flex ${wrapClassName}`}>
      <button
        ref={btnRef}
        type="button"
        className={className}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {children}
        <span
          aria-hidden="true"
          className={`material-symbols-outlined text-[16px] -mr-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          expand_more
        </span>
      </button>

      {open && portalTarget && createPortal(
        <div
          ref={panelRef}
          role="menu"
          onKeyDown={onMenuKey}
          style={{ position: 'fixed', top: pos.top, left: pos.left, width: MENU_WIDTH }}
          className="start-menu-panel z-50 rounded-2xl p-2 flex flex-col gap-2 text-left"
        >
          {OPTIONS.map((opt, i) => (
            <button
              key={opt.target}
              ref={(el) => { itemRefs.current[i] = el; }}
              type="button"
              role="menuitem"
              onClick={() => pick(opt.target)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`w-full flex items-center gap-3 rounded-xl px-2.5 py-2.5 focus:outline-none transition-colors ${active === i ? 'bg-white/10' : ''}`}
            >
              <span className="w-9 h-9 shrink-0 flex items-center justify-center text-[#2997ff]">
                <span className="material-symbols-outlined text-[19px]">{opt.icon}</span>
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] font-semibold text-white leading-tight">{opt.label}</span>
                <span className="text-[12px] text-zinc-400 leading-snug">{opt.desc}</span>
              </span>
            </button>
          ))}
        </div>,
        portalTarget
      )}
    </div>
  );
};

export default StrataStartMenu;
