import React from 'react';

// Standard Sortly logo — layers icon + "Sortly" text, with optional context
// label separated by a divider. Used consistently across landing page, card
// sort, and sitemap sections.
const SortlyLogo = ({ context, subtitle, className = '', iconClassName = '', textClassName = '' }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    <span className={`material-symbols-outlined flex-shrink-0 ${iconClassName}`}>layers</span>
    <span className={`font-bold tracking-tight ${textClassName}`}>Sortly</span>
    {(context || subtitle) && (
      <>
        <span className="w-px h-5 bg-[#e6e6e9] dark:bg-white/10" />
        <div className="min-w-0">
          {context && <span className="block font-bold text-sm">{context}</span>}
          {subtitle && <span className="block text-[10px] uppercase tracking-normal opacity-70">{subtitle}</span>}
        </div>
      </>
    )}
  </div>
);

export default SortlyLogo;
