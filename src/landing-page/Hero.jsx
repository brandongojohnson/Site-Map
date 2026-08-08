import React, { useState, useEffect, useRef } from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import { GLASS_PILL } from './glassStyles';
import HeroMockup from './mockups/HeroMockup';
import { useHeroBackground } from './useHeroBackground';
import HeroBackgroundPicker from './HeroBackgroundPicker';
import HeroCanvas from './HeroCanvas';
import { useAuth } from '../card-sort/useAuth';

// The hero background is a shared, site-wide setting (see
// useHeroBackground) — only this account can change it for everyone else.
const BACKGROUND_ADMIN_EMAIL = 'brandon.johnson0416@gmail.com';

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
  const { user } = useAuth();
  const canEditBackground = user?.email === BACKGROUND_ADMIN_EMAIL;
  const sectionRef = useRef(null);
  // Drives the adjust panel's preview box (see HeroBackgroundPicker) so it
  // matches this section's actual width:height ratio instead of an
  // arbitrary fixed preview height — otherwise "contain"/"cover" look
  // right in the small preview but crop or letterbox differently once
  // applied to the real, much-wider-than-tall hero.
  const [heroAspectRatio, setHeroAspectRatio] = useState(16 / 9);

  useEffect(() => {
    if (mounted) return;
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, [mounted]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) setHeroAspectRatio(width / height);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isImage = heroBg?.type === 'image';
  // "Animated" is its own opt-in choice in the picker (see
  // HeroBackgroundPicker) rather than the default — the default stays the
  // plain CSS aurora below, same as before HeroCanvas existed.
  const isAnimated = heroBg?.type === 'animated';

  // object-fit/object-position/opacity are properties of a rendered <img>,
  // not of a CSS background-image — a custom photo renders as an actual img
  // element so those controls have something real to act on. Presets (and
  // the default) stay CSS gradients, which have no such element to adjust.
  const sectionStyle = isImage
    ? { backgroundColor: '#131313' }
    : {
      backgroundImage:
        heroBg?.type === 'preset' ? heroBg.value : DEFAULT_AURORA,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundColor: '#131313',
    };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible pt-24 md:pt-28 pb-40 md:pb-56"
      style={sectionStyle}
    >
      {isAnimated && <HeroCanvas className="absolute inset-0 w-full h-full" />}

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

      {canEditBackground && (
        <HeroBackgroundPicker bg={heroBg} setBg={setHeroBg} previewAspectRatio={heroAspectRatio} />
      )}

      {/* relative+z so the copy paints above the background layers — an
          absolutely positioned canvas/photo would otherwise cover it. */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out ${mounted
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
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
            Turn card sorts and stakeholder input into a clear, shareable
            sitemap — without switching between five different tools to get
            there.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="rounded-full font-semibold transition-all duration-200 active:scale-95 bg-[#F5F3F0] text-[#131313] hover:opacity-90 px-8 py-4 text-[15px]"
            >
              Start for free
            </button>

            <button
              onClick={() =>
                document
                  .querySelector('#capabilities')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-full font-semibold transition-all duration-200 active:scale-95 border-[1.5px] border-white/20 text-[#F5F3F0] hover:bg-white/10 px-8 py-4 text-[15px]"
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>

      <div
        className={`relative z-20 max-w-5xl mx-auto px-4 sm:px-6 mt-16 md:mt-20 transition-all duration-700 delay-150 ease-out ${mounted
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
          }`}
      >
        <div className="relative z-20 -mb-24 md:-mb-40">
          <HeroMockup className="shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]" />
        </div>
      </div>

      {/* Blend hero into the next section. Half the gradient stays inside
          the Hero, half extends below it. The mockup floats above it. */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[60%]
          z-10
          pointer-events-none
          bg-gradient-to-t
          from-white
          from-[55%]
          to-transparent
          dark:from-[#131313]
        "
      />
    </section>
  );
};

export default Hero;