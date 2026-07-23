import { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

// undefined while the initial auth state is resolving, null when signed out.
export const useAuth = () => {
  const [user, setUser] = useState(undefined);
  const [authError, setAuthError] = useState(null);

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return { user, authError, clearAuthError: () => setAuthError(null) };
};

// Popup, not redirect: a prior attempt at signInWithRedirect resolved
// getRedirectResult to null even after a full, successful Google sign-in —
// the session wasn't surviving the redirect handoff back to the app in this
// environment. Popup keeps the app's own page alive throughout, so there's
// no handoff for the session to get lost in.
//
// Trade-off: Chrome's Cross-Origin-Opener-Policy can make signInWithPopup
// report auth/popup-closed-by-user even when the popup actually completed
// sign-in successfully. Rather than surface that as an error immediately,
// give onAuthStateChanged a moment to catch up and only treat it as a real
// failure if there's still no signed-in user after that.
export const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    if (err.code === 'auth/popup-closed-by-user' || err.code === 'auth/cancelled-popup-request') {
      await new Promise((resolve) => setTimeout(resolve, 700));
      if (auth.currentUser) return;
    }
    throw err;
  }
};

export const signOutUser = () => signOut(auth);
