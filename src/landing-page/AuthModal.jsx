import React, { useState, useEffect } from 'react';
import { useAuth, signInWithGoogle } from '../card-sort/useAuth';

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-sm rounded-2xl bg-[#0A0A0C]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex items-center gap-1 mb-8 rounded-full bg-white/5 border border-white/10 p-1">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 rounded-full py-2 text-[13px] font-semibold transition-colors ${
              mode === 'login' ? 'bg-white text-[#131313]' : 'text-white/50 hover:text-white'
            }`}
          >
            Log in
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 rounded-full py-2 text-[13px] font-semibold transition-colors ${
              mode === 'signup' ? 'bg-white text-[#131313]' : 'text-white/50 hover:text-white'
            }`}
          >
            Sign up
          </button>
        </div>

        <h2 className="text-[20px] font-bold tracking-tight text-[#F5F3F0] mb-2">
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="text-[13px] font-normal text-white/50 mb-7 leading-relaxed">
          {mode === 'login'
            ? 'Log in to access your studies and sitemaps.'
            : 'Start free — no credit card required.'}
        </p>

        {error && (
          <p className="text-[12px] font-normal text-[#F58787] bg-[#F58787]/10 rounded-lg px-3 py-2.5 mb-4">
            {error}
          </p>
        )}

        <button
          onClick={handleGoogleSignIn}
          disabled={signing}
          className="w-full flex items-center justify-center gap-2.5 rounded-full bg-white text-[#131313] py-3 text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all disabled:opacity-60"
        >
          <GoogleIcon />
          {signing ? 'Signing in…' : 'Continue with Google'}
        </button>

        <p className="text-[11px] font-normal text-white/35 text-center mt-6 leading-relaxed">
          By continuing, you agree to Sortly's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
