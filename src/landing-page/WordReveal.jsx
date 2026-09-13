import React, { useEffect, useRef, useState } from 'react';
import './WordReveal.css';

// design.md §3/§10: headings reveal word-by-word on scroll entry (fade +
// slight upward translate), not letter-by-letter — the signature motion
// beat repeated at every section. Fires once, gated by viewport entry
// (mirrors Reveal.jsx's IntersectionObserver pattern elsewhere on this
// page). `lines` lets a multi-line headline (e.g. a manual <br/> break)
// reveal each line's words together without losing the line break.
//
// Per design.md §11, prefers-reduced-motion drops the per-word stagger
// entirely and falls back to a single opacity fade on the whole heading.
const WordReveal = ({ lines, as: Tag = 'span', className = '', wordClassName = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (reduced) {
    return (
      <Tag ref={ref} className={`word-reveal is-reduced ${visible ? 'is-visible' : ''} ${className}`}>
        {lines.join(' ')}
      </Tag>
    );
  }

  let wordIndex = 0;

  return (
    <Tag ref={ref} className={`word-reveal ${className}`}>
      {lines.map((line, lineIndex) => (
        <React.Fragment key={line}>
          {lineIndex > 0 && <br />}
          {line.split(' ').map((word, i) => {
            const delay = wordIndex * 40;
            wordIndex += 1;
            return (
              <span key={`${word}-${i}`} className="word-reveal-word-wrap">
                <span
                  className={`word-reveal-word ${visible ? 'is-visible' : ''} ${wordClassName}`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  {word}
                </span>
                {i < line.split(' ').length - 1 ? ' ' : ''}
              </span>
            );
          })}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default WordReveal;
