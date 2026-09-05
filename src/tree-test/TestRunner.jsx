import React, { useState } from 'react';
import { buildTaskRecord } from './treeTestUtils';
import TreeNav from './TreeNav';
import SortlyLogo from '../shared/components/SortlyLogo';
import './TreeTestShared.css';

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
    <div className="test-runner">
      <header className="test-runner-header">
        <div className="test-runner-header-left">
          <SortlyLogo iconClassName="results-logo-icon" textClassName="results-logo-text" />
          <span className="results-divider" />
          <div>
            <h1 className="test-runner-title">{studyName}</h1>
            <p className="results-subtitle">Tree Test</p>
          </div>
        </div>

        <div className="test-runner-header-right">
          <div className="test-runner-progress">
            <div className="test-runner-progress-track">
              <div
                className="test-runner-progress-fill"
                style={{ width: `${(taskIndex / tasks.length) * 100}%` }}
              />
            </div>
            <span className="test-runner-progress-count">
              {taskIndex + 1}/{tasks.length}
            </span>
          </div>
          <button onClick={onExit} className="test-runner-quit-btn">
            Quit
          </button>
        </div>
      </header>

      <main className="test-runner-main">
        <div className="test-runner-task-header">
          <p className="test-runner-task-label">
            Task {taskIndex + 1} of {tasks.length}
          </p>
          <h2 className="test-runner-task-prompt">{task.prompt}</h2>
        </div>
        <TreeNav key={task.id} tree={tree} onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default TestRunner;
