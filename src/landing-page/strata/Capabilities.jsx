import React from 'react';

// Spatial Capabilities: the six-card feature grid.
export default function Capabilities() {
  return (
    <section id="features" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="flex flex-col items-center text-center mb-16">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-3">
            [ Spatial Capabilities ]
          </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">
            The complete suite for information architecture
          </h2>
    </div>
    {/* Bento 6-Card Grid with Glass Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* 1: Card Sorting */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <div className="w-10 h-10 flex items-center justify-start text-[#2997ff]">
    <span className="material-symbols-outlined text-[28px]">view_column</span>
    </div>
    <span className="font-mono text-[10px] text-zinc-400 uppercase">Open / Closed</span>
    </div>
    <h3 className="text-lg text-white font-semibold mb-1.5">Card Sorting</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">Discover mental models by having users group topics into spatial clusters with live matrix synthesis.</p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-3 space-y-2">
    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
    <span>Stack: Settings</span>
    <span className="text-[#2997ff]">94% Consensus</span>
    </div>
    <div className="space-y-1.5">
    <div className="bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10 flex justify-between text-[11px] text-white">
    <span>Billing History</span>
    <span className="font-mono text-[10px] text-zinc-400">46 sorts</span>
    </div>
    <div className="bg-[#0071e3]/20 px-2.5 py-1.5 rounded-lg border border-[#2997ff]/40 flex justify-between text-[11px] text-[#2997ff]">
    <span>SSO &amp; Security</span>
    <span className="font-mono text-[10px]">Active</span>
    </div>
    </div>
    </div>
    </div>
    {/* 2: Tree Testing */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <div className="w-10 h-10 flex items-center justify-start text-[#2997ff]">
    <span className="material-symbols-outlined text-[28px]">alt_route</span>
    </div>
    <span className="font-mono text-[10px] text-[#2997ff] bg-[#0071e3]/20 px-2 py-0.5 rounded-full">Findability</span>
    </div>
    <h3 className="text-lg text-white font-semibold mb-1.5">Tree Testing</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">Validate proposed hierarchy with zero graphic noise. Measure directness and task completion rates instantly.</p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-3.5 space-y-2">
    <div className="flex justify-between text-[11px] font-mono text-zinc-300">
    <span>Direct Success</span>
    <span className="text-white font-bold">92.4%</span>
    </div>
    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden flex">
    <div className="bg-[#2997ff] h-full w-[92%]"></div>
    <div className="bg-amber-500 h-full w-[8%]"></div>
    </div>
    <div className="flex justify-between text-[10px] font-mono text-zinc-400 pt-1">
    <span>Avg: 11.4s</span>
    <span>Backtracks: 0.1</span>
    </div>
    </div>
    </div>
    {/* 3: Algorithmic Synthesis */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <div className="w-10 h-10 flex items-center justify-start text-[#2997ff]">
    <span className="material-symbols-outlined text-[28px]">hub</span>
    </div>
    <span className="font-mono text-[10px] text-zinc-400 uppercase">1-Click Synthesis</span>
    </div>
    <h3 className="text-lg text-white font-semibold mb-1.5">Algorithmic Synthesis</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">Convert research dendrograms directly into production-ready sitemap structures without manual drafting.</p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-3 text-center">
    <div className="font-mono text-[10px] text-zinc-400 mb-2">Cluster Matrix → Spatial Tree</div>
    <div className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px] text-[#2997ff] truncate">
                /security-compliance [Generated]
              </div>
    </div>
    </div>
    {/* 4: Multiplayer */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <div className="w-10 h-10 flex items-center justify-start text-[#2997ff]">
    <span className="material-symbols-outlined text-[28px]">groups</span>
    </div>
    <span className="font-mono text-[10px] text-zinc-400 uppercase">Multiplayer</span>
    </div>
    <h3 className="text-lg text-white font-semibold mb-1.5">Real-Time Collaboration</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">Work simultaneously across design, product, and engineering with spatial presence and node comments.</p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-3 space-y-2">
    <div className="flex items-center gap-2">
    <div className="w-5 h-5 rounded-full bg-[#0071e3] text-[9px] font-bold text-white flex items-center justify-center">SK</div>
    <div className="text-[11px] text-zinc-300 truncate">“Should /changelog live under /resources?”</div>
    </div>
    <div className="text-[10px] font-mono text-emerald-400">Resolved by Marcus • 2m ago</div>
    </div>
    </div>
    {/* 5: Branching & Versioning */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <div className="w-10 h-10 flex items-center justify-start text-[#2997ff]">
    <span className="material-symbols-outlined text-[28px]">fork_right</span>
    </div>
    <span className="font-mono text-[10px] text-zinc-400 uppercase">Git-Style Diff</span>
    </div>
    <h3 className="text-lg text-white font-semibold mb-1.5">Branching &amp; Version History</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">Stage complex site migrations on isolated branches without disrupting canonical production sitemaps.</p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-3 font-mono text-[11px] space-y-1">
    <div className="flex justify-between text-zinc-200">
    <span>branch: v3-revamp</span>
    <span className="text-[#2997ff]">+14 / -3</span>
    </div>
    <div className="text-emerald-400 text-[10px]">+ /solutions/spatial</div>
    </div>
    </div>
    {/* 6: Dev Handoff */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <div className="w-10 h-10 flex items-center justify-start text-[#2997ff]">
    <span className="material-symbols-outlined text-[28px]">data_object</span>
    </div>
    <span className="font-mono text-[10px] text-zinc-400 uppercase">Export</span>
    </div>
    <h3 className="text-lg text-white font-semibold mb-1.5">Developer Handoff</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">Instant compilation into XML sitemaps, Next.js App Router scaffolds, and Figma token maps.</p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-3 font-mono text-[10px] text-zinc-400 leading-tight">
              &lt;<span className="text-[#2997ff]">url</span>&gt;<br />
                &lt;<span className="text-white">loc</span>&gt;https://acme.co/spatial&lt;/<span className="text-white">loc</span>&gt;<br />
              &lt;/<span className="text-[#2997ff]">url</span>&gt;
            </div>
    </div>
    </div>
    </section>
  );
}
