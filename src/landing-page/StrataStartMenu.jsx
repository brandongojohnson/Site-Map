import React, { useEffect, useRef, useState } from 'react';

// Same three destinations the previous landing page's "Get started" menu offered.
const OPTIONS = [
  { target: 'editor', icon: 'account_tree', label: 'Sitemap', desc: 'Start building a sitemap' },
  { target: 'cardsort', icon: 'style', label: 'Card Sort', desc: 'Start a sorting study' },
  { target: 'treetest', icon: 'alt_route', label: 'Tree Test', desc: 'Start a tree test' },
];

/**
 * "Start for free" button that opens a menu: Sitemap / Card Sort / Tree Test.
 * `className` styles the trigger (so each placement keeps its own look);
 * `align` is where the menu hangs from: 'left' | 'center' | 'right'.
 */
const StrataStartMenu = ({ onSelect, className, wrapClassName = '', align = 'center', children }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
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

  const place = align === 'right' ? 'right-0' : align === 'left' ? 'left-0' : 'left-1/2 -translate-x-1/2';

  return (
    <div ref={wrapRef} className={`relative inline-flex ${wrapClassName}`}>
      <button
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

      {open && (
        <div
          role="menu"
          onKeyDown={onMenuKey}
          className={`start-menu-panel absolute top-full mt-2 z-50 w-[270px] rounded-2xl p-2 flex flex-col gap-2 text-left ${place}`}
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
              <span className="w-9 h-9 shrink-0 rounded-xl bg-[#0071e3]/20 border border-[#2997ff]/30 flex items-center justify-center text-[#2997ff]">
                <span className="material-symbols-outlined text-[19px]">{opt.icon}</span>
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] font-semibold text-white leading-tight">{opt.label}</span>
                <span className="text-[12px] text-zinc-400 leading-snug">{opt.desc}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StrataStartMenu;
