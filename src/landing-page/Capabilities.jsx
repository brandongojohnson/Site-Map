import React from 'react';
import Reveal from './Reveal';

const ITEMS = [
  {
    icon: 'style',
    title: 'Open, Closed & Hybrid Sorts',
    desc: 'Every card-sort methodology, one setup flow — pick the type that fits the question.',
  },
  {
    icon: 'groups',
    title: 'Real-Time Collaboration',
    desc: 'Teammates or remote participants sort together, with every move synced instantly.',
  },
  {
    icon: 'link',
    title: 'Remote Participant Links',
    desc: 'Send a single link. No accounts, no installs — just a study and a deck of cards.',
  },
  {
    icon: 'account_tree',
    title: 'Instant Sitemap Generation',
    desc: 'Sorted categories become a draggable, editable sitemap the moment results land.',
  },
  {
    icon: 'insights',
    title: 'Similarity & Cluster Analysis',
    desc: 'Similarity matrices and dendrograms surface the structure hiding in the data.',
  },
  {
    icon: 'query_stats',
    title: 'Category Frequency Reports',
    desc: 'See which labels participants actually converged on, ranked and quantified.',
  },
];

const Capabilities = () => (
  <section id="capabilities" className="relative py-24 md:py-32 border-t border-white/10 bg-[#131313]">
    <div className="max-w-6xl mx-auto px-6">
      <Reveal>
        <div className="mb-14 md:mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-[#9B8FF5] mb-3">
            Capabilities
          </p>
          <h2 className="text-[40px] md:text-[60px] font-bold tracking-tight text-[#F5F3F0] leading-tight">
            Research, end to end.
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {ITEMS.map((item) => (
            <div key={item.title} className="group bg-[#131313] hover:bg-white/[0.04] p-8 transition-colors duration-300">
              <span className="material-symbols-outlined text-[22px] text-white/70 mb-5 block transition-all duration-300 group-hover:text-[#9B8FF5] group-hover:-translate-y-0.5">
                {item.icon}
              </span>
              <h3 className="text-[15px] font-semibold text-[#F5F3F0] mb-2">{item.title}</h3>
              <p className="text-[13.5px] font-normal text-white/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Capabilities;
