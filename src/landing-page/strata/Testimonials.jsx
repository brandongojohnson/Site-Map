import React from 'react';

// Testimonials (hidden for now; see SHOW_TESTIMONIALS in strata/config.js).
export default function Testimonials() {
  return (
    <section className="w-full py-24 px-6 lg:px-12 border-t border-white/10">
    <div className="max-w-[1240px] mx-auto">
    <div className="text-center max-w-xl mx-auto mb-16">
    <span className="font-mono text-[11px] text-[#2997ff] uppercase tracking-wider block mb-3">[ Testimonials ]</span>
    <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
              Built for the architects who shape the modern web
            </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Quote 1 */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <p className="text-[15px] text-zinc-300 leading-relaxed mb-8">
                “Sortly transformed how we pitched redesigns. We showed tree test data verifying a <span className="text-[#2997ff] font-semibold">40% jump</span> in findability before writing a single line of frontend code.”
              </p>
    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
    <div className="w-10 h-10 rounded-full bg-[#0071e3] text-white font-bold text-sm flex items-center justify-center">CV</div>
    <div>
    <div className="font-semibold text-[14px] text-white">Dr. Claire Vance</div>
    <div className="font-mono text-[11px] text-zinc-400">Principal IA • Spotify</div>
    </div>
    </div>
    </div>
    {/* Quote 2 */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <p className="text-[15px] text-zinc-300 leading-relaxed mb-8">
                “Card sorting used to mean messy CSVs in whiteboard tools. Sortly performs statistical similarity clustering in real-time right inside the spatial canvas.”
              </p>
    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
    <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-bold text-sm flex items-center justify-center">MT</div>
    <div>
    <div className="font-semibold text-[14px] text-white">Marcus Thorne</div>
    <div className="font-mono text-[11px] text-zinc-400">Head of Research • Monzo</div>
    </div>
    </div>
    </div>
    {/* Quote 3 */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <p className="text-[15px] text-zinc-300 leading-relaxed mb-8">
                “Finally an information architecture platform built with Apple-grade polish. The git-style branching is indispensable for our multi-tier design systems.”
              </p>
    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
    <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/20 text-white font-bold text-sm flex items-center justify-center">ER</div>
    <div>
    <div className="font-semibold text-[14px] text-white">Elena Rostova</div>
    <div className="font-mono text-[11px] text-zinc-400">VP Design • Retool</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
