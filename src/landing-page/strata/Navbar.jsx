import React, { useEffect, useState } from 'react';
import StrataStartMenu from '../StrataStartMenu';
import { NAV } from './config';

// Floating capsule navbar: brand, section links, theme toggle, login and the Start menu.
export default function Navbar({ light, onToggleTheme, user, onLogin, onStart }) {
  const [active, setActive] = useState('product');

  // highlight the nav item for the section currently in the middle of the viewport
  useEffect(() => {
    const els = NAV.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
    <div className="pointer-events-auto rounded-full glass-card border border-white/15 flex items-center justify-between gap-6 sm:gap-10 px-8 py-4">
    {/* Brand */}
    <a className="flex items-center gap-2.5 group" href="#product">
    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#0071e3]">
    <span className="material-symbols-outlined text-[17px] text-white">blur_circular</span>
    </div>
    <span className="text-base font-semibold tracking-tight text-white">Sortly</span>
    <span className="hidden xl:inline-block font-mono text-[10px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded-full border border-white/10">v2.4 Spatial</span>
    </a>
    {/* Center Nav Items */}
    <nav className="hidden lg:flex items-center gap-5 text-[13px] text-zinc-400 font-medium">
    {NAV.map(([label, id]) => (
      <a
        key={id}
        href={`#${id}`}
        aria-current={active === id ? 'page' : undefined}
        className={`transition-colors hover:text-white ${active === id ? 'text-white' : ''}`}
      >
        {label}
      </a>
    ))}
    </nav>
    {/* CTAs */}
    <div className="flex items-center gap-3">
    <button
      type="button"
      onClick={() => onToggleTheme()}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      aria-pressed={light}
      className="theme-toggle w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
    >
      <span className="material-symbols-outlined text-[18px]">{light ? 'dark_mode' : 'light_mode'}</span>
    </button>
    <a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors px-2 py-1" href="#" onClick={onLogin}>{user ? "Open app" : "Log in"}</a>
    <StrataStartMenu align="right" onSelect={onStart} className="inline-flex items-center justify-center text-[12px] font-semibold bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-all gap-1">
            Start for free
          </StrataStartMenu>
    </div>
    </div>
    </header>
  );
}
