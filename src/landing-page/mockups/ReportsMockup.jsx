import React from 'react';
import { WindowChrome } from './primitives';
import './ReportsMockup.css';

// A believable density map — not real data, just enough variation to read
// as "a similarity matrix" at a glance.
const matrix = [
  [1, 0.82, 0.18, 0.05, 0.12, 0.08],
  [0.82, 1, 0.22, 0.09, 0.15, 0.11],
  [0.18, 0.22, 1, 0.76, 0.31, 0.2],
  [0.05, 0.09, 0.76, 1, 0.28, 0.17],
  [0.12, 0.15, 0.31, 0.28, 1, 0.64],
  [0.08, 0.11, 0.2, 0.17, 0.64, 1],
];

const shade = (v) => `rgba(113, 97, 239, ${0.08 + v * 0.85})`;

const bars = [
  { label: 'Getting Started', value: 92 },
  { label: 'Account Settings', value: 74 },
  { label: 'Billing', value: 58 },
  { label: 'Resources', value: 36 },
];

const ReportsMockup = ({ className = '', light = false }) => (
  <WindowChrome
    label="Reports · Onboarding Flow"
    className={className}
    light={light}
    right={
      <div className={`rm-badge ${light ? 'is-light' : ''}`}>
        <span className="material-symbols-outlined rm-badge-icon">groups</span>
        24 responses
      </div>
    }
  >
    <div className={`rm-body ${light ? 'is-light' : ''}`}>
      <div>
        <p className={`rm-col-title ${light ? 'is-light' : ''}`}>Similarity Matrix</p>
        <div className="rm-matrix" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {matrix.map((row, i) =>
            row.map((v, j) => (
              <div
                key={`${i}-${j}`}
                className="rm-matrix-cell"
                style={{ background: i === j ? (light ? 'rgba(23,21,18,0.08)' : 'rgba(255,255,255,0.12)') : shade(v) }}
              />
            ))
          )}
        </div>
      </div>
      <div>
        <p className={`rm-col-title ${light ? 'is-light' : ''}`}>Category Frequency</p>
        <div className="rm-bars">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="rm-bar-header">
                <span className={`rm-bar-label ${light ? 'is-light' : ''}`}>{b.label}</span>
                <span className={`rm-bar-value ${light ? 'is-light' : ''}`}>{b.value}%</span>
              </div>
              <div className={`rm-bar-track ${light ? 'is-light' : ''}`}>
                <div className="rm-bar-fill" style={{ width: `${b.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </WindowChrome>
);

export default ReportsMockup;
