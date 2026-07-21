import React from 'react';
import { WindowChrome, NodeChip } from './primitives';

// Virtual canvas is 640x380; node centers below are in that space, then
// expressed as percentages so the whole thing scales with its container.
const W = 640;
const H = 380;

const nodes = [
  { id: 'home', icon: 'home', title: 'Homepage', sub: 'index.html', x: 90, y: 190, accent: true },
  { id: 'products', icon: 'inventory_2', title: 'Products', sub: '/products', x: 320, y: 95 },
  { id: 'solutions', icon: 'widgets', title: 'Solutions', sub: '/solutions', x: 320, y: 190 },
  { id: 'about', icon: 'info', title: 'About', sub: '/about', x: 320, y: 285 },
  { id: 'enterprise', icon: 'business', title: 'Enterprise', sub: '/solutions/ent', x: 550, y: 60 },
  { id: 'pricing', icon: 'sell', title: 'Pricing', sub: '/products/pricing', x: 550, y: 125 },
  { id: 'cases', icon: 'article', title: 'Case Studies', sub: '/solutions/cases', x: 550, y: 220 },
];

const edges = [
  ['home', 'products'],
  ['home', 'solutions'],
  ['home', 'about'],
  ['products', 'enterprise'],
  ['products', 'pricing'],
  ['solutions', 'cases'],
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

const SitemapMockup = ({ className = '' }) => (
  <WindowChrome
    label="Sitemap · Homepage Redesign"
    className={className}
    right={
      <div className="flex items-center gap-1.5 text-[10px] text-[#B0AA9C]">
        <span className="material-symbols-outlined text-[13px]">layers</span>
        7 pages
      </div>
    }
  >
    <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}`, background: '#FFFDF9' }}>
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
            stroke="#E7E2D6"
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
  </WindowChrome>
);

export default SitemapMockup;
