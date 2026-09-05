import React from 'react';
import './SortlyLogo.css';

// Standard Sortly logo — layers icon + "Sortly" text, with optional context
// label separated by a divider. Used consistently across landing page, card
// sort, and sitemap sections. className/iconClassName/textClassName let each
// call site layer on its own color/size for that context (dark hero vs.
// white app chrome, etc.) on top of this component's own layout/weight.
const SortlyLogo = ({ context, subtitle, className = '', iconClassName = '', textClassName = '' }) => (
  <div className={`sortly-logo ${className}`}>
    <span className={`material-symbols-outlined sortly-logo-icon ${iconClassName}`}>layers</span>
    <span className={`sortly-logo-text ${textClassName}`}>Sortly</span>
    {(context || subtitle) && (
      <>
        <span className="sortly-logo-divider" />
        <div className="sortly-logo-meta">
          {context && <span className="sortly-logo-context">{context}</span>}
          {subtitle && <span className="sortly-logo-subtitle">{subtitle}</span>}
        </div>
      </>
    )}
  </div>
);

export default SortlyLogo;
