import React from 'react';
import { WindowChrome, NodeChip, CardChip, GroupColumn } from './primitives';

const W = 440;
const H = 360;

const nodes = [
  { id: 'home', icon: 'home', title: 'Homepage', sub: 'index.html', x: 60, y: 190, accent: true },
  { id: 'products', icon: 'inventory_2', title: 'Products', sub: '/products', x: 250, y: 100 },
  { id: 'solutions', icon: 'widgets', title: 'Solutions', sub: '/solutions', x: 250, y: 190 },
  { id: 'about', icon: 'info', title: 'About', sub: '/about', x: 250, y: 280 },
];

const edges = [
  ['home', 'products'],
  ['home', 'solutions'],
  ['home', 'about'],
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
// with a card-sort board as a side panel, inside one window frame.
const HeroMockup = ({ className = '' }) => (
  <WindowChrome
    label="Sortly · Homepage Redesign"
    className={className}
    right={
      <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-[#B0AA9C]">
        <span className="material-symbols-outlined text-[15px]">groups</span>
        4 collaborators
      </div>
    }
  >
    <div className="flex flex-col md:flex-row">
      <div className="relative flex-1 min-w-0" style={{ aspectRatio: `${W} / ${H}`, background: '#FFFDF9' }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {edges.map(([from, to]) => (
            <path key={`${from}-${to}`} d={pathFor(from, to)} fill="none" stroke="#E7E2D6" strokeWidth={2} />
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

      <div className="w-full md:w-[240px] flex-shrink-0 border-t md:border-t-0 md:border-l border-[#ECE6D9] bg-white p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8577]">
            Card Sort
          </span>
          <span className="text-[9px] font-semibold text-[#B0AA9C]">7/9</span>
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
