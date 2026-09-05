import React, { useState, useEffect, useMemo } from 'react';
import { getStudy, subscribeStudySessions, buildStudyLink } from './studyStore';
import { buildSimilarityMatrix, categoryFrequency } from './analysisUtils';
import { downloadFile } from './sortUtils';
import SimilarityMatrix from './SimilarityMatrix';
import Dendrogram from './Dendrogram';
import CategoryFrequency from './CategoryFrequency';
import SortlyLogo from '../shared/components/SortlyLogo';
import './CardSortShared.css';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'study';

const TABS = [
  { key: 'matrix', label: 'Similarity Matrix', icon: 'grid_on' },
  { key: 'dendrogram', label: 'Dendrogram', icon: 'account_tree' },
  { key: 'frequency', label: 'Category Frequency', icon: 'bar_chart' },
];

const StudyResults = ({ studyId, onExit }) => {
  const [study, setStudy] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [tab, setTab] = useState('matrix');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getStudy(studyId).then(setStudy).catch((err) => console.error('Failed to load study:', err));
  }, [studyId]);

  useEffect(() => {
    const unsubscribe = subscribeStudySessions(studyId, setSessions);
    return unsubscribe;
  }, [studyId]);

  const cardLabels = useMemo(() => (study?.cards || []).map((c) => c.label), [study]);
  const matrix = useMemo(
    () => (cardLabels.length ? buildSimilarityMatrix(cardLabels, sessions) : []),
    [cardLabels, sessions]
  );
  const frequencies = useMemo(() => categoryFrequency(sessions), [sessions]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(buildStudyLink(studyId));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const exportSessionsJson = () =>
    downloadFile(
      `${slugify(study.studyName)}-sessions.json`,
      JSON.stringify({ study, sessions }, null, 2),
      'application/json'
    );

  const exportMatrixCsv = () => {
    const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const rows = [['', ...cardLabels].map(esc)];
    cardLabels.forEach((label, i) => {
      rows.push([label, ...matrix[i].map((v) => Math.round(v * 100))].map(esc));
    });
    downloadFile(`${slugify(study.studyName)}-similarity-matrix.csv`, rows.map((r) => r.join(',')).join('\n'), 'text/csv');
  };

  if (!study) {
    return <div className="results-loading">Loading results…</div>;
  }

  const hasEnoughData = sessions.length >= 2;

  return (
    <div className="results-page">
      <header className="results-header">
        <div className="results-header-left">
          <SortlyLogo iconClassName="results-logo-icon" textClassName="results-logo-text" />
          <span className="results-divider" />
          <div>
            <h1 className="results-title">{study.studyName}</h1>
            <p className="results-subtitle">
              {sessions.length} response{sessions.length === 1 ? '' : 's'} · Live
            </p>
          </div>
        </div>
        <div className="results-header-actions">
          <button onClick={copyLink} className="results-btn-outline">
            {copied ? 'Link Copied' : 'Copy Share Link'}
          </button>
          <button onClick={onExit} className="results-btn-ghost">
            Back to Studies
          </button>
        </div>
      </header>

      <main className="results-main">
        {study.intention && <p className="results-intention">{study.intention}</p>}

        {!hasEnoughData && (
          <div className="results-empty-banner">
            <span className="material-symbols-outlined results-empty-icon">hourglass_top</span>
            <p className="results-empty-text">
              {sessions.length === 0
                ? 'No responses yet. Share the link above to start collecting sorts.'
                : 'Waiting on at least one more response — the similarity matrix and dendrogram need 2+ participants to be meaningful.'}
            </p>
          </div>
        )}

        <div className="results-toolbar">
          <div className="results-tabs">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`results-tab ${tab === t.key ? 'is-active' : ''}`}
              >
                <span className="material-symbols-outlined icon-16">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
          <div className="results-toolbar-actions">
            <button onClick={exportMatrixCsv} disabled={!hasEnoughData} className="results-btn-outline">
              Export Matrix CSV
            </button>
            <button onClick={exportSessionsJson} disabled={sessions.length === 0} className="results-btn-outline">
              Export Raw JSON
            </button>
          </div>
        </div>

        <section className="results-panel">
          {tab === 'matrix' &&
            (hasEnoughData ? (
              <SimilarityMatrix labels={cardLabels} matrix={matrix} />
            ) : (
              <p className="results-panel-empty">Not enough responses yet.</p>
            ))}
          {tab === 'dendrogram' &&
            (hasEnoughData ? (
              <Dendrogram labels={cardLabels} matrix={matrix} />
            ) : (
              <p className="results-panel-empty">Not enough responses yet.</p>
            ))}
          {tab === 'frequency' && (
            <CategoryFrequency frequencies={frequencies} sessionCount={sessions.length} />
          )}
        </section>
      </main>
    </div>
  );
};

export default StudyResults;
