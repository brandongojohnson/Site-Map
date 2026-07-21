import React from 'react';

// Illustrative quotes for a fictional product — initials avatars rather than
// stock headshots, since these aren't real customers.
const QUOTES = [
  {
    quote:
      "We ran a closed sort with 40 participants and had a defensible nav structure by the end of the week. It used to take us a month.",
    name: 'Priya Anand',
    role: 'Senior UX Researcher',
    company: 'Fieldnote',
    color: '#B5652F',
  },
  {
    quote:
      "The dendrogram is the first thing I show stakeholders now — it turns 'I feel like this should be grouped differently' into an actual data point.",
    name: 'Marcus Webb',
    role: 'Product Designer',
    company: 'Northglade',
    color: '#171512',
  },
  {
    quote:
      'Sending a card sort link to remote participants and getting a sitemap out the other end, without exporting a single CSV, is the whole reason we switched.',
    name: 'Elena Kovač',
    role: 'Design Lead',
    company: 'Kepler & Co',
    color: '#8C8577',
  },
  {
    quote:
      "Our engineers finally stopped arguing about the sitemap in standup, because they can see the same board we do, live.",
    name: 'Sam Okafor',
    role: 'UX Researcher',
    company: 'Loomwell',
    color: '#B5652F',
  },
];

const Avatar = ({ name, color }) => (
  <div
    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0"
    style={{ background: color }}
  >
    {name
      .split(' ')
      .map((p) => p[0])
      .join('')}
  </div>
);

const Testimonials = () => (
  <section className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-xl mb-14">
        <p className="text-[12px] font-semibold uppercase tracking-widest text-[#B5652F] mb-3">
          Loved by research &amp; design teams
        </p>
        <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-[#171512] leading-tight">
          Don't just take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {QUOTES.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl bg-white border border-[#ECE6D9] p-7 flex flex-col"
          >
            <span className="material-symbols-outlined text-[28px] text-[#F1E4D8] mb-3">
              format_quote
            </span>
            <blockquote className="text-[15px] text-[#4A4540] leading-relaxed mb-6 flex-1">
              “{t.quote}”
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <Avatar name={t.name} color={t.color} />
              <div>
                <p className="text-[14px] font-bold text-[#171512]">{t.name}</p>
                <p className="text-[12px] text-[#8C8577]">
                  {t.role} · {t.company}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
