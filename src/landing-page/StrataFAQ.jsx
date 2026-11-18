import React, { useState } from 'react';

// Same questions and layout as the previous landing page FAQ (title left,
// questions right, "+" that rotates when open), in the Strata styling.
const QUESTIONS = [
  {
    q: 'How long does a card sort take to set up?',
    a: 'Most studies take a few minutes — add your cards, choose open, closed, or hybrid, and send the link. No spreadsheet templates or manual tallying required.',
  },
  {
    q: 'Do participants need an account to join?',
    a: "No. Anyone with the study link can join and sort — account creation is only required for the study's owner.",
  },
  {
    q: 'What is the difference between open, closed, and hybrid sorts?',
    a: 'Open sorts let participants create their own categories, closed sorts use categories you define, and hybrid sorts let them do both — start from your categories but add new ones as needed.',
  },
  {
    q: 'Can I export my sitemap?',
    a: 'Yes — sitemaps built from your results export to PNG and PDF, and Professional plans add Figma and CSV export.',
  },
  {
    q: 'Do I need a credit card to start?',
    a: 'No. The Starter plan is free and needs no payment details — upgrade only when you need more.',
  },
];

const FAQItem = ({ q, a, id }) => {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  return (
    <div className="border-b border-white/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="text-[15px] font-semibold text-white">{q}</span>
        <span
          aria-hidden="true"
          className={`material-symbols-outlined text-[20px] shrink-0 transition-transform duration-200 ${
            open ? 'rotate-45 text-[#2997ff]' : 'text-zinc-400'
          }`}
        >
          add
        </span>
      </button>
      {open && (
        <p id={panelId} className="mt-4 max-w-2xl text-[14px] leading-relaxed text-zinc-400">
          {a}
        </p>
      )}
    </div>
  );
};

const StrataFAQ = () => (
  <section id="faq" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-4">
          [ FAQ ]
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.1]">
          Common questions.
        </h2>
      </div>
      <div className="md:col-span-2">
        {QUESTIONS.map((item, i) => (
          <FAQItem key={item.q} {...item} id={i} />
        ))}
      </div>
    </div>
  </section>
);

export default StrataFAQ;
