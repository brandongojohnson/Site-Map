// Shape/transition only — no color classes, so callers never have to
// override a color utility with another color utility (fragile under
// Tailwind's build-order-dependent cascade when two classes target the same
// property). Always add color variants on top of PILL_BASE, never on top of
// PILL_PRIMARY/PILL_OUTLINE.
export const PILL_BASE = 'rounded-full font-semibold transition-all duration-200 active:scale-95';

// The primary pill inverts (dark-on-light / light-on-dark) so it stays the
// visually dominant control in either theme, rather than fading into a dark page.
export const PILL_PRIMARY = `${PILL_BASE} bg-[#18181B] dark:bg-[#F5F3F0] text-white dark:text-[#121016] hover:opacity-90`;

export const PILL_OUTLINE = `${PILL_BASE} border-[1.5px] border-[#18181B]/15 dark:border-white/20 text-[#18181B] dark:text-[#F5F3F0] hover:bg-[#18181B]/5 dark:hover:bg-white/10`;

// Inverse variants for use on dark surfaces (e.g. the final CTA band).
export const PILL_PRIMARY_INVERSE = `${PILL_BASE} bg-white text-[#18181B] hover:opacity-90`;

export const PILL_OUTLINE_INVERSE = `${PILL_BASE} border-[1.5px] border-white/25 text-white hover:bg-white/10`;
