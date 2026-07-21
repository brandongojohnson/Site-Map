import React from 'react';
import { CardChip } from './mockups/primitives';

const LiveSortingPreview = () => (
  <div className="flex items-center gap-3">
    <div className="flex-1 space-y-1.5">
      <CardChip label="Getting Started" />
      <CardChip label="Account Settings" faded />
    </div>
    <div className="flex -space-x-2">
      {['#B5652F', '#171512', '#8C8577'].map((c) => (
        <span key={c} className="w-6 h-6 rounded-full border-2 border-white" style={{ background: c }} />
      ))}
    </div>
  </div>
);

const SitemapPreview = () => {
  const pts = [
    { x: 14, y: 30 },
    { x: 68, y: 12 },
    { x: 68, y: 48 },
  ];
  return (
    <div className="relative h-16">
      <svg viewBox="0 0 96 60" className="absolute inset-0 w-full h-full">
        <path d={`M ${pts[0].x + 16} ${pts[0].y} C 48 ${pts[0].y}, 48 ${pts[1].y}, ${pts[1].x - 14} ${pts[1].y}`} stroke="#E7E2D6" strokeWidth={2} fill="none" />
        <path d={`M ${pts[0].x + 16} ${pts[0].y} C 48 ${pts[0].y}, 48 ${pts[2].y}, ${pts[2].x - 14} ${pts[2].y}`} stroke="#E7E2D6" strokeWidth={2} fill="none" />
      </svg>
      {pts.map((p, i) => (
        <div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border ${
            i === 0 ? 'w-8 h-8 bg-[#171512] border-[#171512]' : 'w-7 h-7 bg-white border-[#ECE6D9]'
          }`}
          style={{ left: `${(p.x / 96) * 100}%`, top: `${(p.y / 60) * 100}%` }}
        />
      ))}
    </div>
  );
};

const RemoteLinkPreview = () => (
  <div className="space-y-2.5">
    <div className="flex items-center gap-2 rounded-lg bg-white border border-[#ECE6D9] px-3 py-2">
      <span className="material-symbols-outlined text-[14px] text-[#B0AA9C]">link</span>
      <span className="text-[11px] text-[#8C8577] truncate flex-1">sortly.app/s/8f2k-x91</span>
      <span className="material-symbols-outlined text-[14px] text-[#B0AA9C]">content_copy</span>
    </div>
    <div className="flex items-center gap-1.5 text-[10px] text-[#B0AA9C]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#B5652F]" />
      12 responses collected
    </div>
  </div>
);

const InsightsPreview = () => (
  <div className="flex items-center gap-4">
    <div className="grid grid-cols-4 gap-[3px]">
      {[0.9, 0.2, 0.1, 0.15, 0.2, 0.85, 0.3, 0.1, 0.1, 0.3, 0.9, 0.4, 0.15, 0.1, 0.4, 1].map((v, i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-[2px]"
          style={{ background: `rgba(181,101,47,${0.1 + v * 0.8})` }}
        />
      ))}
    </div>
    <div className="flex-1 space-y-1.5">
      <div className="h-1.5 rounded-full bg-[#ECE6D9]"><div className="h-full w-4/5 rounded-full bg-[#171512]" /></div>
      <div className="h-1.5 rounded-full bg-[#ECE6D9]"><div className="h-full w-3/5 rounded-full bg-[#B5652F]" /></div>
      <div className="h-1.5 rounded-full bg-[#ECE6D9]"><div className="h-full w-2/5 rounded-full bg-[#D8D2C4]" /></div>
    </div>
  </div>
);

const FEATURES = [
  {
    icon: 'groups',
    title: 'Live Card Sorting',
    desc: 'Drag labeled cards into groups in real time with teammates or test participants.',
    preview: <LiveSortingPreview />,
  },
  {
    icon: 'account_tree',
    title: 'Auto-Generated Sitemaps',
    desc: 'Turn sorted categories into a visual, editable sitemap instantly.',
    preview: <SitemapPreview />,
  },
  {
    icon: 'ios_share',
    title: 'Remote Testing Links',
    desc: 'Send a shareable link so participants can run an open or closed card sort remotely.',
    preview: <RemoteLinkPreview />,
  },
  {
    icon: 'insights',
    title: 'Insights Dashboard',
    desc: 'Similarity matrices, dendrograms, and agreement scores calculated automatically.',
    preview: <InsightsPreview />,
  },
];

const Features = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-xl mb-14">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3">
          Everything in one place
        </p>
        <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#171512] leading-tight">
          From messy cards to a structure everyone agrees on.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-white border border-[#ECE6D9] p-7 hover:shadow-[0_20px_50px_-20px_rgba(23,21,18,0.15)] transition-shadow"
          >
            <span className="w-10 h-10 rounded-xl bg-[#F1E4D8] flex items-center justify-center mb-5">
              <span className="material-symbols-outlined text-[20px] text-[#B5652F]">{f.icon}</span>
            </span>
            <h3 className="text-[18px] font-bold text-[#171512] mb-1.5">{f.title}</h3>
            <p className="text-[14px] text-[#4A4540] leading-relaxed mb-5">{f.desc}</p>
            <div className="rounded-xl bg-[#FFFDF9] border border-[#ECE6D9] p-4">{f.preview}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
