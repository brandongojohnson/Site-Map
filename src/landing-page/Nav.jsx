import React, { useState, useEffect } from 'react';
import { PILL_PRIMARY } from './buttonStyles';

const LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Resources', href: '#footer' },
];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Nav = ({ onGetStarted }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#ECE6D9] shadow-[0_1px_0_rgba(23,21,18,0.03)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-[#171512] flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">hub</span>
          </span>
          <span className="text-[17px] font-extrabold tracking-tight text-[#171512]">Sortly</span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-[14px] font-medium text-[#4A4540] hover:text-[#171512] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={onGetStarted}
            className="hidden sm:inline text-[14px] font-medium text-[#4A4540] hover:text-[#171512] transition-colors"
          >
            Log in
          </button>
          <button onClick={onGetStarted} className={`${PILL_PRIMARY} px-5 py-2.5 text-[13px]`}>
            Get started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
