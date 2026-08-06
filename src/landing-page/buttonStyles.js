// Shape/transition only — no color classes, so callers never have to
// override a color utility with another color utility (fragile under
// Tailwind's build-order-dependent cascade when two classes target the same
// property). Always add color variants on top of PILL_BASE, never on top of
// PILL_PRIMARY/PILL_OUTLINE.
export const PILL_BASE = 'rounded-full font-semibold transition-all duration-200 active:scale-95';

// Light mode: the brand purple used across the rest of the app (dashboard,
// card sort). Dark mode (the original design): a bright pill that reads as
// the obvious next action against the near-black page.
export const PILL_PRIMARY = `${PILL_BASE} bg-[#7161EF] text-white hover:opacity-90 dark:bg-[#F5F3F0] dark:text-[#131313] dark:hover:opacity-90`;

export const PILL_OUTLINE = `${PILL_BASE} border-[1.5px] border-black/15 text-[#131313] hover:bg-black/5 dark:border-white/20 dark:text-[#F5F3F0] dark:hover:bg-white/10`;
