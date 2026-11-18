import React from 'react';
import StrataStartMenu from '../StrataStartMenu';

// Closing call to action.
export default function FinalCTA({ onStart }) {
  return (
    <section className="w-full py-24 px-6 lg:px-12 relative">
    <div className="max-w-[1240px] mx-auto rounded-3xl glass-card p-10 md:p-20 text-center relative overflow-hidden border border-white/20">
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-6">
              Architectural Precision
            </div>
    <h2 className="text-3xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-[1.1]">
              Ready to build information architecture that <span className="text-[#2997ff]">actually works</span>?
            </h2>
    <p className="text-[16px] text-zinc-300 max-w-xl mb-10 leading-relaxed font-light">
              Stop debating site menus in chaotic spreadsheets. Model, test, and ship your next digital experience with research-backed consensus.
            </p>
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
    <StrataStartMenu align="left" onSelect={onStart} className="h-12 px-8 rounded-full bg-white hover:bg-zinc-200 text-black text-[14px] font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
    <span>Start for free</span>
    </StrataStartMenu>
    <a className="h-12 px-8 rounded-full glass-card hover:bg-white/10 border border-white/20 text-white text-[14px] font-medium flex items-center justify-center transition-colors" href="#contact">
                Book a 15-min demo
              </a>
    </div>
    <span className="font-mono text-[11px] text-zinc-500">
              No credit card required • Free tier includes full visual editor access
            </span>
    </div>
    </div>
    </section>
  );
}
