import React from 'react';

// "Map your structure visually": copy plus the Spatial-Layout Engine card.
export default function SpatialEngine() {
  return (
    <section className="w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
    <div className="lg:col-span-5 flex flex-col items-start">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-5">
              [ Spatial Engine ]
            </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.03em] text-white leading-[1.12] mb-5">
              Map your structure <span className="text-[#2997ff]">visually</span> in infinite canvas
            </h2>
    <p className="text-[15px] text-[#a1a1aa] leading-relaxed mb-8">
              Traditional flowcharting tools flatten information architecture. Sortly treats hierarchy as multi-dimensional spatial systems with live URL computing, breadcrumb routing, and zero click-depth loss.
            </p>
    <div className="space-y-3.5 w-full">
    <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-card glass-card-hover">
    <div className="w-9 h-9 rounded-xl bg-[#0071e3]/20 border border-[#2997ff]/30 flex items-center justify-center text-[#2997ff] shrink-0">
    <span className="material-symbols-outlined text-[19px]">account_tree</span>
    </div>
    <div>
    <h3 className="text-[14px] text-white font-semibold">Automatic Sub-Tree Rebalancing</h3>
    <p className="text-zinc-400 text-[13px] mt-0.5">Drag an entire category branch with 200 child nodes. Parent routing recalculates instantaneously.</p>
    </div>
    </div>
    <div className="flex items-start gap-3.5 p-4 rounded-2xl glass-card glass-card-hover">
    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
    <span className="material-symbols-outlined text-[19px]">rule</span>
    </div>
    <div>
    <h3 className="text-[14px] text-white font-semibold">Zero-Orphan Governance</h3>
    <p className="text-zinc-400 text-[13px] mt-0.5">Automated linting highlights orphan pages, circular references, and SEO depth penalties.</p>
    </div>
    </div>
    </div>
    </div>
    {/* Right Glass Graphic */}
    <div className="lg:col-span-7 lg:self-stretch w-full glass-card rounded-3xl border border-white/15 p-6 lg:p-8 relative overflow-hidden flex flex-col">
    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
    <div className="flex items-center gap-2">
    <span className="font-mono text-[12px] text-white font-semibold">Spatial-Layout Engine v2.4</span>
    <span className="font-mono text-[10px] text-[#2997ff] bg-[#0071e3]/20 border border-[#2997ff]/40 px-2 py-0.5 rounded-full">Snapping Active</span>
    </div>
    <span className="font-mono text-[11px] text-emerald-400">Depth: PASSED</span>
    </div>
    <div className="bg-black/60 rounded-2xl border border-white/10 p-6 flex flex-col items-center justify-center flex-1">
    <div className="w-60 glass-card rounded-xl border border-[#2997ff] p-3 text-center">
    <span className="font-mono text-[9px] text-[#2997ff] uppercase font-bold">Taxonomy Group</span>
    <div className="text-[13px] text-white font-bold">/workspace/settings</div>
    <div className="font-mono text-[10px] text-zinc-400 mt-0.5">Direct Child Nodes: 3</div>
    </div>
    <svg className="w-full max-w-[420px] h-16 my-1" fill="none" viewBox="0 0 420 64">
    <path d="M 210 0 C 210 32, 70 32, 70 64" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M 210 0 C 210 32, 210 32, 210 64" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round"></path>
    <path d="M 210 0 C 210 32, 350 32, 350 64" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round"></path>
    <circle cx="210" cy="0" fill="#a1a1aa" r="3"></circle>
    <circle cx="70" cy="64" fill="#a1a1aa" r="3"></circle>
    <circle cx="210" cy="64" fill="#a1a1aa" r="3"></circle>
    <circle cx="350" cy="64" fill="#a1a1aa" r="3"></circle>
    </svg>
    <div className="grid grid-cols-3 gap-3 w-full">
    <div className="glass-card rounded-xl p-3 text-center border border-white/10">
    <div className="font-mono text-[9px] text-zinc-400">SLUG</div>
    <div className="text-[12px] font-bold text-white">/billing</div>
    <div className="font-mono text-[10px] text-[#2997ff] mt-1">98% match</div>
    </div>
    <div className="glass-card rounded-xl p-3 text-center border border-[#2997ff]">
    <div className="font-mono text-[9px] text-[#2997ff] font-bold">REORDERED</div>
    <div className="text-[12px] font-bold text-white">/security-sso</div>
    <div className="font-mono text-[10px] text-[#2997ff] mt-1">Auto-routed</div>
    </div>
    <div className="glass-card rounded-xl p-3 text-center border border-white/10">
    <div className="font-mono text-[9px] text-zinc-400">SLUG</div>
    <div className="text-[12px] font-bold text-white">/api-tokens</div>
    <div className="font-mono text-[10px] text-[#2997ff] mt-1">92% match</div>
    </div>
    </div>
    <div className="w-full mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
    <span className="flex items-center gap-1.5">
    <span className="material-symbols-outlined text-[14px] text-[#2997ff]">terminal</span>
    <span>Rebalanced 3 nodes in 4.2ms</span>
    </span>
    <span>UUID: #ia-992-spatial</span>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
