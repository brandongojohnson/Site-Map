import React, { useState, useEffect } from 'react';
import '../landing.css';

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="wrap nav__inner">
          <div className="nav__logo">Sitemap Builder</div>

          <div className="nav__links">
            {['Projects', 'Templates', 'Archive'].map((label) => (
              <a key={label} href="#" className="nav__link">{label}</a>
            ))}
          </div>

          <div className="nav__actions">
            <button className="icon nav__icon-btn">settings</button>
            <button className="icon nav__icon-btn">help</button>
            <div className="nav__avatar">
              <img
                alt="User profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDK7d1moCj-0c7pWjqc4vKLuOEI4s7kkSdRLUAiI_3zalV7eKjKK9VyVfpWvZVhdjmN3jLPqICwodtfw5iyDwa58rzpUyZl0UEv1cXpmndQ4rStG3dMKcG7QPpZG3BpP9axeVVk5OwRSBCv8P7si-Z77WNnG01msHFzUSpWWh6VkgI8bSwWh0-DK8tNNfSsI9LyZYwKRAQC5fRNXtpPUI7brVUr9w3WdqFHL1Hrg4HBU1epUAxtkhEpwxc1UHQuohPVVL2cZuMJpA"
              />
            </div>
          </div>

          <button className="nav__burger icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.2)', zIndex: 40 }}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className={`nav__drawer${menuOpen ? ' nav__drawer--open' : ''}`}>
        <div className="nav__drawer-inner">
          {['Projects', 'Templates', 'Archive'].map((label) => (
            <a key={label} href="#" className="nav__link nav__drawer-link">{label}</a>
          ))}
          <div className="nav__drawer-divider" />
          <button className="nav__drawer-action"><span className="icon">settings</span> Settings</button>
          <button className="nav__drawer-action"><span className="icon">help</span> Help</button>
        </div>
      </div>
    </>
  );
};

export default TopNav;
