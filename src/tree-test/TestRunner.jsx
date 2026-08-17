import React, { useState } from 'react';
import { buildTaskRecord } from './treeTestUtils';
import TreeNav from './TreeNav';
import SortlyLogo from '../shared/components/SortlyLogo';

// Steps a participant through every task in order, one TreeNav at a time,
// then hands the full set of scored records back to the caller. Shared by
// both the local "quick test" flow and the shareable-link participant flow —
// mirrors card-sort's SortBoard being shared the same way.
const TestRunner = ({ studyName, tree, tasks, onFinish, onExit }) => {
  const [taskIndex, setTaskIndex] = useState(0);
  const [records, setRecords] = useState([]);

  const task = tasks[taskIndex];

  const handleSubmit = (rawResult) => {
    const record = buildTaskRecord(tree, task, rawResult);
    const next = [...records, record];
    if (taskIndex + 1 >= tasks.length) {
      onFinish(next);
    } else {
      setRecords(next);
      setTaskIndex((i) => i + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col">
      <header className="flex items-center justify-between px-8 py-4 border-b border-[#c6c6c6]/40 bg-white sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <SortlyLogo iconClassName="text-base text-black" textClassName="text-black" />
          <span className="w-px h-8 bg-[#e6e6e9]" />
          <div>
            <h1 className="text-lg font-black leading-tight">{studyName}</h1>
            <p className="text-[10px] uppercase tracking-normal text-[#474747]">Tree Test</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-40 h-2 rounded-full bg-[#e8e8e8] overflow-hidden">
              <div
                className="h-full bg-[#7161EF] transition-all"
                style={{ width: `${(taskIndex / tasks.length) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold tabular-nums">
              {taskIndex + 1}/{tasks.length}
            </span>
          </div>
          <button
            onClick={onExit}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-normal text-[#474747] hover:bg-[#e8e8e8] transition-all"
          >
            Quit
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-start px-8 pt-10 pb-16">
        <div className="w-full max-w-xl mb-6">
          <p className="text-[10px] uppercase tracking-normal text-[#8a8a8a] font-bold mb-2">
            Task {taskIndex + 1} of {tasks.length}
          </p>
          <h2 className="text-xl font-black leading-snug">{task.prompt}</h2>
        </div>
        <TreeNav key={task.id} tree={tree} onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default TestRunner;
