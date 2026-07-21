import React, { useState } from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import { GLASS_PANEL } from './glassStyles';
import ScatteredIcon from './ScatteredIcon';

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
    <section id="pricing" className="relative py-24 md:py-32 border-t border-[#E4E4E7] dark:border-white/10">
      <ScatteredIcon icon="payments" className="text-[20px] opacity-[0.08]" style={{ top: '10%', left: '10%', transform: 'rotate(-10deg)' }} />
      <ScatteredIcon icon="workspace_premium" className="text-[18px] opacity-[0.1]" style={{ top: '6%', right: '14%', transform: 'rotate(12deg)' }} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] mb-3">
            Pricing
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#18181B] dark:text-[#F5F3F0] mb-4">
            Simple pricing, room to grow.
          </h2>
          <p className="text-[16px] font-normal text-[#47474D] dark:text-[#B8B2C4]">
            Start free. Upgrade when your research program needs more than one study at a time.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-14">
          <span className={`text-[14px] font-normal ${!yearly ? 'text-[#18181B] dark:text-[#F5F3F0]' : 'text-[#9C9CA3] dark:text-[#6B6578]'}`}>
            Monthly
          </span>
          <button
            onClick={() => setYearly((y) => !y)}
            className="relative w-12 h-7 rounded-full bg-[#18181B] dark:bg-white/20 flex-shrink-0"
            aria-label="Toggle yearly billing"
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${
                yearly ? 'left-6' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-[14px] font-normal ${yearly ? 'text-[#18181B] dark:text-[#F5F3F0]' : 'text-[#9C9CA3] dark:text-[#6B6578]'}`}>
            Yearly
          </span>
          <span className="text-[11px] font-semibold text-[#7161EF] bg-[#EEECFD] dark:bg-[#241F3D] rounded-full px-2.5 py-1">
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
                    ? 'bg-white/75 dark:bg-white/[0.09] backdrop-blur-2xl border-2 border-[#18181B] dark:border-white/40 shadow-[0_30px_60px_-25px_rgba(23,21,18,0.25)] dark:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] md:-translate-y-3'
                    : GLASS_PANEL
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wide bg-[#18181B] dark:bg-[#F5F3F0] text-white dark:text-[#121016] rounded-full px-3.5 py-1.5">
                    Most popular
                  </span>
                )}

                <h3 className="text-[18px] font-semibold text-[#18181B] dark:text-[#F5F3F0] mb-1.5">{t.name}</h3>
                <p className="text-[13px] font-normal text-[#86868C] dark:text-[#9891A8] mb-6 leading-relaxed">{t.tagline}</p>

                <div className="flex items-baseline gap-1 mb-7">
                  <span className="text-[40px] font-bold tracking-tight text-[#18181B] dark:text-[#F5F3F0]">
                    ${price}
                  </span>
                  <span className="text-[13px] font-normal text-[#9C9CA3] dark:text-[#6B6578]">/ month{yearly && price > 0 ? ', billed yearly' : ''}</span>
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
                      <span className="material-symbols-outlined text-[16px] text-[#7161EF] mt-0.5">
                        check
                      </span>
                      <span className="text-[13.5px] font-normal text-[#47474D] dark:text-[#B8B2C4] leading-relaxed">{f}</span>
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
