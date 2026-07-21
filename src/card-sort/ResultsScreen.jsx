import React from 'react';
import { SORT_TYPES, resultsToCsv, downloadFile } from './sortUtils';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'card-sort';

const ResultsScreen = ({ session, saveState, onRestart, onNewStudy, onExit }) => {
  const { studyName, participant, type, results, completedAt } = session;

  const exportCsv = () =>
    downloadFile(`${slugify(studyName)}-results.csv`, resultsToCsv(results), 'text/csv');
  const exportJson = () =>
    downloadFile(
      `${slugify(studyName)}-results.json`,
      JSON.stringify(session, null, 2),
      'application/json'
    );

  return (
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black">
      <header className="flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">insights</span>
          </div>
          <div>
            <h1 className="text-xl font-black leading-tight">{studyName}</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#474747]">
              Results · {SORT_TYPES[type].label}
              {participant ? ` · ${participant}` : ''}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={exportCsv}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            Export CSV
          </button>
          <button
            onClick={exportJson}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            Export JSON
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-[#474747]">
            Completed {new Date(completedAt).toLocaleString()} ·{' '}
            {results.groups.reduce((n, g) => n + g.cards.length, 0)} cards sorted into{' '}
            {results.groups.filter((g) => g.cards.length > 0).length} groups
            {results.unsorted.length > 0 && `, ${results.unsorted.length} left unsorted`}
          </p>
          <p className="text-xs uppercase tracking-widest font-bold">
            {saveState === 'saving' && <span className="text-[#8a8a8a]">Saving to cloud…</span>}
            {saveState === 'saved' && <span className="text-green-700">✓ Saved to cloud</span>}
            {saveState === 'error' && <span className="text-red-600">Cloud save failed — use export</span>}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
          {results.groups.map((group, i) => (
            <section key={`${group.category}-${i}`} className="rounded-xl bg-white shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-sm">{group.category}</h3>
                <span className="text-[10px] font-bold text-[#8a8a8a] tabular-nums">
                  {group.cards.length}
                </span>
              </div>
              {group.cards.length === 0 ? (
                <p className="text-xs text-[#c6c6c6]">Empty group</p>
              ) : (
                <ul className="space-y-1.5">
                  {group.cards.map((card) => (
                    <li key={card} className="text-sm px-3 py-1.5 rounded-md bg-[#f3f3f4]">
                      {card}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {results.unsorted.length > 0 && (
            <section className="rounded-xl border-2 border-dashed border-[#c6c6c6]/70 p-5">
              <h3 className="font-black text-sm text-[#8a8a8a] mb-3">Unsorted</h3>
              <ul className="space-y-1.5">
                {results.unsorted.map((card) => (
                  <li key={card} className="text-sm px-3 py-1.5 rounded-md bg-white text-[#474747]">
                    {card}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12 pb-16">
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-lg text-sm uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            Sort Again
          </button>
          <button
            onClick={onNewStudy}
            className="px-6 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all"
          >
            New Study
          </button>
          <button
            onClick={onExit}
            className="px-6 py-3 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all"
          >
            Back to Editor
          </button>
        </div>
      </main>
    </div>
  );
};

export default ResultsScreen;
