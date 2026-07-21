import React from 'react';
import Reveal from './Reveal';
import CardSortMockup from './mockups/CardSortMockup';
import SitemapMockup from './mockups/SitemapMockup';
import ReportsMockup from './mockups/ReportsMockup';

const SECTIONS = [
  {
    id: 'product',
    eyebrow: 'Research',
    title: 'Run open, closed, or hybrid card sorts.',
    desc: 'Set up a study in minutes, send participants a link, and watch responses roll in — no spreadsheets required.',
    bullets: [
      'Real-time collaboration with teammates or remote participants',
      'Open, closed, and hybrid sort types out of the box',
      'Every card and every group tracked automatically',
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
      'Every group becomes a page node, instantly',
      'Drag, nest, and relabel without losing history',
      'Share a read-only link for stakeholder sign-off',
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
      'Similarity matrices show which cards belong together',
      'Dendrograms reveal natural category clusters',
      'Category frequency highlights your strongest labels',
    ],
    Mockup: ReportsMockup,
    reverse: false,
  },
];

const FeatureBlock = ({ id, eyebrow, title, desc, bullets, Mockup, reverse }) => (
  <div id={id}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      <div className={reverse ? 'md:order-2' : ''}>
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#9B8FF5] mb-3">{eyebrow}</p>
        <h3 className="text-[26px] md:text-[32px] font-bold tracking-tight text-[#F5F3F0] leading-tight mb-5">
          {title}
        </h3>
        <p className="text-[16px] font-normal text-white/60 leading-relaxed mb-7">{desc}</p>
        <ul className="space-y-3.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-[#241F3D] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[13px] text-[#9B8FF5]">check</span>
              </span>
              <span className="text-[14px] font-normal text-white/55 leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={reverse ? 'md:order-1' : ''}>
        <Mockup className="shadow-[0_30px_70px_-25px_rgba(0,0,0,0.65)]" />
      </div>
    </div>
  </div>
);

const Features = () => (
  <section className="relative py-24 md:py-32 border-t border-white/10 bg-[#131313]">
    <div className="max-w-6xl mx-auto px-6 space-y-24 md:space-y-32">
      {SECTIONS.map((s) => (
        <Reveal key={s.id}>
          <FeatureBlock {...s} />
        </Reveal>
      ))}
    </div>
  </section>
);

export default Features;
