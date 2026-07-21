import React, { useState } from 'react';
import { Menu, X, PenSquare } from 'lucide-react';

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-surface-lowest border-b border-border-light z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline flex-shrink-0">
          <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-on-primary font-serif font-bold text-xs leading-none">SB</span>
          </div>
          <span className="font-serif font-bold text-on-surface text-[17px] hidden sm:block">Sitemap Builder</span>
        </a>

        {/* Center nav — full viewport width, Medium-style */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {['Features', 'Pricing', 'Blog', 'About'].map((label) => (
            <a
              key={label}
              href="#"
              className="font-sans text-[14px] text-on-surface-variant hover:text-on-surface transition-colors no-underline"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <button className="font-sans text-[14px] text-on-surface-variant hover:text-on-surface transition-colors">
            Sign in
          </button>
          <a
            href="#"
            className="flex items-center gap-2 bg-tertiary text-white font-sans text-[14px] font-medium px-4 py-[7px] rounded-full hover:opacity-90 transition-opacity no-underline"
          >
            <PenSquare className="w-4 h-4" />
            Get started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1 text-on-surface"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-light bg-surface-lowest px-6 py-4 space-y-1">
          {['Features', 'Pricing', 'Blog', 'About'].map((label) => (
            <a
              key={label}
              href="#"
              className="block py-3 font-sans text-[15px] text-on-surface border-b border-border-light last:border-0 no-underline hover:text-tertiary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-4">
            <button className="font-sans text-[14px] text-on-surface-variant">Sign in</button>
            <a
              href="#"
              className="flex items-center gap-2 bg-tertiary text-white font-sans text-[14px] font-medium px-4 py-2 rounded-full no-underline"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
