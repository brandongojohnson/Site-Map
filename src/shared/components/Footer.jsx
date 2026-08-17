import React from 'react';

export const Footer = () => {
  const cols = [
    { heading: 'Product', items: ['Features', 'Pricing', 'Templates', 'Changelog'] },
    { heading: 'Company', items: ['About', 'Blog', 'Careers', 'Press'] },
    { heading: 'Resources', items: ['Docs', 'API', 'Community', 'Help'] },
    { heading: 'Legal', items: ['Privacy', 'Terms', 'Cookies'] },
  ];

  return (
    <footer className="border-t border-border-light bg-surface-lowest">
      {/* Top band — logo + tagline */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 flex flex-col sm:flex-row sm:items-start gap-10">
        <div className="flex-shrink-0 sm:w-56">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-on-primary font-serif font-bold text-xs">SB</span>
            </div>
            <span className="font-serif font-bold text-on-surface text-[17px]">Sitemap Builder</span>
          </div>
          <p className="font-sans text-[13px] text-text-muted leading-5">
            Visualize, collaborate, and ship better site structures.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
          {cols.map(({ heading, items }) => (
            <div key={heading}>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-normal text-text-muted mb-4">
                {heading}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-[13px] text-on-surface-variant hover:text-on-surface transition-colors no-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[12px] text-text-muted">
            © 2024 Sitemap Builder, Inc.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter / X', 'GitHub', 'LinkedIn'].map((s) => (
              <a
                key={s}
                href="#"
                className="font-sans text-[12px] text-text-muted hover:text-on-surface transition-colors no-underline"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
