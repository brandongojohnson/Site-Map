import React, { useState } from 'react';

// Sequential blue ramp, light→dark (see dataviz skill palette.md).
const RAMP = ['#cde2fb', '#9ec5f4', '#6da7ec', '#3987e5', '#2a78d6', '#1c5cab', '#104281', '#0d366b'];

const valueToColor = (v) => {
  if (v <= 0) return '#fcfcfb';
  const step = Math.min(RAMP.length - 1, Math.floor(v * RAMP.length));
  return RAMP[step];
};

const CELL = 26;

const SimilarityMatrix = ({ labels, matrix }) => {
  const [hover, setHover] = useState(null); // { i, j } or null

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs text-[#474747]">
          Share of participants who placed each pair of cards in the same group.
        </p>
        <div className="flex items-center gap-2 text-[10px] text-[#8a8a8a] uppercase tracking-normal">
          <span>Low</span>
          <div className="flex">
            {RAMP.map((hex) => (
              <div key={hex} style={{ width: 12, height: 12, background: hex }} />
            ))}
          </div>
          <span>High</span>
        </div>
      </div>

      <div className="overflow-auto rounded-lg border border-[#e1e0d9]" style={{ maxHeight: 560 }}>
        <table className="border-collapse" style={{ tableLayout: 'fixed', width: 'max-content' }}>
          <thead>
            <tr>
              <th
                className="sticky top-0 left-0 z-[60] bg-[#fcfcfb]"
                style={{ width: CELL * 6, minWidth: CELL * 6 }}
              />
              {labels.map((label, j) => (
                <th
                  key={label}
                  className="sticky top-0 bg-[#fcfcfb] px-0 relative"
                  style={{
                    width: CELL,
                    minWidth: CELL,
                    maxWidth: CELL,
                    height: CELL * 6,
                    // left headers stack above right ones so a rotated label's
                    // tail isn't hidden behind the next column's background
                    zIndex: 10 + (labels.length - j),
                  }}
                >
                  {/* absolutely positioned so the rotated label doesn't widen the column */}
                  <div
                    className="absolute text-[10px] font-medium text-[#52514e] whitespace-nowrap origin-bottom-left"
                    style={{ bottom: 6, left: CELL / 2 + 4, transform: 'rotate(-55deg)' }}
                    title={label}
                  >
                    {label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {labels.map((rowLabel, i) => (
              <tr key={rowLabel}>
                <th
                  className="sticky left-0 z-10 bg-[#fcfcfb] text-[10px] font-medium text-[#52514e] text-right pr-2 whitespace-nowrap"
                  style={{ width: CELL * 6, minWidth: CELL * 6, height: CELL }}
                  title={rowLabel}
                >
                  {rowLabel}
                </th>
                {labels.map((colLabel, j) => {
                  const v = matrix[i][j];
                  const isDiagonal = i === j;
                  const isHovered =
                    hover && (hover.i === i || hover.j === i) && (hover.i === j || hover.j === j);
                  return (
                    <td
                      key={colLabel}
                      onMouseEnter={() => setHover({ i, j })}
                      onMouseLeave={() => setHover(null)}
                      title={isDiagonal ? rowLabel : `${rowLabel} + ${colLabel}: ${Math.round(v * 100)}%`}
                      style={{
                        width: CELL,
                        height: CELL,
                        background: isDiagonal ? '#e1e0d9' : valueToColor(v),
                        outline: isHovered && !isDiagonal ? '2px solid #0b0b0b' : 'none',
                        outlineOffset: -2,
                      }}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimilarityMatrix;
