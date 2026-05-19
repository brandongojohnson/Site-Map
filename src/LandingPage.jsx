import React from 'react';
import {
  Zap,
  Layout,
  Download,
  Users,
  RotateCw,
  Upload,
  FileText,
  ChevronRight,
  MessageCircle,
  Link2,
  Lock,
  FileJson,
  Image,
} from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Section } from './components/Section';
import { FeatureGrid } from './components/FeatureGrid';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const LandingPage = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Drag-and-drop builder',
      description: 'Intuitive interface to organize pages and create hierarchy with ease',
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Auto-layout generation',
      description: 'Automatically arrange your sitemap with intelligent layout algorithms',
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Export anywhere',
      description: 'Download as XML, PNG, PDF or share via link',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Real-time collaboration',
      description: 'Invite team members and work together seamlessly',
    },
    {
      icon: <RotateCw className="w-6 h-6" />,
      title: 'Version history',
      description: 'Track changes and restore previous versions anytime',
    },
    {
      icon: <Upload className="w-6 h-6" />,
      title: 'Import site structure',
      description: 'Analyze existing websites to generate sitemaps automatically',
    },
  ];

  const useCases = [
    {
      title: 'UX Designers',
      description: 'Plan information architecture before starting design',
      color: 'from-blue-50 to-blue-100',
    },
    {
      title: 'Product Managers',
      description: 'Visualize product roadmap and feature hierarchy',
      color: 'from-purple-50 to-purple-100',
    },
    {
      title: 'Developers',
      description: 'Document API endpoints and database schema structure',
      color: 'from-orange-50 to-orange-100',
    },
    {
      title: 'Agencies',
      description: 'Present site structure to clients in clear visuals',
      color: 'from-emerald-50 to-emerald-100',
    },
  ];

  const templates = [
    { name: 'SaaS Website', pages: 12, preview: '🚀' },
    { name: 'E-commerce Platform', pages: 18, preview: '🛍️' },
    { name: 'Portfolio Site', pages: 8, preview: '🎨' },
    { name: 'Blog Platform', pages: 10, preview: '📝' },
  ];

  const integrations = [
    { name: 'Figma' },
    { name: 'Notion' },
    { name: 'Webflow' },
  ];

  const faqs = [
    {
      question: 'Can I import an existing website?',
      answer:
        'Yes! You can paste a URL and Sitemap Builder will analyze your site structure and automatically generate a sitemap. You can then customize it as needed.',
    },
    {
      question: 'Do I need technical experience?',
      answer:
        'Not at all. Sitemap Builder is designed for everyone. No coding knowledge required. The drag-and-drop interface is intuitive and easy to learn.',
    },
    {
      question: 'Can teams collaborate in real time?',
      answer:
        'Absolutely. Invite team members to your projects and see changes in real-time. Leave comments on nodes and maintain a shared version history.',
    },
    {
      question: 'What formats can I export to?',
      answer:
        'You can export your sitemap as XML (for SEO), PNG/PDF (for presentations), or share a live link that others can view and interact with.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Your data is encrypted and stored securely. We never share your sitemaps without permission. Teams can set granular access permissions.',
    },
  ];

  const collaborationFeatures = [
    { icon: Users, text: 'Real-time collaboration with multiple team members' },
    { icon: MessageCircle, text: 'Leave comments and feedback on specific nodes' },
    { icon: Link2, text: 'Share with custom permissions and access links' },
    { icon: Lock, text: 'Enterprise-grade security and data encryption' },
  ];

  const exportFormats = [
    { icon: FileJson, label: 'XML', desc: 'For SEO and search engines' },
    { icon: Image, label: 'PNG', desc: 'For presentations and documents' },
    { icon: FileText, label: 'PDF', desc: 'Print-ready and shareable' },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <span className="text-blue-600 font-medium text-sm">✨ Now with AI-powered import</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build sitemaps visually in minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Drag, drop, and structure your website without complexity. Collaborate with your team, export anywhere, and bring your site structure to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" icon className="px-8 py-4 text-base">
                Start building for free
              </Button>
              <Button variant="secondary" className="px-8 py-4 text-base">
                View example sitemap
              </Button>
            </div>
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-white relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
              <div className="relative flex flex-col items-center justify-center h-80 p-8">
                <div className="flex flex-col items-center gap-4 z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shadow-lg">
                    <Layout className="w-10 h-10 text-blue-600" />
                  </div>
                  <p className="text-gray-600 font-semibold text-lg">Interactive sitemap canvas</p>
                  <p className="text-gray-500 text-sm text-center max-w-xs">Drag, drop, and organize your website structure visually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section
        id="features"
        backgroundVariant="gray"
        title="Powerful features, simple to use"
        subtitle="Everything you need to create, organize, and share beautiful sitemaps"
      >
        <FeatureGrid features={features} />
      </Section>

      {/* How It Works */}
      <Section
        id="how-it-works"
        title="Three simple steps"
        subtitle="Get your sitemap done quickly"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              title: 'Add pages',
              description: 'Start by adding the pages your site needs. Organize them as you go or plan everything out first.',
              icon: <FileText className="w-8 h-8" />,
            },
            {
              step: '2',
              title: 'Drag to structure',
              description: 'Create hierarchy by dragging pages into parent sections. Visual feedback shows the structure immediately.',
              icon: <Zap className="w-8 h-8" />,
            },
            {
              step: '3',
              title: 'Export or share',
              description: 'Download in XML, PNG, or PDF. Or share a live link for real-time collaboration with your team.',
              icon: <Download className="w-8 h-8" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              {idx < 2 && (
                <div className="hidden md:block absolute top-20 -right-4 text-gray-300">
                  <ChevronRight className="w-8 h-8" />
                </div>
              )}
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section
        id="use-cases"
        backgroundVariant="gray"
        title="Built for every team"
        subtitle="From designers to developers to managers"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${useCase.color} p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow group cursor-pointer`}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {useCase.title}
              </h3>
              <p className="text-gray-700">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Templates Section */}
      <Section
        title="Start with a template"
        subtitle="Save time with pre-built sitemap templates"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center h-32 group-hover:bg-gray-200 transition-colors">
                <span className="text-4xl">{template.preview}</span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                <p className="text-sm text-gray-500">{template.pages} pages</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Collaboration Section */}
      <Section
        backgroundVariant="gray"
        title="Work together, seamlessly"
        subtitle="Invite teammates, discuss in real-time, and keep everyone aligned on your site structure."
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-4">
              {collaborationFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1">
                    <item.icon />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Users className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <p className="font-medium">Collaboration preview</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Export & Integrations */}
      <Section
        title="Export and integrate everywhere"
        subtitle="Multiple export formats and integration options to fit your workflow"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Export formats</h3>
            <div className="space-y-4">
              {exportFormats.map((format, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="text-blue-600 flex-shrink-0">
                    <format.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{format.label}</p>
                    <p className="text-sm text-gray-600">{format.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Integrations</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {integrations.map((integration, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all flex items-center justify-center h-24 group cursor-pointer"
                >
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {integration.name}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              More integrations coming soon. <span className="text-blue-600 font-medium cursor-pointer hover:underline">Request one →</span>
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        backgroundVariant="gray"
        title="Frequently asked questions"
        subtitle="Everything you need to know"
      >
        <FAQ items={faqs} />
      </Section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Start building your sitemap in minutes
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No credit card required. Free forever for personal projects.
          </p>

          <Button variant="primary" icon className="px-10 py-4 text-lg mx-auto mb-8">
            Get started free
          </Button>

          <p className="text-gray-600">
            Questions? <span className="text-blue-600 font-medium cursor-pointer hover:underline">Contact our sales team</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
