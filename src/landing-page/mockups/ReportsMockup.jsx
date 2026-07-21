import React from 'react';
import { WindowChrome } from './primitives';

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

const shade = (v) => `rgba(181, 101, 47, ${0.08 + v * 0.85})`;

const bars = [
  { label: 'Getting Started', value: 92 },
  { label: 'Account Settings', value: 74 },
  { label: 'Billing', value: 58 },
  { label: 'Resources', value: 36 },
];

const ReportsMockup = ({ className = '' }) => (
  <WindowChrome
    label="Reports · Onboarding Flow"
    className={className}
    right={
      <div className="flex items-center gap-1.5 text-[10px] text-[#B0AA9C]">
        <span className="material-symbols-outlined text-[13px]">groups</span>
        24 responses
      </div>
    }
  >
    <div className="p-5 bg-[#FFFDF9] grid grid-cols-2 gap-6">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C8577] mb-2.5">
          Similarity Matrix
        </p>
        <div className="inline-grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {matrix.map((row, i) =>
            row.map((v, j) => (
              <div
                key={`${i}-${j}`}
                className="w-4 h-4 rounded-[3px]"
                style={{ background: i === j ? '#ECE6D9' : shade(v) }}
              />
            ))
          )}
        </div>
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C8577] mb-2.5">
          Category Frequency
        </p>
        <div className="space-y-2.5">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-medium text-[#171512]">{b.label}</span>
                <span className="text-[9px] text-[#B0AA9C]">{b.value}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#ECE6D9] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#B5652F]"
                  style={{ width: `${b.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </WindowChrome>
);

export default ReportsMockup;
