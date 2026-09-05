import './sharedStyles.css';

// Shape/transition only — no color rules, so callers never have to override
// one color class with another (see .pill-primary/.pill-outline in
// sharedStyles.css). Always add color variants on top of PILL_BASE, never on
// top of PILL_PRIMARY/PILL_OUTLINE.
export const PILL_BASE = 'pill-base';

// Light mode: the brand purple used across the rest of the app (dashboard,
// card sort). Dark mode (the original design): a bright pill that reads as
// the obvious next action against the near-black page.
export const PILL_PRIMARY = `${PILL_BASE} pill-primary`;

export const PILL_OUTLINE = `${PILL_BASE} pill-outline`;
