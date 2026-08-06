import React, { useState, useEffect } from 'react';
import { PILL_PRIMARY } from './buttonStyles';
import { GLASS_NAV_TOP, GLASS_NAV_SCROLLED, DROPDOWN_GLASS } from './glassStyles';
import AuthModal from './AuthModal';
import { useAuth, signOutUser } from '../card-sort/useAuth';

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
  const [authOpen, setAuthOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? GLASS_NAV_SCROLLED : GLASS_NAV_TOP
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        <a href="#top" className="justify-self-start flex items-center gap-1 text-[17px] font-bold tracking-tight text-[#F5F3F0]">
          <span className="material-symbols-outlined text-[20px] text-[#F5F3F0]">layers</span>
          Sortly
        </a>

        <div className="hidden md:flex items-center gap-9 justify-self-center">
          {LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-[13px] font-normal tracking-wide text-white/50 hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 justify-self-end">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen((o) => !o)}
                aria-label="Account menu"
                className="w-9 h-9 rounded-full overflow-hidden border border-white/15 hover:border-white/30 transition-colors flex-shrink-0"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <span className="w-full h-full flex items-center justify-center bg-[#241F3D] text-[13px] font-semibold text-[#9B8FF5]">
                    {(user.displayName || user.email || '?')[0].toUpperCase()}
                  </span>
                )}
              </button>

              {userMenuOpen && (
                <>
                  <button
                    aria-label="Close menu"
                    onClick={() => setUserMenuOpen(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />
                  <div className={`absolute right-0 top-[calc(100%+8px)] z-50 w-56 rounded-2xl p-2 ${DROPDOWN_GLASS}`}>
                    <div className="px-3 py-2.5 mb-1 border-b border-white/10">
                      <p className="text-[13px] font-semibold text-[#F5F3F0] truncate">
                        {user.displayName || 'Signed in'}
                      </p>
                      <p className="text-[11px] font-normal text-white/50 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        signOutUser();
                      }}
                      className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold text-[#F5F3F0] hover:bg-white/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px] text-white/50">logout</span>
                      Log out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className="hidden sm:inline text-[14px] font-normal text-white/60 hover:text-[#F5F3F0] transition-colors"
            >
              Log in
            </button>
          )}
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
                  className={`absolute right-0 top-[calc(100%+8px)] z-50 w-64 rounded-2xl p-2 ${DROPDOWN_GLASS}`}
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

    {/* Rendered as a header sibling, not a child — GLASS_NAV_SCROLLED's
       backdrop-blur creates a containing block for fixed descendants once
       scrolled, which would otherwise shrink this modal's fixed overlay
       down to the header's own bounding box instead of the full viewport. */}
    {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </>
  );
};

export default Nav;
