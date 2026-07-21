import React from 'react';
import ScatteredIcon from './ScatteredIcon';

const ROLES = [
  {
    icon: 'design_services',
    title: 'UX Designers',
    desc: 'Turn stakeholder opinions into a structure backed by real user behavior.',
    example: 'e.g. reorganizing a nav that "feels off" but no one can say why',
  },
  {
    icon: 'travel_explore',
    title: 'Researchers',
    desc: 'Run rigorous open, closed, or hybrid sorts without wrangling spreadsheets.',
    example: 'e.g. a 40-participant closed sort analyzed in an afternoon',
  },
  {
    icon: 'checklist',
    title: 'Product Managers',
    desc: "Align engineering and design on IA before a single ticket gets written.",
    example: 'e.g. sign-off on a sitemap before sprint planning',
  },
  {
    icon: 'apartment',
    title: 'Agencies',
    desc: "Show clients the reasoning behind a sitemap, not just the deliverable.",
    example: 'e.g. a client-ready results link, no export required',
  },
  {
    icon: 'code',
    title: 'Developers',
    desc: 'Get a clear page hierarchy and routes before scaffolding a single component.',
    example: 'e.g. route names and nesting settled before sprint one',
  },
];

const UseCases = () => (
  <section className="relative py-24 md:py-32 border-t border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-[#18181D]">
    <ScatteredIcon icon="groups" className="text-[20px] opacity-[0.08]" style={{ top: '8%', left: '8%', transform: 'rotate(-8deg)' }} />
    <ScatteredIcon icon="diversity_3" className="text-[18px] opacity-[0.1]" style={{ bottom: '10%', right: '10%', transform: 'rotate(10deg)' }} />

    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-xl mb-14">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] mb-3">
          Who it's for
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#18181B] dark:text-[#F5F3F0] leading-tight">
          Made for whoever owns the structure.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {ROLES.map((role) => (
          <div
            key={role.title}
            className="rounded-2xl p-6 border border-[#E4E4E7] dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all"
          >
            <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[22px] text-[#18181B] dark:text-[#F5F3F0]">{role.icon}</span>
            </span>
            <h3 className="text-[15px] font-semibold text-[#18181B] dark:text-[#F5F3F0] mb-1.5">
              {role.title}
            </h3>
            <p className="text-[13px] font-normal text-[#47474D] dark:text-[#B8B2C4] leading-relaxed mb-3">
              {role.desc}
            </p>
            <p className="text-[11px] font-normal text-[#9C9CA3] dark:text-[#6B6578] leading-relaxed italic">
              {role.example}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
