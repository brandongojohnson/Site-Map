import React, { useState } from 'react';
import CardSortMockup from './mockups/CardSortMockup';
import SitemapMockup from './mockups/SitemapMockup';
import ReportsMockup from './mockups/ReportsMockup';

const TABS = [
  {
    key: 'cardsort',
    label: 'Card Sort',
    eyebrow: 'Research',
    title: 'Run open, closed, or hybrid card sorts.',
    desc: 'Set up a study in minutes, send participants a link, and watch responses roll in — no spreadsheets required.',
    bullets: [
      'Real-time collaboration with teammates or remote participants',
      'Open, closed, and hybrid sort types out of the box',
      'Every card and every group tracked automatically',
    ],
    Mockup: CardSortMockup,
  },
  {
    key: 'sitemap',
    label: 'Sitemap',
    eyebrow: 'Structure',
    title: 'From sorted cards to a living sitemap.',
    desc: 'Sorted categories become draggable page nodes on a canvas your whole team can edit together.',
    bullets: [
      'Every group becomes a page node, instantly',
      'Drag, nest, and relabel without losing history',
      'Share a read-only link for stakeholder sign-off',
    ],
    Mockup: SitemapMockup,
  },
  {
    key: 'reports',
    label: 'Reports',
    eyebrow: 'Analysis',
    title: "See where people agree — and where they don't.",
    desc: 'Sortly runs the statistics for you, so you can spend your time interpreting results, not calculating them.',
    bullets: [
      'Similarity matrices show which cards belong together',
      'Dendrograms reveal natural category clusters',
      'Category frequency highlights your strongest labels',
    ],
    Mockup: ReportsMockup,
  },
];

const ProductDeepDive = () => {
  const [active, setActive] = useState('cardsort');
  const tab = TABS.find((t) => t.key === active);
  const Mockup = tab.Mockup;

  return (
    <section id="product" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-1 rounded-full bg-[#FAF9F6] border border-[#ECE6D9] p-1.5">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all ${
                  active === t.key
                    ? 'bg-[#171512] text-white shadow-sm'
                    : 'text-[#8C8577] hover:text-[#171512]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3">
              {tab.eyebrow}
            </p>
            <h2 className="text-[30px] md:text-[38px] font-extrabold tracking-tight text-[#171512] leading-tight mb-5">
              {tab.title}
            </h2>
            <p className="text-[16px] text-[#4A4540] leading-relaxed mb-7">{tab.desc}</p>
            <ul className="space-y-3.5">
              {tab.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#F1E4D8] flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[13px] text-[#B5652F]">check</span>
                  </span>
                  <span className="text-[14px] text-[#4A4540] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Mockup className="shadow-[0_30px_70px_-25px_rgba(23,21,18,0.25)]" />
        </div>
      </div>
    </section>
  );
};

export default ProductDeepDive;
