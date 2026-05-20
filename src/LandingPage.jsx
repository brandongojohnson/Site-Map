import React, { useEffect } from 'react';
import './landing.css';

const Icon = ({ name, className = '' }) => (
  <span className={`icon${className ? ' ' + className : ''}`}>{name}</span>
);

/* ── Nav ─────────────────────────────────────────────────────────────────── */
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goto = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <div className="nav__logo">Sitemap Builder</div>

        <div className="nav__links">
          {['#features', '#templates', '#pricing'].map((href) => (
            <a key={href} href={href} onClick={goto(href)} className="nav__link">
              {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <button className="btn btn--nav">Get Started</button>
        </div>

        <button className="nav__burger">
          <Icon name="menu" />
        </button>
      </div>
    </nav>
  );
};

/* ── Hero ────────────────────────────────────────────────────────────────── */
const Hero = () => (
  <section className="hero">
    <div className="hero__inner">
      <div className="hero__badge">
        <span className="hero__badge-dot" />
        New: Real-time sitemap sync
      </div>

      <h1 className="hero__heading">
        Build sitemaps visually<br />in minutes
      </h1>

      <p className="hero__sub">
        Drag, drop, and structure your website without complexity. Treat your digital
        architecture with the respect of a printed architectural blueprint.
      </p>

      <div className="hero__ctas">
        <button className="btn btn--primary">Start building for free</button>
        <button className="btn btn--outline">View example</button>
      </div>
    </div>

    <div className="hero__img-wrap">
      <div className="hero__img-card">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3BL0_AqHdWbAkXpneh3WyqwSkJAWr4KgS5KMsOJPszDqy_aUg-JIcqg6X_mF2nMyqPi0-5dVwSWg3n_X5CD3Uhru27ST72eRWpRm3GgwmHtBhMPolNllJgBUgNIG9Y3h7GtSDiNOYkQ8uQwepIS8vOon9QMIS72VJjwlOxT6NpHDKZHDOvANOW9zYgLksTD5x2M5GUmRsO0gds2uvqbWR_dZAtCCUGozXZa57EkbHMOVFBCJEsVWSSOob6zAeN863dGlZn5KeyxF"
          alt="Dark Sitemap Visualization"
        />
        <div className="hero__img-deco">
          <Icon name="grid_view" className="icon--xl" />
        </div>
      </div>
    </div>
  </section>
);

/* ── Features ────────────────────────────────────────────────────────────── */
const Features = () => (
  <section className="section" id="features">
    <div className="wrap">
      <div className="section__hd">
        <p className="eyebrow">Precision Tools</p>
        <h2 className="headline" style={{ marginTop: 8 }}>Everything you need to architect</h2>
      </div>

      <div className="bento">
        {/* Large */}
        <div className="fcard fcard--lg">
          <div className="fcard__blob" />
          <div className="fcard__body">
            <Icon name="drag_indicator" className="fcard__icon icon--lg" />
            <h3 className="fcard__title">Drag-and-drop builder</h3>
            <p className="fcard__desc--serif">
              Intuitive canvas where your thoughts take shape. Move entire branches of your
              hierarchy with one fluid motion.
            </p>
          </div>
        </div>

        {/* Medium */}
        <div className="fcard fcard--md">
          <div className="fcard__blob" />
          <div className="fcard__body">
            <Icon name="auto_awesome" className="fcard__icon icon--lg" />
            <h3 className="fcard__title">Auto-layout generation</h3>
            <p className="fcard__desc--serif">
              Messy maps become clear diagrams instantly. Our algorithm balances your tree for
              optimal visual hierarchy.
            </p>
          </div>
        </div>

        {/* Small ×3 */}
        {[
          { icon: 'ios_share', title: 'Multi-Format Export',     desc: 'XML for devs, PNG/PDF for stakeholders.' },
          { icon: 'group',     title: 'Real-time Collaboration', desc: "Work together like you're in the same studio.", alt: true },
          { icon: 'history',   title: 'Version History',         desc: 'Never lose a draft. Roll back with one click.' },
        ].map(({ icon, title, desc, alt }) => (
          <div key={title} className={`fcard fcard--sm${alt ? ' fcard--alt' : ''}`}>
            <Icon name={icon} className="fcard__icon icon--lg" />
            <h4 className="fcard__title fcard__title--sm">{title}</h4>
            <p className="fcard__desc">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── How it works ────────────────────────────────────────────────────────── */
const HowItWorks = () => (
  <section className="section section--gray">
    <div className="wrap">
      <div className="section__hd section__hd--center">
        <h2 className="headline">Workflow simplicity</h2>
        <p className="section__sub">Three steps from chaos to structural clarity.</p>
      </div>

      <div className="steps">
        {[
          { n: '1', title: 'Add pages',         desc: 'Bulk import list or manually add individual nodes to your canvas.' },
          { n: '2', title: 'Drag to structure', desc: 'Visually define parent-child relationships and page priorities.' },
          { n: '3', title: 'Export or share',   desc: 'Send a secure link to your team or download assets for your dev sprint.' },
        ].map(({ n, title, desc }) => (
          <div key={n} className="step">
            <div className="step__num">{n}</div>
            <h4 className="step__title">{title}</h4>
            <p className="step__desc">{desc}</p>
          </div>
        ))}
        <div className="steps__line" />
      </div>
    </div>
  </section>
);

/* ── Use cases ───────────────────────────────────────────────────────────── */
const UseCases = () => (
  <section className="section">
    <div className="wrap">
      <div className="use-cases">
        <div className="use-cases__col">
          <h2 className="headline" style={{ marginBottom: 32 }}>Built for the modern web workforce</h2>

          {[
            { icon: 'palette',    role: 'UX Designers',     desc: 'Map user journeys and information architecture before touching Figma.' },
            { icon: 'assignment', role: 'Product Managers', desc: 'Scope MVPs and organize features into logical page hierarchies.' },
            { icon: 'code',       role: 'Developers',       desc: 'Auto-generate XML sitemaps for SEO and structure clean codebase routing.' },
          ].map(({ icon, role, desc }) => (
            <div key={role} className="use-case">
              <div className="use-case__icon"><Icon name={icon} /></div>
              <div>
                <h4 className="use-case__role">{role}</h4>
                <p className="use-case__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="use-cases__col">
          <div className="mock-wrap">
            <div className="mock-card">
              <div className="mock-line" style={{ width: 128 }} />
              <div className="mock-indent">
                <div className="mock-line mock-line--thin" style={{ width: 192 }} />
                <div className="mock-line mock-line--thin mock-line--dim" style={{ width: 160 }} />
                <div className="mock-indent">
                  <div className="mock-line mock-line--thin mock-line--indigo" style={{ width: 128 }} />
                  <div className="mock-line mock-line--thin" style={{ width: 144 }} />
                </div>
              </div>
            </div>
            <div className="mock-blob mock-blob--tr" />
            <div className="mock-blob mock-blob--bl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── Templates ───────────────────────────────────────────────────────────── */
const TEMPLATES = [
  {
    title: 'SaaS Website', desc: 'Marketing, pricing, and app dashboard structures.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFsHjpeS03uLBIUoDNJ07dV0vd053kNsp6fFQAXR9-CiPhMaL4fD8NICCKgjq7BJv6WUK_NBEosBPVTj-wuQ27f3vcC9o8FBVIkdpObev9vQMElBo98h2k03crNOiVi1hy68eQwxZULbb2heL1avG_cB53ev7YpTeVdj6igJt4YflLNwLV0e50x7DJI8UOJr7_Ck9uRsHJ1esVFCEXoex7xjaauNzULz1AbRaWxFYO3aBIxslCj53MzfRLIFgrueIgvcsxFYCoN3FZ',
  },
  {
    title: 'E-commerce', desc: 'Complex product hierarchies and checkout flows.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIb5rNdGUg9wEOFUKJpGAFlv0ydOp6Y7E6il1kdqtoJ3Ab3Whs1B152GsmVKoUAPMnIBZV5MHe9sXyjbR2qUsO5a56_79dS5NIWTHFQ-3e7MD0t8GJCXwsHXSHiLgxQ6d1LT4mS16AqY2PHI0OcHZZXsLdQ4ks3N4bpdZATELY1PIgtRPDWvc9HJi8ezU3Sm3kbKjzKevmuLkd3bh95L-IEgHo-ZWyUx129NTZorTHo8oXD2QWcCwRgXh4Yz-pGNjcgNPauX9FvTd1',
  },
  {
    title: 'Portfolio', desc: 'Case studies, about pages, and gallery layouts.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4HepzISBZcDUG0QoTGsj-7wrLxhJPToVHBY7JCqJNHgungzPMFtUPH559VUHYDFUqL8mjTVp1sg3bHzGPDnw3mLCoJUbm9GZwRD57V3e3w7Ps93Em4GHLyKnOhVO1wmQ06YZeQDBfmp1VwWndpOfp0KtQO85c9CfCjf3kMncHz8eQdrtRXm_2x8r_OXdMKwM8nUYNx0xnwqGL4x4WphBudYGXCooPnN7an_H1z-8xqphp6uiQ07bg5-QF2AR3Bt86j7lmmFHDiCpd',
  },
  {
    title: 'Blog', desc: 'Archive layouts, tag structures, and article templates.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbPD2xJnN-h4q2Tue9hupDTbFJ_XimTdm2B_4yI77XD4KpjEtBGe8Oj2g4JCjy8iZdcLv0EH8Ax-iTTpeQLBrw0vImPIW6G2tyqhf1Czzr5-uBnQFz9_U-jHGyxQwmu0OXqmgT3MM4qZfle2ZDrNZW2P1IjdiDNmMwrvg9c9nonKranqj3tdFJLeNOLU5RR8IvRiLoHlUvHEHQo3YsH0s8kEHAL7MP-RdtP0OhdJm-2WjD3zRn5UrosRtfQlSggcLcijRk2hxcgjh_',
  },
];

const Templates = () => (
  <section className="section section--white" id="templates">
    <div className="wrap">
      <div className="tpl-header">
        <div>
          <h2 className="headline">Starting points for every project</h2>
          <p className="section__sub" style={{ marginTop: 8 }}>Professional blueprints to accelerate your workflow.</p>
        </div>
        <button className="btn--text">
          Browse all 50+ templates <Icon name="arrow_forward" />
        </button>
      </div>

      <div className="tpl-grid">
        {TEMPLATES.map(({ title, desc, src }) => (
          <div key={title} className="tpl-card">
            <div className="tpl-card__thumb">
              <img src={src} alt={title} />
            </div>
            <h4 className="tpl-card__title">{title}</h4>
            <p className="tpl-card__desc">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Integrations ────────────────────────────────────────────────────────── */
const Integrations = () => (
  <section className="section section--border-b">
    <div className="wrap">
      <div className="section__hd section__hd--center">
        <h2 className="headline">Works where you do</h2>
      </div>
      <div className="integrations">
        {[
          { icon: 'integration_instructions', label: 'Figma'   },
          { icon: 'notes',                    label: 'Notion'  },
          { icon: 'language',                 label: 'Webflow' },
          { icon: 'description',              label: 'XML'     },
        ].map(({ icon, label }) => (
          <div key={label} className="integration">
            <Icon name={icon} className="icon--lg icon--indigo" />
            {label}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── FAQ ─────────────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
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

const FAQ = () => (
  <section className="section">
    <div className="wrap--sm">
      <h2 className="headline" style={{ textAlign: 'center', marginBottom: 64 }}>
        Frequently Asked Questions
      </h2>
      {FAQ_ITEMS.map(({ q, a, defaultOpen }, i) => (
        <details key={i} className="faq-details" open={defaultOpen || undefined}>
          <summary className="faq-summary">
            {q}
            <Icon name="expand_more" />
          </summary>
          <p className="faq-answer">{a}</p>
        </details>
      ))}
    </div>
  </section>
);

/* ── CTA ─────────────────────────────────────────────────────────────────── */
const CTA = () => (
  <section className="cta">
    <div className="wrap--sm">
      <h2 className="cta__heading">Start building your sitemap in minutes</h2>
      <p className="cta__sub">Join 20,000+ designers and architects building better foundations for the web.</p>
      <button className="btn btn--inverse">Get started free</button>
      <p className="cta__fine">No credit card required. Free tier forever.</p>
    </div>
  </section>
);

/* ── Footer ──────────────────────────────────────────────────────────────── */
const FooterComp = () => (
  <footer className="footer">
    <div className="wrap footer__inner">
      <div>
        <div className="footer__logo">Sitemap Builder</div>
        <p className="footer__tagline">© 2024 Sitemap Builder. Editorial Clarity for Web Architects.</p>
      </div>
      <div className="footer__links">
        <div>
          <span className="footer__col-heading">Product</span>
          <a href="#" className="footer__link">Privacy Policy</a>
          <a href="#" className="footer__link">Terms of Service</a>
        </div>
        <div>
          <span className="footer__col-heading">Support</span>
          <a href="#" className="footer__link">Help Center</a>
          <a href="#" className="footer__link">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

/* ── Page root ───────────────────────────────────────────────────────────── */
const LandingPage = () => (
  <>
    <Nav />
    <main style={{ paddingTop: 80 }}>
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
  </>
);

export default LandingPage;
