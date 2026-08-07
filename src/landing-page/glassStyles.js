// Flat, hairline-bordered surfaces — light mode reads as quiet white/gray
// cards on the page background; dark mode (the original design) keeps the
// near-black, no-blur institutional-research aesthetic.
export const SURFACE_CARD = 'bg-[#FAFAFA] border border-black/10 dark:bg-white/[0.03] dark:border-white/10';

export const SURFACE_CARD_HOVER =
  'hover:bg-white hover:border-[#7161EF]/30 dark:hover:bg-white/[0.05] dark:hover:border-white/15';

export const SURFACE_PANEL = 'bg-white border border-black/10 dark:bg-white/[0.04] dark:border-white/10';

export const SURFACE_PILL = 'bg-[#F3F3F4] border border-black/10 dark:bg-white/[0.05] dark:border-white/10';

export const GLASS_PANEL = 'bg-black/40 backdrop-blur-md border border-white/20 dark:bg-black/50 dark:border-white/20';
export const GLASS_PILL = SURFACE_PILL;

// A visibly elevated floating surface — for menus/dropdowns that need to
// read as above the page rather than blending into it.
export const DROPDOWN_GLASS =
  'bg-white/95 backdrop-blur-2xl border border-black/10 shadow-[0_20px_50px_-15px_rgba(23,21,18,0.25)] dark:bg-[#0A0A0C]/85 dark:border-white/10 dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]';

export const GLASS_NAV_TOP = 'bg-transparent border-b border-transparent';

export const GLASS_NAV_SCROLLED =
  'bg-white/80 backdrop-blur-xl border-b border-black/10 dark:bg-[#131313]/50 dark:border-white/10';
