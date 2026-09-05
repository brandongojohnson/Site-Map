import React, { useState } from 'react';
import { useAuth, signOutUser } from '../../card-sort/useAuth';
import AuthModal from '../../landing-page/AuthModal';
import './AccountBadge.css';

// Light-theme counterpart to the account badge in the landing page's Nav —
// same avatar/dropdown behavior, restyled for the white app chrome instead
// of the landing page's dark glass.
const AccountBadge = () => {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  if (user === undefined) return null;

  if (!user) {
    return (
      <>
        <button onClick={() => setAuthOpen(true)} className="account-badge-login">
          Log in
        </button>
        {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
      </>
    );
  }

  return (
    <div className="account-badge">
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Account menu"
        className="account-badge-avatar-btn"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="" className="account-badge-avatar-img" referrerPolicy="no-referrer" />
        ) : (
          <span className="account-badge-avatar-fallback">
            {(user.displayName || user.email || '?')[0].toUpperCase()}
          </span>
        )}
      </button>

      {menuOpen && (
        <>
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="account-badge-menu-overlay"
          />
          <div className="account-badge-menu">
            <div className="account-badge-menu-header">
              <p className="account-badge-menu-name">{user.displayName || 'Signed in'}</p>
              <p className="account-badge-menu-email">{user.email}</p>
            </div>
            <button
              onClick={() => {
                setMenuOpen(false);
                signOutUser();
              }}
              className="account-badge-logout-btn"
            >
              <span className="material-symbols-outlined account-badge-logout-icon">logout</span>
              Log out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountBadge;
