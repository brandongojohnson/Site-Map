import React, { useState } from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import { SURFACE_CARD } from './glassStyles';

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
    <section id="pricing" className="relative py-24 md:py-32 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#131313]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] dark:text-[#9B8FF5] mb-3">
            Pricing
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#131313] dark:text-[#F5F3F0] mb-4">
            Simple pricing, room to grow.
          </h2>
          <p className="text-[16px] font-normal text-black/55 dark:text-white/55">
            Start free. Upgrade when your research program needs more than one study at a time.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-14">
          <span className={`text-[14px] font-normal ${!yearly ? 'text-[#131313] dark:text-[#F5F3F0]' : 'text-black/35 dark:text-white/35'}`}>
            Monthly
          </span>
          <button
            onClick={() => setYearly((y) => !y)}
            className="relative w-12 h-7 rounded-full bg-black/15 dark:bg-white/20 flex-shrink-0"
            aria-label="Toggle yearly billing"
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${
                yearly ? 'left-6' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-[14px] font-normal ${yearly ? 'text-[#131313] dark:text-[#F5F3F0]' : 'text-black/35 dark:text-white/35'}`}>
            Yearly
          </span>
          <span className="text-[11px] font-semibold text-[#7161EF] dark:text-[#9B8FF5] bg-[#EEECFD] dark:bg-[#241F3D] rounded-full px-2.5 py-1">
            Save 20%
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {TIERS.map((t) => {
            const price = yearly ? t.yearly : t.monthly;
            return (
              <div
                key={t.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  t.popular
                    ? 'bg-[#FAFAFA] border-2 border-[#7161EF]/30 shadow-[0_30px_60px_-25px_rgba(23,21,18,0.15)] dark:bg-white/[0.06] dark:border-white/30 dark:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] md:-translate-y-3'
                    : SURFACE_CARD
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wide bg-[#131313] text-white dark:bg-[#F5F3F0] dark:text-[#131313] rounded-full px-3.5 py-1.5">
                    Most popular
                  </span>
                )}

                <h3 className="text-[18px] font-semibold text-[#131313] dark:text-[#F5F3F0] mb-1.5">{t.name}</h3>
                <p className="text-[13px] font-normal text-black/50 dark:text-white/50 mb-6 leading-relaxed">{t.tagline}</p>

                <div className="flex items-baseline gap-1 mb-7">
                  <span className="text-[40px] font-bold tracking-tight text-[#131313] dark:text-[#F5F3F0]">
                    ${price}
                  </span>
                  <span className="text-[13px] font-normal text-black/35 dark:text-white/35">/ month{yearly && price > 0 ? ', billed yearly' : ''}</span>
                </div>

                <button
                  onClick={onGetStarted}
                  className={`${t.popular ? PILL_PRIMARY : PILL_OUTLINE} w-full py-3 text-[14px] mb-7`}
                >
                  {t.cta}
                </button>

                <ul className="space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[16px] text-[#7161EF] dark:text-[#9B8FF5] mt-0.5">
                        check
                      </span>
                      <span className="text-[13.5px] font-normal text-black/55 dark:text-white/55 leading-relaxed">{f}</span>
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
