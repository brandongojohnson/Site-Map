import React from 'react';
import Reveal from './Reveal';
import ScatteredIcon from './ScatteredIcon';
import CardSortMockup from './mockups/CardSortMockup';
import SitemapMockup from './mockups/SitemapMockup';
import ReportsMockup from './mockups/ReportsMockup';

const SECTIONS = [
  {
    id: 'product',
    eyebrow: 'Research',
    titleLight: 'Run open, closed, or hybrid',
    titleBold: 'card sorts.',
    desc: 'Set up a study in minutes, send participants a link, and watch responses roll in — no spreadsheets required.',
    bullets: [
      'Real-time collaboration with teammates or remote participants',
      'Open, closed, and hybrid sort types out of the box',
      'Every card and every group tracked automatically',
    ],
    Mockup: CardSortMockup,
    bg: 'bg-white dark:bg-[#18181D]',
    reverse: false,
    icons: [
      { icon: 'groups', className: 'text-[20px] opacity-[0.08]', style: { top: '8%', right: '10%', transform: 'rotate(-10deg)' } },
      { icon: 'drag_indicator', className: 'text-[16px] opacity-[0.1]', style: { bottom: '12%', left: '6%', transform: 'rotate(12deg)' } },
    ],
  },
  {
    id: 'sitemap-feature',
    eyebrow: 'Structure',
    titleLight: 'From sorted cards to a',
    titleBold: 'living sitemap.',
    desc: 'Sorted categories become draggable page nodes on a canvas your whole team can edit together.',
    bullets: [
      'Every group becomes a page node, instantly',
      'Drag, nest, and relabel without losing history',
      'Share a read-only link for stakeholder sign-off',
    ],
    Mockup: SitemapMockup,
    bg: 'bg-white dark:bg-[#18181D]',
    reverse: true,
    icons: [
      { icon: 'account_tree', className: 'text-[20px] opacity-[0.08]', style: { top: '10%', left: '8%', transform: 'rotate(10deg)' } },
      { icon: 'route', className: 'text-[16px] opacity-[0.1]', style: { bottom: '10%', right: '8%', transform: 'rotate(-8deg)' } },
    ],
  },
  {
    id: 'reports-feature',
    eyebrow: 'Analysis',
    titleLight: 'See where people agree —',
    titleBold: "and where they don't.",
    desc: 'Sortly runs the statistics for you, so you can spend your time interpreting results, not calculating them.',
    bullets: [
      'Similarity matrices show which cards belong together',
      'Dendrograms reveal natural category clusters',
      'Category frequency highlights your strongest labels',
    ],
    Mockup: ReportsMockup,
    bg: 'bg-white dark:bg-[#18181D]',
    reverse: false,
    icons: [
      { icon: 'insights', className: 'text-[20px] opacity-[0.08]', style: { top: '8%', right: '8%', transform: 'rotate(-12deg)' } },
      { icon: 'query_stats', className: 'text-[16px] opacity-[0.1]', style: { bottom: '14%', left: '10%', transform: 'rotate(8deg)' } },
    ],
  },
];

const DeepDiveSection = ({ id, eyebrow, titleLight, titleBold, desc, bullets, Mockup, bg, reverse, icons }) => (
  <section id={id} className={`relative py-24 md:py-32 ${bg}`}>
    {icons.map((ic, i) => (
      <ScatteredIcon key={i} {...ic} />
    ))}
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className={reverse ? 'md:order-2' : ''}>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] mb-3">{eyebrow}</p>
          <h2 className="text-[30px] md:text-[38px] tracking-tight text-[#18181B] dark:text-[#F5F3F0] leading-tight mb-5">
            <span className="font-normal">{titleLight}</span> <span className="font-black">{titleBold}</span>
          </h2>
          <p className="text-[16px] text-[#47474D] dark:text-[#B8B2C4] leading-relaxed mb-7">{desc}</p>
          <ul className="space-y-3.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#EEECFD] dark:bg-[#241F3D] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[13px] text-[#7161EF]">check</span>
                </span>
                <span className="text-[14px] text-[#47474D] dark:text-[#B8B2C4] leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={reverse ? 'md:order-1' : ''}>
          <Mockup className="shadow-[0_30px_70px_-25px_rgba(23,21,18,0.25)] dark:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.6)]" />
        </div>
      </div>
    </div>
  </section>
);

// Three standalone sections — one per product surface — rather than a single
// tabbed area, so each gets its own scroll-triggered reveal and its own
// moment on the page instead of competing for a shared toggle.
const ProductSections = () => (
  <>
    {SECTIONS.map((s) => (
      <Reveal key={s.id}>
        <DeepDiveSection {...s} />
      </Reveal>
    ))}
  </>
);

export default ProductSections;
