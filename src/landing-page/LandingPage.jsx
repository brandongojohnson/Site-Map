import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Reveal from './Reveal';
import ProductSections from './ProductSections';
import UseCases from './UseCases';
import Pricing from './Pricing';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const LandingPage = ({ onGetStarted }) => (
  <div className="font-sans bg-[#F5F5F6] dark:bg-[#121016] text-[#18181B] dark:text-[#F5F3F0] antialiased">
    <Nav onGetStarted={onGetStarted} />
    <Hero onGetStarted={onGetStarted} />
    <ProductSections />
    <Reveal>
      <UseCases />
    </Reveal>
    <Reveal>
      <Pricing onGetStarted={onGetStarted} />
    </Reveal>
    <Reveal>
      <FinalCTA onGetStarted={onGetStarted} />
    </Reveal>
    <Footer />
  </div>
);

export default LandingPage;
