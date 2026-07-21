import React from 'react';

// Shared chrome + primitives so every product mockup on the marketing page
// reads as one consistent "screenshot", not four unrelated illustrations.

// Glassmorphic frame: translucent + blurred rather than solid opaque, so the
// "screenshot" reads as a frosted panel. `accent` tints it with the brand
// shade — used for the hero screenshot so it reads as on-brand.
export const WindowChrome = ({ label, right, children, className = '', accent = false }) => (
  <div
    className={`rounded-2xl bg-white/60 backdrop-blur-xl border overflow-hidden shadow-[0_8px_32px_-12px_rgba(23,21,18,0.18)] ${
      accent ? 'border-[#7161EF]/30' : 'border-white/60'
    } ${className}`}
  >
    <div
      className={`flex items-center justify-between px-4 py-3 border-b bg-white/30 backdrop-blur-md ${
        accent ? 'border-[#7161EF]/15' : 'border-white/40'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${accent ? 'bg-[#7161EF]/50' : 'bg-[#E4E4E7]'}`} />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
        </div>
        <span className="text-[11px] font-medium text-[#86868C]">{label}</span>
      </div>
      {right}
    </div>
    {children}
  </div>
);

export const StatusDot = ({ tone = 'accent' }) => (
  <span
    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
      tone === 'accent' ? 'bg-[#7161EF]' : tone === 'muted' ? 'bg-[#C7C7CC]' : 'bg-[#18181B]'
    }`}
  />
);

// A node card for the sitemap canvas, positioned absolutely by the caller.
export const NodeChip = ({ icon, title, sub, style, accent = false }) => (
  <div
    className={`absolute -translate-x-1/2 -translate-y-1/2 w-[132px] rounded-xl border bg-white px-3 py-2.5 shadow-[0_8px_20px_-8px_rgba(23,21,18,0.15)] ${
      accent ? 'border-[#7161EF]/40' : 'border-[#E4E4E7]'
    }`}
    style={style}
  >
    <div className="flex items-center gap-1.5 mb-1">
      <span
        className={`material-symbols-outlined text-[13px] ${accent ? 'text-[#7161EF]' : 'text-[#86868C]'}`}
      >
        {icon}
      </span>
      <span className="text-[11px] font-semibold text-[#18181B] truncate">{title}</span>
    </div>
    <div className="flex items-center gap-1">
      <StatusDot tone={accent ? 'accent' : 'muted'} />
      <span className="text-[9px] text-[#9C9CA3] truncate">{sub}</span>
    </div>
  </div>
);

// A draggable-looking card chip for the card-sort board.
export const CardChip = ({ label, faded = false }) => (
  <div
    className={`flex items-center gap-1.5 rounded-lg border bg-white px-2.5 py-2 text-[11px] font-medium ${
      faded ? 'border-dashed border-[#E4E4E7] text-[#9C9CA3]' : 'border-[#E4E4E7] text-[#18181B]'
    }`}
  >
    <span className="material-symbols-outlined text-[12px] text-[#C7C7CC]">drag_indicator</span>
    <span className="truncate">{label}</span>
  </div>
);

export const GroupColumn = ({ title, count, children }) => (
  <div className="rounded-lg border border-dashed border-[#E4E4E7] bg-white/40 backdrop-blur-sm p-2.5 flex-1 min-w-0">
    <div className="flex items-center justify-between mb-2">
      <span className="text-[10px] font-bold text-[#18181B] truncate">{title}</span>
      <span className="text-[9px] font-semibold text-[#9C9CA3]">{count}</span>
    </div>
    <div className="space-y-1.5">{children}</div>
  </div>
);
