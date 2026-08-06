import React from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';

const FinalCTA = ({ onGetStarted }) => (
  <section className="py-20 md:py-28 px-4 sm:px-6 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#131313]">
    <div className="relative max-w-6xl mx-auto rounded-[28px] overflow-hidden bg-[#FAFAFA] border border-black/10 dark:bg-white/[0.03] dark:border-white/10 px-8 py-24 md:py-32 text-center">
      {/* Abstract organic texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-[#7161EF]/20 blur-[110px]" />
        <div className="absolute -bottom-32 right-[6%] w-[440px] h-[440px] rounded-full bg-[#5E6EEF]/15 blur-[110px]" />
      </div>

      <div className="relative">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] dark:text-[#9B8FF5] mb-6">
          Get started
        </p>
        <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-[#131313] dark:text-[#F5F3F0] leading-tight max-w-2xl mx-auto mb-6">
          Turn user research into clear structure.
        </h2>
        <p className="text-[16px] md:text-[18px] font-normal text-black/60 dark:text-white/60 max-w-lg mx-auto mb-10">
          Free to start. No credit card, no IT ticket — just a link and a deck of cards.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onGetStarted} className={`${PILL_PRIMARY} px-8 py-4 text-[15px]`}>
            Start for free
          </button>
          <button
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${PILL_OUTLINE} px-8 py-4 text-[15px]`}
          >
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
