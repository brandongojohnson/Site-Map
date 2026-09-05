import React from 'react';
import SortlyLogo from '../shared/components/SortlyLogo';
import './LeftSidebar.css';

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Dashboard', view: 'dashboard' },
  { icon: 'layers', label: 'Pages', view: 'editor' },
  { icon: 'grid_view', label: 'Templates', view: 'templates' },
  { icon: 'upload_file', label: 'Import', view: 'import' },
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
  <aside className="left-sidebar">
    <div className="left-sidebar-logo">
      <SortlyLogo subtitle={subtitle} iconClassName="left-sidebar-logo-icon" textClassName="left-sidebar-logo-text" />
    </div>

    {primaryLabel && (
      <button onClick={onPrimary} className="left-sidebar-primary-btn">
        {primaryLabel}
      </button>
    )}

    <nav className="left-sidebar-nav">
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
            className={`left-sidebar-nav-item ${active ? 'is-active' : clickable ? 'is-clickable' : 'is-disabled'}`}
          >
            <span className="material-symbols-outlined left-sidebar-nav-item-icon">{icon}</span>
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  </aside>
);

export default LeftSidebar;
