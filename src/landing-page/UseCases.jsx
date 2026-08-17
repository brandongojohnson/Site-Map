import React from 'react';

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
  <section className="relative py-24 md:py-32 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#131313]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-xl mb-14">
        <p className="text-[12px] font-semibold uppercase tracking-normal text-[#7161EF] dark:text-[#9B8FF5] mb-3">
          Who it's for
        </p>
        <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#131313] dark:text-[#F5F3F0] leading-tight">
          Made for whoever owns the structure.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {ROLES.map((role) => (
          <div
            key={role.title}
            className="rounded-2xl p-6 bg-[#FAFAFA] border border-black/10 hover:bg-white hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(23,21,18,0.15)] dark:bg-white/[0.03] dark:border-white/10 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[22px] text-[#131313] dark:text-[#F5F3F0]">{role.icon}</span>
            </span>
            <h3 className="text-[15px] font-semibold text-[#131313] dark:text-[#F5F3F0] mb-1.5">
              {role.title}
            </h3>
            <p className="text-[13px] font-normal text-black/55 dark:text-white/55 leading-relaxed mb-3">
              {role.desc}
            </p>
            <p className="text-[11px] font-normal text-black/35 dark:text-white/35 leading-relaxed italic">
              {role.example}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
