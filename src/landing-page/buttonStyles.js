// Shape/transition only — no color classes, so callers never have to
// override a color utility with another color utility (fragile under
// Tailwind's build-order-dependent cascade when two classes target the same
// property). Always add color variants on top of PILL_BASE, never on top of
// PILL_PRIMARY/PILL_OUTLINE.
export const PILL_BASE = 'rounded-full font-semibold transition-all duration-200 active:scale-95';

// One dark page, one palette — no light-mode variant to invert against, so
// there's a single primary treatment: a bright pill that reads as the
// obvious next action against the near-black page.
export const PILL_PRIMARY = `${PILL_BASE} bg-[#F5F3F0] text-[#131313] hover:opacity-90`;

export const PILL_OUTLINE = `${PILL_BASE} border-[1.5px] border-white/20 text-[#F5F3F0] hover:bg-white/10`;
