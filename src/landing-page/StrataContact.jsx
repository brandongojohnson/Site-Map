import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../config/firebase';

const FIELD =
  'w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-[14px] text-white placeholder:text-zinc-500 ' +
  'transition-colors focus:outline-none focus:border-[#2997ff] focus:ring-4 focus:ring-[#2997ff]/20';

// Same Firebase path and payload as the previous contact form, so existing
// messages and any tooling reading `contactMessages` keep working.
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
      <div className="glass-card rounded-3xl p-8 text-center" role="status">
        <span className="material-symbols-outlined text-[32px] text-[#2997ff] mb-3 block">check_circle</span>
        <h3 className="text-[17px] font-semibold text-white mb-1.5">Message sent</h3>
        <p className="text-[13px] text-zinc-400">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" required placeholder="Name" aria-label="Name" value={form.name} onChange={onChange('name')} className={FIELD} />
        <input type="email" required placeholder="Email" aria-label="Email" value={form.email} onChange={onChange('email')} className={FIELD} />
      </div>
      <textarea
        required
        rows={5}
        placeholder="How can we help?"
        aria-label="Message"
        value={form.message}
        onChange={onChange('message')}
        className={`${FIELD} resize-none`}
      />

      {status === 'error' && (
        <p className="text-[12px] text-red-400" role="alert">
          Something went wrong sending your message — please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full h-11 rounded-full bg-white text-black text-[14px] font-semibold flex items-center justify-center hover:bg-zinc-200 transition-all disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
};

const StrataContact = () => (
  <section id="contact" className="scroll-mt-28 w-full py-24 px-6 lg:px-12 max-w-[1240px] mx-auto border-t border-white/10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
      <div>
        <div className="block font-mono text-[11px] text-[#2997ff] uppercase tracking-wider mb-4">
          [ Get in touch ]
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.1] mb-5">
          Have a question before you start?
        </h2>
        <p className="text-[16px] text-[#a1a1aa] leading-relaxed max-w-md">
          Whether you're comparing tools or already mid-study, send us a note — we read every message and usually reply
          within a day.
        </p>
      </div>
      <ContactForm />
    </div>
  </section>
);

export default StrataContact;
