import React from 'react';

// Shared chrome + primitives so every product mockup on the marketing page
// reads as one consistent "screenshot", not four unrelated illustrations.

export const WindowChrome = ({ label, right, children, className = '' }) => (
  <div className={`rounded-2xl bg-white border border-[#ECE6D9] overflow-hidden ${className}`}>
    <div className="flex items-center justify-between px-4 py-3 border-b border-[#ECE6D9] bg-[#FFFDF9]">
      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E2D6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E2D6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E7E2D6]" />
        </div>
        <span className="text-[11px] font-medium text-[#8C8577]">{label}</span>
      </div>
      {right}
    </div>
    {children}
  </div>
);

export const StatusDot = ({ tone = 'accent' }) => (
  <span
    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
      tone === 'accent' ? 'bg-[#B5652F]' : tone === 'muted' ? 'bg-[#D8D2C4]' : 'bg-[#171512]'
    }`}
  />
);

// A node card for the sitemap canvas, positioned absolutely by the caller.
export const NodeChip = ({ icon, title, sub, style, accent = false }) => (
  <div
    className={`absolute -translate-x-1/2 -translate-y-1/2 w-[132px] rounded-xl border bg-white px-3 py-2.5 shadow-[0_8px_20px_-8px_rgba(23,21,18,0.15)] ${
      accent ? 'border-[#B5652F]/40' : 'border-[#ECE6D9]'
    }`}
    style={style}
  >
    <div className="flex items-center gap-1.5 mb-1">
      <span
        className={`material-symbols-outlined text-[13px] ${accent ? 'text-[#B5652F]' : 'text-[#8C8577]'}`}
      >
        {icon}
      </span>
      <span className="text-[11px] font-semibold text-[#171512] truncate">{title}</span>
    </div>
    <div className="flex items-center gap-1">
      <StatusDot tone={accent ? 'accent' : 'muted'} />
      <span className="text-[9px] text-[#B0AA9C] truncate">{sub}</span>
    </div>
  </div>
);

// A draggable-looking card chip for the card-sort board.
export const CardChip = ({ label, faded = false }) => (
  <div
    className={`flex items-center gap-1.5 rounded-lg border bg-white px-2.5 py-2 text-[11px] font-medium ${
      faded ? 'border-dashed border-[#E7E2D6] text-[#B0AA9C]' : 'border-[#ECE6D9] text-[#171512]'
    }`}
  >
    <span className="material-symbols-outlined text-[12px] text-[#D8D2C4]">drag_indicator</span>
    <span className="truncate">{label}</span>
  </div>
);

export const GroupColumn = ({ title, count, children }) => (
  <div className="rounded-lg border border-dashed border-[#E7E2D6] bg-[#FFFDF9] p-2.5 flex-1 min-w-0">
    <div className="flex items-center justify-between mb-2">
      <span className="text-[10px] font-bold text-[#171512] truncate">{title}</span>
      <span className="text-[9px] font-semibold text-[#B0AA9C]">{count}</span>
    </div>
    <div className="space-y-1.5">{children}</div>
  </div>
);
