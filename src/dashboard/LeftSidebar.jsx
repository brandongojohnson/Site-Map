import React from 'react';
import SortlyLogo from '../shared/components/SortlyLogo';

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Dashboard', view: 'dashboard' },
  { icon: 'layers', label: 'Pages', view: 'editor' },
  { icon: 'grid_view', label: 'Templates', view: 'templates' },
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
    <div className="mb-6">
      <SortlyLogo subtitle={subtitle} iconClassName="text-base text-black" textClassName="text-black" />
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
  </aside>
);

export default LeftSidebar;
