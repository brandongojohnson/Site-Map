import React from 'react';

const BAR_HUE = '#2a78d6'; // sequential blue, single-series accent

const CategoryFrequency = ({ frequencies, sessionCount }) => {
  if (frequencies.length === 0) {
    return <p className="text-sm text-[#8a8a8a]">No groups have been created yet.</p>;
  }

  const maxCount = Math.max(...frequencies.map((f) => f.count));

  return (
    <div>
      <p className="text-xs text-[#474747] mb-5">
        How often each group name was used across {sessionCount} participant
        {sessionCount === 1 ? '' : 's'}, and which cards ended up there most.
      </p>
      <div className="space-y-5">
        {frequencies.map((f) => (
          <div key={f.name}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-sm font-bold">{f.name}</span>
              <span className="text-xs text-[#52514e] tabular-nums">
                {f.count} participant{f.count === 1 ? '' : 's'}
              </span>
            </div>
            <div className="h-2 rounded-full bg-[#e1e0d9] overflow-hidden mb-2.5">
              <div
                className="h-full rounded-full"
                style={{ width: `${(f.count / maxCount) * 100}%`, background: BAR_HUE }}
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {f.topCards.slice(0, 8).map((c) => (
                <span
                  key={c.label}
                  title={`${c.label}: placed here ${c.count} time${c.count === 1 ? '' : 's'}`}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-[#f3f3f4] text-[#474747]"
                >
                  {c.label}
                  <span className="text-[#8a8a8a]"> · {c.count}</span>
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
