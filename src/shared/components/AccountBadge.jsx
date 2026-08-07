import React, { useState } from 'react';
import { useAuth, signOutUser } from '../../card-sort/useAuth';
import AuthModal from '../../landing-page/AuthModal';

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
        <button
          onClick={() => setAuthOpen(true)}
          className="text-[13px] font-medium text-[#474747] hover:text-black transition-colors"
        >
          Log in
        </button>
        {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
      </>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Account menu"
        className="w-9 h-9 rounded-full overflow-hidden border border-[#e6e6e9] hover:border-[#7161EF]/40 transition-colors flex-shrink-0"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          <span className="w-full h-full flex items-center justify-center bg-[#EEECFD] text-[13px] font-semibold text-[#7161EF]">
            {(user.displayName || user.email || '?')[0].toUpperCase()}
          </span>
        )}
      </button>

      {menuOpen && (
        <>
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />
          <div className="absolute right-0 top-[calc(100%+16px)] z-50 w-56 rounded-2xl p-2 bg-white border border-[#e6e6e9] shadow-[0_20px_50px_-15px_rgba(23,21,18,0.25)]">
            <div className="px-3 py-2.5 mb-1 border-b border-[#e6e6e9]">
              <p className="text-[13px] font-semibold text-black truncate">
                {user.displayName || 'Signed in'}
              </p>
              <p className="text-[11px] font-normal text-[#8a8a8a] truncate">{user.email}</p>
            </div>
            <button
              onClick={() => {
                setMenuOpen(false);
                signOutUser();
              }}
              className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold text-black hover:bg-[#f3f3f4] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#8a8a8a]">logout</span>
              Log out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountBadge;
