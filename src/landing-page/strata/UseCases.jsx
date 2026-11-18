import React from 'react';

// Use cases: four example architectures.
export default function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="flex flex-col items-center text-center mb-16">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-3">
            [ Scalable Taxonomy ]
          </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">
            Engineered for architecture at any scale
          </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Blueprint 1 */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="font-mono text-[10px] text-[#2997ff] bg-[#0071e3]/20 border border-[#2997ff]/40 px-2.5 py-1 rounded-full font-bold">140+ NODES</span>
    <span className="font-mono text-[11px] text-zinc-400">SaaS Multi-Product</span>
    </div>
    <h3 className="text-xl text-white font-semibold mb-2">SaaS Multi-Product Platform</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">
                Segment permissions, workspace settings, role-based dashboards, and multi-tenant isolation with zero hierarchy conflicts.
              </p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-4 font-mono text-[11px] space-y-1.5">
    <div className="text-[#2997ff]">/workspace/[id]/settings</div>
    <div className="pl-3 border-l border-white/20 text-zinc-400 space-y-0.5">
    <div>/members • RBAC matrix</div>
    <div>/audit-logs • SOC2 retention</div>
    </div>
    </div>
    </div>
    {/* Blueprint 2 */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="font-mono text-[10px] text-white bg-white/10 border border-white/20 px-2.5 py-1 rounded-full font-bold">FACETED SEARCH</span>
    <span className="font-mono text-[11px] text-zinc-400">E-Commerce</span>
    </div>
    <h3 className="text-xl text-white font-semibold mb-2">Global E-commerce Megamenu</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">
                Taxonomy hierarchy designed for discoverability. Model localized category trees, seasonal landing collections, and faceted filters.
              </p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-4 font-mono text-[11px] space-y-1.5">
    <div className="text-emerald-400">/shop/apparel/outerwear</div>
    <div className="pl-3 border-l border-white/20 text-zinc-400 space-y-0.5">
    <div>/unisex • Dynamic filter</div>
    <div>/waterproof • Canonical tag</div>
    </div>
    </div>
    </div>
    {/* Blueprint 3 */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="font-mono text-[10px] text-[#2997ff] bg-[#0071e3]/20 border border-[#2997ff]/40 px-2.5 py-1 rounded-full font-bold">DOCS AS CODE</span>
    <span className="font-mono text-[11px] text-zinc-400">Developer Hub</span>
    </div>
    <h3 className="text-xl text-white font-semibold mb-2">Developer Documentation Hub</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">
                Keep API reference endpoints, SDK walkthroughs, guides, and versioned changelogs organized cleanly as code scales.
              </p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-4 font-mono text-[11px] space-y-1.5">
    <div className="text-[#2997ff]">/docs/api/v2/auth</div>
    <div className="pl-3 border-l border-white/20 text-zinc-400 space-y-0.5">
    <div>POST /oauth/token • 200 OK</div>
    <div>GET /userinfo • Scoped</div>
    </div>
    </div>
    </div>
    {/* Blueprint 4 */}
    <div className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="font-mono text-[10px] text-white bg-white/10 border border-white/20 px-2.5 py-1 rounded-full font-bold">SECURITY</span>
    <span className="font-mono text-[11px] text-zinc-400">Enterprise</span>
    </div>
    <h3 className="text-xl text-white font-semibold mb-2">Enterprise Knowledge Architecture</h3>
    <p className="text-[13px] text-[#a1a1aa] mb-6 leading-relaxed">
                Structure internal wikis, compliance repositories, and departmental manuals with clear access rules and verified search indices.
              </p>
    </div>
    <div className="bg-black/50 rounded-2xl border border-white/10 p-4 font-mono text-[11px] space-y-1.5">
    <div className="text-emerald-400">/internal/security/policies</div>
    <div className="pl-3 border-l border-white/20 text-zinc-400 space-y-0.5">
    <div>/incident-response-v4</div>
    <div>/soc2-type-2-procedures</div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
