import React from 'react';

// A single decorative icon, scattered around a section as a graphic accent —
// not part of the functional icon vocabulary used elsewhere on the page.
const ScatteredIcon = ({ icon, className = '', style }) => (
  <span
    className={`material-symbols-outlined absolute text-[#F5F3F0] pointer-events-none select-none ${className}`}
    style={style}
  >
    {icon}
  </span>
);

export default ScatteredIcon;
