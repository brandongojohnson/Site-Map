import React, { useState } from 'react';
import { BILL_ON, BILL_OFF } from './tabStyles';

// Pricing: monthly/annual toggle and the three plans.
export default function Pricing({ onSelectPlan }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="flex flex-col items-center text-center mb-12">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-3">
            [ Pricing ]
          </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-8">
            Structure your site. <span className="text-[#2997ff]">Scale with confidence.</span>
    </h2>
    {/* Toggle */}
    <div className="flex items-center gap-1 glass-card p-1.5 rounded-full border border-white/15">
    <button className={yearly ? BILL_OFF : BILL_ON} onClick={() => setYearly(false)}>
              Monthly
            </button>
    <button className={(yearly ? BILL_ON : BILL_OFF) + " flex items-center gap-1.5"} onClick={() => setYearly(true)}>
    <span>Annual</span>
    <span className="bg-[#0071e3]/30 text-[#2997ff] font-mono text-[10px] px-1.5 py-0.5 rounded-full border border-[#2997ff]/40">Save 20%</span>
    </button>
    </div>
    </div>
    {/* 3 Tier Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
    {/* Starter */}
    <div className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/10">
    <div>
    <div className="text-xl font-bold text-white mb-1">Starter</div>
    <p className="text-[13px] text-zinc-400 mb-6">For solo designers mapping initial structures.</p>
    <div className="flex items-baseline gap-1 mb-6">
    <span className="text-4xl font-extrabold text-white">$0</span>
    <span className="text-[13px] text-zinc-500">/ forever</span>
    </div>
    <div className="space-y-3 text-[13px] text-zinc-300 mb-8">
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-white">check</span>
    <span>1 Active Sitemap Project</span>
    </div>
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-white">check</span>
    <span>Up to 50 Visual Nodes</span>
    </div>
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-white">check</span>
    <span>1 Card Sort (30 participants)</span>
    </div>
    </div>
    </div>
    <a className="w-full h-11 rounded-full bg-white/10 hover:bg-white/15 text-white text-[13px] font-semibold flex items-center justify-center transition-colors border border-white/10" href="#signup" onClick={onSelectPlan}>
              Get Started
            </a>
    </div>
    {/* Professional */}
    <div className="glass-card rounded-3xl p-8 flex flex-col justify-between relative border border-[#2997ff]">
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0071e3] text-white font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-bold">
              Most Popular for Teams
            </div>
    <div>
    <div className="text-xl font-bold text-white mb-1">Professional</div>
    <p className="text-[13px] text-zinc-400 mb-6">For product squads and UX practices.</p>
    <div className="flex items-baseline gap-1 mb-6">
    <span className="text-4xl font-extrabold text-white" >{yearly ? "$39" : "$49"}</span>
    <span className="text-[13px] text-zinc-400">/ seat / month</span>
    </div>
    <div className="space-y-3 text-[13px] text-zinc-200 mb-8">
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-[#2997ff]">check</span>
    <span className="font-semibold text-white">Unlimited Sitemaps &amp; Nodes</span>
    </div>
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-[#2997ff]">check</span>
    <span>Unlimited Card Sorts &amp; Tree Tests</span>
    </div>
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-[#2997ff]">check</span>
    <span>Multiplayer Spatial Canvas</span>
    </div>
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-[#2997ff]">check</span>
    <span>Git-style Branching &amp; Diffs</span>
    </div>
    </div>
    </div>
    <a className="w-full h-11 rounded-full bg-white hover:bg-zinc-200 text-black text-[13px] font-semibold flex items-center justify-center transition-all" href="#signup" onClick={onSelectPlan}>
              Start 14-Day Free Trial
            </a>
    </div>
    {/* Enterprise */}
    <div className="glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/10">
    <div>
    <div className="text-xl font-bold text-white mb-1">Enterprise</div>
    <p className="text-[13px] text-zinc-400 mb-6">For global orgs requiring custom compliance.</p>
    <div className="flex items-baseline gap-1 mb-6">
    <span className="text-4xl font-extrabold text-white">Custom</span>
    <span className="text-[13px] text-zinc-500">/ annual</span>
    </div>
    <div className="space-y-3 text-[13px] text-zinc-300 mb-8">
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-white">check</span>
    <span>SAML / Okta SSO</span>
    </div>
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-white">check</span>
    <span>Custom Research Panel Recruiting</span>
    </div>
    <div className="flex items-center gap-2.5">
    <span className="material-symbols-outlined text-[16px] text-white">check</span>
    <span>SOC2 Type II &amp; HIPAA</span>
    </div>
    </div>
    </div>
    <a className="w-full h-11 rounded-full bg-white/10 hover:bg-white/15 text-white text-[13px] font-semibold flex items-center justify-center transition-colors border border-white/10" href="#contact">
              Contact Enterprise Sales
            </a>
    </div>
    </div>
    </section>
  );
}
