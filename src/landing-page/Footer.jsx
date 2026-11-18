import React from 'react';
import './Footer.css';

// No Platform/Resources/Legal link columns here — those pointed at pages
// that don't exist yet (they all fell back to "#top"), which read as
// broken/misleading navigation. Re-add once there are real destinations.
const SOCIALS = [
  { label: 'X (Twitter)', icon: 'alternate_email' },
  { label: 'LinkedIn', icon: 'work' },
  { label: 'GitHub', icon: 'code' },
  { label: 'YouTube', icon: 'play_circle' },
];

const Footer = () => (
  <footer id="footer" className="landing-footer">
    <div className="landing-footer-inner">
      <div className="footer-brand">
        <a href="#top" className="footer-brand-link">
          Sortly
        </a>
        <p className="footer-brand-desc">
          Card sorting and sitemap design for teams who'd rather agree on structure once, in
          one place.
        </p>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© {new Date().getFullYear()} Sortly, Inc. All rights reserved.</p>
        <div className="footer-socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href="#top" aria-label={s.label} className="footer-social-btn">
              <span className="material-symbols-outlined footer-social-icon">{s.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
