import React, { useEffect, useState } from 'react';
import { useAuth } from '../card-sort/useAuth';
import AuthModal from './AuthModal';
import StrataFAQ from './StrataFAQ';
import StrataContact from './StrataContact';
import Navbar from './strata/Navbar';
import Hero from './strata/Hero';
import SpatialEngine from './strata/SpatialEngine';
import Capabilities from './strata/Capabilities';
import Pipeline from './strata/Pipeline';
import UseCases from './strata/UseCases';
import Testimonials from './strata/Testimonials';
import Pricing from './strata/Pricing';
import FinalCTA from './strata/FinalCTA';
import Footer from './strata/Footer';
import { SHOW_TESTIMONIALS, THEME_KEY } from './strata/config';
import './strata/utilities.css';
import './StrataLanding.css';

// Built from the Strata/Sortly landing design. Styles are plain CSS scoped under
// .strata-lp (strata/utilities.css + StrataLanding.css) so they can't affect the app.
// Each section lives in ./strata/; this file owns the page-level state
// (theme, login modal) and composes the sections.

const StrataLanding = ({ onGetStarted }) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [light, setLight] = useState(() => {
    try { return localStorage.getItem(THEME_KEY) === 'light'; } catch { return false; }
  });
  const { user } = useAuth();

  // page-level niceties the original put on <html>/<body>
  useEffect(() => {
    const html = document.documentElement;
    const prev = { sb: html.style.scrollBehavior, bg: document.body.style.background, ob: document.body.style.overscrollBehavior };
    html.style.scrollBehavior = 'smooth';
    document.body.style.overscrollBehavior = 'none';
    return () => {
      html.style.scrollBehavior = prev.sb;
      document.body.style.background = prev.bg;
      document.body.style.overscrollBehavior = prev.ob;
    };
  }, []);

  useEffect(() => {
    try { localStorage.setItem(THEME_KEY, light ? 'light' : 'dark'); } catch { /* storage unavailable */ }
    document.body.style.background = light ? '#f5f5f7' : '#000';
  }, [light]);

  const start = (target) => { if (onGetStarted) onGetStarted(target); };
  const go = (e) => { e.preventDefault(); if (onGetStarted) onGetStarted('studio'); };
  const login = (e) => { e.preventDefault(); if (user) { if (onGetStarted) onGetStarted('studio'); } else setAuthOpen(true); };

  return (
    <div className={`strata-lp ${light ? "is-light" : ""} bg-black text-zinc-100 antialiased selection:bg-[#2997ff] selection:text-black font-sans min-h-screen`}>
      <Navbar
        light={light}
        onToggleTheme={() => setLight((v) => !v)}
        user={user}
        onLogin={login}
        onStart={start}
      />
      <main className="w-full pt-28 bg-black min-h-screen relative overflow-hidden">
        <Hero onStart={start} />
        <SpatialEngine />
        <Capabilities />
        <Pipeline />
        <UseCases />
        {SHOW_TESTIMONIALS && <Testimonials />}
        <Pricing onSelectPlan={go} />
        <StrataFAQ />
        <StrataContact />
        <FinalCTA onStart={start} />
      </main>
      <Footer />

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </div>
  );
};

export default StrataLanding;
