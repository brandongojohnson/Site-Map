import React from 'react';

export const Footer = () => {
  const links = {
    Product: ['Features', 'Pricing', 'Template Gallery', 'Updates'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API Reference', 'Community', 'Help'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  const socials = ['Twitter', 'GitHub', 'LinkedIn'];

  return (
    <footer className="bg-surface-lowest border-t border-border-light py-16 px-page-margin">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 pb-16 border-b border-border-light">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-on-primary font-serif font-bold text-sm">SB</span>
              </div>
              <span className="font-serif font-bold text-on-surface">Sitemap Builder</span>
            </div>
            <p className="text-label-md text-on-surface-variant">Build better site structures, together.</p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-sans font-medium text-on-surface mb-4 text-label-md">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-label-md text-on-surface-variant hover:text-tertiary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-text-muted">© 2024 Sitemap Builder. All rights reserved.</p>
          <div className="flex gap-8">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="text-label-sm text-on-surface-variant hover:text-tertiary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
