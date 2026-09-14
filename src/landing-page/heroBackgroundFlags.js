// Shared flags describing what the Hero's background is currently showing.
// A flat/off-white (light) or flat-dark (dark) default, or an image/preset
// override the admin picked via HeroBackgroundPicker.
export const getHeroBackgroundFlags = (heroBg, theme) => {
  const isImage = heroBg?.type === 'image';
  const isAnimated = heroBg?.type === 'animated';
  // A CSS-gradient preset needs a `value` to actually paint anything — this
  // also guards against stale/unrecognized shapes left in the shared
  // Firebase setting from since-removed background options (e.g. an old
  // `{ type: 'galaxy' }` record), which would otherwise render as nothing.
  const isPreset = Boolean(heroBg) && !isImage && !isAnimated && Boolean(heroBg.value);
  const hasNoOverride = !isImage && !isAnimated && !isPreset;
  // No admin override: each theme gets its own default. Light mode's
  // default is the flat off-white background (see Hero.css); dark mode's
  // default is the reactbits.dev "Gradient Waves" raymarched shader.
  const isLightGradient = hasNoOverride && theme === 'light';
  const isDarkGradient = hasNoOverride && theme === 'dark';
  return { isImage, isAnimated, isPreset, isLightGradient, isDarkGradient };
};
