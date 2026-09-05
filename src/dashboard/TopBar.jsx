import React from 'react';
import AccountBadge from '../shared/components/AccountBadge';
import GetStartedMenu from '../shared/components/GetStartedMenu';
import './TopBar.css';

// Floats above the canvas/content rather than sitting in normal flow, so it
// can be reused as-is on the Dashboard/Templates pages (right edge at the
// viewport edge) and on the Editor (right edge pulled in via `style` while
// the node properties panel is open, so it never overlaps that panel).
const TopBar = ({ onNavigate, style }) => (
  <header className="top-bar" style={style}>
    <GetStartedMenu onNavigate={onNavigate} />
    <AccountBadge />
  </header>
);

export default TopBar;
