import React, { useState } from 'react';
import Reveal from './Reveal';
import './sharedStyles.css';
import './FAQ.css';

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
    <div className="faq-item">
      <button onClick={() => setOpen((o) => !o)} className="faq-item-btn">
        <span className="faq-item-question">{q}</span>
        <span className={`material-symbols-outlined faq-item-icon ${open ? 'is-open' : ''}`}>add</span>
      </button>
      {open && <p className="faq-item-answer">{a}</p>}
    </div>
  );
};

const FAQ = () => (
  <section className="section-band">
    <div className="section-band-inner">
      <div className="faq-grid">
        <Reveal>
          <div>
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-heading faq-title">Common questions.</h2>
            <p className="faq-contact-line">
              Still have a question?{' '}
              <a href="#top" className="faq-contact-link">
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
