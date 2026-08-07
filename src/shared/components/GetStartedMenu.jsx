import React, { useState } from 'react';

// Same two destinations as the landing page's Get started dropdown — lets
// someone already inside one section (Card Sort or Sitemap) jump straight
// to the other without backing out to the dashboard first.
const START_OPTIONS = [
  { target: 'cardsort', icon: 'style', label: 'Card Sort', desc: 'Start a sorting study' },
  { target: 'editor', icon: 'account_tree', label: 'Sitemap', desc: 'Start building a sitemap' },
];

const GetStartedMenu = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#7161EF] text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
      >
        Get started
        <span className={`material-symbols-outlined text-[16px] transition-transform ${open ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {open && (
        <>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />
          <div className="absolute right-0 top-[calc(100%+16px)] z-50 w-64 rounded-2xl p-2 bg-white border border-[#e6e6e9] shadow-[0_20px_50px_-15px_rgba(23,21,18,0.25)]">
            {START_OPTIONS.map((opt) => (
              <button
                key={opt.target}
                onClick={() => {
                  setOpen(false);
                  onNavigate(opt.target);
                }}
                className="w-full flex items-start gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-[#f3f3f4] transition-colors"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#EEECFD]">
                  <span className="material-symbols-outlined text-[16px] text-[#7161EF]">{opt.icon}</span>
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-black">{opt.label}</span>
                  <span className="block text-[11px] font-normal text-[#8a8a8a]">{opt.desc}</span>
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GetStartedMenu;
