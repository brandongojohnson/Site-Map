import React from 'react';
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
    reverse: false,
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
    reverse: true,
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
    reverse: false,
  },
];

const FeatureBlock = ({ id, eyebrow, title, desc, bullets, Mockup, reverse, light }) => (
  <div id={id}>
    <div className="feature-block-grid">
      <div className={`feature-block-copy ${reverse ? 'is-reversed' : ''}`}>
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
      <div className={`feature-block-mockup ${reverse ? 'is-reversed' : ''}`}>
        <Mockup className="feature-mockup-shadow" light={light} />
      </div>
    </div>
  </div>
);

const Features = ({ light }) => (
  <section className="features-section">
    <div className="features-inner">
      {SECTIONS.map((s) => (
        <Reveal key={s.id}>
          <FeatureBlock {...s} light={light} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default Features;
