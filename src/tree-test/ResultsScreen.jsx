import React from 'react';
import { sessionTasksToCsv, downloadFile } from './treeTestUtils';
import SortlyLogo from '../shared/components/SortlyLogo';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'tree-test';

const ResultCard = ({ task, i }) => (
  <section className="rounded-xl bg-white shadow-sm p-5">
    <div className="flex items-start justify-between gap-3 mb-3">
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-normal text-[#8a8a8a] font-bold mb-1">Task {i + 1}</p>
        <h3 className="font-bold text-sm">{task.prompt}</h3>
      </div>
      <span
        className={`flex-shrink-0 text-[10px] uppercase tracking-normal font-bold px-2.5 py-1 rounded-full ${
          task.skipped
            ? 'bg-[#f3f3f4] text-[#8a8a8a]'
            : task.correct
            ? 'bg-green-50 text-green-700'
            : 'bg-red-50 text-red-600'
        }`}
      >
        {task.skipped ? 'Skipped' : task.correct ? 'Correct' : 'Incorrect'}
      </span>
    </div>
    <p className="text-xs text-[#474747]">
      {task.skipped ? 'No answer given.' : (
        <>
          Chose <span className="font-semibold">{task.answerTitle}</span>
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
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black">
      <header className="flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white">
        <div className="flex items-center gap-3">
          <SortlyLogo iconClassName="text-base text-black" textClassName="text-black" />
          <span className="w-px h-8 bg-[#e6e6e9]" />
          <div>
            <h1 className="text-xl font-black leading-tight">{studyName}</h1>
            <p className="text-[10px] uppercase tracking-normal text-[#474747]">
              Results{participant ? ` · ${participant}` : ''}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={exportCsv}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            Export CSV
          </button>
          <button
            onClick={exportJson}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            Export JSON
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-[#474747]">
            Completed {new Date(completedAt).toLocaleString()} · {successCount}/{tasks.length} correct
          </p>
          <p className="text-xs uppercase tracking-normal font-bold">
            {saveState === 'saving' && <span className="text-[#8a8a8a]">Saving to cloud…</span>}
            {saveState === 'saved' && <span className="text-green-700">✓ Saved to cloud</span>}
            {saveState === 'error' && <span className="text-red-600">Cloud save failed — use export</span>}
          </p>
        </div>

        <div className="space-y-3">
          {tasks.map((task, i) => (
            <ResultCard key={task.taskId} task={task} i={i} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12 pb-16">
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-lg text-sm uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            Test Again
          </button>
          <button
            onClick={onNewStudy}
            className="px-6 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-normal hover:opacity-90 active:scale-95 transition-all"
          >
            New Test
          </button>
          <button
            onClick={onExit}
            className="px-6 py-3 rounded-lg text-sm uppercase tracking-normal text-[#474747] hover:bg-[#e8e8e8] transition-all"
          >
            Back to Editor
          </button>
        </div>
      </main>
    </div>
  );
};

export default ResultsScreen;
