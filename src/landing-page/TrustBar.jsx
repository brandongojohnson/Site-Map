import React from 'react';

// Placeholder wordmarks — not real customers, just plausible SaaS-style names
// to establish the "trusted by teams" pattern.
const LOGOS = ['Northglade', 'Fieldnote', 'Kepler & Co', 'Loomwell', 'Atlas Studio', 'Haven Digital'];

const TrustBar = () => (
  <section className="relative pt-40 md:pt-56 pb-16 md:pb-20">
    <div className="max-w-5xl mx-auto px-6">
      <p className="text-center text-[12px] font-semibold uppercase tracking-widest text-[#B0AA9C] mb-8">
        Trusted by product & research teams at
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
        {LOGOS.map((name) => (
          <span
            key={name}
            className="text-[18px] font-bold text-[#C7C0B0] grayscale select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
