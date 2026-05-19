import React from 'react';

export const Card = ({ children, className = '', hoverable = true, ...props }) => {
  return (
    <div
      className={`bg-white p-8 rounded-xl border border-gray-200 ${
        hoverable ? 'hover:border-gray-300 hover:shadow-lg transition-all' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
