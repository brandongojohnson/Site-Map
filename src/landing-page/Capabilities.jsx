import React from 'react';
import Reveal from './Reveal';
import './Capabilities.css';

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
  <section id="capabilities" className="capabilities-section">
    <div className="capabilities-inner">
      <Reveal>
        <div className="capabilities-header">
          <p className="capabilities-eyebrow">Capabilities</p>
          <h2 className="capabilities-title">Research, end to end.</h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="capabilities-grid">
          {ITEMS.map((item) => (
            <div key={item.title} className="capabilities-card">
              <span className="material-symbols-outlined capabilities-card-icon">{item.icon}</span>
              <h3 className="capabilities-card-title">{item.title}</h3>
              <p className="capabilities-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Capabilities;
