import React, { useEffect, useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../config/firebase';
import { useAuth } from '../card-sort/useAuth';
import AuthModal from './AuthModal';
import StrataStartMenu from './StrataStartMenu';
import HeroSitemapDemo from './StrataHeroDemo';
import './StrataUtilities.css';
import './StrataLanding.css';

// The Sortly landing page. Every section is defined in this file, top to bottom in
// page order, and composed at the bottom by LandingPage. Styles are plain CSS scoped
// under .strata-lp: StrataUtilities.css (utility rules) + StrataLanding.css (theme).
// Self-contained widgets live beside it: StrataHeroDemo (animated sitemap mockup),
// StrataStartMenu (the "Start for free" dropdown) and AuthModal (login).

// ----------------------------------------------------------------------
// Settings and shared class strings
// ----------------------------------------------------------------------
// Set to true to show the testimonials section again.
const SHOW_TESTIMONIALS = false;
const THEME_KEY = 'sortly-landing-theme';

const NAV = [
  ['Features', 'features'],
  ['How it works', 'how-it-works'],
  ['Pricing', 'pricing'],
  ['Contact', 'contact'],
];

// Class strings for the pipeline tabs and the billing toggle (rules live in StrataUtilities.css).
const TAB_ON = 'inline-flex items-center gap-2 whitespace-nowrap px-5 py-2 rounded-full text-[13px] font-semibold bg-white text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.4)]';
const TAB_OFF = 'inline-flex items-center gap-2 whitespace-nowrap px-5 py-2 rounded-full text-[13px] font-medium text-zinc-400 hover:text-white transition-all';
const BILL_ON = 'px-4 py-1.5 rounded-full text-[12px] font-semibold bg-white text-black transition-all';
const BILL_OFF = 'px-4 py-1.5 rounded-full text-[12px] font-medium text-zinc-400 hover:text-white transition-all';

// ----------------------------------------------------------------------
// Navbar
// ----------------------------------------------------------------------
// Floating capsule navbar: brand, section links, theme toggle, login and the Start menu.
function Navbar({ light, onToggleTheme, user, onLogin, onStart }) {
  const [active, setActive] = useState('product');

  // highlight the nav item for the section currently in the middle of the viewport
  useEffect(() => {
    const els = NAV.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
    <div className="pointer-events-auto rounded-full glass-card border border-white/15 flex items-center justify-between gap-6 sm:gap-10 px-8 py-4">
    {/* Brand */}
    <a className="flex items-center gap-2.5 group" href="#product">
    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#0071e3]">
    <span className="material-symbols-outlined text-[17px] text-white">blur_circular</span>
    </div>
    <span className="text-base font-semibold tracking-tight text-white">Sortly</span>
    <span className="hidden xl:inline-block font-mono text-[10px] bg-white/10 text-zinc-300 px-2 py-0.5 rounded-full border border-white/10">v2.4 Spatial</span>
    </a>
    {/* Center Nav Items */}
    <nav className="hidden lg:flex items-center gap-5 text-[13px] text-zinc-400 font-medium">
    {NAV.map(([label, id]) => (
      <a
        key={id}
        href={`#${id}`}
        aria-current={active === id ? 'page' : undefined}
        className={`transition-colors hover:text-white ${active === id ? 'text-white' : ''}`}
      >
        {label}
      </a>
    ))}
    </nav>
    {/* CTAs */}
    <div className="flex items-center gap-3">
    <button
      type="button"
      onClick={() => onToggleTheme()}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      aria-pressed={light}
      className="theme-toggle w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
    >
      <span className="material-symbols-outlined text-[18px]">{light ? 'dark_mode' : 'light_mode'}</span>
    </button>
    <a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors px-2 py-1" href="#" onClick={onLogin}>{user ? "Open app" : "Log in"}</a>
    <StrataStartMenu align="right" onSelect={onStart} className="inline-flex items-center justify-center text-[12px] font-semibold bg-white text-black px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-all gap-1">
            Start for free
          </StrataStartMenu>
    </div>
    </div>
    </header>
  );
}

// ----------------------------------------------------------------------
// Hero
// ----------------------------------------------------------------------
// Hero: headline, subheadline, start/demo buttons and the animated sitemap mockup.
function Hero({ onStart }) {
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
    <button className="px-3 py-1 text-[#2997ff] text-[12px] font-bold flex items-center gap-1.5">
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

// ----------------------------------------------------------------------
// Spatial engine
// ----------------------------------------------------------------------
// "Map your structure visually": copy plus the Spatial-Layout Engine card.
function SpatialEngine() {
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
    <svg className="w-full max-w-[420px] h-16 my-1 overflow-visible" fill="none" viewBox="0 0 420 64">
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

// ----------------------------------------------------------------------
// Capabilities
// ----------------------------------------------------------------------
// Spatial Capabilities: the six-card feature grid.
function Capabilities() {
  return (
    <section id="features" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="flex flex-col items-center text-center mb-16">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-3">
            [ Spatial Capabilities ]
          </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">
            The complete suite<br />for information architecture
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

// ----------------------------------------------------------------------
// Pipeline (Sort / Test / Ship)
// ----------------------------------------------------------------------
// "From research to sitemap in three steps": Sort / Test / Ship tabs and panels.
function Pipeline() {
  const [step, setStep] = useState(1);

  return (
    <section id="how-it-works" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
    <div>
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-3">
              [ Pipeline ]
            </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.03em] text-white">
              From research to sitemap<br />in <span className="text-[#2997ff]">three steps</span>
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

// ----------------------------------------------------------------------
// Use cases
// ----------------------------------------------------------------------
// Use cases: four example architectures.
function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="flex flex-col items-center text-center mb-16">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-3">
            [ Scalable Taxonomy ]
          </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">
            Engineered for architecture<br />at any scale
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

// ----------------------------------------------------------------------
// Testimonials (hidden; see SHOW_TESTIMONIALS)
// ----------------------------------------------------------------------
// Testimonials (hidden for now; see SHOW_TESTIMONIALS at the top of this file).
function Testimonials() {
  return (
    <section className="w-full py-24 px-6 lg:px-12 border-t border-white/10">
    <div className="max-w-[1240px] mx-auto">
    <div className="text-center max-w-xl mx-auto mb-16">
    <span className="font-mono text-[11px] text-[#2997ff] uppercase tracking-wider block mb-3">[ Testimonials ]</span>
    <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
              Built for the architects<br />who shape the modern web
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

// ----------------------------------------------------------------------
// Pricing
// ----------------------------------------------------------------------
// Pricing: monthly/annual toggle and the three plans.
function Pricing({ onSelectPlan }) {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="flex flex-col items-center text-center mb-12">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-3">
            [ Pricing ]
          </div>
    <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-8">
            Structure your site.<br /><span className="text-[#2997ff]">Scale with confidence.</span>
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

// ----------------------------------------------------------------------
// FAQ
// ----------------------------------------------------------------------
// Same questions and layout as the previous landing page FAQ (title left,
// questions right, "+" that rotates when open), in the Strata styling.
const QUESTIONS = [
  {
    q: 'How long does a card sort take to set up?',
    a: 'Most studies take a few minutes — add your cards, choose open, closed, or hybrid, and send the link. No spreadsheet templates or manual tallying required.',
  },
  {
    q: 'Do participants need an account to join?',
    a: "No. Anyone with the study link can join and sort — account creation is only required for the study's owner.",
  },
  {
    q: 'What is the difference between open, closed, and hybrid sorts?',
    a: 'Open sorts let participants create their own categories, closed sorts use categories you define, and hybrid sorts let them do both — start from your categories but add new ones as needed.',
  },
  {
    q: 'Can I export my sitemap?',
    a: 'Yes — sitemaps built from your results export to PNG and PDF, and Professional plans add Figma and CSV export.',
  },
  {
    q: 'Do I need a credit card to start?',
    a: 'No. The Starter plan is free and needs no payment details — upgrade only when you need more.',
  },
];

const FAQItem = ({ q, a, id }) => {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  return (
    <div className="border-b border-white/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="text-[15px] font-semibold text-white">{q}</span>
        <span
          aria-hidden="true"
          className={`material-symbols-outlined text-[20px] shrink-0 transition-transform duration-200 ${
            open ? 'rotate-45 text-[#2997ff]' : 'text-zinc-400'
          }`}
        >
          add
        </span>
      </button>
      {open && (
        <p id={panelId} className="mt-4 max-w-2xl text-[14px] leading-relaxed text-zinc-400">
          {a}
        </p>
      )}
    </div>
  );
};

const Faq = () => (
  <section id="faq" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-4">
          [ FAQ ]
        </div>
        <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.03em] text-white leading-[1.1]">
          Common<br />questions.
        </h2>
      </div>
      <div className="md:col-span-2">
        {QUESTIONS.map((item, i) => (
          <FAQItem key={item.q} {...item} id={i} />
        ))}
      </div>
    </div>
  </section>
);

// ----------------------------------------------------------------------
// Contact
// ----------------------------------------------------------------------
const FIELD =
  'w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[14px] text-white placeholder:text-zinc-500 ' +
  'transition-colors focus:outline-none focus:border-[#2997ff] focus:ring-4 focus:ring-[#2997ff]/20';

// Same Firebase path and payload as the previous contact form, so existing
// messages and any tooling reading `contactMessages` keep working.
const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('sending');
    try {
      await push(ref(db, 'contactMessages'), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        submittedAt: Date.now(),
      });
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="glass-card rounded-3xl p-8 text-center" role="status">
        <span className="material-symbols-outlined text-[32px] text-[#2997ff] mb-3 block">check_circle</span>
        <h3 className="text-[17px] font-semibold text-white mb-1.5">Message sent</h3>
        <p className="text-[13px] text-zinc-400">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" required placeholder="Name" aria-label="Name" value={form.name} onChange={onChange('name')} className={FIELD} />
        <input type="email" required placeholder="Email" aria-label="Email" value={form.email} onChange={onChange('email')} className={FIELD} />
      </div>
      <textarea
        required
        rows={5}
        placeholder="How can we help?"
        aria-label="Message"
        value={form.message}
        onChange={onChange('message')}
        className={`${FIELD} resize-none`}
      />

      {status === 'error' && (
        <p className="text-[12px] text-red-400" role="alert">
          Something went wrong sending your message — please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full h-11 rounded-full bg-white text-black text-[14px] font-semibold flex items-center justify-center hover:bg-zinc-200 transition-all disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

const Contact = () => (
  <section id="contact" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
      <div>
        <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-4">
          [ Get in touch ]
        </div>
        <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.03em] text-white leading-[1.1] mb-5">
          Have a question<br />before you start?
        </h2>
        <p className="text-[16px] text-[#a1a1aa] leading-relaxed max-w-md">
          Whether you're comparing tools or already mid-study, send us a note — we read every message and usually reply
          within a day.
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
);

// ----------------------------------------------------------------------
// Closing call to action
// ----------------------------------------------------------------------
// Closing call to action.
function FinalCTA({ onStart }) {
  return (
    <section className="w-full py-24 px-6 lg:px-12 relative">
    <div className="max-w-[1240px] mx-auto rounded-3xl glass-card p-10 md:p-20 text-center relative overflow-hidden border border-white/20">
    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
    <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-6">
              Architectural Precision
            </div>
    <h2 className="text-3xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-[1.1]">
              Ready to build information architecture<br />that <span className="text-[#2997ff]">actually works</span>?
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

// ----------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------
// Site footer.
function Footer() {
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

// ----------------------------------------------------------------------
// Page: owns the theme and login state and composes the sections
// ----------------------------------------------------------------------
const LandingPage = ({ onGetStarted }) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [light, setLight] = useState(() => {
    try { return localStorage.getItem(THEME_KEY) === 'light'; } catch { return false; }
  });
  const { user } = useAuth();

  // page-level niceties the original put on <html>/<body>
  useEffect(() => {
    const html = document.documentElement;
    const prev = { sb: html.style.scrollBehavior, bg: document.body.style.background, ob: document.body.style.overscrollBehavior };
    html.style.scrollBehavior = 'smooth';
    document.body.style.overscrollBehavior = 'none';
    return () => {
      html.style.scrollBehavior = prev.sb;
      document.body.style.background = prev.bg;
      document.body.style.overscrollBehavior = prev.ob;
    };
  }, []);

  useEffect(() => {
    try { localStorage.setItem(THEME_KEY, light ? 'light' : 'dark'); } catch { /* storage unavailable */ }
    document.body.style.background = light ? '#f5f5f7' : '#000';
  }, [light]);

  const start = (target) => { if (onGetStarted) onGetStarted(target); };
  const go = (e) => { e.preventDefault(); if (onGetStarted) onGetStarted('studio'); };
  const login = (e) => { e.preventDefault(); if (user) { if (onGetStarted) onGetStarted('studio'); } else setAuthOpen(true); };

  return (
    <div className={`strata-lp ${light ? "is-light" : ""} bg-black text-zinc-100 antialiased selection:bg-[#2997ff] selection:text-black font-sans min-h-screen`}>
      <Navbar
        light={light}
        onToggleTheme={() => setLight((v) => !v)}
        user={user}
        onLogin={login}
        onStart={start}
      />
      <main className="w-full pt-28 bg-black min-h-screen relative overflow-hidden">
        <Hero onStart={start} />
        <SpatialEngine />
        <Capabilities />
        <Pipeline />
        <UseCases />
        {SHOW_TESTIMONIALS && <Testimonials />}
        <Pricing onSelectPlan={go} />
        <Faq />
        <Contact />
        <FinalCTA onStart={start} />
      </main>
      <Footer />

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </div>
  );
};

export default LandingPage;
