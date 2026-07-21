import React, { useState, useEffect } from 'react';
import { PILL_PRIMARY } from './buttonStyles';
import { GLASS_NAV_TOP, GLASS_NAV_SCROLLED, GLASS_PANEL } from './glassStyles';

const START_OPTIONS = [
  { target: 'cardsort', icon: 'style', label: 'Card Sort', desc: 'Start a sorting study' },
  { target: 'editor', icon: 'account_tree', label: 'Sitemap', desc: 'Start building a sitemap' },
];

const LINKS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Nav = ({ onGetStarted }) => {
  const [scrolled, setScrolled] = useState(false);
  const [startOpen, setStartOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? GLASS_NAV_SCROLLED : GLASS_NAV_TOP
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="text-[17px] font-bold tracking-tight text-[#F5F3F0]">
          Sortly
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-[13px] font-normal uppercase tracking-wide text-white/50 hover:text-[#F5F3F0] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onGetStarted}
            className="hidden sm:inline text-[14px] font-normal text-white/60 hover:text-[#F5F3F0] transition-colors"
          >
            Log in
          </button>
          <div className="relative">
            <button
              onClick={() => setStartOpen((o) => !o)}
              className={`${PILL_PRIMARY} flex items-center gap-1.5 px-5 py-2.5 text-[13px]`}
            >
              Get started
              <span className={`material-symbols-outlined text-[16px] transition-transform ${startOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>

            {startOpen && (
              <>
                <button
                  aria-label="Close menu"
                  onClick={() => setStartOpen(false)}
                  className="fixed inset-0 z-40 cursor-default"
                />
                <div
                  className={`absolute right-0 top-[calc(100%+8px)] z-50 w-64 rounded-2xl p-2 ${GLASS_PANEL}`}
                  style={{ backdropFilter: 'blur(24px)' }}
                >
                  {START_OPTIONS.map((opt) => (
                    <button
                      key={opt.target}
                      onClick={() => {
                        setStartOpen(false);
                        onGetStarted(opt.target);
                      }}
                      className="w-full flex items-start gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-white/10 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#241F3D]">
                        <span className="material-symbols-outlined text-[16px] text-[#9B8FF5]">{opt.icon}</span>
                      </span>
                      <span>
                        <span className="block text-[13px] font-semibold text-[#F5F3F0]">
                          {opt.label}
                        </span>
                        <span className="block text-[11px] font-normal text-white/50">{opt.desc}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
