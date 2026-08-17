import React from 'react';

const SUCCESS_HUE = '#2a78d6'; // sequential blue, mirrors card-sort's single-series accent
const DIRECT_HUE = '#7161EF'; // brand accent, layered on top of success as a sub-measure

// One row per task: success rate as the primary bar, with the share of
// successes that were direct (no backtracking) layered underneath it as a
// second, narrower bar — so "found it, but wandered first" reads at a glance.
const TaskSuccessChart = ({ stats }) => {
  if (stats.length === 0) {
    return <p className="text-sm text-[#8a8a8a]">No tasks yet.</p>;
  }

  return (
    <div className="space-y-6">
      {stats.map((s, i) => (
        <div key={s.taskId}>
          <div className="flex items-start justify-between gap-4 mb-1.5">
            <span className="text-sm font-bold">
              Task {i + 1}: {s.prompt}
            </span>
            <span className="text-xs text-[#52514e] tabular-nums flex-shrink-0">
              {Math.round(s.successRate * 100)}% success
            </span>
          </div>
          <div className="h-2.5 rounded-full bg-[#e1e0d9] overflow-hidden mb-1">
            <div
              className="h-full rounded-full"
              style={{ width: `${s.successRate * 100}%`, background: SUCCESS_HUE }}
            />
          </div>
          <div className="h-1.5 rounded-full bg-[#e1e0d9] overflow-hidden mb-2">
            <div
              className="h-full rounded-full"
              style={{ width: `${s.successRate * s.directRate * 100}%`, background: DIRECT_HUE }}
            />
          </div>
          <p className="text-[11px] text-[#8a8a8a]">
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
