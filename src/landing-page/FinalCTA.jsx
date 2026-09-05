import React from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import './sharedStyles.css';
import './FinalCTA.css';

const FinalCTA = ({ onGetStarted }) => (
  <section className="final-cta-section">
    <div className="final-cta-card">
      {/* Abstract organic texture */}
      <div className="final-cta-texture">
        <div className="final-cta-blob-a" />
        <div className="final-cta-blob-b" />
      </div>

      <div className="final-cta-content">
        <p className="section-eyebrow final-cta-eyebrow">Get started</p>
        <h2 className="final-cta-title">Turn user research into clear structure.</h2>
        <p className="final-cta-subtitle">
          Free to start. No credit card, no IT ticket — just a link and a deck of cards.
        </p>
        <div className="final-cta-actions">
          <button onClick={onGetStarted} className={`${PILL_PRIMARY} final-cta-btn`}>
            Start for free
          </button>
          <button
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className={`${PILL_OUTLINE} final-cta-btn`}
          >
            Talk to sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
