import React from 'react';
import './primitives.css';

// Shared chrome + primitives so every product mockup on the marketing page
// reads as one consistent "screenshot", not four unrelated illustrations.
// Dark is the default (matches the product's own dark UI and the page it's
// shown on); the hero screenshot alone opts into `light` to stand out as a
// bright focal point against the dark hero background.

// Glassmorphic frame: translucent + blurred rather than solid opaque, so the
// "screenshot" reads as a frosted panel. `accent` tints it with the brand
// shade — used for the hero screenshot so it reads as on-brand.
export const WindowChrome = ({ label, right, children, className = '', accent = false, light = false }) => (
  <div className={`wc-frame ${light ? 'is-light' : ''} ${accent ? 'is-accent' : ''} ${className}`}>
    <div className={`wc-titlebar ${light ? 'is-light' : ''} ${accent ? 'is-accent' : ''}`}>
      <div className="wc-titlebar-left">
        <div className="wc-dots">
          <span className={`wc-dot ${light ? 'is-light' : ''} ${accent ? 'is-accent-dot' : ''}`} />
          <span className={`wc-dot ${light ? 'is-light' : ''}`} />
          <span className={`wc-dot ${light ? 'is-light' : ''}`} />
        </div>
        <span className={`wc-label ${light ? 'is-light' : ''}`}>{label}</span>
      </div>
      {right}
    </div>
    {children}
  </div>
);

export const StatusDot = ({ tone = 'accent', light = false }) => (
  <span className={`status-dot tone-${tone} ${light ? 'is-light' : ''}`} />
);

// A node card for the sitemap canvas, positioned absolutely by the caller.
export const NodeChip = ({ icon, title, sub, style, accent = false, light = false, className = '', titleClassName = '' }) => (
  <div className={`node-chip ${light ? 'is-light' : ''} ${accent ? 'is-accent' : ''} ${className}`} style={style}>
    <div className="node-chip-row1">
      <span className={`material-symbols-outlined node-chip-icon ${light ? 'is-light' : ''} ${accent ? 'is-accent' : ''}`}>
        {icon}
      </span>
      <span className={`node-chip-title ${light ? 'is-light' : ''} ${titleClassName}`}>{title}</span>
    </div>
    <div className="node-chip-row2">
      <StatusDot tone={accent ? 'accent' : 'muted'} light={light} />
      <span className={`node-chip-sub ${light ? 'is-light' : ''}`}>{sub}</span>
    </div>
  </div>
);

// A draggable-looking card chip for the card-sort board.
export const CardChip = ({ label, faded = false, light = false }) => (
  <div className={`card-chip ${light ? 'is-light' : ''} ${faded ? 'is-faded' : ''}`}>
    <span className={`material-symbols-outlined card-chip-icon ${light ? 'is-light' : ''}`}>drag_indicator</span>
    <span className="card-chip-label">{label}</span>
  </div>
);

export const GroupColumn = ({ title, count, children, light = false }) => (
  <div className={`group-col ${light ? 'is-light' : ''}`}>
    <div className="group-col-header">
      <span className={`group-col-title ${light ? 'is-light' : ''}`}>{title}</span>
      <span className={`group-col-count ${light ? 'is-light' : ''}`}>{count}</span>
    </div>
    <div className="group-col-children">{children}</div>
  </div>
);
