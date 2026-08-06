import { useState, useEffect } from 'react';

const STORAGE_KEY = 'sortly-landing-theme';

// Dark is the page's original, established look — light is the opt-in, so
// an unset preference falls back to dark rather than the browser's OS-level
// color scheme.
const read = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'light' ? 'light' : 'dark';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(read);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return [theme, toggleTheme];
};
