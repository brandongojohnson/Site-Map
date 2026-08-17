import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => (
  <section className="relative py-24 md:py-32 border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#131313]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-normal text-[#7161EF] dark:text-[#9B8FF5] mb-3">
            Get in touch
          </p>
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight text-[#131313] dark:text-[#F5F3F0] leading-tight mb-5">
            Have a question before you start?
          </h2>
          <p className="text-[16px] font-normal text-black/55 dark:text-white/55 leading-relaxed max-w-md">
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
