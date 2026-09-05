import React from 'react';
import { WindowChrome, NodeChip, CardChip, GroupColumn } from './primitives';
import './HeroMockup.css';

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

// Every branch from home runs fully accented out to its third-column leaf,
// not just the first hop out of the highlighted node.
const ACCENT_EDGES = new Set([
  'home-products',
  'home-solutions',
  'home-about',
  'products-pricing',
  'products-enterprise',
  'solutions-cases',
  'about-contact',
]);

const curvePath = (a, b) => {
  const x1 = a.x + 66;
  const y1 = a.y;
  const x2 = b.x - 66;
  const y2 = b.y;
  const mx = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
};

const pathFor = (fromId, toId) => curvePath(byId[fromId], byId[toId]);

// The single "floating dashboard" screenshot for the hero: a sitemap canvas
// with a card-sort board as a side panel, inside one window frame, tinted
// with the brand accent so it reads as on-brand at a glance. Shown in light
// mode deliberately — a bright focal point against the dark hero, while the
// deep-dive screenshots further down stay dark to match the page.
const HeroMockup = ({ className = '' }) => (
  <WindowChrome
    label="Sortly · Homepage Redesign"
    accent
    light
    className={className}
    right={
      <div className="hero-mockup-collab">
        <span className="material-symbols-outlined hero-mockup-collab-icon">groups</span>
        4 collaborators
      </div>
    }
  >
    <div className="hero-mockup-body">
      <div className="hero-mockup-sidebar">
        {MENU_ITEMS.map((item, i) => (
          <span key={i} className={`material-symbols-outlined hero-mockup-menu-icon ${item.active ? 'is-active' : ''}`}>
            {item.icon}
          </span>
        ))}
      </div>

      <div className="hero-mockup-canvas" style={{ aspectRatio: `${W} / ${H}` }}>
        <div className="hero-mockup-toolbar">
          {['undo', 'redo'].map((icon) => (
            <span key={icon} className="material-symbols-outlined hero-mockup-toolbar-icon">
              {icon}
            </span>
          ))}
          <span className="hero-mockup-toolbar-divider" />
          <span className="material-symbols-outlined hero-mockup-toolbar-icon">remove</span>
          <span className="hero-mockup-zoom-pct">100%</span>
          <span className="material-symbols-outlined hero-mockup-toolbar-icon">add</span>
          <span className="hero-mockup-toolbar-divider" />
          <span className="material-symbols-outlined hero-mockup-toolbar-icon">add_box</span>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="hero-mockup-svg" preserveAspectRatio="none">
          {edges.map(([from, to]) => {
            const accented = ACCENT_EDGES.has(`${from}-${to}`);
            return (
              <path
                key={`${from}-${to}`}
                d={pathFor(from, to)}
                fill="none"
                stroke={accented ? '#7161EF' : '#E4E4E7'}
                strokeOpacity={accented ? 0.4 : 1}
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
            light
            style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}
          />
        ))}
      </div>

      <div className="hero-mockup-panel">
        <div className="hero-mockup-panel-header">
          <span className="hero-mockup-panel-title">Card Sort</span>
          <div className="hero-mockup-progress-row">
            <div className="hero-mockup-progress-track">
              <div className="hero-mockup-progress-fill" />
            </div>
            <span className="hero-mockup-progress-count">7/9</span>
          </div>
        </div>
        <div className="hero-mockup-groups">
          <GroupColumn title="Navigation" count={3} light>
            <CardChip label="Products" light />
            <CardChip label="Solutions" light />
            <CardChip label="Pricing" light />
          </GroupColumn>
          <GroupColumn title="Footer" count={2} light>
            <CardChip label="About" light />
            <CardChip label="Contact" light />
          </GroupColumn>
        </div>
      </div>
    </div>
  </WindowChrome>
);

export default HeroMockup;
