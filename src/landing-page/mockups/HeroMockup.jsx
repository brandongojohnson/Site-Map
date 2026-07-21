import React from 'react';
import { WindowChrome, NodeChip, CardChip, GroupColumn } from './primitives';

const MENU_ITEMS = [
  { icon: 'dashboard' },
  { icon: 'layers', active: true },
  { icon: 'folder_open' },
  { icon: 'history' },
  { icon: 'ios_share' },
];

// Baked-in margin: nodes are positioned absolutely, so CSS padding on the
// canvas wouldn't inset them (absolute positioning uses the padding box as
// its containing block) — the clearance has to live in the coordinate space
// itself, keeping every node well clear of the frame edges.
const W = 600;
const H = 400;

const nodes = [
  { id: 'home', icon: 'home', title: 'Homepage', sub: 'index.html', x: 110, y: 200, accent: true },
  { id: 'products', icon: 'inventory_2', title: 'Products', sub: '/products', x: 290, y: 100 },
  { id: 'solutions', icon: 'widgets', title: 'Solutions', sub: '/solutions', x: 290, y: 200 },
  { id: 'about', icon: 'info', title: 'About', sub: '/about', x: 290, y: 300 },
  { id: 'pricing', icon: 'sell', title: 'Pricing', sub: '/products/pricing', x: 470, y: 65 },
  { id: 'enterprise', icon: 'business', title: 'Enterprise', sub: '/products/ent', x: 470, y: 135 },
  { id: 'cases', icon: 'article', title: 'Case Studies', sub: '/solutions/cases', x: 470, y: 225 },
  { id: 'contact', icon: 'mail', title: 'Contact', sub: '/about/contact', x: 470, y: 315 },
];

const edges = [
  ['home', 'products'],
  ['home', 'solutions'],
  ['home', 'about'],
  ['products', 'pricing'],
  ['products', 'enterprise'],
  ['solutions', 'cases'],
  ['about', 'contact'],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

const pathFor = (fromId, toId) => {
  const a = byId[fromId];
  const b = byId[toId];
  const x1 = a.x + 66;
  const y1 = a.y;
  const x2 = b.x - 66;
  const y2 = b.y;
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
};

// The single "floating dashboard" screenshot for the hero: a sitemap canvas
// with a card-sort board as a side panel, inside one window frame, tinted
// with the brand accent so it reads as on-brand at a glance.
const HeroMockup = ({ className = '' }) => (
  <WindowChrome
    label="Sortly · Homepage Redesign"
    accent
    className={className}
    right={
      <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#9C9CA3]">
        <span className="material-symbols-outlined text-[15px]">groups</span>
        4 collaborators
      </div>
    }
  >
    <div className="flex flex-col md:flex-row">
      <div className="hidden md:flex flex-col items-center gap-1.5 w-14 flex-shrink-0 border-r border-white/40 bg-white/30 backdrop-blur-sm py-4">
        {MENU_ITEMS.map((item, i) => (
          <span
            key={i}
            className={`material-symbols-outlined w-9 h-9 rounded-lg flex items-center justify-center text-[18px] ${
              item.active ? 'bg-[#18181B] text-white' : 'text-[#86868C]'
            }`}
          >
            {item.icon}
          </span>
        ))}
      </div>

      <div
        className="relative flex-1 min-w-0 bg-white/40 backdrop-blur-sm"
        style={{ aspectRatio: `${W} / ${H}` }}
      >
        <div className="absolute top-3 left-3 z-10 flex items-center gap-0.5 rounded-full bg-white/80 backdrop-blur-md border border-white/60 px-1.5 py-1 shadow-[0_4px_14px_-6px_rgba(23,21,18,0.2)]">
          {['undo', 'redo'].map((icon) => (
            <span key={icon} className="material-symbols-outlined w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-[#47474D]">
              {icon}
            </span>
          ))}
          <span className="w-px h-4 bg-[#E4E4E7] mx-0.5" />
          <span className="material-symbols-outlined w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-[#47474D]">
            remove
          </span>
          <span className="text-[9px] font-semibold text-[#47474D] px-0.5">100%</span>
          <span className="material-symbols-outlined w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-[#47474D]">
            add
          </span>
          <span className="w-px h-4 bg-[#E4E4E7] mx-0.5" />
          <span className="material-symbols-outlined w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-[#47474D]">
            add_box
          </span>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {edges.map(([from, to]) => (
            <path
              key={`${from}-${to}`}
              d={pathFor(from, to)}
              fill="none"
              stroke={from === 'home' ? '#7161EF' : '#E4E4E7'}
              strokeOpacity={from === 'home' ? 0.4 : 1}
              strokeWidth={2}
            />
          ))}
        </svg>
        {nodes.map((n) => (
          <NodeChip
            key={n.id}
            icon={n.icon}
            title={n.title}
            sub={n.sub}
            accent={n.accent}
            style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}
          />
        ))}
      </div>

      <div className="w-full md:w-[240px] flex-shrink-0 border-t md:border-t-0 md:border-l border-white/40 bg-white/40 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#86868C]">
            Card Sort
          </span>
          <div className="flex items-center gap-2">
            <div className="w-10 h-1.5 rounded-full bg-[#E4E4E7] overflow-hidden">
              <div className="h-full w-4/5 bg-[#7161EF]" />
            </div>
            <span className="text-[9px] font-semibold text-[#9C9CA3]">7/9</span>
          </div>
        </div>
        <div className="space-y-2.5">
          <GroupColumn title="Navigation" count={3}>
            <CardChip label="Products" />
            <CardChip label="Solutions" />
            <CardChip label="Pricing" />
          </GroupColumn>
          <GroupColumn title="Footer" count={2}>
            <CardChip label="About" />
            <CardChip label="Contact" />
          </GroupColumn>
        </div>
      </div>
    </div>
  </WindowChrome>
);

export default HeroMockup;
