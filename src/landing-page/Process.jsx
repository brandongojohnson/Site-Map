import React from 'react';
import Reveal from './Reveal';
import './Process.css';

const STEPS = [
  { icon: 'edit_note', title: 'Set up', desc: 'Add cards, choose a sort type, write the study brief.' },
  { icon: 'send', title: 'Send', desc: 'Share one link — participants need no account to join.' },
  { icon: 'style', title: 'Sort', desc: 'Responses collect in real time as people group the cards.' },
  { icon: 'insights', title: 'Analyze', desc: 'Similarity matrices and dendrograms surface the patterns.' },
  { icon: 'account_tree', title: 'Structure', desc: 'Turn the clearest categories into a shareable sitemap.' },
];

const Process = () => (
  <section id="process" className="process-section">
    <div className="process-inner">
      <Reveal>
        <div className="process-header">
          <p className="process-eyebrow">Process</p>
          <h2 className="process-title">A structured path to clarity.</h2>
        </div>
      </Reveal>

      <Reveal>
        <div className="process-grid">
          {STEPS.map((step, i) => (
            <div key={step.title} className="process-step">
              <div className="process-step-header">
                <span className="material-symbols-outlined process-step-icon">{step.icon}</span>
                <span className="process-step-number">0{i + 1}</span>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Process;
