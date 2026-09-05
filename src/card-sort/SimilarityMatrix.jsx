import React, { useState } from 'react';
import './CardSortCharts.css';

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
      <div className="matrix-header">
        <p className="matrix-caption">
          Share of participants who placed each pair of cards in the same group.
        </p>
        <div className="matrix-legend">
          <span>Low</span>
          <div className="matrix-legend-swatches">
            {RAMP.map((hex) => (
              <div key={hex} style={{ width: 12, height: 12, background: hex }} />
            ))}
          </div>
          <span>High</span>
        </div>
      </div>

      <div className="matrix-scroll" style={{ maxHeight: 560 }}>
        <table className="matrix-table" style={{ tableLayout: 'fixed', width: 'max-content' }}>
          <thead>
            <tr>
              <th className="matrix-th-corner" style={{ width: CELL * 6, minWidth: CELL * 6 }} />
              {labels.map((label, j) => (
                <th
                  key={label}
                  className="matrix-th-col"
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
                    className="matrix-col-label"
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
                  className="matrix-th-row"
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
