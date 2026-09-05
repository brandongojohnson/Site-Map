import React from 'react';
import ContactForm from './ContactForm';
import './sharedStyles.css';
import './Contact.css';

const Contact = () => (
  <section className="section-band">
    <div className="section-band-inner">
      <div className="contact-grid">
        <div>
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-heading contact-title">Have a question before you start?</h2>
          <p className="contact-desc">
            Whether you're comparing tools or already mid-study, send us a note — we read every
            message and usually reply within a day.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
