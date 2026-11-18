import React from 'react';
import StrataLanding from './StrataLanding';

// The landing page is the Strata/Sortly design (StrataLanding). The previous
// section-by-section page (Hero, Capabilities, Features, ...) is no longer
// rendered from here.
const LandingPage = ({ onGetStarted }) => <StrataLanding onGetStarted={onGetStarted} />;

export default LandingPage;
