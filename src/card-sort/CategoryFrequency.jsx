import React from 'react';
import './CardSortCharts.css';

const BAR_HUE = '#2a78d6'; // sequential blue, single-series accent

const CategoryFrequency = ({ frequencies, sessionCount }) => {
  if (frequencies.length === 0) {
    return <p className="chart-empty">No groups have been created yet.</p>;
  }

  const maxCount = Math.max(...frequencies.map((f) => f.count));

  return (
    <div>
      <p className="chart-caption">
        How often each group name was used across {sessionCount} participant
        {sessionCount === 1 ? '' : 's'}, and which cards ended up there most.
      </p>
      <div className="category-freq-list">
        {frequencies.map((f) => (
          <div key={f.name}>
            <div className="category-freq-row-header">
              <span className="category-freq-name">{f.name}</span>
              <span className="category-freq-count">
                {f.count} participant{f.count === 1 ? '' : 's'}
              </span>
            </div>
            <div className="category-freq-track">
              <div
                className="category-freq-fill"
                style={{ width: `${(f.count / maxCount) * 100}%`, background: BAR_HUE }}
              />
            </div>
            <div className="category-freq-tags">
              {f.topCards.slice(0, 8).map((c) => (
                <span
                  key={c.label}
                  title={`${c.label}: placed here ${c.count} time${c.count === 1 ? '' : 's'}`}
                  className="category-freq-tag"
                >
                  {c.label}
                  <span className="category-freq-tag-count"> · {c.count}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFrequency;
