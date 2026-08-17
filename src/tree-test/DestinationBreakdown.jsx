import React from 'react';
import { destinationBreakdown } from './analysisUtils';

const BAR_HUE = '#2a78d6';
const WRONG_HUE = '#c6c6c6';

// Per task, where participants actually ended up — the correct destination
// plus every wrong one, ranked by frequency. Surfaces which wrong turn is
// the popular one, which a bare success rate can't show.
const DestinationBreakdown = ({ tasks, sessions }) => {
  if (tasks.length === 0) {
    return <p className="text-sm text-[#8a8a8a]">No tasks yet.</p>;
  }

  return (
    <div className="space-y-8">
      {tasks.map((task, i) => {
        const breakdown = destinationBreakdown(task, sessions);
        const maxCount = Math.max(1, ...breakdown.map((b) => b.count));
        return (
          <div key={task.id}>
            <p className="text-sm font-bold mb-3">
              Task {i + 1}: {task.prompt}
            </p>
            {breakdown.length === 0 ? (
              <p className="text-xs text-[#8a8a8a]">No responses yet.</p>
            ) : (
              <div className="space-y-2.5">
                {breakdown.map((b) => (
                  <div key={b.nodeId}>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className={`text-xs ${b.correct ? 'font-semibold text-black' : 'text-[#474747]'}`}>
                        {b.title}
                        {b.correct && (
                          <span className="material-symbols-outlined text-[13px] align-middle ml-1 text-green-700">
                            check_circle
                          </span>
                        )}
                      </span>
                      <span className="text-[11px] text-[#8a8a8a] tabular-nums">
                        {b.count} participant{b.count === 1 ? '' : 's'}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#e1e0d9] overflow-hidden">
                      <div
                        className="h-full rounded-full"
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
