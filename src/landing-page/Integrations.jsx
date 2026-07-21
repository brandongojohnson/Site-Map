import React from 'react';

// Generic monochrome glyphs stand in for each product's mark — this section
// names real tools Sortly connects with, without reproducing their logos.
const TOOLS = [
  { name: 'Figma', icon: 'draw' },
  { name: 'Miro', icon: 'dashboard' },
  { name: 'Notion', icon: 'description' },
  { name: 'Slack', icon: 'forum' },
  { name: 'Google Drive', icon: 'cloud' },
  { name: 'Jira', icon: 'checklist' },
];

const Integrations = () => (
  <section id="integrations" className="py-20 md:py-28">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3">
        Integrations
      </p>
      <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#171512] mb-14">
        Works with your existing stack.
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {TOOLS.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-[#ECE6D9] py-8 px-4 hover:shadow-[0_20px_40px_-20px_rgba(23,21,18,0.15)] transition-shadow"
          >
            <span className="w-11 h-11 rounded-xl bg-[#FAF9F6] border border-[#ECE6D9] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-[#4A4540]">{t.icon}</span>
            </span>
            <span className="text-[13px] font-semibold text-[#171512]">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Integrations;
