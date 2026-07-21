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
  <footer id="footer" className="border-t border-[#ECE6D9] pt-16 pb-10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-12 mb-14">
        <div>
          <a href="#top" className="flex items-center gap-2.5 mb-4">
            <span className="w-8 h-8 rounded-xl bg-[#171512] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">hub</span>
            </span>
            <span className="text-[17px] font-extrabold tracking-tight text-[#171512]">Sortly</span>
          </a>
          <p className="text-[14px] text-[#8C8577] leading-relaxed max-w-xs">
            Card sorting and sitemap design for teams who'd rather agree on structure once, in
            one place.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#171512] mb-4">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#top" className="text-[14px] text-[#8C8577] hover:text-[#171512] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#ECE6D9]">
        <p className="text-[13px] text-[#B0AA9C]">© {new Date().getFullYear()} Sortly, Inc. All rights reserved.</p>
        <div className="flex items-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href="#top"
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#ECE6D9] flex items-center justify-center text-[#8C8577] hover:text-[#171512] hover:border-[#D8D2C4] transition-colors"
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
