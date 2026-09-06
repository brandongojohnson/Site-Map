import React from 'react';
import { PILL_PRIMARY, PILL_OUTLINE } from './buttonStyles';
import PrismaticBurst from './PrismaticBurst';
import './sharedStyles.css';
import './FinalCTA.css';

const FinalCTA = ({ onGetStarted }) => (
  <section className="final-cta-section">
    <div className="final-cta-card">
      <div className="final-cta-bg-layer">
        <PrismaticBurst
          colors={['#21604b']}
          speed={0.6}
          intensity={0.8}
          animationType="hover"
          distort={4.3}
        />
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
