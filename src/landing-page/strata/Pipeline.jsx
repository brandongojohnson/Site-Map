import React, { useState } from 'react';
import { TAB_ON, TAB_OFF } from './tabStyles';

// "From research to sitemap in three steps": Sort / Test / Ship tabs and panels.
export default function Pipeline() {
  const [step, setStep] = useState(1);

  return (
    <section id="how-it-works" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
    <div>
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-3">
              [ Pipeline ]
            </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.03em] text-white">
              From research to sitemap in <span className="text-[#2997ff]">three steps</span>
    </h2>
    </div>
    {/* Step Buttons */}
    <div className="flex items-center gap-1.5 glass-card p-1.5 rounded-full border border-white/10">
    <button className={step === 1 ? TAB_ON : TAB_OFF} onClick={() => setStep(1)}>
    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">category</span>
              01. Sort
            </button>
    <button className={step === 2 ? TAB_ON : TAB_OFF} onClick={() => setStep(2)}>
    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">account_tree</span>
              02. Test
            </button>
    <button className={step === 3 ? TAB_ON : TAB_OFF} onClick={() => setStep(3)}>
    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">rocket_launch</span>
              03. Ship
            </button>
    </div>
    </div>
    {/* Stepper Panels */}
    <div className="w-full glass-card rounded-3xl border border-white/15 p-8 lg:p-12 min-h-[420px] flex items-center">
    {/* Step 1 */}
    <div className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${step === 1 ? "" : "hidden"}`}>
    <div className="lg:col-span-5">
    <span className="font-mono text-[11px] text-[#2997ff] uppercase tracking-wider">Step 01 • Clustering</span>
    <h3 className="text-2xl md:text-3xl text-white font-semibold mt-2 mb-4">Gather mental models with card sorting</h3>
    <p className="text-[14px] text-[#a1a1aa] leading-relaxed mb-6">Launch unmoderated studies to vetted global participants. Watch the similarity matrix synthesize clusters automatically.</p>
    <div className="space-y-2 text-[13px] text-zinc-300">
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-[18px] text-[#2997ff]">check_circle</span>
    <span>Open, closed, and hybrid card sorts</span>
    </div>
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-[18px] text-[#2997ff]">check_circle</span>
    <span>Real-time semantic label clustering</span>
    </div>
    </div>
    </div>
    <div className="lg:col-span-7 bg-black/60 rounded-2xl border border-white/10 p-6">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10 font-mono text-[11px]">
    <span className="text-zinc-200">Category Agreement Heatmap</span>
    <span className="text-emerald-400">High Consensus</span>
    </div>
    <div className="grid grid-cols-4 gap-2 font-mono text-[11px]">
    <div className="text-zinc-500 uppercase text-[10px]">Node</div>
    <div className="text-center text-zinc-500 uppercase text-[10px]">Core</div>
    <div className="text-center text-zinc-500 uppercase text-[10px]">Settings</div>
    <div className="text-center text-zinc-500 uppercase text-[10px]">Dev</div>
    <div className="text-white truncate">/billing</div>
    <div className="bg-white/5 text-zinc-500 text-center py-2 rounded">4%</div>
    <div className="bg-[#0071e3]/30 text-[#2997ff] font-bold text-center py-2 rounded border border-[#2997ff]/40">96%</div>
    <div className="bg-white/5 text-zinc-500 text-center py-2 rounded">0%</div>
    <div className="text-white truncate">/api-keys</div>
    <div className="bg-white/5 text-zinc-500 text-center py-2 rounded">2%</div>
    <div className="bg-white/5 text-zinc-500 text-center py-2 rounded">18%</div>
    <div className="bg-[#0071e3]/30 text-[#2997ff] font-bold text-center py-2 rounded border border-[#2997ff]/40">80%</div>
    </div>
    </div>
    </div>
    {/* Step 2 */}
    <div className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${step === 2 ? "" : "hidden"}`}>
    <div className="lg:col-span-5">
    <span className="font-mono text-[11px] text-[#2997ff] uppercase tracking-wider">Step 02 • Validation</span>
    <h3 className="text-2xl md:text-3xl text-white font-semibold mt-2 mb-4">Stress-test with tree tests</h3>
    <p className="text-[14px] text-[#a1a1aa] leading-relaxed mb-6">Strip away graphic design cues to measure pure information scent, directness, and task success metrics.</p>
    <div className="space-y-2 text-[13px] text-zinc-300">
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-[18px] text-[#2997ff]">check_circle</span>
    <span>Millisecond path tracking without bias</span>
    </div>
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-[18px] text-[#2997ff]">check_circle</span>
    <span>Pietree journey visualization for path drift</span>
    </div>
    </div>
    </div>
    <div className="lg:col-span-7 bg-black/60 rounded-2xl border border-white/10 p-6 space-y-5">
    <div className="grid grid-cols-3 gap-3 text-center">
    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
    <div className="text-2xl font-bold text-white font-mono">94.2%</div>
    <div className="font-mono text-[10px] text-zinc-400 mt-1">SUCCESS</div>
    </div>
    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
    <div className="text-2xl font-bold text-[#2997ff] font-mono">89.0%</div>
    <div className="font-mono text-[10px] text-zinc-400 mt-1">DIRECTNESS</div>
    </div>
    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
    <div className="text-2xl font-bold text-white font-mono">14.2s</div>
    <div className="font-mono text-[10px] text-zinc-400 mt-1">AVG TIME</div>
    </div>
    </div>
    <div className="space-y-1.5">
    <div className="flex justify-between text-[11px] font-mono">
    <span className="text-zinc-400">Path: /account → /invoices</span>
    <span className="text-emerald-400">89% of users</span>
    </div>
    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden flex">
    <div className="bg-[#2997ff] h-full w-[89%]"></div>
    <div className="bg-amber-500 h-full w-[11%]"></div>
    </div>
    </div>
    </div>
    </div>
    {/* Step 3 */}
    <div className={`w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${step === 3 ? "" : "hidden"}`}>
    <div className="lg:col-span-5">
    <span className="font-mono text-[11px] text-[#2997ff] uppercase tracking-wider">Step 03 • Deployment</span>
    <h3 className="text-2xl md:text-3xl text-white font-semibold mt-2 mb-4">Ship consensus straight to code</h3>
    <p className="text-[14px] text-[#a1a1aa] leading-relaxed mb-6">Export validated sitemaps into your tech stack. Zero spreadsheets, zero broken routing paths.</p>
    <div className="space-y-2 text-[13px] text-zinc-300">
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-[18px] text-[#2997ff]">check_circle</span>
    <span>1-click Figma component sync</span>
    </div>
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-[18px] text-[#2997ff]">check_circle</span>
    <span>Direct Next.js App Router folder scaffold</span>
    </div>
    </div>
    </div>
    <div className="lg:col-span-7 bg-black/60 rounded-2xl border border-white/10 p-6">
    <div className="flex items-center justify-between mb-3">
    <span className="text-white font-semibold text-[13px]">Consensus Verified</span>
    <span className="font-mono text-[10px] bg-[#0071e3]/20 text-[#2997ff] px-2 py-0.5 rounded-full border border-[#2997ff]/40">READY TO SHIP</span>
    </div>
    <div className="bg-black rounded-xl p-4 font-mono text-[11px] space-y-1 border border-white/10">
    <p className="text-[#2997ff]">$ sortly export --format=nextjs</p>
    <p className="text-zinc-500">&gt; Compiling 142 routes...</p>
    <p className="text-emerald-400 font-semibold">&gt; Successfully written to /app/routes/ (2.4s)</p>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
