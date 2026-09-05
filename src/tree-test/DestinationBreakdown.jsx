import React from 'react';
import { destinationBreakdown } from './analysisUtils';
import './TreeTestCharts.css';

const BAR_HUE = '#2a78d6';
const WRONG_HUE = '#c6c6c6';

// Per task, where participants actually ended up — the correct destination
// plus every wrong one, ranked by frequency. Surfaces which wrong turn is
// the popular one, which a bare success rate can't show.
const DestinationBreakdown = ({ tasks, sessions }) => {
  if (tasks.length === 0) {
    return <p className="chart-empty">No tasks yet.</p>;
  }

  return (
    <div className="chart-task-list">
      {tasks.map((task, i) => {
        const breakdown = destinationBreakdown(task, sessions);
        const maxCount = Math.max(1, ...breakdown.map((b) => b.count));
        return (
          <div key={task.id}>
            <p className="chart-task-title">
              Task {i + 1}: {task.prompt}
            </p>
            {breakdown.length === 0 ? (
              <p className="chart-empty">No responses yet.</p>
            ) : (
              <div className="chart-dest-list">
                {breakdown.map((b) => (
                  <div key={b.nodeId}>
                    <div className="chart-dest-row-header">
                      <span className={`chart-dest-label ${b.correct ? 'is-correct' : ''}`}>
                        {b.title}
                        {b.correct && (
                          <span className="material-symbols-outlined chart-dest-check">check_circle</span>
                        )}
                      </span>
                      <span className="chart-dest-count">
                        {b.count} participant{b.count === 1 ? '' : 's'}
                      </span>
                    </div>
                    <div className="chart-track-sm">
                      <div
                        className="chart-fill"
                        style={{ width: `${(b.count / maxCount) * 100}%`, background: b.correct ? BAR_HUE : WRONG_HUE }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DestinationBreakdown;
