import React, { useState, useEffect } from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import { GLASS_PILL } from './glassStyles';
import ScatteredIcon from './ScatteredIcon';
import HeroMockup from './mockups/HeroMockup';
import { useHeroBackground } from './useHeroBackground';
import HeroBackgroundPicker from './HeroBackgroundPicker';

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

  // Uploaded files and pasted URLs are image sources (need url(...)); the
  // built-in presets are already CSS gradient functions, used as-is.
  const isImageSource = heroBg?.startsWith('data:') || heroBg?.startsWith('http://') || heroBg?.startsWith('https://');
  const backgroundStyle = heroBg
    ? {
        backgroundImage: isImageSource ? `url(${heroBg})` : heroBg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-40 md:pt-36 md:pb-56"
      style={backgroundStyle}
    >
      {heroBg && (
        // Keeps text legible over an arbitrary photo — presets are already
        // low-contrast by design, so they get a lighter veil than a photo
        // source (upload/pasted URL), whose contrast is unknown.
        <div
          className={
            isImageSource
              ? 'absolute inset-0 bg-white/55 dark:bg-[#121016]/60'
              : 'absolute inset-0 bg-white/25 dark:bg-[#121016]/35'
          }
        />
      )}

      <ScatteredIcon icon="auto_awesome" className="text-[22px] opacity-[0.12]" style={{ top: '14%', left: '8%', transform: 'rotate(-12deg)' }} />
      <ScatteredIcon icon="hub" className="text-[28px] opacity-[0.1]" style={{ top: '10%', right: '10%', transform: 'rotate(10deg)' }} />
      <ScatteredIcon icon="bolt" className="text-[20px] opacity-[0.12]" style={{ top: '38%', left: '4%', transform: 'rotate(6deg)' }} />
      <ScatteredIcon icon="star" className="text-[18px] opacity-[0.12]" style={{ top: '4%', left: '38%', transform: 'rotate(-8deg)' }} />
      <ScatteredIcon icon="layers" className="text-[24px] opacity-[0.1]" style={{ top: '42%', right: '6%', transform: 'rotate(-14deg)' }} />

      <HeroBackgroundPicker bg={heroBg} setBg={setHeroBg} />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-normal text-[#86868C] dark:text-[#9891A8] mb-8 shadow-[0_2px_10px_-4px_rgba(23,21,18,0.08)] ${GLASS_PILL}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7161EF]" />
            New: Auto-generated sitemaps from any card sort
          </div>

          <h1 className="font-sans font-bold tracking-tight text-[#18181B] dark:text-[#F5F3F0] text-[44px] leading-[1.05] sm:text-[56px] md:text-[68px] mb-6">
            Design information
            <br />
            architecture, together.
          </h1>

          <p className="max-w-2xl mx-auto text-[18px] md:text-[20px] font-normal leading-relaxed text-[#47474D] dark:text-[#B8B2C4] mb-10">
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
      </div>

      <div
        className={`relative max-w-5xl mx-auto px-4 sm:px-6 mt-16 md:mt-20 transition-all duration-700 delay-150 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative -mb-24 md:-mb-40">
          <HeroMockup className="shadow-[0_30px_60px_-25px_rgba(23,21,18,0.3)] dark:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)]" />
          {/* Solid scrim painted over the mockup's own bottom, fading to the
             page's flat background — CSS mask-image doesn't reliably fade a
             box-shadow this large along with it, leaving a crisp rounded
             edge visible even inside the "faded" zone. Painting a matching
             gradient on top sidesteps that entirely. */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl pointer-events-none bg-gradient-to-b from-transparent to-[#F5F5F6] dark:to-[#121016]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
