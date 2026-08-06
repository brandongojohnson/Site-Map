import React from 'react';

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
  <footer id="footer" className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#131313] pt-24 pb-14">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-12 mb-14">
        <div>
          <a href="#top" className="inline-block text-[17px] font-bold tracking-tight text-[#131313] dark:text-[#F5F3F0] mb-4">
            Sortly
          </a>
          <p className="text-[14px] font-normal text-black/45 dark:text-white/45 leading-relaxed max-w-xs">
            Card sorting and sitemap design for teams who'd rather agree on structure once, in
            one place.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[12px] font-semibold uppercase tracking-widest text-[#131313] dark:text-[#F5F3F0] mb-4">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#top" className="text-[14px] font-normal text-black/45 dark:text-white/45 hover:text-[#131313] dark:hover:text-[#F5F3F0] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-black/10 dark:border-white/10">
        <p className="text-[13px] font-normal text-black/35 dark:text-white/35">© {new Date().getFullYear()} Sortly, Inc. All rights reserved.</p>
        <div className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href="#top"
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-[#FAFAFA] border border-black/10 dark:bg-white/[0.03] dark:border-white/10 flex items-center justify-center text-black/45 dark:text-white/45 hover:text-[#131313] dark:hover:text-[#F5F3F0] hover:border-black/25 dark:hover:border-white/25 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">{s.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
