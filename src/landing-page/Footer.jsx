import React from 'react';
import './Footer.css';

const COLUMNS = [
  {
    title: 'Platform',
    links: ['Card Sort', 'Sitemap Builder', 'Insights Dashboard', 'Integrations', 'Pricing'],
  },
  {
    title: 'Resources',
    links: ['Guides', 'Templates', 'Blog', 'Help Center', 'API Docs'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'],
  },
];

const SOCIALS = [
  { label: 'X (Twitter)', icon: 'alternate_email' },
  { label: 'LinkedIn', icon: 'work' },
  { label: 'GitHub', icon: 'code' },
  { label: 'YouTube', icon: 'play_circle' },
];

const Footer = () => (
  <footer id="footer" className="landing-footer">
    <div className="landing-footer-inner">
      <div className="footer-grid">
        <div>
          <a href="#top" className="footer-brand-link">
            Sortly
          </a>
          <p className="footer-brand-desc">
            Card sorting and sitemap design for teams who'd rather agree on structure once, in
            one place.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="footer-col-title">{col.title}</h4>
            <ul className="footer-col-links">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#top" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
