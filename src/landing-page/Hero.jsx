import React, { useState, useEffect, useRef } from 'react';
import WordReveal from './WordReveal';
import HeroMockup from './mockups/HeroMockup';
import { useHeroBackground } from './useHeroBackground';
import HeroBackgroundPicker from './HeroBackgroundPicker';
import HeroCanvas from './HeroCanvas';
import HeroPrism from './HeroPrism';
import { getHeroBackgroundFlags } from './heroBackgroundFlags';
import { useAuth } from '../card-sort/useAuth';
import './Hero.css';

// The hero background is a shared, site-wide setting (see
// useHeroBackground) — only this account can change it for everyone else.
const BACKGROUND_ADMIN_EMAIL = 'brandon.johnson0416@gmail.com';

// Stacked hero: centered text, screenshot floating below. Both fade + slide
// into place on mount (staggered) rather than waiting for scroll — this is
// the first thing a visitor sees, so it should already be mid-entrance.
const Hero = ({ onGetStarted, theme }) => {
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

  const { isImage, isAnimated, isPreset, isLightGradient, isDarkGradient } = getHeroBackgroundFlags(heroBg, theme);

  // object-fit/object-position/opacity are properties of a rendered <img>,
  // not of a CSS background-image — a custom photo renders as an actual img
  // element so those controls have something real to act on.
  // No override: fall through to .hero-section's own CSS background (a flat
  // dark color in dark theme, an off-white with a soft accent blob in light
  // theme — see Hero.css). The prism canvas (dark theme only) layers on
  // top of that flat color rather than replacing it, since it renders with
  // a transparent background.
  const sectionStyle = isPreset
    ? {
      backgroundImage: heroBg.value,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      backgroundColor: 'var(--dark-bg-primary)',
    }
    : undefined;

  return (
    <section ref={sectionRef} className="hero-section" style={sectionStyle}>
      {isAnimated && <HeroCanvas className="hero-bg-layer" />}

      {isDarkGradient && (
        <div className="hero-bg-layer">
          <HeroPrism noise={0.025} glow={0.72} />
        </div>
      )}

      {isLightGradient && (
        <div className="hero-bg-layer">
          <HeroPrism lightMode noise={0.025} glow={0.72} />
        </div>
      )}

      {isImage && (
        <img
          src={heroBg.src}
          alt=""
          aria-hidden="true"
          className="hero-bg-layer"
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
          absolutely positioned canvas/photo would otherwise cover it.
          Headline → subtext → CTA cascade in on separate delays (100ms
          apart) rather than as one block, so entry reads as a sequence. */}
      <div className="hero-content-wrap">
        <div className={`hero-fade-in ${mounted ? 'is-mounted' : ''}`} style={{ transitionDelay: '0ms' }}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            New: Auto-generated sitemaps from any card sort
          </div>

          <h1 className="hero-title">
            <WordReveal lines={['Turn Complexity', 'Into Clarity.']} />
          </h1>
        </div>

        <p
          className={`hero-subtitle hero-fade-in ${mounted ? 'is-mounted' : ''}`}
          style={{ transitionDelay: '100ms' }}
        >
          Ensure users find what they need. Optimize your site structure with card sorting and tree testing.
        </p>

        <div
          className={`hero-cta-row hero-fade-in ${mounted ? 'is-mounted' : ''}`}
          style={{ transitionDelay: '200ms' }}
        >
          <button onClick={onGetStarted} className="hero-btn-primary">
            Start for free
          </button>

          <button
            onClick={() =>
              document
                .querySelector('#capabilities')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hero-btn-outline"
          >
            Book a demo
          </button>
        </div>
      </div>

      <div className={`hero-mockup-wrap hero-fade-in ${mounted ? 'is-mounted' : ''}`}>
        <div className="hero-mockup-inner">
          <HeroMockup className="hero-mockup-shadow" />
        </div>
      </div>

      {/* Blend hero into the next section. Half the gradient stays inside
          the Hero, half extends below it. The mockup floats above it. */}
      <div className="hero-blend-gradient" />
    </section>
  );
};

export default Hero;
