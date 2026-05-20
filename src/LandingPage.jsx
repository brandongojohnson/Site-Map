import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Check, ArrowRight, BookOpen, Users, Download, Layers, Clock, Upload } from 'lucide-react';

/* ─── Shared layout constants ──────────────────────────────────────────────── */
const READING_WIDTH = 'max-w-[740px]';
const WIDE_WIDTH    = 'max-w-7xl';

/* ─── Small reusable pieces ─────────────────────────────────────────────────── */
const Eyebrow = ({ children }) => (
  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-4">
    {children}
  </p>
);

const GreenPill = ({ children, large = false }) => (
  <a
    href="#"
    className={`inline-flex items-center gap-2 bg-tertiary text-white font-sans font-medium rounded-full hover:opacity-90 transition-opacity no-underline
      ${large ? 'text-[15px] px-6 py-3' : 'text-[14px] px-5 py-[9px]'}`}
  >
    {children}
  </a>
);

const OutlinePill = ({ children }) => (
  <a
    href="#"
    className="inline-flex items-center gap-2 border border-on-surface text-on-surface font-sans font-medium text-[14px] px-5 py-[9px] rounded-full hover:bg-surface-gray transition-colors no-underline"
  >
    {children}
  </a>
);

/* ─── Feature card (Medium "article row" style) ─────────────────────────────── */
const FeatureRow = ({ icon: Icon, title, description, index }) => (
  <div className="flex items-start gap-6 py-8 border-b border-border-light last:border-0">
    {/* Thumbnail / icon block — like an article image thumbnail */}
    <div className="flex-shrink-0 w-16 h-16 bg-surface-gray rounded-sm flex items-center justify-center">
      <Icon className="w-7 h-7 text-on-surface-variant" strokeWidth={1.5} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-1">
        0{index + 1}
      </p>
      <h3 className="font-serif font-bold text-[20px] leading-[28px] text-on-surface mb-2">
        {title}
      </h3>
      <p className="font-serif text-[16px] leading-[26px] text-on-surface-variant">
        {description}
      </p>
    </div>
  </div>
);

/* ─── Use-case card (horizontal card row, Medium recommendation style) ──────── */
const UseCaseCard = ({ role, use, tag }) => (
  <div className="flex items-start gap-5 py-6 border-b border-border-light last:border-0">
    <div className="flex-shrink-0 mt-1">
      <span className="inline-block font-sans text-[11px] font-semibold uppercase tracking-widest text-tertiary border border-tertiary/30 bg-tertiary/5 px-2 py-0.5 rounded-sm">
        {tag}
      </span>
    </div>
    <div>
      <h3 className="font-serif font-bold text-[18px] leading-[26px] text-on-surface mb-1">{role}</h3>
      <p className="font-serif text-[15px] leading-[24px] text-on-surface-variant">{use}</p>
    </div>
  </div>
);

/* ─── Main component ─────────────────────────────────────────────────────────── */
const LandingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const features = [
    { icon: Layers,    title: 'Drag-and-Drop Simplicity',   description: 'Arrange pages by dragging. The hierarchy snaps into place as you work — no manual fiddling required.' },
    { icon: BookOpen,  title: 'Intelligent Auto-Layout',     description: 'Let the engine arrange your pages automatically, or override it freely with manual positioning.' },
    { icon: Download,  title: 'Multiple Export Formats',     description: 'Export as XML for search engines, PNG for slide decks, or PDF for stakeholder handoffs.' },
    { icon: Users,     title: 'Real-Time Collaboration',     description: 'Teammates join your canvas live. Leave threaded comments directly on individual pages.' },
    { icon: Upload,    title: 'Smart URL Import',            description: 'Paste any live URL and we generate a working sitemap from the existing structure automatically.' },
    { icon: Clock,     title: 'Persistent Version History',  description: 'Every save is a checkpoint. Name versions, compare them, and roll back in one click.' },
  ];

  const useCases = [
    { tag: 'Design',   role: 'UX Designers',       use: 'Lay out information architecture before a single wireframe is drawn.' },
    { tag: 'Product',  role: 'Product Managers',   use: 'Map feature scope and user journeys without touching Figma.' },
    { tag: 'Dev',      role: 'Developers',          use: 'Document endpoints, schemas, and system topology in a visual tree.' },
    { tag: 'Agency',   role: 'Agencies',            use: 'Deliver polished site structure proposals clients can actually read.' },
  ];

  const faqs = [
    {
      q: 'Can I import an existing website?',
      a: "Yes. Paste any URL and we'll crawl the structure and generate a starting sitemap you can refine.",
    },
    {
      q: 'Is technical experience required?',
      a: "Not at all. Drag pages into place, name them, and nest them. That's the entire workflow.",
    },
    {
      q: 'Can teams collaborate in real time?',
      a: 'Completely. Multiple editors, live presence indicators, and threaded comments per page.',
    },
    {
      q: 'What formats can I export?',
      a: 'XML (SEO), PNG (presentations), PDF (print), and shareable live links for stakeholder review.',
    },
    {
      q: 'How is my data protected?',
      a: 'Encrypted at rest and in transit. Granular per-member permissions on every project.',
    },
  ];

  return (
    <div className="bg-surface-lowest min-h-screen">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 px-6">
        <div className={`${READING_WIDTH} mx-auto`}>
          <Eyebrow>Visual site planning · Built for teams</Eyebrow>

          <h1 className="font-serif font-bold text-[48px] sm:text-[56px] leading-[1.1] tracking-[-0.02em] text-on-surface mb-6">
            Build your site structure the way you think.
          </h1>

          <p className="font-serif text-[20px] leading-[32px] text-on-surface-variant mb-10 max-w-[600px]">
            Sitemap Builder is the focused canvas for information architecture.
            Drag pages into hierarchy, collaborate live with your team,
            and export anywhere — no setup, no bloat.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <GreenPill large>
              Start building free
              <ArrowRight className="w-4 h-4" />
            </GreenPill>
            <OutlinePill>See an example</OutlinePill>
          </div>

          <p className="font-sans text-[13px] text-text-muted">
            Free for personal projects. No credit card required.
          </p>
        </div>
      </section>

      {/* ── Hero canvas placeholder — full reading-width, tall ─────────────── */}
      <div className={`${READING_WIDTH} mx-auto px-6 mb-20`}>
        <div className="w-full aspect-[16/9] bg-surface-gray border border-border-light rounded flex items-center justify-center">
          <div className="text-center">
            <p className="font-sans text-[11px] uppercase tracking-widest text-text-muted mb-2">Interactive Canvas</p>
            <p className="font-serif text-[16px] text-on-surface-variant">Drag, nest, and export your site structure</p>
          </div>
        </div>
      </div>

      {/* ── Hairline divider ───────────────────────────────────────────────── */}
      <div className="border-t border-border-light" />

      {/* ── Features — article-row layout ─────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className={`${READING_WIDTH} mx-auto`}>
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="font-serif font-bold text-[32px] leading-[40px] tracking-[-0.01em] text-on-surface mb-12">
            Everything serious work demands.
          </h2>

          <div>
            {features.map((f, idx) => (
              <FeatureRow key={idx} {...f} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* ── Pull-quote interlude ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-surface-gray">
        <div className={`${READING_WIDTH} mx-auto`}>
          <blockquote className="border-l-[3px] border-tertiary pl-6">
            <p className="font-serif font-bold text-[28px] sm:text-[34px] leading-[1.25] tracking-[-0.01em] text-on-surface">
              "Good information architecture is invisible. It just feels right. Sitemap Builder helps you find that shape before you build a single page."
            </p>
            <footer className="mt-6 font-sans text-[13px] text-text-muted">
              — Sarah K., Lead UX Designer at Vercel
            </footer>
          </blockquote>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* ── How it works ───────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className={`${READING_WIDTH} mx-auto`}>
          <Eyebrow>Process</Eyebrow>
          <h2 className="font-serif font-bold text-[32px] leading-[40px] tracking-[-0.01em] text-on-surface mb-14">
            Three steps. That really is it.
          </h2>

          <div className="space-y-14">
            {[
              {
                num: '1',
                title: 'Add your pages.',
                body: 'Name every page your site needs. The canvas is a blank slate — start anywhere.',
              },
              {
                num: '2',
                title: 'Drag to build hierarchy.',
                body: 'Nest pages under parents by dragging. Reorder freely. The structure is always visual.',
              },
              {
                num: '3',
                title: 'Export or share.',
                body: 'Download XML, PNG, or PDF. Or share a live link for teammates to review in context.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-8 items-start">
                <span className="font-serif font-bold text-[56px] leading-none text-tertiary flex-shrink-0 translate-y-[-8px]">
                  {num}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-[22px] leading-[30px] text-on-surface mb-2">
                    {title}
                  </h3>
                  <p className="font-serif text-[17px] leading-[28px] text-on-surface-variant">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* ── Use cases — recommendation-row style ───────────────────────────── */}
      <section className="py-16 px-6">
        <div className={`${READING_WIDTH} mx-auto`}>
          <Eyebrow>Who it's for</Eyebrow>
          <h2 className="font-serif font-bold text-[32px] leading-[40px] tracking-[-0.01em] text-on-surface mb-10">
            For every team that ships.
          </h2>

          <div>
            {useCases.map((item, idx) => (
              <UseCaseCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* ── Collaboration ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className={`${READING_WIDTH} mx-auto`}>
          <Eyebrow>Teamwork</Eyebrow>
          <h2 className="font-serif font-bold text-[32px] leading-[40px] tracking-[-0.01em] text-on-surface mb-8">
            Built for people who work together.
          </h2>

          <p className="font-serif text-[19px] leading-[32px] text-on-surface-variant mb-10">
            Multiple teammates, one canvas, zero conflicts. See who's editing what in real time. Leave threaded comments on any page. Audit every change with full history.
          </p>

          <ul className="space-y-3 mb-12">
            {[
              'Live presence — see teammates cursors as they move',
              'Threaded comments pinned to individual pages',
              'Role-based access — editor, commenter, or viewer',
              'Named version checkpoints for easy rollback',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-tertiary flex-shrink-0 mt-1" strokeWidth={2.5} />
                <span className="font-serif text-[17px] leading-[27px] text-on-surface">{item}</span>
              </li>
            ))}
          </ul>

          {/* Collaboration mockup */}
          <div className="w-full aspect-[16/9] bg-surface-gray border border-border-light rounded flex items-center justify-center">
            <p className="font-sans text-[12px] text-text-muted uppercase tracking-widest">Team collaboration preview</p>
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* ── Export & integrations ──────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className={`${READING_WIDTH} mx-auto`}>
          <Eyebrow>Export &amp; Integrations</Eyebrow>
          <h2 className="font-serif font-bold text-[32px] leading-[40px] tracking-[-0.01em] text-on-surface mb-10">
            Your sitemap, your format.
          </h2>

          {/* Export grid — Medium card grid style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {[
              { format: 'XML', desc: 'For SEO and CMS platforms. Submit directly to Google Search Console.' },
              { format: 'PNG', desc: 'High-resolution image for slide decks, Notion docs, or Confluence.' },
              { format: 'PDF', desc: 'Print-ready, paginated document for stakeholder sign-off.' },
            ].map(({ format, desc }) => (
              <div key={format} className="border border-border-light rounded p-6 hover:border-outline-variant transition-colors">
                <p className="font-serif font-bold text-[28px] text-on-surface mb-2">{format}</p>
                <p className="font-sans text-[13px] leading-[20px] text-on-surface-variant">{desc}</p>
              </div>
            ))}
          </div>

          {/* Integrations inline list — sparse like Medium's tag list */}
          <div className="border-t border-border-light pt-10">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-6">
              Integrations
            </p>
            <div className="flex flex-wrap gap-3">
              {['Figma', 'Notion', 'Webflow', 'Confluence', 'Jira'].map((tool) => (
                <span
                  key={tool}
                  className="inline-block border border-border-light rounded-full px-4 py-1.5 font-sans text-[13px] text-on-surface hover:border-outline-variant transition-colors cursor-pointer"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className={`${READING_WIDTH} mx-auto`}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-serif font-bold text-[32px] leading-[40px] tracking-[-0.01em] text-on-surface mb-10">
            Common questions.
          </h2>

          <div>
            {faqs.map(({ q, a }, idx) => (
              <div key={idx} className="border-b border-border-light">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left flex items-start justify-between gap-6 py-6 group"
                >
                  <span className="font-serif font-bold text-[18px] leading-[27px] text-on-surface group-hover:text-tertiary transition-colors">
                    {q}
                  </span>
                  <span className="font-sans text-[18px] text-text-muted flex-shrink-0 mt-0.5 select-none">
                    {expandedFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === idx && (
                  <p className="font-serif text-[17px] leading-[28px] text-on-surface-variant pb-6">
                    {a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* ── Final CTA — Medium's centered sign-up block ────────────────────── */}
      <section className="py-24 px-6">
        <div className={`${READING_WIDTH} mx-auto text-center`}>
          <h2 className="font-serif font-bold text-[40px] sm:text-[48px] leading-[1.1] tracking-[-0.02em] text-on-surface mb-5">
            Start building today.
          </h2>
          <p className="font-serif text-[19px] leading-[30px] text-on-surface-variant mb-10 max-w-md mx-auto">
            Free for personal projects. Team plans from $12 / month.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <GreenPill large>
              Get started free
              <ArrowRight className="w-4 h-4" />
            </GreenPill>
            <OutlinePill>View pricing</OutlinePill>
          </div>

          <p className="font-sans text-[13px] text-text-muted mt-8">
            Questions?{' '}
            <a href="#" className="text-tertiary hover:underline">Talk to sales</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
