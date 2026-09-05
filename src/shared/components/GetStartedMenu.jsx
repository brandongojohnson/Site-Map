import React, { useState } from 'react';
import './GetStartedMenu.css';

// Same destinations as the landing page's Get started dropdown — lets
// someone already inside one section (Card Sort, Tree Test, or Sitemap)
// jump straight to another without backing out to the dashboard first.
const START_OPTIONS = [
  { target: 'editor', icon: 'account_tree', label: 'Sitemap', desc: 'Start building a sitemap' },
  { target: 'cardsort', icon: 'style', label: 'Card Sort', desc: 'Start a sorting study' },
  { target: 'treetest', icon: 'alt_route', label: 'Tree Test', desc: 'Start a tree test' },
];

const GetStartedMenu = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="get-started-menu">
      <button onClick={() => setOpen((o) => !o)} className="get-started-menu-btn">
        Get started
        <span className={`material-symbols-outlined get-started-menu-btn-icon ${open ? 'is-open' : ''}`}>
          expand_more
        </span>
      </button>

      {open && (
        <>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="get-started-menu-overlay"
          />
          <div className="get-started-menu-panel">
            {START_OPTIONS.map((opt) => (
              <button
                key={opt.target}
                onClick={() => {
                  setOpen(false);
                  onNavigate(opt.target);
                }}
                className="get-started-menu-item"
              >
                <span className="get-started-menu-item-icon">
                  <span className="material-symbols-outlined">{opt.icon}</span>
                </span>
                <span>
                  <span className="get-started-menu-item-label">{opt.label}</span>
                  <span className="get-started-menu-item-desc">{opt.desc}</span>
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
