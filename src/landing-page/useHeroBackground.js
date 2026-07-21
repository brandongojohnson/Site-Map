import { useState, useEffect } from 'react';

const STORAGE_KEY = 'sortly-hero-bg';

// Shape: null (default aurora), { type: 'preset', value: <css gradient> }, or
// { type: 'image', src, fit, posX, posY, opacity } — the extra fields only
// mean something for images (object-fit/object-position/opacity are
// properties of a rendered <img>, not of a CSS gradient).
const read = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const useHeroBackground = () => {
  const [bg, setBg] = useState(read);

  useEffect(() => {
    if (bg) localStorage.setItem(STORAGE_KEY, JSON.stringify(bg));
    else localStorage.removeItem(STORAGE_KEY);
  }, [bg]);

  return [bg, setBg];
};
