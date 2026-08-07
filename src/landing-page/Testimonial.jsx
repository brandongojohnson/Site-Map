import React from 'react';

// Placeholder social proof — swap for a real quote once there's a customer
// to attribute one to. Left generic (role, not a fabricated name/company)
// rather than inventing a specific person or client.
const Testimonial = () => (
  <section className="relative py-24 md:py-32 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#131313]">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <p className="text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] dark:text-[#9B8FF5] mb-8">
        Research at Product Speed
      </p>
      <blockquote className="text-[22px] md:text-[28px] font-semibold tracking-tight text-[#131313] dark:text-[#F5F3F0] leading-snug mb-8">
        "Sortly cut what used to be a two-week card sort into an afternoon of setup and a
        results link we could hand straight to engineering."
      </blockquote>
      <p className="text-[14px] font-normal text-black/50 dark:text-white/50">Early access pilot, UX research team</p>
    </div>
  </section>
);

export default Testimonial;
