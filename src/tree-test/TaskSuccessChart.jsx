import React from 'react';
import './TreeTestCharts.css';

const SUCCESS_HUE = '#2a78d6'; // sequential blue, mirrors card-sort's single-series accent
const DIRECT_HUE = '#7161EF'; // brand accent, layered on top of success as a sub-measure

// One row per task: success rate as the primary bar, with the share of
// successes that were direct (no backtracking) layered underneath it as a
// second, narrower bar — so "found it, but wandered first" reads at a glance.
const TaskSuccessChart = ({ stats }) => {
  if (stats.length === 0) {
    return <p className="chart-empty">No tasks yet.</p>;
  }

  return (
    <div className="success-chart-list">
      {stats.map((s, i) => (
        <div key={s.taskId}>
          <div className="success-chart-header">
            <span className="chart-task-title">
              Task {i + 1}: {s.prompt}
            </span>
            <span className="success-chart-rate">{Math.round(s.successRate * 100)}% success</span>
          </div>
          <div className="success-chart-track">
            <div className="chart-fill" style={{ width: `${s.successRate * 100}%`, background: SUCCESS_HUE }} />
          </div>
          <div className="success-chart-track-sm">
            <div
              className="chart-fill"
              style={{ width: `${s.successRate * s.directRate * 100}%`, background: DIRECT_HUE }}
            />
          </div>
          <p className="success-chart-caption">
            {s.attempts} attempt{s.attempts === 1 ? '' : 's'} · {Math.round(s.directRate * 100)}% of
            successes were direct · avg {(s.avgDurationMs / 1000).toFixed(1)}s
            {s.skipRate > 0 && ` · ${Math.round(s.skipRate * 100)}% skipped`}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TaskSuccessChart;
