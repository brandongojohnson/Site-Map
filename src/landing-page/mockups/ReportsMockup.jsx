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
      <div className={`flex items-center gap-1.5 text-[10px] ${light ? 'text-[#86868C]' : 'text-white/35'}`}>
        <span className="material-symbols-outlined text-[13px]">groups</span>
        24 responses
      </div>
    }
  >
    <div className={`p-5 backdrop-blur-sm grid grid-cols-2 gap-6 ${light ? 'bg-white/40' : 'bg-white/[0.03]'}`}>
      <div>
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${light ? 'text-[#86868C]' : 'text-white/40'}`}>
          Similarity Matrix
        </p>
        <div className="inline-grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {matrix.map((row, i) =>
            row.map((v, j) => (
              <div
                key={`${i}-${j}`}
                className="w-4 h-4 rounded-[3px]"
                style={{ background: i === j ? (light ? 'rgba(23,21,18,0.08)' : 'rgba(255,255,255,0.12)') : shade(v) }}
              />
            ))
          )}
        </div>
      </div>
      <div>
        <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 ${light ? 'text-[#86868C]' : 'text-white/40'}`}>
          Category Frequency
        </p>
        <div className="space-y-2.5">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-medium ${light ? 'text-[#18181B]' : 'text-[#F5F3F0]'}`}>{b.label}</span>
                <span className={`text-[9px] ${light ? 'text-[#9C9CA3]' : 'text-white/35'}`}>{b.value}%</span>
              </div>
              <div className={`h-1.5 rounded-full overflow-hidden ${light ? 'bg-[#E4E4E7]' : 'bg-white/10'}`}>
                <div
                  className="h-full rounded-full bg-[#7161EF]"
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
