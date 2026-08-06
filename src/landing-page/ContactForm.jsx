import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../config/firebase';
import { PILL_PRIMARY } from './buttonStyles';

const FIELD_CLASS =
  'w-full rounded-lg border border-black/10 bg-[#FAFAFA] px-4 py-3 text-[14px] text-[#131313] placeholder:text-black/35 focus:outline-none focus:border-[#7161EF] transition-colors dark:border-white/10 dark:bg-white/[0.03] dark:text-[#F5F3F0] dark:placeholder:text-white/35';

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
      <div className="rounded-2xl border border-black/10 bg-[#FAFAFA] dark:border-white/10 dark:bg-white/[0.03] p-8 text-center">
        <span className="material-symbols-outlined text-[28px] text-[#7161EF] dark:text-[#9B8FF5] mb-3 block">check_circle</span>
        <h3 className="text-[16px] font-semibold text-[#131313] dark:text-[#F5F3F0] mb-1.5">Message sent</h3>
        <p className="text-[13px] font-normal text-black/50 dark:text-white/50">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-black/10 bg-[#FAFAFA] dark:border-white/10 dark:bg-white/[0.03] p-6 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Name"
          value={form.name}
          onChange={onChange('name')}
          className={FIELD_CLASS}
        />
        <input
          type="email"
          required
          placeholder="Email"
          value={form.email}
          onChange={onChange('email')}
          className={FIELD_CLASS}
        />
      </div>
      <textarea
        required
        rows={4}
        placeholder="How can we help?"
        value={form.message}
        onChange={onChange('message')}
        className={`${FIELD_CLASS} resize-none`}
      />

      {status === 'error' && (
        <p className="text-[12px] font-normal text-[#F58787]">
          Something went wrong sending your message — please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`${PILL_PRIMARY} w-full py-3 text-[14px] disabled:opacity-60`}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

export default ContactForm;
