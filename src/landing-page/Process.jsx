import React from 'react';
import Reveal from './Reveal';

const STEPS = [
  { icon: 'edit_note', title: 'Set up', desc: 'Add cards, choose a sort type, write the study brief.' },
  { icon: 'send', title: 'Send', desc: 'Share one link — participants need no account to join.' },
  { icon: 'style', title: 'Sort', desc: 'Responses collect in real time as people group the cards.' },
  { icon: 'insights', title: 'Analyze', desc: 'Similarity matrices and dendrograms surface the patterns.' },
  { icon: 'account_tree', title: 'Structure', desc: 'Turn the clearest categories into a shareable sitemap.' },
];

const Process = () => (
  <section id="process" className="relative py-24 md:py-32 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#131313]">
    <div className="max-w-6xl mx-auto px-6">
      <Reveal>
        <div className="mb-16 md:mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#7161EF] dark:text-[#9B8FF5] mb-3">
            Process
          </p>
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-[#131313] dark:text-[#F5F3F0] leading-tight">
            A structured path to clarity.
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="lg:border-l lg:border-black/10 dark:lg:border-white/10 lg:pl-6 first:lg:border-l-0 first:lg:pl-0">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="material-symbols-outlined text-[18px] text-black/50 dark:text-white/50">{step.icon}</span>
                <span className="text-[12px] font-semibold text-black/35 dark:text-white/35">0{i + 1}</span>
              </div>
              <h3 className="text-[15px] font-semibold text-[#131313] dark:text-[#F5F3F0] mb-2">{step.title}</h3>
              <p className="text-[13px] font-normal text-black/50 dark:text-white/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Process;
