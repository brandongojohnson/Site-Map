import React, { useState, useEffect } from 'react';
import { PILL_PRIMARY } from './buttonStyles';
import { GLASS_NAV_TOP, GLASS_NAV_SCROLLED, DROPDOWN_GLASS } from './glassStyles';
import AuthModal from './AuthModal';
import { useAuth, signOutUser } from '../card-sort/useAuth';
import SortlyLogo from '../shared/components/SortlyLogo';

const START_OPTIONS = [
  { target: 'editor', icon: 'account_tree', label: 'Sitemap', desc: 'Start building a sitemap' },
  { target: 'cardsort', icon: 'style', label: 'Card Sort', desc: 'Start a sorting study' },
  { target: 'treetest', icon: 'alt_route', label: 'Tree Test', desc: 'Start a tree test' },
];

const LINKS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Nav = ({ onGetStarted, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Reading window.scrollY and calling setState directly on every 'scroll'
    // event forces a style/layout recalc on the same frame the browser is
    // trying to paint the scroll itself — the classic cause of janky scroll
    // under a fixed, blurred header. Deferring the read+setState to the next
    // animation frame (and skipping if one's already queued) keeps this to
    // at most one update per rendered frame.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The Hero section keeps its own dark background in both themes, so while
  // the nav floats transparently over it (pre-scroll) its content always
  // needs light-on-dark colors — only once scrolled onto themed content
  // beneath does it switch to following the page theme.
  const navDark = !scrolled || theme === 'dark';
  const textPrimary = navDark ? 'text-[#F5F3F0]' : 'text-[#131313]';
  const textMuted = navDark ? 'text-white/50' : 'text-black/50';
  const textMutedHover = navDark ? 'hover:text-white' : 'hover:text-black';

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 transform-gpu ${
        scrolled ? GLASS_NAV_SCROLLED : GLASS_NAV_TOP
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        <a href="#top" className={`justify-self-start text-[17px] ${textPrimary}`}>
          <SortlyLogo iconClassName="text-[20px]" textClassName={textPrimary} />
        </a>

        <div className="hidden md:flex items-center gap-9 justify-self-center">
          {LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className={`text-[13px] font-normal tracking-normal transition-colors ${textMuted} ${textMutedHover}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 justify-self-end">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              navDark ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-black/50 hover:text-black hover:bg-black/5'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen((o) => !o)}
                aria-label="Account menu"
                className={`w-9 h-9 rounded-full overflow-hidden border transition-colors flex-shrink-0 ${
                  navDark ? 'border-white/15 hover:border-white/30' : 'border-black/15 hover:border-black/30'
                }`}
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <span className="w-full h-full flex items-center justify-center bg-[#EEECFD] dark:bg-[#241F3D] text-[13px] font-semibold text-[#7161EF] dark:text-[#9B8FF5]">
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
                    <div className="px-3 py-2.5 mb-1 border-b border-black/10 dark:border-white/10">
                      <p className="text-[13px] font-semibold text-[#131313] dark:text-[#F5F3F0] truncate">
                        {user.displayName || 'Signed in'}
                      </p>
                      <p className="text-[11px] font-normal text-black/50 dark:text-white/50 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        signOutUser();
                      }}
                      className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold text-[#131313] dark:text-[#F5F3F0] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[16px] text-black/50 dark:text-white/50">logout</span>
                      Log out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className={`hidden sm:inline text-[14px] font-normal transition-colors ${textMuted} ${
                navDark ? 'hover:text-[#F5F3F0]' : 'hover:text-[#131313]'
              }`}
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
                      className="w-full flex items-start gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#EEECFD] dark:bg-[#241F3D]">
                        <span className="material-symbols-outlined text-[16px] text-[#7161EF] dark:text-[#9B8FF5]">{opt.icon}</span>
                      </span>
                      <span>
                        <span className="block text-[13px] font-semibold text-[#131313] dark:text-[#F5F3F0]">
                          {opt.label}
                        </span>
                        <span className="block text-[11px] font-normal text-black/50 dark:text-white/50">{opt.desc}</span>
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
