import React from 'react';
import { sessionTasksToCsv, downloadFile } from './treeTestUtils';
import SortlyLogo from '../shared/components/SortlyLogo';
import './TreeTestShared.css';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'tree-test';

const ResultCard = ({ task, i }) => (
  <section className="result-card">
    <div className="result-card-header">
      <div className="result-card-body">
        <p className="result-card-label">Task {i + 1}</p>
        <h3 className="result-card-prompt">{task.prompt}</h3>
      </div>
      <span
        className={`result-card-badge ${
          task.skipped ? 'is-skipped' : task.correct ? 'is-correct' : 'is-incorrect'
        }`}
      >
        {task.skipped ? 'Skipped' : task.correct ? 'Correct' : 'Incorrect'}
      </span>
    </div>
    <p className="result-card-detail">
      {task.skipped ? 'No answer given.' : (
        <>
          Chose <span className="result-card-answer">{task.answerTitle}</span>
          {task.correct && (task.direct ? ' — went straight there.' : ' — backtracked along the way.')}
        </>
      )}
      {' · '}
      {(task.durationMs / 1000).toFixed(1)}s
    </p>
  </section>
);

const ResultsScreen = ({ session, saveState, onRestart, onNewStudy, onExit }) => {
  const { studyName, participant, tasks, completedAt } = session;
  const successCount = tasks.filter((t) => t.correct).length;

  const exportCsv = () => downloadFile(`${slugify(studyName)}-results.csv`, sessionTasksToCsv(tasks), 'text/csv');
  const exportJson = () =>
    downloadFile(`${slugify(studyName)}-results.json`, JSON.stringify(session, null, 2), 'application/json');

  return (
    <div className="results-page">
      <header className="results-header">
        <div className="results-header-left">
          <SortlyLogo iconClassName="results-logo-icon" textClassName="results-logo-text" />
          <span className="results-divider" />
          <div>
            <h1 className="results-title">{studyName}</h1>
            <p className="results-subtitle">
              Results{participant ? ` · ${participant}` : ''}
            </p>
          </div>
        </div>
        <div className="results-header-actions">
          <button onClick={exportCsv} className="results-btn-outline">
            Export CSV
          </button>
          <button onClick={exportJson} className="results-btn-outline">
            Export JSON
          </button>
        </div>
      </header>

      <main className="results-main">
        <div className="results-summary-row">
          <p className="results-summary-text">
            Completed {new Date(completedAt).toLocaleString()} · {successCount}/{tasks.length} correct
          </p>
          <p className="results-save-state">
            {saveState === 'saving' && <span className="is-saving">Saving to cloud…</span>}
            {saveState === 'saved' && <span className="is-saved">✓ Saved to cloud</span>}
            {saveState === 'error' && <span className="is-error">Cloud save failed — use export</span>}
          </p>
        </div>

        <div className="result-card-list">
          {tasks.map((task, i) => (
            <ResultCard key={task.taskId} task={task} i={i} />
          ))}
        </div>

        <div className="results-actions-row">
          <button onClick={onRestart} className="results-action-outline">
            Test Again
          </button>
          <button onClick={onNewStudy} className="results-action-primary">
            New Test
          </button>
          <button onClick={onExit} className="results-action-ghost">
            Back to Editor
          </button>
        </div>
      </main>
    </div>
  );
};

export default ResultsScreen;
