// Shape/transition only — no color classes, so callers never have to
// override a color utility with another color utility (fragile under
// Tailwind's build-order-dependent cascade when two classes target the same
// property). Always add color variants on top of PILL_BASE, never on top of
// PILL_PRIMARY/PILL_OUTLINE.
export const PILL_BASE = 'rounded-full font-semibold transition-all duration-200 active:scale-95';

export const PILL_PRIMARY = `${PILL_BASE} bg-[#171512] text-white hover:opacity-90`;

export const PILL_OUTLINE = `${PILL_BASE} border-[1.5px] border-[#171512]/15 text-[#171512] hover:bg-[#171512]/5`;

// Inverse variants for use on dark surfaces (e.g. the final CTA band).
export const PILL_PRIMARY_INVERSE = `${PILL_BASE} bg-white text-[#171512] hover:opacity-90`;

export const PILL_OUTLINE_INVERSE = `${PILL_BASE} border-[1.5px] border-white/25 text-white hover:bg-white/10`;
