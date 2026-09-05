import React, { useState, useEffect } from 'react';
import { PILL_PRIMARY } from './buttonStyles';
import { GLASS_NAV_TOP, GLASS_NAV_SCROLLED, DROPDOWN_GLASS } from './glassStyles';
import AuthModal from './AuthModal';
import { useAuth, signOutUser } from '../card-sort/useAuth';
import SortlyLogo from '../shared/components/SortlyLogo';
import './Nav.css';

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
  const darkCls = navDark ? 'is-dark' : '';

  return (
    <>
    <header className={`nav-header ${scrolled ? GLASS_NAV_SCROLLED : GLASS_NAV_TOP}`}>
      <nav className="nav-inner">
        <a href="#top" className={`nav-logo-link ${darkCls}`}>
          <SortlyLogo iconClassName="nav-logo-icon" textClassName="" />
        </a>

        <div className="nav-links">
          {LINKS.map((l) => (
            <button key={l.label} onClick={() => scrollTo(l.href)} className={`nav-link ${darkCls}`}>
              {l.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`nav-theme-btn ${darkCls}`}
          >
            <span className="material-symbols-outlined nav-theme-icon">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {user ? (
            <div className="nav-avatar-wrap">
              <button
                onClick={() => setUserMenuOpen((o) => !o)}
                aria-label="Account menu"
                className={`nav-avatar-btn ${darkCls}`}
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="nav-avatar-img" referrerPolicy="no-referrer" />
                ) : (
                  <span className="nav-avatar-fallback">
                    {(user.displayName || user.email || '?')[0].toUpperCase()}
                  </span>
                )}
              </button>

              {userMenuOpen && (
                <>
                  <button
                    aria-label="Close menu"
                    onClick={() => setUserMenuOpen(false)}
                    className="nav-menu-overlay"
                  />
                  <div className={`nav-user-menu ${DROPDOWN_GLASS}`}>
                    <div className="nav-user-menu-header">
                      <p className="nav-user-menu-name">{user.displayName || 'Signed in'}</p>
                      <p className="nav-user-menu-email">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        signOutUser();
                      }}
                      className="nav-logout-btn"
                    >
                      <span className="material-symbols-outlined nav-logout-icon">logout</span>
                      Log out
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <button onClick={() => setAuthOpen(true)} className={`nav-login-btn ${darkCls}`}>
              Log in
            </button>
          )}
          <div className="nav-getstarted-wrap">
            <button onClick={() => setStartOpen((o) => !o)} className={`${PILL_PRIMARY} nav-getstarted-btn`}>
              Get started
              <span className={`material-symbols-outlined nav-getstarted-icon ${startOpen ? 'is-open' : ''}`}>
                expand_more
              </span>
            </button>

            {startOpen && (
              <>
                <button
                  aria-label="Close menu"
                  onClick={() => setStartOpen(false)}
                  className="nav-menu-overlay"
                />
                <div className={`nav-start-panel ${DROPDOWN_GLASS}`}>
                  {START_OPTIONS.map((opt) => (
                    <button
                      key={opt.target}
                      onClick={() => {
                        setStartOpen(false);
                        onGetStarted(opt.target);
                      }}
                      className="nav-start-item"
                    >
                      <span className="nav-start-item-icon">
                        <span className="material-symbols-outlined">{opt.icon}</span>
                      </span>
                      <span>
                        <span className="nav-start-item-label">{opt.label}</span>
                        <span className="nav-start-item-desc">{opt.desc}</span>
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
