import React, { useState, useEffect } from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import { GLASS_PILL } from './glassStyles';
import HeroMockup from './mockups/HeroMockup';
import { useHeroBackground } from './useHeroBackground';
import HeroBackgroundPicker from './HeroBackgroundPicker';

// background-image can't mix gradient functions with a plain color in one
// value list (invalid CSS drops the whole property) — the solid base comes
// from backgroundColor below instead.
const DEFAULT_AURORA =
  'radial-gradient(circle at 18% 15%, rgba(113,97,239,0.55) 0%, transparent 42%), radial-gradient(circle at 82% 12%, rgba(94,110,239,0.4) 0%, transparent 48%), radial-gradient(circle at 55% 92%, rgba(70,58,140,0.45) 0%, transparent 55%)';

// Stacked hero: centered text, screenshot floating below. Both fade + slide
// into place on mount (staggered) rather than waiting for scroll — this is
// the first thing a visitor sees, so it should already be mid-entrance.
const Hero = ({ onGetStarted }) => {
  const [mounted, setMounted] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [heroBg, setHeroBg] = useHeroBackground();

  useEffect(() => {
    if (mounted) return;
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, [mounted]);

  const isImage = heroBg?.type === 'image';
  // object-fit/object-position/opacity are properties of a rendered <img>,
  // not of a CSS background-image — a custom photo renders as an actual img
  // element so those controls have something real to act on. Presets (and
  // the default) stay CSS gradients, which have no such element to adjust.
  const sectionStyle = isImage
    ? { backgroundColor: '#131313' }
    : {
        backgroundImage: heroBg?.type === 'preset' ? heroBg.value : DEFAULT_AURORA,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundColor: '#131313',
      };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-40 md:pt-36 md:pb-56" style={sectionStyle}>
      {isImage && (
        <img
          src={heroBg.src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: heroBg.fit,
            objectPosition: `${heroBg.posX}% ${heroBg.posY}%`,
            opacity: heroBg.opacity / 100,
          }}
        />
      )}

      <HeroBackgroundPicker bg={heroBg} setBg={setHeroBg} />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-normal text-white/60 mb-8 ${GLASS_PILL}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B8FF5]" />
            New: Auto-generated sitemaps from any card sort
          </div>

          <h1 className="font-sans font-bold tracking-tight text-[#F5F3F0] text-[44px] leading-[1.05] sm:text-[64px] md:text-[84px] lg:text-[96px] mb-6">
            Not just another
            <br />
            sitemap tool.
          </h1>

          <p className="max-w-2xl mx-auto text-[17px] md:text-[19px] font-normal leading-relaxed text-white/65 mb-10">
            Turn card sorts and stakeholder input into a clear, shareable sitemap — without
            switching between five different tools to get there.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onGetStarted} className={`${PILL_PRIMARY} px-8 py-4 text-[15px]`}>
              Start for free
            </button>
            <button
              onClick={() => document.querySelector('#capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${PILL_OUTLINE} px-8 py-4 text-[15px]`}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>

      <div
        className={`relative max-w-5xl mx-auto px-4 sm:px-6 mt-16 md:mt-20 transition-all duration-700 delay-150 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative -mb-24 md:-mb-40">
          <HeroMockup className="shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]" />
        </div>
      </div>

      {/* Fades the hero's own background (aurora, preset, or custom photo)
         into the flat Capabilities background below, instead of cutting
         hard at the section boundary. 64px is exactly the gap between the
         mockup's own bottom edge and the section's (pb-40/-mb-24 and
         pb-56/-mb-40 both net to 64px) — any taller and this would paint
         over the screenshot itself, which stays untouched. */}
      <div className="absolute inset-x-0 bottom-0 h-16 z-0 pointer-events-none bg-gradient-to-b from-transparent to-[#131313]" />
    </section>
  );
};

export default Hero;
