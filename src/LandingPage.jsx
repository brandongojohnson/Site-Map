import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { Check, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const features = [
    {
      title: 'Drag-and-Drop Simplicity',
      description: 'Organize your site structure with intuitive visual interactions. No learning curve.',
    },
    {
      title: 'Intelligent Auto-Layout',
      description: 'Let the system arrange your pages automatically or take full manual control.',
    },
    {
      title: 'Multiple Export Formats',
      description: 'Export as XML for search engines, PNG for presentations, or PDF for print.',
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Work with your team simultaneously. Comments and version history included.',
    },
    {
      title: 'Smart Imports',
      description: 'Point to any website and automatically generate a sitemap of its structure.',
    },
    {
      title: 'Persistent History',
      description: 'Every change is tracked. Return to any previous version at any time.',
    },
  ];

  const faqs = [
    {
      question: 'Can I import an existing website?',
      answer:
        "Yes. Paste any URL into Sitemap Builder and we'll analyze the site structure, then generate a complete sitemap you can refine.",
    },
    {
      question: 'Is technical experience required?',
      answer:
        "Not at all. The interface is designed for anyone. Drag pages into place, organize them visually, and you're done.",
    },
    {
      question: 'Can teams collaborate live?',
      answer:
        'Completely. Multiple team members can edit the same sitemap simultaneously. Comments and real-time updates keep everyone aligned.',
    },
    {
      question: 'What export options are available?',
      answer:
        'XML (for SEO), PNG (for design presentations), PDF (for print), and live shareable links (for interactive review).',
    },
    {
      question: 'How is my data protected?',
      answer:
        'All sitemaps are encrypted at rest and in transit. Access controls let you set granular permissions per team member.',
    },
  ];

  return (
    <div className="bg-surface-lowest">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-page-margin">
        <div className="max-w-content mx-auto">
          <div className="mb-16">
            <h1 className="display-lg mb-8 leading-tight">
              Build your site structure visually.
            </h1>
            <p className="body-lg text-on-surface-variant mb-12 max-w-3xl">
              Sitemap Builder is the focused tool for creating, refining, and sharing your website's information architecture. Drag and drop pages into place. Collaborate with your team. Export anywhere.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary">
                Start building free
              </Button>
              <Button variant="secondary">
                View an example
              </Button>
            </div>

            <p className="text-label-md text-text-muted">
              Free for personal projects. Upgrade for team features.
            </p>
          </div>

          {/* Hero Visual */}
          <div className="bg-surface-gray border border-border-light rounded-lg p-16 sm:p-24 text-center min-h-96 flex items-center justify-center">
            <div className="text-on-surface-variant">
              <p className="text-label-md uppercase tracking-wider mb-4">Interactive Canvas</p>
              <p className="body-md">Visualize your site structure in real time</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* Features Section */}
      <section className="py-stack-xl px-page-margin">
        <div className="max-w-content mx-auto">
          <h2 className="headline-lg mb-16">Built for serious work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
            {features.map((feature, idx) => (
              <div key={idx} className="pb-stack-lg border-b border-border-light last:border-0">
                <h3 className="text-body-lg font-serif font-bold mb-3 text-on-surface">
                  {feature.title}
                </h3>
                <p className="body-md text-on-surface-variant leading-reading">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* How It Works */}
      <section className="py-stack-xl px-page-margin">
        <div className="max-w-content mx-auto">
          <h2 className="headline-lg mb-16">Three straightforward steps</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '1',
                title: 'Add your pages',
                desc: 'List every page your site needs. Give them clear, descriptive names.',
              },
              {
                num: '2',
                title: 'Organize the hierarchy',
                desc: 'Drag pages into parent sections. Nest them as deeply as your structure requires.',
              },
              {
                num: '3',
                title: 'Export and share',
                desc: 'Download in XML, PNG, or PDF. Share a live link for team feedback.',
              },
            ].map((step, idx) => (
              <div key={idx}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-display-lg font-bold text-tertiary">{step.num}</span>
                  <h3 className="text-body-lg font-serif font-bold">{step.title}</h3>
                </div>
                <p className="body-md text-on-surface-variant leading-reading">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* Use Cases */}
      <section className="py-stack-xl px-page-margin">
        <div className="max-w-content mx-auto">
          <h2 className="headline-lg mb-16">For teams of all kinds</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                role: 'UX Designers',
                use: 'Plan information architecture before design work begins.',
              },
              {
                role: 'Product Managers',
                use: 'Visualize product features and user flows in a clear hierarchy.',
              },
              {
                role: 'Developers',
                use: 'Document API structure or database schema relationships.',
              },
              {
                role: 'Agencies',
                use: 'Present site structure proposals to clients in professional layouts.',
              },
            ].map((item, idx) => (
              <div key={idx} className="pb-8">
                <h3 className="text-body-lg font-serif font-bold mb-2 text-on-surface">
                  {item.role}
                </h3>
                <p className="body-md text-on-surface-variant">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* Collaboration Section */}
      <section className="py-stack-xl px-page-margin bg-surface-gray">
        <div className="max-w-content mx-auto">
          <h2 className="headline-lg mb-12">Designed for teams</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="body-lg text-on-surface mb-8 leading-reading">
                Work together on the same sitemap simultaneously. Everyone sees changes in real-time. Leave feedback on individual pages. Track who changed what and when.
              </p>

              <ul className="space-y-4">
                {[
                  'Real-time collaborative editing',
                  'Inline comments on pages',
                  'Granular access permissions',
                  'Complete audit history',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-tertiary flex-shrink-0 mt-1" />
                    <span className="body-md text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-lowest border border-border-light rounded-lg p-12 min-h-96 flex items-center justify-center">
              <p className="text-on-surface-variant text-label-md">Collaboration Preview</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* Export Section */}
      <section className="py-stack-xl px-page-margin">
        <div className="max-w-content mx-auto">
          <h2 className="headline-lg mb-16">Export in any format</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                format: 'XML',
                use: 'Structured data for search engines and CMS platforms.',
              },
              {
                format: 'PNG',
                use: 'High-resolution image for presentations and documentation.',
              },
              {
                format: 'PDF',
                use: 'Print-ready document for client reviews and archives.',
              },
            ].map((item, idx) => (
              <div key={idx} className="pb-6 border-b border-border-light last:border-0">
                <h3 className="text-body-lg font-serif font-bold mb-2">{item.format}</h3>
                <p className="body-md text-on-surface-variant">{item.use}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-border-light">
            <h3 className="headline-lg mb-8">Integrations</h3>
            <p className="body-md text-on-surface-variant mb-8">
              Sitemap Builder integrates with the tools you already use.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {['Figma', 'Notion', 'Webflow'].map((tool, idx) => (
                <div
                  key={idx}
                  className="border border-border-light rounded-sm p-6 text-center"
                >
                  <p className="text-label-md font-sans text-on-surface">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* FAQ Section */}
      <section className="py-stack-xl px-page-margin">
        <div className="max-w-content mx-auto">
          <h2 className="headline-lg mb-16">Questions answered</h2>

          <div className="space-y-0">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="py-6 border-b border-border-light"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-start justify-between hover:text-tertiary transition-colors"
                >
                  <h3 className="text-body-lg font-serif font-bold">{faq.question}</h3>
                  <span className={`text-body-lg font-bold ml-4 transition-transform flex-shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>

                {expandedFaq === idx && (
                  <p className="body-md text-on-surface-variant mt-6 leading-reading">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border-light" />

      {/* Final CTA */}
      <section className="py-stack-xl px-page-margin">
        <div className="max-w-content mx-auto text-center">
          <h2 className="display-lg mb-8">
            Start building your sitemap today.
          </h2>
          <p className="body-lg text-on-surface-variant mb-12">
            Free for personal projects. No credit card required.
          </p>

          <Button variant="accent" className="inline-flex items-center gap-2">
            Get started
            <ArrowRight className="w-5 h-5" />
          </Button>

          <p className="text-label-md text-text-muted mt-12">
            Questions?{' '}
            <a href="#" className="text-tertiary hover:underline">
              Contact sales
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
