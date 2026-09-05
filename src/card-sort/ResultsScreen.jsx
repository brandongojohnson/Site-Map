import React from 'react';
import { SORT_TYPES, resultsToCsv, downloadFile } from './sortUtils';
import SortlyLogo from '../shared/components/SortlyLogo';
import './CardSortShared.css';

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
    <div className="results-page">
      <header className="results-header">
        <div className="results-header-left">
          <SortlyLogo iconClassName="results-logo-icon" textClassName="results-logo-text" />
          <span className="results-divider" />
          <div>
            <h1 className="results-title">{studyName}</h1>
            <p className="results-subtitle">
              Results · {SORT_TYPES[type].label}
              {participant ? ` · ${participant}` : ''}
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
            Completed {new Date(completedAt).toLocaleString()} ·{' '}
            {results.groups.reduce((n, g) => n + g.cards.length, 0)} cards sorted into{' '}
            {results.groups.filter((g) => g.cards.length > 0).length} groups
            {results.unsorted.length > 0 && `, ${results.unsorted.length} left unsorted`}
          </p>
          <p className="results-save-state">
            {saveState === 'saving' && <span className="is-saving">Saving to cloud…</span>}
            {saveState === 'saved' && <span className="is-saved">✓ Saved to cloud</span>}
            {saveState === 'error' && <span className="is-error">Cloud save failed — use export</span>}
          </p>
        </div>

        <div className="results-grid">
          {results.groups.map((group, i) => (
            <section key={`${group.category}-${i}`} className="results-group-card">
              <div className="results-group-header">
                <h3 className="results-group-title">{group.category}</h3>
                <span className="results-group-count">{group.cards.length}</span>
              </div>
              {group.cards.length === 0 ? (
                <p className="results-group-empty">Empty group</p>
              ) : (
                <ul className="results-card-list">
                  {group.cards.map((card) => (
                    <li key={card} className="results-card-item">
                      {card}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {results.unsorted.length > 0 && (
            <section className="results-unsorted-card">
              <h3 className="results-unsorted-title">Unsorted</h3>
              <ul className="results-card-list">
                {results.unsorted.map((card) => (
                  <li key={card} className="results-unsorted-item">
                    {card}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="results-actions-row">
          <button onClick={onRestart} className="results-action-outline">
            Sort Again
          </button>
          <button onClick={onNewStudy} className="results-action-primary">
            New Study
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
