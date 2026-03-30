import React from 'react';

const LeftSidebar = ({ onNewPage }) => (
  <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f3f3f4] flex flex-col p-6 space-y-8 z-40 pt-16">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
        <span className="material-symbols-outlined">layers</span>
      </div>
      <div>
        <h2 className="text-xl font-black text-black leading-tight">Project Alpha</h2>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Sitemap Editor</p>
      </div>
    </div>

    <button
      onClick={onNewPage}
      className="w-full py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all mb-8"
    >
      New Page
    </button>

    <nav className="flex-grow space-y-2">
      {[
        { icon: 'dashboard', label: 'Dashboard' },
        { icon: 'layers', label: 'Pages', active: true },
        { icon: 'folder_open', label: 'Assets' },
        { icon: 'history', label: 'History' },
        { icon: 'ios_share', label: 'Export' },
      ].map(({ icon, label, active }) => (
        <a
          key={label}
          href="#"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm uppercase tracking-widest transition-all ${
            active ? 'bg-white text-black font-bold shadow-sm' : 'text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1'
          }`}
        >
          <span className="material-symbols-outlined">{icon}</span>
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
