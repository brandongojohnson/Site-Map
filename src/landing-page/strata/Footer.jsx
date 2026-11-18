import React from 'react';

// Site footer.
export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 pt-16 pb-12 overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14 text-[13px]">
    <div className="col-span-2 lg:col-span-1">
    <div className="flex items-center gap-2.5 mb-4">
    <div className="w-6 h-6 rounded-full bg-[#0071e3] flex items-center justify-center">
    <span className="material-symbols-outlined text-[14px] text-white">blur_circular</span>
    </div>
    <span className="text-lg font-bold tracking-tight text-white">Sortly</span>
    </div>
    <p className="text-zinc-500 leading-relaxed mb-4 max-w-xs text-[12px]">
              The spatial information architecture and UX structural modeling environment for modern product teams.
            </p>
    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
    <span className="font-mono text-[10px] text-zinc-400">Spatial Engine Operational</span>
    </div>
    </div>
    <div>
    <h4 className="text-[12px] font-semibold text-zinc-200 uppercase tracking-wider mb-4">Product</h4>
    <ul className="space-y-2.5 text-zinc-400">
    <li className="hover:text-white cursor-pointer transition-colors">Sitemaps</li>
    <li className="hover:text-white cursor-pointer transition-colors">Card Sorting</li>
    <li className="hover:text-white cursor-pointer transition-colors">Tree Testing</li>
    <li className="hover:text-white cursor-pointer transition-colors">Spatial Canvas</li>
    <li className="hover:text-white cursor-pointer transition-colors">Multiplayer</li>
    </ul>
    </div>
    <div>
    <h4 className="text-[12px] font-semibold text-zinc-200 uppercase tracking-wider mb-4">Solutions</h4>
    <ul className="space-y-2.5 text-zinc-400">
    <li className="hover:text-white cursor-pointer transition-colors">SaaS IA</li>
    <li className="hover:text-white cursor-pointer transition-colors">E-commerce</li>
    <li className="hover:text-white cursor-pointer transition-colors">Docs Hubs</li>
    <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
    </ul>
    </div>
    <div>
    <h4 className="text-[12px] font-semibold text-zinc-200 uppercase tracking-wider mb-4">Resources</h4>
    <ul className="space-y-2.5 text-zinc-400">
    <li className="hover:text-white cursor-pointer transition-colors">IA Benchmark 2025</li>
    <li className="hover:text-white cursor-pointer transition-colors">Spatial Guidelines</li>
    <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
    <li className="hover:text-white cursor-pointer transition-colors">Changelog</li>
    </ul>
    </div>
    <div>
    <h4 className="text-[12px] font-semibold text-zinc-200 uppercase tracking-wider mb-4">Company</h4>
    <ul className="space-y-2.5 text-zinc-400">
    <li className="hover:text-white cursor-pointer transition-colors">About</li>
    <li className="hover:text-white cursor-pointer transition-colors">Customers</li>
    <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
    <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
    </ul>
    </div>
    </div>
    <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-zinc-500">
    <div>© 2025 Sortly. All rights reserved.</div>
    <div className="flex items-center gap-4 text-zinc-400">
    <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
    <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
    <span className="hover:text-white cursor-pointer transition-colors">Security</span>
    </div>
    </div>
    </div>
    </footer>
  );
}
