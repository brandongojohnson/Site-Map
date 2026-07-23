import React from 'react';
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

const LandingPage = ({ onGetStarted }) => (
  <div className="font-sans bg-[#131313] text-[#F5F3F0] antialiased">
    <Nav onGetStarted={onGetStarted} />
    <Hero onGetStarted={onGetStarted} />
    <Capabilities />
    <Features />
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
);

export default LandingPage;
