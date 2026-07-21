import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-sm font-sans font-medium transition-colors py-3 px-6 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-primary text-on-primary hover:opacity-90',
    secondary: 'border border-on-surface text-on-surface hover:bg-surface-gray',
    accent: 'bg-tertiary text-white hover:opacity-90',
    ghost: 'text-on-surface hover:text-tertiary',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
