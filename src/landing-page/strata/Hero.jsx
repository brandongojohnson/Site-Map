import React from 'react';
import StrataStartMenu from '../StrataStartMenu';
import HeroSitemapDemo from '../StrataHeroDemo';

// Hero: headline, subheadline, start/demo buttons and the animated sitemap mockup.
export default function Hero({ onStart }) {
  return (
    <section id="product" className="scroll-mt-28 relative w-full pt-12 md:pt-16 pb-20 px-6 lg:px-12 flex flex-col items-center">
    {/* Apple-Pro Typography with Sheen Gradient */}
    <h1 className="text-center text-[32px] sm:text-[54px] md:text-[65px] lg:text-[68px] font-normal tracking-[-0.035em] max-w-4xl mx-auto mb-6 leading-[1.05]">
    <span className="text-white">Turn complexity</span><br />
    <span className="text-white">into clarity.</span>
    </h1>
    <p className="text-[15px] md:text-[17px] text-white text-center max-w-2xl mx-auto mb-10 leading-[22.5px] font-normal">
          Plan site structure, stress-test mental models in spatial depth, and ship an architecture your entire team agrees on.
        </p>
    {/* CTAs */}
    <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-24 z-10">
    <StrataStartMenu align="left" onSelect={onStart} className="h-11 px-7 rounded-full bg-white text-black font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all hover:scale-[1.02]">
    <span>Start for free</span>
    </StrataStartMenu>
    <a className="h-11 px-6 rounded-full glass-card hover:bg-white/10 text-white font-medium text-[14px] flex items-center justify-center gap-2 transition-all border border-white/20" href="#contact">
    <span className="material-symbols-outlined text-[18px] text-[#2997ff]">play_circle</span>
    <span>Book a demo</span>
    </a>
    </div>
    {/* SPATIAL COMPUTING WINDOW FRAME */}
    <div className="w-full max-w-[1220px] rounded-3xl glass-card border border-white/20 overflow-hidden relative backdrop-blur-3xl">
    {/* Window Chrome */}
    <div className="h-12 px-5 bg-white/[0.04] border-b border-white/10 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
    <div className="flex items-center gap-1.5">
    <span className="w-3 h-3 rounded-full bg-white/20"></span>
    <span className="w-3 h-3 rounded-full bg-white/20"></span>
    <span className="w-3 h-3 rounded-full bg-white/20"></span>
    </div>
    <span className="h-4 w-px bg-white/10 mx-1"></span>
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-[#2997ff] text-[18px]">view_in_ar</span>
    <span className="text-[13px] font-semibold text-zinc-100">Acme_Global_IA_v4.spatial</span>
    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">SYNCED 60FPS</span>
    </div>
    </div>
    {/* Center Tools Pill */}
    <div className="hidden lg:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10 backdrop-blur-md">
    <button className="px-3 py-1 rounded-full text-white bg-[#0071e3] text-[12px] font-medium flex items-center gap-1.5">
    <span className="material-symbols-outlined text-[15px]">add_box</span>
    <span>Add Node</span>
    </button>
    <button className="px-3 py-1 rounded-full text-zinc-400 hover:text-white text-[12px] font-medium flex items-center gap-1.5 transition-colors">
    <span className="material-symbols-outlined text-[15px]">auto_fix_high</span>
    <span>Auto-Layout</span>
    </button>
    <button className="px-3 py-1 rounded-full text-zinc-400 hover:text-white text-[12px] font-medium flex items-center gap-1.5 transition-colors">
    <span className="material-symbols-outlined text-[15px]">sync_alt</span>
    <span>Card Sort Sync</span>
    </button>
    <span className="h-3 w-px bg-white/10 mx-1"></span>
    <span className="font-mono text-[11px] text-zinc-400 px-2">100%</span>
    </div>
    {/* Collaborators */}
    <div className="flex items-center gap-3">
    <div className="flex items-center -space-x-1.5">
    <div className="w-7 h-7 rounded-full bg-[#0071e3] border-2 border-black flex items-center justify-center text-[10px] font-bold text-white" title="Sarah K.">SK</div>
    <div className="w-7 h-7 rounded-full bg-amber-500 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white" title="Alex M.">AM</div>
    <div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white" title="David P.">DP</div>
    <div className="w-7 h-7 rounded-full bg-white/10 border-2 border-black flex items-center justify-center text-[10px] font-semibold text-zinc-300">+4</div>
    </div>
    <button className="h-7 px-3 rounded-full bg-white text-black text-[12px] font-semibold flex items-center gap-1 hover:bg-zinc-200 transition-all">
    <span className="material-symbols-outlined text-[14px]">share</span>
    <span className="hidden sm:inline">Share</span>
    </button>
    </div>
    </div>
    <HeroSitemapDemo />
    </div>
    </section>
  );
}
