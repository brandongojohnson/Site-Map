import React, { useState, useEffect, useRef } from 'react';
import { GLASS_PILL } from './glassStyles';
import HeroMockup from './mockups/HeroMockup';
import { useHeroBackground } from './useHeroBackground';
import HeroBackgroundPicker from './HeroBackgroundPicker';
import HeroCanvas from './HeroCanvas';
import Grainient from './Grainient';
import Galaxy from './Galaxy';
import { useAuth } from '../card-sort/useAuth';
import './Hero.css';

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
  // HeroBackgroundPicker) — the older hand-rolled shader, kept for whoever
  // already picked it.
  const isAnimated = heroBg?.type === 'animated';
  // Another opt-in WebGL option alongside "animated" — a starfield rather
  // than the older ribbon shader.
  const isGalaxy = heroBg?.type === 'galaxy';
  // No admin override at all (not even a preset) — Grainient is what every
  // visitor sees unless the admin has explicitly chosen something else. The
  // CSS aurora below stays in the section's own background regardless, as a
  // fallback if WebGL is unavailable and Grainient can't render.
  const isDefault = !heroBg;

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
    <section ref={sectionRef} className="hero-section" style={sectionStyle}>
      {isDefault && (
        <div className="hero-bg-layer">
          <Grainient
            color1="#25055e"
            color3="#5e3088"
            timeSpeed={0.8}
            colorBalance={-0.01}
            warpSpeed={1.6}
            blendAngle={118}
            blendSoftness={0.18}
            rotationAmount={1070}
            grainAmount={0.19}
          />
        </div>
      )}

      {isAnimated && <HeroCanvas className="hero-bg-layer" />}

      {isGalaxy && (
        <div className="hero-bg-layer">
          <Galaxy
            starSpeed={0.9}
            hueShift={155}
            saturation={0.3}
            twinkleIntensity={0.6}
            mouseRepulsion={false}
            transparent={false}
          />
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
          absolutely positioned canvas/photo would otherwise cover it. */}
      <div className="hero-content-wrap">
        <div className={`hero-fade-in ${mounted ? 'is-mounted' : ''}`}>
          <div className={`hero-badge ${GLASS_PILL}`}>
            <span className="hero-badge-dot" />
            New: Auto-generated sitemaps from any card sort
          </div>

          <h1 className="hero-title">
            Navigate Your
            <br />
             Digital Universe
          </h1>

          <p className="hero-subtitle">
            Ensure users find what they need. Optimize your site structure with card sorting and tree testing.
          </p>

          <div className="hero-cta-row">
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
