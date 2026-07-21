import React from 'react';

const LeftSidebar = ({ onNewPage, onOpenCardSort }) => (
  <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f3f3f4] flex flex-col p-6 space-y-8 z-40">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white">
        <span className="material-symbols-outlined">layers</span>
      </div>
      <div>
        <h2 className="text-xl font-black text-black leading-tight">Project Alpha</h2>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Sitemap Editor</p>
      </div>
    </div>

    <button
      onClick={onNewPage}
      className="w-full py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all mb-8"
    >
      New Page
    </button>

    <nav className="flex-grow space-y-2">
      {[
        { icon: 'dashboard', label: 'Dashboard' },
        { icon: 'layers', label: 'Pages', active: true },
        { icon: 'style', label: 'Card Sort', onClick: onOpenCardSort },
        { icon: 'folder_open', label: 'Assets' },
        { icon: 'history', label: 'History' },
        { icon: 'ios_share', label: 'Export' },
      ].map(({ icon, label, active, onClick }) => (
        <a
          key={label}
          href="#"
          onClick={(e) => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all ${
            active ? 'bg-white text-black font-bold shadow-sm' : 'text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
          <span>{label}</span>
        </a>
      ))}
    </nav>

    <div className="mt-auto pt-6 border-t border-[#c6c6c6]/15">
      <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] transition-all rounded-lg text-sm uppercase tracking-widest">
        <span className="material-symbols-outlined">account_circle</span>
        <span>Account</span>
      </a>
    </div>
  </aside>
);

export default LeftSidebar;
