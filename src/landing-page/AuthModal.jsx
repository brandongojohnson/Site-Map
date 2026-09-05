import React, { useState, useEffect } from 'react';
import { useAuth, signInWithGoogle } from '../card-sort/useAuth';
import './AuthModal.css';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.84 2.08-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z" />
    <path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33z" />
    <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z" />
  </svg>
);

// A single modal handles both login and signup — Firebase's Google provider
// doesn't distinguish the two operations, so the tabs are framing for the
// visitor's intent, not two different auth flows.
const AuthModal = ({ onClose }) => {
  const [mode, setMode] = useState('login');
  const [signing, setSigning] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Popup sign-in doesn't navigate the page away, so nothing else closes
  // this modal automatically once the user is actually signed in.
  useEffect(() => {
    if (user) onClose();
  }, [user, onClose]);

  const handleGoogleSignIn = async () => {
    setSigning(true);
    setError(null);
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error('Google sign-in failed:', err);
      setError('Sign-in failed. Please try again.');
    } finally {
      setSigning(false);
    }
  };

  return (
    <div className="auth-modal-overlay-wrap">
      <button aria-label="Close" onClick={onClose} className="auth-modal-overlay" />
      <div className="auth-modal-card">
        <button onClick={onClose} aria-label="Close" className="auth-modal-close">
          <span className="material-symbols-outlined auth-modal-close-icon">close</span>
        </button>

        <div className="auth-modal-tabs">
          <button
            onClick={() => setMode('login')}
            className={`auth-modal-tab ${mode === 'login' ? 'is-active' : ''}`}
          >
            Log in
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`auth-modal-tab ${mode === 'signup' ? 'is-active' : ''}`}
          >
            Sign up
          </button>
        </div>

        <h2 className="auth-modal-title">
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="auth-modal-subtitle">
          {mode === 'login'
            ? 'Log in to access your studies and sitemaps.'
            : 'Start free — no credit card required.'}
        </p>

        {error && <p className="auth-modal-error">{error}</p>}

        <button onClick={handleGoogleSignIn} disabled={signing} className="auth-modal-google-btn">
          <GoogleIcon />
          {signing ? 'Signing in…' : 'Continue with Google'}
        </button>

        <p className="auth-modal-legal">
          By continuing, you agree to Sortly's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
