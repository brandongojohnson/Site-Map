import { useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

// undefined while the initial auth state is resolving, null when signed out.
// Sign-in uses a full-page redirect rather than a popup: recent Chrome
// versions apply a Cross-Origin-Opener-Policy that makes signInWithPopup
// falsely report the popup as closed by the user the instant it opens.
export const useAuth = () => {
  const [user, setUser] = useState(undefined);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    getRedirectResult(auth).catch((err) => {
      console.error('Google redirect sign-in failed:', err);
      setAuthError('Sign-in failed. Please try again.');
    });
    return onAuthStateChanged(auth, setUser);
  }, []);

  return { user, authError, clearAuthError: () => setAuthError(null) };
};

export const signInWithGoogle = () => signInWithRedirect(auth, googleProvider);
export const signOutUser = () => signOut(auth);
