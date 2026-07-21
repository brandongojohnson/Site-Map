import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Features from './Features';
import ProductDeepDive from './ProductDeepDive';
import Integrations from './Integrations';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const LandingPage = ({ onGetStarted }) => (
  <div className="font-sans bg-[#FAF9F6] text-[#171512] antialiased">
    <Nav onGetStarted={onGetStarted} />
    <Hero onGetStarted={onGetStarted} />
    <TrustBar />
    <Features />
    <ProductDeepDive />
    <Integrations />
    <Testimonials />
    <Pricing onGetStarted={onGetStarted} />
    <FinalCTA onGetStarted={onGetStarted} />
    <Footer />
  </div>
);

export default LandingPage;
