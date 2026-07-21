import { useState, useEffect } from 'react';

const STORAGE_KEY = 'sortly-hero-bg';

// Value is either null (default look), a data: URL (uploaded photo), or a
// CSS gradient string (one of the built-in presets) — Hero.jsx tells the two
// apart by checking for the "data:" prefix.
export const useHeroBackground = () => {
  const [bg, setBg] = useState(() => localStorage.getItem(STORAGE_KEY));

  useEffect(() => {
    if (bg) localStorage.setItem(STORAGE_KEY, bg);
    else localStorage.removeItem(STORAGE_KEY);
  }, [bg]);

  return [bg, setBg];
};
