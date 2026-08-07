import { useState, useEffect, useCallback } from 'react';
import { ref, set, remove, onValue } from 'firebase/database';
import { db } from '../config/firebase';

const STORAGE_KEY = 'sortly-hero-bg';
const DB_PATH = 'siteSettings/heroBackground';

// Shape: null (default aurora), { type: 'preset', value: <css gradient> }, or
// { type: 'image', src, fit, posX, posY, opacity } — the extra fields only
// mean something for images (object-fit/object-position/opacity are
// properties of a rendered <img>, not of a CSS gradient).
const readCache = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const writeCache = (bg) => {
  if (bg) localStorage.setItem(STORAGE_KEY, JSON.stringify(bg));
  else localStorage.removeItem(STORAGE_KEY);
};

// The hero background is a shared, site-wide setting — whoever changes it
// changes it for every visitor, in every session, everywhere, not just
// their own browser. localStorage seeds the very first render instantly (so
// there's no flash of the default aurora while Firebase's first snapshot is
// still in flight) and stays updated as a local cache; Firebase Realtime
// Database is the actual source of truth, and the onValue subscription
// means any tab open elsewhere picks up a change live, without a refresh.
export const useHeroBackground = () => {
  const [bg, setBgState] = useState(readCache);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, DB_PATH), (snap) => {
      const remote = snap.exists() ? snap.val() : null;
      setBgState(remote);
      writeCache(remote);
    });
    return unsubscribe;
  }, []);

  const setBg = useCallback((next) => {
    setBgState(next);
    writeCache(next);
    if (next) {
      set(ref(db, DB_PATH), next).catch((err) => console.error('Failed to save hero background:', err));
    } else {
      remove(ref(db, DB_PATH)).catch((err) => console.error('Failed to reset hero background:', err));
    }
  }, []);

  return [bg, setBg];
};
