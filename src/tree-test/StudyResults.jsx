import React, { useState, useEffect, useMemo } from 'react';
import { getStudy, subscribeStudySessions, buildStudyLink } from './studyStore';
import { taskStats } from './analysisUtils';
import { downloadFile } from './treeTestUtils';
import TaskSuccessChart from './TaskSuccessChart';
import DestinationBreakdown from './DestinationBreakdown';
import SortlyLogo from '../shared/components/SortlyLogo';
import './TreeTestShared.css';

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'tree-test';

const TABS = [
  { key: 'success', label: 'Task Success', icon: 'bar_chart' },
  { key: 'destinations', label: 'Where People Went', icon: 'route' },
];

const StudyResults = ({ studyId, onExit }) => {
  const [study, setStudy] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [tab, setTab] = useState('success');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getStudy(studyId).then(setStudy).catch((err) => console.error('Failed to load study:', err));
  }, [studyId]);

  useEffect(() => {
    const unsubscribe = subscribeStudySessions(studyId, setSessions);
    return unsubscribe;
  }, [studyId]);

  const stats = useMemo(
    () => (study ? taskStats(study.tasks, sessions) : []),
    [study, sessions]
  );

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

  const exportStatsCsv = () => {
    const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const rows = [['Task', 'Attempts', 'Success Rate', 'Direct Rate (of successes)', 'Avg Time (s)']];
    stats.forEach((s) => {
      rows.push([
        s.prompt,
        s.attempts,
        `${Math.round(s.successRate * 100)}%`,
        `${Math.round(s.directRate * 100)}%`,
        (s.avgDurationMs / 1000).toFixed(1),
      ]);
    });
    downloadFile(`${slugify(study.studyName)}-task-stats.csv`, rows.map((r) => r.map(esc).join(',')).join('\n'), 'text/csv');
  };

  if (!study) {
    return <div className="results-loading">Loading results…</div>;
  }

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

        {sessions.length === 0 && (
          <div className="results-empty-banner">
            <span className="material-symbols-outlined results-empty-icon">hourglass_top</span>
            <p className="results-empty-text">
              No responses yet. Share the link above to start collecting attempts.
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
            <button onClick={exportStatsCsv} disabled={sessions.length === 0} className="results-btn-outline">
              Export Stats CSV
            </button>
            <button onClick={exportSessionsJson} disabled={sessions.length === 0} className="results-btn-outline">
              Export Raw JSON
            </button>
          </div>
        </div>

        <section className="results-panel">
          {tab === 'success' && <TaskSuccessChart stats={stats} />}
          {tab === 'destinations' && <DestinationBreakdown tasks={study.tasks} sessions={sessions} />}
        </section>
      </main>
    </div>
  );
};

export default StudyResults;
