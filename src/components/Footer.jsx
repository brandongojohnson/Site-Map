import React from 'react';

export const Footer = () => {
  const links = {
    Product: ['Features', 'Pricing', 'Templates', 'Security'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API', 'Community', 'Help Center'],
    Legal: ['Privacy', 'Terms', 'Cookies'],
  };

  const socials = ['Twitter', 'GitHub', 'LinkedIn'];

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="font-semibold text-white">Sitemap Builder</span>
            </div>
            <p className="text-sm">Build better sitemaps, faster.</p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2 text-sm">
                {items.map((item) => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Sitemap Builder. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {socials.map((social) => (
              <a key={social} href="#" className="text-sm hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
