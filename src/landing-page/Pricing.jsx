import React, { useState } from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import { SURFACE_CARD } from './glassStyles';
import './sharedStyles.css';
import './Pricing.css';

const TIERS = [
  {
    name: 'Free',
    tagline: '1 study, basic card sort',
    monthly: 0,
    yearly: 0,
    cta: 'Start for free',
    features: ['1 active study', 'Open & closed card sorts', 'Up to 15 cards per study', 'Community support'],
  },
  {
    name: 'Pro',
    tagline: 'Unlimited studies, sitemap export, collaboration',
    monthly: 19,
    yearly: 15,
    cta: 'Start free trial',
    popular: true,
    features: [
      'Unlimited studies',
      'Sitemap export (PNG & PDF)',
      'Real-time collaboration',
      'Remote testing links',
      'Priority support',
    ],
  },
  {
    name: 'Team',
    tagline: 'Multi-project workspace, admin controls, exports',
    monthly: 49,
    yearly: 39,
    cta: 'Talk to sales',
    features: [
      'Everything in Pro',
      'Multi-project workspaces',
      'Admin & permission controls',
      'Export to Figma & CSV',
      'Dedicated onboarding',
    ],
  },
];

const Pricing = ({ onGetStarted }) => {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="section-band">
      <div className="section-band-inner">
        <div className="pricing-header">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-heading pricing-title">Simple pricing, room to grow.</h2>
          <p className="pricing-subtitle">
            Start free. Upgrade when your research program needs more than one study at a time.
          </p>
        </div>

        <div className="pricing-toggle-row">
          <span className={`pricing-toggle-label ${!yearly ? 'is-active' : ''}`}>Monthly</span>
          <button onClick={() => setYearly((y) => !y)} className="pricing-toggle-switch" aria-label="Toggle yearly billing">
            <span className={`pricing-toggle-thumb ${yearly ? 'is-yearly' : ''}`} />
          </button>
          <span className={`pricing-toggle-label ${yearly ? 'is-active' : ''}`}>Yearly</span>
          <span className="pricing-save-badge">Save 20%</span>
        </div>

        <div className="pricing-grid">
          {TIERS.map((t) => {
            const price = yearly ? t.yearly : t.monthly;
            return (
              <div key={t.name} className={`pricing-tier ${t.popular ? 'is-popular' : SURFACE_CARD}`}>
                {t.popular && <span className="pricing-popular-badge">Most popular</span>}

                <h3 className="pricing-tier-name">{t.name}</h3>
                <p className="pricing-tier-tagline">{t.tagline}</p>

                <div className="pricing-price-row">
                  <span className="pricing-price">${price}</span>
                  <span className="pricing-price-period">
                    / month{yearly && price > 0 ? ', billed yearly' : ''}
                  </span>
                </div>

                <button
                  onClick={onGetStarted}
                  className={`${t.popular ? PILL_PRIMARY : PILL_OUTLINE} pricing-cta-btn`}
                >
                  {t.cta}
                </button>

                <ul className="pricing-features">
                  {t.features.map((f) => (
                    <li key={f} className="pricing-feature">
                      <span className="material-symbols-outlined pricing-feature-icon">check</span>
                      <span className="pricing-feature-text">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
