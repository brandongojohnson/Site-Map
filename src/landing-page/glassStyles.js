// Flat, hairline-bordered surfaces on a near-black page — no blur, no
// translucency stacking. Matches an institutional-research aesthetic more
// than a glassmorphic one: cards read as quiet, bordered rectangles, not
// frosted panels.
export const SURFACE_CARD = 'bg-white/[0.03] border border-white/10';

export const SURFACE_CARD_HOVER = 'hover:bg-white/[0.05] hover:border-white/15';

export const SURFACE_PANEL = 'bg-white/[0.04] border border-white/10';

export const SURFACE_PILL = 'bg-white/[0.05] border border-white/10';

export const GLASS_PANEL = SURFACE_PANEL;
export const GLASS_PILL = SURFACE_PILL;

// A visibly darker, frosted floating surface — for menus/dropdowns that
// need to read as elevated above the page rather than blending into it.
export const DROPDOWN_GLASS = 'bg-[#0A0A0C]/85 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]';

export const GLASS_NAV_TOP = 'bg-transparent border-b border-transparent';

export const GLASS_NAV_SCROLLED =
  'bg-[#131313]/80 backdrop-blur-xl border-b border-white/10';
