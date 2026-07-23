import React from 'react';

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Dashboard', view: 'dashboard' },
  { icon: 'layers', label: 'Pages', view: 'editor' },
  { icon: 'grid_view', label: 'Templates', view: 'templates' },
  { icon: 'style', label: 'Card Sort', view: 'cardsort' },
  { icon: 'ios_share', label: 'Export', action: 'export' },
];

const LeftSidebar = ({
  title = 'Sortly Studio',
  subtitle = 'Sitemap Studio',
  activeView,
  onNavigate = () => {},
  primaryLabel,
  onPrimary,
  hideDashboard = false,
  onExport,
}) => (
  <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f3f3f4] flex flex-col p-6 space-y-8 z-40">
    <div className="flex items-center gap-1.5 mb-6">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-black flex-shrink-0">
        <span className="material-symbols-outlined">layers</span>
      </div>
      <div className="min-w-0">
        <h2 className="text-lg font-black text-black leading-tight truncate">{title}</h2>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">{subtitle}</p>
      </div>
    </div>

    {primaryLabel && (
      <button
        onClick={onPrimary}
        className="w-full py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all mb-8"
      >
        {primaryLabel}
      </button>
    )}

    <nav className="flex-grow space-y-2">
      {NAV_ITEMS.filter((item) => !(hideDashboard && item.view === 'dashboard')).map(({ icon, label, view, action }) => {
        const active = view && view === activeView;
        const clickable = !!view || (action === 'export' && !!onExport);
        return (
          <a
            key={label}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (action === 'export') onExport?.();
              else if (view) onNavigate(view);
            }}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all ${
              active
                ? 'bg-white text-black font-bold shadow-sm'
                : clickable
                ? 'text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1'
                : 'text-[#a0a0a5] cursor-default'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">{icon}</span>
            <span>{label}</span>
          </a>
        );
      })}
    </nav>

    <div className="mt-auto pt-6 border-t border-[#c6c6c6]/15">
      <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-2.5 px-3 py-2 text-[#474747] hover:bg-[#e8e8e8] transition-all rounded-lg text-sm">
        <span className="material-symbols-outlined text-[18px]">account_circle</span>
        <span>Account</span>
      </a>
    </div>
  </aside>
);

export default LeftSidebar;
