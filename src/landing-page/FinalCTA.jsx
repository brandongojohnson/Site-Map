import React from 'react';
import { PILL_PRIMARY_INVERSE, PILL_OUTLINE_INVERSE } from './buttonStyles';

const FinalCTA = ({ onGetStarted }) => (
  <section className="py-20 md:py-28 px-4 sm:px-6 border-t border-[#E4E4E7] dark:border-white/10">
    <div className="relative max-w-6xl mx-auto rounded-[28px] overflow-hidden bg-[#18181B] px-8 py-24 md:py-32 text-center">
      {/* Abstract organic texture, dark variant */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-[#7161EF]/25 blur-[110px]" />
        <div className="absolute -bottom-32 right-[6%] w-[440px] h-[440px] rounded-full bg-[#86868C]/25 blur-[110px]" />
        <div className="absolute top-10 right-[20%] w-[260px] h-[260px] rounded-full bg-[#9C9CA3]/15 blur-[90px]" />
      </div>

      <div className="relative">
        <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-white leading-tight max-w-2xl mx-auto mb-6">
          Turn user research into clear structure.
        </h2>
        <p className="text-[16px] md:text-[18px] font-normal text-white/70 max-w-lg mx-auto mb-10">
          Free to start. No credit card, no IT ticket — just a link and a deck of cards.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onGetStarted} className={`${PILL_PRIMARY_INVERSE} px-8 py-4 text-[15px]`}>
            Start for free
          </button>
          <button
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${PILL_OUTLINE_INVERSE} px-8 py-4 text-[15px]`}
          >
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
