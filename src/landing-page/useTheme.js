// The landing page is light-only. Any previously saved 'dark' preference is
// discarded so returning visitors aren't stuck in it.
const STORAGE_KEY = 'sortly-landing-theme';

export const useTheme = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* storage unavailable — nothing to clear */
  }
  return ['light', () => {}];
};
