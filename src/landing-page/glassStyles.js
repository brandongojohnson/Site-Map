// Shared glassmorphic surface treatments: translucent white + backdrop blur
// + a light border to catch the edge, instead of solid opaque cards. Dark
// variants swap the tint to translucent white-on-dark rather than a second
// palette, so the same glass "material" reads in both themes.
export const GLASS_PANEL =
  'bg-white/55 dark:bg-white/[0.06] backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_-12px_rgba(23,21,18,0.18)] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]';

export const GLASS_PANEL_STRONG =
  'bg-white/75 dark:bg-white/[0.09] backdrop-blur-2xl border border-white/70 dark:border-white/15 shadow-[0_8px_32px_-12px_rgba(23,21,18,0.18)] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]';

export const GLASS_PILL = 'bg-white/60 dark:bg-white/[0.08] backdrop-blur-md border border-white/60 dark:border-white/10';

// Opaque, exactly matching the page background, rather than truly
// transparent — some embedded webviews (e.g. VS Code's Simple Browser)
// don't reliably composite `background: transparent` behind a sticky
// element and fall back to an opaque white canvas instead. A solid color
// that matches the page is visually identical to "no background" but isn't
// at the mercy of that compositing quirk.
export const GLASS_NAV_TOP = 'bg-[#F5F5F6] dark:bg-[#121016] border-b border-transparent';

export const GLASS_NAV_SCROLLED =
  'bg-white/50 dark:bg-[#121016]/70 backdrop-blur-xl border-b border-white/60 dark:border-white/10 shadow-[0_1px_0_rgba(23,21,18,0.04)]';
