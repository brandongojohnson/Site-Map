import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Button = ({
  children,
  variant = 'primary',
  icon = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 px-6 py-2',
    secondary: 'border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50 px-6 py-2',
    ghost: 'text-blue-600 hover:text-blue-700 font-medium',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
};
