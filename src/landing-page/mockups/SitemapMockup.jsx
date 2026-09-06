import React from 'react';
import { WindowChrome, NodeChip } from './primitives';
import './SitemapMockup.css';

// Same virtual canvas, node set, and layout as HeroMockup — this is the
// same homepage-redesign sitemap, just shown as its own full-width
// screenshot rather than the hero's condensed side-by-side view.
const W = 600;
const H = 400;

const nodes = [
  { id: 'home', icon: 'home', title: 'Homepage', sub: 'index.html', x: 110, y: 200, accent: true },
  { id: 'products', icon: 'inventory_2', title: 'Products', sub: '/products', x: 290, y: 100 },
  { id: 'solutions', icon: 'widgets', title: 'Solutions', sub: '/solutions', x: 290, y: 200 },
  { id: 'about', icon: 'info', title: 'About', sub: '/about', x: 290, y: 300 },
  { id: 'pricing', icon: 'sell', title: 'Pricing', sub: '/products/pricing', x: 470, y: 50 },
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

// Every branch from home runs fully accented out to its third-column leaf —
// matches the highlighted path in the hero screenshot.
const ACCENT_EDGES = new Set([
  'home-products',
  'home-solutions',
  'home-about',
  'products-pricing',
  'products-enterprise',
  'solutions-cases',
  'about-contact',
]);

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

const SitemapMockup = ({ className = '', light = false }) => (
  <WindowChrome
    label="Sitemap · Homepage Redesign"
    className={className}
    light={light}
    right={
      <div className={`sm-pages-badge ${light ? 'is-light' : ''}`}>
        <span className="material-symbols-outlined sm-pages-badge-icon">layers</span>
        8 pages
      </div>
    }
  >
    <div className={`sm-canvas ${light ? 'is-light' : ''}`} style={{ aspectRatio: `${W} / ${H}` }}>
      <div className={`sm-toolbar ${light ? 'is-light' : ''}`}>
        {['undo', 'redo'].map((icon) => (
          <span key={icon} className={`material-symbols-outlined sm-toolbar-icon ${light ? 'is-light' : ''}`}>
            {icon}
          </span>
        ))}
        <span className={`sm-toolbar-divider ${light ? 'is-light' : ''}`} />
        <span className={`material-symbols-outlined sm-toolbar-icon ${light ? 'is-light' : ''}`}>remove</span>
        <span className={`sm-toolbar-pct ${light ? 'is-light' : ''}`}>100%</span>
        <span className={`material-symbols-outlined sm-toolbar-icon ${light ? 'is-light' : ''}`}>add</span>
        <span className={`sm-toolbar-divider ${light ? 'is-light' : ''}`} />
        <span className={`material-symbols-outlined sm-toolbar-icon ${light ? 'is-light' : ''}`}>add_box</span>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="sm-svg" preserveAspectRatio="none">
        {edges.map(([from, to]) => {
          const accented = ACCENT_EDGES.has(`${from}-${to}`);
          return (
            <path
              key={`${from}-${to}`}
              d={pathFor(from, to)}
              fill="none"
              stroke={accented ? '#7161EF' : light ? '#E4E4E7' : 'rgba(255,255,255,0.18)'}
              strokeOpacity={accented ? 0.5 : 1}
              strokeWidth={2}
            />
          );
        })}
      </svg>
      {nodes.map((n) => (
        <NodeChip
          key={n.id}
          icon={n.icon}
          title={n.title}
          sub={n.sub}
          accent={n.accent}
          light={light}
          style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}
        />
      ))}
    </div>
  </WindowChrome>
);

export default SitemapMockup;
