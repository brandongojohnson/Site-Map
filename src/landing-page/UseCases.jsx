import React from 'react';
import './sharedStyles.css';
import './UseCases.css';

const ROLES = [
  {
    icon: 'design_services',
    title: 'UX Designers',
    desc: 'Turn stakeholder opinions into a structure backed by real user behavior.',
    example: 'e.g. reorganizing a nav that "feels off" but no one can say why',
  },
  {
    icon: 'travel_explore',
    title: 'Researchers',
    desc: 'Run rigorous open, closed, or hybrid sorts without wrangling spreadsheets.',
    example: 'e.g. a 40-participant closed sort analyzed in an afternoon',
  },
  {
    icon: 'checklist',
    title: 'Product Managers',
    desc: "Align engineering and design on IA before a single ticket gets written.",
    example: 'e.g. sign-off on a sitemap before sprint planning',
  },
  {
    icon: 'apartment',
    title: 'Agencies',
    desc: "Show clients the reasoning behind a sitemap, not just the deliverable.",
    example: 'e.g. a client-ready results link, no export required',
  },
  {
    icon: 'code',
    title: 'Developers',
    desc: 'Get a clear page hierarchy and routes before scaffolding a single component.',
    example: 'e.g. route names and nesting settled before sprint one',
  },
];

const UseCases = () => (
  <section className="section-band">
    <div className="section-band-inner">
      <div className="usecases-header">
        <p className="section-eyebrow">Who it's for</p>
        <h2 className="section-heading usecases-section-title">Made for whoever owns the structure.</h2>
      </div>

      <div className="usecases-grid">
        {ROLES.map((role) => (
          <div key={role.title} className="usecases-card">
            <span className="usecases-icon-wrap">
              <span className="material-symbols-outlined usecases-icon">{role.icon}</span>
            </span>
            <h3 className="usecases-title">{role.title}</h3>
            <p className="usecases-desc">{role.desc}</p>
            <p className="usecases-example">{role.example}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;
