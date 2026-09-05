import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../config/firebase';
import { PILL_PRIMARY } from './buttonStyles';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('sending');
    try {
      await push(ref(db, 'contactMessages'), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        submittedAt: Date.now(),
      });
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="contact-sent-card">
        <span className="material-symbols-outlined contact-sent-icon">check_circle</span>
        <h3 className="contact-sent-title">Message sent</h3>
        <p className="contact-sent-desc">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="contact-form-row">
        <input
          type="text"
          required
          placeholder="Name"
          value={form.name}
          onChange={onChange('name')}
          className="contact-field"
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={form.email}
          onChange={onChange('email')}
          className="contact-field"
        />
      </div>
      <textarea
        required
        rows={4}
        placeholder="How can we help?"
        value={form.message}
        onChange={onChange('message')}
        className="contact-field contact-field-textarea"
      />

      {status === 'error' && (
        <p className="contact-form-error">
          Something went wrong sending your message — please try again.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className={`${PILL_PRIMARY} contact-submit-btn`}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

export default ContactForm;
