import React, { useState, useEffect } from 'react';

/* ── Material Symbol helper ─────────────────────────────────────────────── */
const Icon = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

/* ── Nav ────────────────────────────────────────────────────────────────── */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-border-light transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="flex justify-between items-center px-page-margin h-20 max-w-7xl mx-auto relative">
        {/* Logo */}
        <div className="font-display-lg text-headline-lg-mobile tracking-tighter text-primary">
          Sitemap Builder
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-stack-lg">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-stack-lg">
            {[
              { label: 'Features',  href: '#features'   },
              { label: 'Templates', href: '#templates'  },
              { label: 'Pricing',   href: '#pricing'    },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={scrollTo(href)}
                className="font-label-md text-label-md text-secondary hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-80 transition-all active:scale-95 duration-150 ml-auto z-10">
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-primary">
          <Icon name="menu" />
        </button>
      </div>
    </nav>
  );
};

/* ── Hero ───────────────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] overflow-hidden">
    {/* Left — light */}
    <div className="lg:w-1/2 bg-background flex flex-col justify-center px-page-margin py-stack-xl lg:py-0 border-r border-border-light">
      <div className="max-w-[540px] mx-auto lg:ml-auto lg:mr-12">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-border-light bg-surface-gray text-label-sm mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-green mr-2 flex-shrink-0" />
          <span className="text-secondary font-label-sm">New: Real-time sitemap sync</span>
        </div>

        <h1 className="font-display-lg text-display-lg md:text-6xl mb-stack-md leading-tight text-primary">
          Build sitemaps visually in minutes
        </h1>

        <p className="font-body-lg text-body-lg text-text-muted mb-stack-lg">
          Drag, drop, and structure your website without complexity. Treat your digital architecture
          with the respect of a printed architectural blueprint.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md shadow-sm hover:opacity-90 transition-all">
            Start building for free
          </button>
          <button className="border border-border-light bg-surface px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-gray transition-all">
            View example
          </button>
        </div>
      </div>
    </div>

    {/* Right — dark */}
    <div className="lg:w-1/2 bg-[#191919] relative flex items-center justify-center p-8 lg:p-20 overflow-hidden">
      <div className="relative w-full max-w-2xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-green/20 to-primary/20 blur-3xl opacity-30" />
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3BL0_AqHdWbAkXpneh3WyqwSkJAWr4KgS5KMsOJPszDqy_aUg-JIcqg6X_mF2nMyqPi0-5dVwSWg3n_X5CD3Uhru27ST72eRWpRm3GgwmHtBhMPolNllJgBUgNIG9Y3h7GtSDiNOYkQ8uQwepIS8vOon9QMIS72VJjwlOxT6NpHDKZHDOvANOW9zYgLksTD5x2M5GUmRsO0gds2uvqbWR_dZAtCCUGozXZa57EkbHMOVFBCJEsVWSSOob6zAeN863dGlZn5KeyxF"
          alt="Dark Sitemap Visualization"
          className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/5"
        />
      </div>
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <Icon name="grid_view" className="text-white" style={{ fontSize: '96px' }} />
      </div>
    </div>
  </section>
);

/* ── Features bento grid ─────────────────────────────────────────────────── */
const Features = () => (
  <section className="px-page-margin py-stack-xl max-w-7xl mx-auto" id="features">
    <div className="mb-stack-xl">
      <span className="text-accent-green font-label-md text-label-md tracking-widest uppercase">
        Precision Tools
      </span>
      <h2 className="font-headline-lg text-headline-lg mt-stack-sm">
        Everything you need to architect
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {/* Large */}
      <div className="md:col-span-2 lg:col-span-3 border border-border-light p-8 rounded-2xl flex flex-col justify-between bg-surface-container-low group hover:border-primary transition-colors">
        <div>
          <Icon name="drag_indicator" className="text-4xl mb-4 text-primary" />
          <h3 className="font-headline-lg text-2xl mb-4">Drag-and-drop builder</h3>
          <p className="text-text-muted">
            Intuitive canvas where your thoughts take shape. Move entire branches of your hierarchy
            with one fluid motion.
          </p>
        </div>
      </div>

      {/* Medium */}
      <div className="md:col-span-1 lg:col-span-3 border border-border-light p-8 rounded-2xl bg-surface group hover:border-primary transition-colors">
        <Icon name="auto_awesome" className="text-4xl mb-4 text-primary" />
        <h3 className="font-headline-lg text-2xl mb-4">Auto-layout generation</h3>
        <p className="text-text-muted">
          Messy maps become clear diagrams instantly. Our algorithm balances your tree for optimal
          visual hierarchy.
        </p>
      </div>

      {/* Small ×3 */}
      {[
        { icon: 'ios_share',  title: 'Multi-Format Export',      desc: 'XML for devs, PNG/PDF for stakeholders.',          bg: 'bg-surface' },
        { icon: 'group',      title: 'Real-time Collaboration',   desc: 'Work together like you\'re in the same studio.', bg: 'bg-surface-container-high' },
        { icon: 'history',    title: 'Version History',           desc: 'Never lose a draft. Roll back with one click.',   bg: 'bg-surface' },
      ].map(({ icon, title, desc, bg }) => (
        <div
          key={title}
          className={`md:col-span-1 lg:col-span-2 border border-border-light p-8 rounded-2xl ${bg} hover:border-primary transition-colors`}
        >
          <Icon name={icon} className="text-3xl mb-4 text-primary" />
          <h4 className="font-headline-lg text-xl mb-2">{title}</h4>
          <p className="font-label-md text-label-md text-text-muted">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ── How it works ────────────────────────────────────────────────────────── */
const HowItWorks = () => (
  <section className="bg-surface-gray py-stack-xl border-y border-border-light">
    <div className="px-page-margin max-w-7xl mx-auto">
      <div className="text-center mb-stack-xl">
        <h2 className="font-headline-lg text-headline-lg">Workflow simplicity</h2>
        <p className="text-text-muted mt-4">Three steps from chaos to structural clarity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {[
          { n: '1', title: 'Add pages',        desc: 'Bulk import list or manually add individual nodes to your canvas.' },
          { n: '2', title: 'Drag to structure', desc: 'Visually define parent-child relationships and page priorities.' },
          { n: '3', title: 'Export or share',  desc: 'Send a secure link to your team or download assets for your dev sprint.' },
        ].map(({ n, title, desc }) => (
          <div key={n} className="flex flex-col items-center text-center relative z-10">
            <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center font-display-lg text-2xl mb-6">
              {n}
            </div>
            <h4 className="font-headline-lg text-2xl mb-2">{title}</h4>
            <p className="text-text-muted font-body-md">{desc}</p>
          </div>
        ))}
        {/* connector line */}
        <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-[2px] bg-border-light -z-0" />
      </div>
    </div>
  </section>
);

/* ── Use cases ───────────────────────────────────────────────────────────── */
const UseCases = () => (
  <section className="px-page-margin py-stack-xl max-w-7xl mx-auto overflow-hidden">
    <div className="flex flex-col lg:flex-row gap-stack-xl items-center">
      <div className="lg:w-1/2">
        <h2 className="font-headline-lg text-headline-lg mb-stack-md">
          Built for the modern web workforce
        </h2>

        <div className="space-y-8">
          {[
            { icon: 'palette',    role: 'UX Designers',      desc: 'Map user journeys and information architecture before touching Figma.' },
            { icon: 'assignment', role: 'Product Managers',  desc: 'Scope MVPs and organize features into logical page hierarchies.' },
            { icon: 'code',       role: 'Developers',        desc: 'Auto-generate XML sitemaps for SEO and structure clean codebase routing.' },
          ].map(({ icon, role, desc }) => (
            <div key={role} className="flex gap-6 group">
              <div className="shrink-0 w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-all">
                <Icon name={icon} />
              </div>
              <div>
                <h4 className="font-headline-lg text-xl mb-1">{role}</h4>
                <p className="text-text-muted font-body-md">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative sitemap mock */}
      <div className="lg:w-1/2 relative">
        <div className="bg-surface-gray rounded-3xl p-12 relative overflow-hidden aspect-square flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-2xl shadow-xl p-8 border border-border-light relative z-10 transform rotate-2">
            <div className="space-y-4">
              <div className="h-8 w-32 bg-surface-gray rounded" />
              <div className="ml-8 space-y-4">
                <div className="h-6 w-48 bg-surface-gray rounded" />
                <div className="h-6 w-40 bg-surface-gray rounded opacity-50" />
                <div className="ml-8 space-y-4">
                  <div className="h-6 w-32 bg-primary/10 rounded" />
                  <div className="h-6 w-36 bg-surface-gray rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  </section>
);

/* ── Templates ───────────────────────────────────────────────────────────── */
const templates = [
  {
    title: 'SaaS Website',
    desc:  'Marketing, pricing, and app dashboard structures.',
    src:   'https://lh3.googleusercontent.com/aida-public/AB6AXuAFsHjpeS03uLBIUoDNJ07dV0vd053kNsp6fFQAXR9-CiPhMaL4fD8NICCKgjq7BJv6WUK_NBEosBPVTj-wuQ27f3vcC9o8FBVIkdpObev9vQMElBo98h2k03crNOiVi1hy68eQwxZULbb2heL1avG_cB53ev7YpTeVdj6igJt4YflLNwLV0e50x7DJI8UOJr7_Ck9uRsHJ1esVFCEXoex7xjaauNzULz1AbRaWxFYO3aBIxslCj53MzfRLIFgrueIgvcsxFYCoN3FZ',
  },
  {
    title: 'E-commerce',
    desc:  'Complex product hierarchies and checkout flows.',
    src:   'https://lh3.googleusercontent.com/aida-public/AB6AXuDIb5rNdGUg9wEOFUKJpGAFlv0ydOp6Y7E6il1kdqtoJ3Ab3Whs1B152GsmVKoUAPMnIBZV5MHe9sXyjbR2qUsO5a56_79dS5NIWTHFQ-3e7MD0t8GJCXwsHXSHiLgxQ6d1LT4mS16AqY2PHI0OcHZZXsLdQ4ks3N4bpdZATELY1PIgtRPDWvc9HJi8ezU3Sm3kbKjzKevmuLkd3bh95L-IEgHo-ZWyUx129NTZorTHo8oXD2QWcCwRgXh4Yz-pGNjcgNPauX9FvTd1',
  },
  {
    title: 'Portfolio',
    desc:  'Case studies, about pages, and gallery layouts.',
    src:   'https://lh3.googleusercontent.com/aida-public/AB6AXuA4HepzISBZcDUG0QoTGsj-7wrLxhJPToVHBY7JCqJNHgungzPMFtUPH559VUHYDFUqL8mjTVp1sg3bHzGPDnw3mLCoJUbm9GZwRD57V3e3w7Ps93Em4GHLyKnOhVO1wmQ06YZeQDBfmp1VwWndpOfp0KtQO85c9CfCjf3kMncHz8eQdrtRXm_2x8r_OXdMKwM8nUYNx0xnwqGL4x4WphBudYGXCooPnN7an_H1z-8xqphp6uiQ07bg5-QF2AR3Bt86j7lmmFHDiCpd',
  },
  {
    title: 'Blog',
    desc:  'Archive layouts, tag structures, and article templates.',
    src:   'https://lh3.googleusercontent.com/aida-public/AB6AXuAbPD2xJnN-h4q2Tue9hupDTbFJ_XimTdm2B_4yI77XD4KpjEtBGe8Oj2g4JCjy8iZdcLv0EH8Ax-iTTpeQLBrw0vImPIW6G2tyqhf1Czzr5-uBnQFz9_U-jHGyxQwmu0OXqmgT3MM4qZfle2ZDrNZW2P1IjdiDNmMwrvg9c9nonKranqj3tdFJLeNOLU5RR8IvRiLoHlUvHEHQo3YsH0s8kEHAL7MP-RdtP0OhdJm-2WjD3zRn5UrosRtfQlSggcLcijRk2hxcgjh_',
  },
];

const Templates = () => (
  <section className="bg-white py-stack-xl border-t border-border-light" id="templates">
    <div className="px-page-margin max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-stack-xl">
        <div>
          <h2 className="font-headline-lg text-headline-lg">Starting points for every project</h2>
          <p className="text-text-muted mt-2">Professional blueprints to accelerate your workflow.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 font-label-md text-label-md text-primary hover:underline">
          Browse all 50+ templates <Icon name="arrow_forward" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map(({ title, desc, src }) => (
          <div key={title} className="group cursor-pointer">
            <div className="bg-surface-container-low aspect-[4/3] rounded-xl mb-4 border border-border-light group-hover:border-primary transition-all flex items-center justify-center p-8 overflow-hidden">
              <img
                src={src}
                alt={title}
                className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-headline-lg text-xl mb-1">{title}</h4>
            <p className="font-label-sm text-label-sm text-text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Integrations ────────────────────────────────────────────────────────── */
const Integrations = () => (
  <section className="py-stack-xl px-page-margin max-w-7xl mx-auto border-b border-border-light">
    <div className="text-center mb-stack-xl">
      <h2 className="font-headline-lg text-headline-lg">Works where you do</h2>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
      {[
        { icon: 'integration_instructions', label: 'Figma'   },
        { icon: 'notes',                    label: 'Notion'  },
        { icon: 'language',                 label: 'Webflow' },
        { icon: 'description',              label: 'XML'     },
      ].map(({ icon, label }) => (
        <div key={label} className="flex items-center gap-2 font-display-lg text-2xl">
          <Icon name={icon} className="text-4xl" />
          {label}
        </div>
      ))}
    </div>
  </section>
);

/* ── FAQ ─────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'Can I import an existing website?',
    a: "Yes. Simply provide your URL and our crawler will automatically generate a structural map based on your site's navigation hierarchy.",
    defaultOpen: true,
  },
  {
    q: 'Do I need technical experience?',
    a: 'Not at all. The interface is designed for visual thinkers. If you can drag a box on a screen, you can build a sitemap.',
  },
  {
    q: 'Can teams collaborate in real time?',
    a: 'Absolutely. Multi-user editing allows your whole team to architect together, with live cursor tracking and contextual commenting.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-stack-xl px-page-margin max-w-content-max-width mx-auto">
      <h2 className="font-headline-lg text-headline-lg text-center mb-stack-xl">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map(({ q, a }, idx) => (
          <div key={idx} className="group border-b border-border-light pb-4">
            <button
              className="w-full flex justify-between items-center cursor-pointer py-4 font-headline-lg text-xl text-left"
              onClick={() => setOpen(open === idx ? -1 : idx)}
            >
              <span>{q}</span>
              <Icon
                name="expand_more"
                className={`transition-transform ${open === idx ? 'rotate-180' : ''}`}
              />
            </button>
            {open === idx && (
              <p className="text-text-muted font-body-md pr-8">{a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── Final CTA ───────────────────────────────────────────────────────────── */
const CTA = () => (
  <section className="py-stack-xl bg-primary text-on-primary text-center px-page-margin">
    <div className="max-w-content-max-width mx-auto">
      <h2 className="font-display-lg text-4xl md:text-5xl mb-stack-md">
        Start building your sitemap in minutes
      </h2>
      <p className="font-body-lg text-on-primary-container mb-stack-lg opacity-80">
        Join 20,000+ designers and architects building better foundations for the web.
      </p>
      <button className="bg-surface text-primary px-10 py-5 rounded-xl font-label-md text-lg hover:bg-surface-gray transition-all active:scale-95">
        Get started free
      </button>
      <p className="mt-6 text-sm opacity-60">No credit card required. Free tier forever.</p>
    </div>
  </section>
);

/* ── Footer ──────────────────────────────────────────────────────────────── */
const FooterComp = () => (
  <footer className="bg-surface-gray border-t border-border-light w-full py-stack-xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between px-page-margin max-w-7xl mx-auto gap-stack-lg">
      <div className="space-y-4">
        <div className="font-display-lg text-headline-lg-mobile text-primary">Sitemap Builder</div>
        <p className="font-label-sm text-label-sm text-text-muted max-w-xs">
          © 2024 Sitemap Builder. Editorial Clarity for Web Architects.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-12 gap-y-8">
        <div className="flex flex-col gap-2">
          <span className="font-label-md font-bold text-primary">Product</span>
          {['Privacy Policy', 'Terms of Service'].map((l) => (
            <a key={l} href="#" className="font-label-sm text-label-sm text-text-muted hover:text-primary hover:underline transition-all">
              {l}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-label-md font-bold text-primary">Support</span>
          {['Help Center', 'Contact'].map((l) => (
            <a key={l} href="#" className="font-label-sm text-label-sm text-text-muted hover:text-primary hover:underline transition-all">
              {l}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* ── Page root ───────────────────────────────────────────────────────────── */
const LandingPage = () => (
  <div className="bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary">
    <Nav />
    <main className="pt-20">
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Templates />
      <Integrations />
      <FAQ />
      <CTA />
    </main>
    <FooterComp />
  </div>
);

export default LandingPage;
