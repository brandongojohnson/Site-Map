import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Use cases', href: '#use-cases' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-surface-lowest border-b border-border-light z-50">
      <div className="px-page-margin py-4">
        <div className="max-w-content mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-on-primary font-serif font-bold text-sm">SB</span>
            </div>
            <span className="font-serif font-bold text-on-surface">Sitemap Builder</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-on-surface hover:text-tertiary transition-colors text-label-md font-sans"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-on-surface hover:text-tertiary font-sans text-label-md transition-colors">
              Sign in
            </button>
            <Button variant="primary">Get started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border-light py-4 mt-4 space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-on-surface hover:text-tertiary font-sans text-label-md py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3">
              <button className="flex-1 text-on-surface hover:text-tertiary font-sans text-label-md py-2">
                Sign in
              </button>
              <Button variant="primary">Get started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
