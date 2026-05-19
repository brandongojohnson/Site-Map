import React from 'react';

export const Section = ({
  children,
  id = '',
  className = '',
  backgroundVariant = 'white',
  title,
  subtitle,
  fullWidth = false,
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-transparent',
  };

  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${bgClasses[backgroundVariant]} ${className}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto'}>
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
            {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
