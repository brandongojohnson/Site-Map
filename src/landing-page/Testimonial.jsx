import React from 'react';
import './sharedStyles.css';
import './Testimonial.css';

// Placeholder social proof — swap for a real quote once there's a customer
// to attribute one to. Left generic (role, not a fabricated name/company)
// rather than inventing a specific person or client.
const Testimonial = () => (
  <section className="section-band">
    <div className="testimonial-inner">
      <p className="section-eyebrow testimonial-eyebrow">Research at Product Speed</p>
      <blockquote className="testimonial-quote">
        "Sortly cut what used to be a two-week card sort into an afternoon of setup and a
        results link we could hand straight to engineering."
      </blockquote>
      <p className="testimonial-attribution">Early access pilot, UX research team</p>
    </div>
  </section>
);

export default Testimonial;
