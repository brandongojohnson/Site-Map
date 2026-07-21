import React from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import HeroMockup from './mockups/HeroMockup';

const Hero = ({ onGetStarted }) => (
  <section id="top" className="relative overflow-hidden pt-20 pb-40 md:pt-28 md:pb-56">
    {/* Abstract organic texture — soft blurred color fields, not photography */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 left-[8%] w-[520px] h-[520px] rounded-full bg-[#E8C9A8]/50 blur-[110px]" />
      <div className="absolute top-10 right-[6%] w-[460px] h-[460px] rounded-full bg-[#D9C9A3]/45 blur-[110px]" />
      <div className="absolute top-64 left-[32%] w-[380px] h-[380px] rounded-full bg-[#B5652F]/10 blur-[100px]" />
    </div>

    <div className="max-w-5xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#ECE6D9] px-4 py-1.5 text-[12px] font-medium text-[#8C8577] mb-8 shadow-[0_2px_10px_-4px_rgba(23,21,18,0.08)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B5652F]" />
        New: Auto-generated sitemaps from any card sort
      </div>

      <h1 className="font-sans font-extrabold tracking-tight text-[#171512] text-[44px] leading-[1.05] sm:text-[56px] md:text-[68px] mb-6">
        Design information
        <br />
        architecture, together.
      </h1>

      <p className="max-w-2xl mx-auto text-[18px] md:text-[20px] leading-relaxed text-[#4A4540] mb-10">
        Turn card sorts and stakeholder input into a clear, shareable sitemap — without
        switching between five different tools to get there.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button onClick={onGetStarted} className={`${PILL_PRIMARY} px-8 py-4 text-[15px]`}>
          Start for free
        </button>
        <button
          onClick={() => document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' })}
          className={`${PILL_OUTLINE} px-8 py-4 text-[15px]`}
        >
          Book a demo
        </button>
      </div>
    </div>

    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 mt-16 md:mt-20">
      <HeroMockup className="shadow-[0_50px_100px_-30px_rgba(23,21,18,0.35)] -mb-24 md:-mb-40" />
    </div>
  </section>
);

export default Hero;
