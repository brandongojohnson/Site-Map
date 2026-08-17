import React, { useState } from 'react';
import Reveal from './Reveal';

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
    a: 'Yes — sitemaps built from your results export to PNG and PDF, and Pro plans add Figma and CSV export.',
  },
  {
    q: 'Do I need a credit card to start?',
    a: 'No. The Free plan runs one active study with no payment details required — upgrade only when you need more.',
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10 dark:border-white/10 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="text-[15px] font-semibold text-[#131313] dark:text-[#F5F3F0]">{q}</span>
        <span className={`material-symbols-outlined text-[20px] text-black/40 dark:text-white/40 flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>
          add
        </span>
      </button>
      {open && (
        <p className="text-[14px] font-normal text-black/55 dark:text-white/55 leading-relaxed mt-4 max-w-2xl">{a}</p>
      )}
    </div>
  );
};

const FAQ = () => (
  <section className="relative py-24 md:py-32 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#131313]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        <Reveal>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-normal text-[#7161EF] dark:text-[#9B8FF5] mb-3">FAQ</p>
            <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#131313] dark:text-[#F5F3F0] leading-tight mb-4">
              Common questions.
            </h2>
            <p className="text-[14px] font-normal text-black/50 dark:text-white/50">
              Still have a question?{' '}
              <a href="#top" className="text-[#7161EF] dark:text-[#9B8FF5] hover:text-[#131313] dark:hover:text-[#F5F3F0] transition-colors">
                Ask us directly →
              </a>
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div>
            {QUESTIONS.map((item) => (
              <FAQItem key={item.q} {...item} />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FAQ;
