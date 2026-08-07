import React from 'react';

// Shared chrome + primitives so every product mockup on the marketing page
// reads as one consistent "screenshot", not four unrelated illustrations.
// Dark is the default (matches the product's own dark UI and the page it's
// shown on); the hero screenshot alone opts into `light` to stand out as a
// bright focal point against the dark hero background.

// Glassmorphic frame: translucent + blurred rather than solid opaque, so the
// "screenshot" reads as a frosted panel. `accent` tints it with the brand
// shade — used for the hero screenshot so it reads as on-brand.
export const WindowChrome = ({ label, right, children, className = '', accent = false, light = false }) => (
  <div
    className={`rounded-2xl backdrop-blur-xl border overflow-hidden ${
      light
        ? `bg-white/60 shadow-[0_8px_32px_-12px_rgba(23,21,18,0.18)] ${accent ? 'border-[#7161EF]/30' : 'border-white/60'}`
        : `bg-[#1C1C1F]/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] ${accent ? 'border-[#7161EF]/30' : 'border-white/10'}`
    } ${className}`}
  >
    <div
      className={`flex items-center justify-between px-4 py-3 border-b backdrop-blur-md ${
        light
          ? `bg-white/30 ${accent ? 'border-[#7161EF]/15' : 'border-white/40'}`
          : `bg-white/[0.03] ${accent ? 'border-[#7161EF]/15' : 'border-white/10'}`
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${accent ? 'bg-[#7161EF]/50' : light ? 'bg-[#E4E4E7]' : 'bg-white/15'}`} />
          <span className={`w-2.5 h-2.5 rounded-full ${light ? 'bg-[#E4E4E7]' : 'bg-white/15'}`} />
          <span className={`w-2.5 h-2.5 rounded-full ${light ? 'bg-[#E4E4E7]' : 'bg-white/15'}`} />
        </div>
        <span className={`text-[11px] font-medium ${light ? 'text-[#86868C]' : 'text-white/45'}`}>{label}</span>
      </div>
      {right}
    </div>
    {children}
  </div>
);

export const StatusDot = ({ tone = 'accent', light = false }) => (
  <span
    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
      tone === 'accent'
        ? 'bg-[#7161EF]'
        : tone === 'muted'
        ? light
          ? 'bg-[#C7C7CC]'
          : 'bg-white/25'
        : light
        ? 'bg-[#18181B]'
        : 'bg-[#F5F3F0]'
    }`}
  />
);

// A node card for the sitemap canvas, positioned absolutely by the caller.
export const NodeChip = ({ icon, title, sub, style, accent = false, light = false }) => (
  <div
    className={`absolute -translate-x-1/2 -translate-y-1/2 w-[132px] rounded-xl border px-3 py-2.5 ${
      light
        ? `bg-white shadow-[0_8px_20px_-8px_rgba(23,21,18,0.15)] ${accent ? 'border-[#7161EF]/40' : 'border-[#E4E4E7]'}`
        : `bg-[#232326] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.4)] ${accent ? 'border-[#7161EF]/40' : 'border-white/10'}`
    }`}
    style={style}
  >
    <div className="flex items-center gap-1.5 mb-1">
      <span
        className={`material-symbols-outlined text-[13px] ${
          accent ? 'text-[#7161EF]' : light ? 'text-[#86868C]' : 'text-white/45'
        }`}
      >
        {icon}
      </span>
      <span className={`text-[11px] font-semibold truncate ${light ? 'text-[#18181B]' : 'text-[#F5F3F0]'}`}>{title}</span>
    </div>
    <div className="flex items-center gap-1">
      <StatusDot tone={accent ? 'accent' : 'muted'} light={light} />
      <span className={`text-[9px] truncate ${light ? 'text-[#9C9CA3]' : 'text-white/35'}`}>{sub}</span>
    </div>
  </div>
);

// A draggable-looking card chip for the card-sort board.
export const CardChip = ({ label, faded = false, light = false }) => (
  <div
    className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[11px] font-medium ${
      light ? 'bg-white' : 'bg-[#232326]'
    } ${
      faded
        ? light
          ? 'border-dashed border-[#E4E4E7] text-[#9C9CA3]'
          : 'border-dashed border-white/15 text-white/35'
        : light
        ? 'border-[#E4E4E7] text-[#18181B]'
        : 'border-white/10 text-[#F5F3F0]'
    }`}
  >
    <span className={`material-symbols-outlined text-[12px] ${light ? 'text-[#C7C7CC]' : 'text-white/25'}`}>drag_indicator</span>
    <span className="truncate">{label}</span>
  </div>
);

export const GroupColumn = ({ title, count, children, light = false }) => (
  <div
    className={`rounded-lg border border-dashed backdrop-blur-sm p-2.5 flex-1 min-w-0 ${
      light ? 'border-[#E4E4E7] bg-white/40' : 'border-white/15 bg-white/[0.03]'
    }`}
  >
    <div className="flex items-center justify-between mb-2">
      <span className={`text-[10px] font-bold truncate ${light ? 'text-[#18181B]' : 'text-[#F5F3F0]'}`}>{title}</span>
      <span className={`text-[9px] font-semibold ${light ? 'text-[#9C9CA3]' : 'text-white/35'}`}>{count}</span>
    </div>
    <div className="space-y-1.5">{children}</div>
  </div>
);
