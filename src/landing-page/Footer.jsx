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
  <footer id="footer" className="border-t border-[#E4E4E7] dark:border-white/10 bg-white dark:bg-[#18181D] pt-24 pb-14">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-12 mb-14">
        <div>
          <a href="#top" className="inline-block text-[17px] font-bold tracking-tight text-[#18181B] dark:text-[#F5F3F0] mb-4">
            Sortly
          </a>
          <p className="text-[14px] font-normal text-[#86868C] dark:text-[#9891A8] leading-relaxed max-w-xs">
            Card sorting and sitemap design for teams who'd rather agree on structure once, in
            one place.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[12px] font-semibold uppercase tracking-widest text-[#18181B] dark:text-[#F5F3F0] mb-4">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#top" className="text-[14px] font-normal text-[#86868C] dark:text-[#9891A8] hover:text-[#18181B] dark:hover:text-[#F5F3F0] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E4E4E7] dark:border-white/10">
        <p className="text-[13px] font-normal text-[#9C9CA3] dark:text-[#6B6578]">© {new Date().getFullYear()} Sortly, Inc. All rights reserved.</p>
        <div className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href="#top"
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-[#F5F5F6] dark:bg-[#121016] border border-[#E4E4E7] dark:border-white/10 flex items-center justify-center text-[#86868C] dark:text-[#9891A8] hover:text-[#18181B] dark:hover:text-[#F5F3F0] hover:border-[#C7C7CC] dark:hover:border-white/25 transition-colors"
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
