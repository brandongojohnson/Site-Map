import React from 'react';
import { useTheme } from './useTheme';
import Nav from './Nav';
import Hero from './Hero';
import Capabilities from './Capabilities';
import Features from './Features';
import Process from './Process';
import Reveal from './Reveal';
import UseCases from './UseCases';
import Testimonial from './Testimonial';
import Pricing from './Pricing';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import Contact from './Contact';
import Footer from './Footer';
import './LandingPage.css';

const LandingPage = ({ onGetStarted }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="landing-page">
        <Nav onGetStarted={onGetStarted} theme={theme} onToggleTheme={toggleTheme} />
        <Hero onGetStarted={onGetStarted} />
        <Capabilities />
        <Features light={theme === 'light'} />
        <Process />
        <Reveal>
          <UseCases />
        </Reveal>
        <Reveal>
          <Testimonial />
        </Reveal>
        <Reveal>
          <Pricing onGetStarted={onGetStarted} />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <FinalCTA onGetStarted={onGetStarted} />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
