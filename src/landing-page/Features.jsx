import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';
import CardSortMockup from './mockups/CardSortMockup';
import SitemapMockup from './mockups/SitemapMockup';
import ReportsMockup from './mockups/ReportsMockup';
import './Features.css';

const SECTIONS = [
  {
    id: 'product',
    eyebrow: 'Research',
    title: 'Run open, closed, or hybrid card sorts.',
    desc: 'Set up a study in minutes, send participants a link, and watch responses roll in — no spreadsheets required.',
    bullets: [
      { text: 'Real-time collaboration with teammates or remote participants', icon: 'groups' },
      { text: 'Open, closed, and hybrid sort types out of the box', icon: 'sort' },
      { text: 'Every card and every group tracked automatically', icon: 'track_changes' },
    ],
    Mockup: CardSortMockup,
  },
  {
    id: 'sitemap-feature',
    eyebrow: 'Structure',
    title: 'From sorted cards to a living sitemap.',
    desc: 'Sorted categories become draggable page nodes on a canvas your whole team can edit together.',
    bullets: [
      { text: 'Every group becomes a page node, instantly', icon: 'account_tree' },
      { text: 'Drag, nest, and relabel without losing history', icon: 'drag_indicator' },
      { text: 'Share a read-only link for stakeholder sign-off', icon: 'link' },
    ],
    Mockup: SitemapMockup,
  },
  {
    id: 'reports-feature',
    eyebrow: 'Analysis',
    title: "See where people agree — and where they don't.",
    desc: 'Sortly runs the statistics for you, so you can spend your time interpreting results, not calculating them.',
    bullets: [
      { text: 'Similarity matrices show which cards belong together', icon: 'grid_on' },
      { text: 'Dendrograms reveal natural category clusters', icon: 'schema' },
      { text: 'Category frequency highlights your strongest labels', icon: 'bar_chart' },
    ],
    Mockup: ReportsMockup,
  },
];

const FeatureBlock = ({ eyebrow, title, desc, bullets, Mockup, light }) => (
  <div className="feature-block-grid">
    <div className="feature-block-copy">
      <p className="feature-eyebrow">{eyebrow}</p>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{desc}</p>
      <ul className="feature-bullets">
        {bullets.map((b) => (
          <li key={b.text} className="feature-bullet">
            <span className="material-symbols-outlined feature-bullet-icon">{b.icon}</span>
            <span className="feature-bullet-text">{b.text}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="feature-block-mockup">
      <Mockup className="feature-mockup-shadow" light={light} />
    </div>
  </div>
);

const AUTOPLAY_MS = 6000;

const Features = ({ light }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Bumped whenever the current countdown should restart from zero without
  // necessarily changing slides (e.g. resuming after a hover pause) — the
  // progress bar below is keyed on index+tick so it remounts (and its CSS
  // animation restarts) in lockstep with the JS timer being re-armed.
  const [tick, setTick] = useState(0);
  const total = SECTIONS.length;
  const active = SECTIONS[index];

  const goTo = (i) => {
    setTick((t) => t + 1);
    setIndex(((i % total) + total) % total);
  };

  const resume = () => {
    setPaused(false);
    setTick((t) => t + 1);
  };

  // Re-armed every time `index` or `tick` changes, so a manual tab/arrow/dot
  // click or a resume-from-pause resets the countdown instead of fighting
  // the timer's own advance.
  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setTimeout(() => {
      setTick((t) => t + 1);
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, tick, paused, total]);

  return (
    <section className="features-section">
      <div
        className="features-inner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={resume}
        onFocus={() => setPaused(true)}
        onBlur={resume}
      >
        <Reveal>
          <div className="features-tabs">
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                className={`features-tab ${i === index ? 'is-active' : ''}`}
              >
                {s.eyebrow}
              </button>
            ))}
          </div>

          <div className="features-carousel">
            <div key={active.id} className="features-slide">
              <FeatureBlock {...active} light={light} />
            </div>
          </div>

          <div className="features-controls">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="features-arrow"
              aria-label="Previous feature"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <div className="features-dots">
              {SECTIONS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`features-dot ${i === index ? 'is-active' : ''}`}
                  aria-label={`Go to ${s.eyebrow}`}
                >
                  {i === index && (
                    <span
                      key={`${index}-${tick}`}
                      className={`features-dot-progress ${paused ? 'is-paused' : ''}`}
                      style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="features-arrow"
              aria-label="Next feature"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
