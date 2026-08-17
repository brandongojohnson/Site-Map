import React, { useState, useEffect, useMemo } from 'react';
import { getStudy, subscribeStudySessions, buildStudyLink } from './studyStore';
import { taskStats } from './analysisUtils';
import { downloadFile } from './treeTestUtils';
import TaskSuccessChart from './TaskSuccessChart';
import DestinationBreakdown from './DestinationBreakdown';
import SortlyLogo from '../shared/components/SortlyLogo';

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
    return (
      <div className="min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body text-sm text-[#474747]">
        Loading results…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black">
      <header className="flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white">
        <div className="flex items-center gap-3">
          <SortlyLogo iconClassName="text-base text-black" textClassName="text-black" />
          <span className="w-px h-8 bg-[#e6e6e9]" />
          <div>
            <h1 className="text-xl font-black leading-tight">{study.studyName}</h1>
            <p className="text-[10px] uppercase tracking-normal text-[#474747]">
              {sessions.length} response{sessions.length === 1 ? '' : 's'} · Live
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyLink}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            {copied ? 'Link Copied' : 'Copy Share Link'}
          </button>
          <button
            onClick={onExit}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-normal text-[#474747] hover:bg-[#e8e8e8] transition-all"
          >
            Back to Studies
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 py-10">
        {study.intention && (
          <p className="text-sm text-[#474747] bg-white rounded-lg p-4 mb-8 whitespace-pre-wrap">
            {study.intention}
          </p>
        )}

        {sessions.length === 0 && (
          <div className="rounded-lg border-2 border-dashed border-[#c6c6c6]/70 p-6 text-center mb-8">
            <span className="material-symbols-outlined text-3xl text-[#8a8a8a]">hourglass_top</span>
            <p className="mt-2 text-sm text-[#474747]">
              No responses yet. Share the link above to start collecting attempts.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs tracking-normal font-bold transition-all ${
                  tab === t.key ? 'bg-[#7161EF] text-white' : 'text-[#474747] hover:bg-[#e8e8e8]'
                }`}
              >
                <span className="material-symbols-outlined text-base">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={exportStatsCsv}
              disabled={sessions.length === 0}
              className="px-3 py-2 rounded-lg text-[10px] uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] disabled:opacity-40 transition-all"
            >
              Export Stats CSV
            </button>
            <button
              onClick={exportSessionsJson}
              disabled={sessions.length === 0}
              className="px-3 py-2 rounded-lg text-[10px] uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] disabled:opacity-40 transition-all"
            >
              Export Raw JSON
            </button>
          </div>
        </div>

        <section className="rounded-xl bg-white shadow-sm p-6">
          {tab === 'success' && <TaskSuccessChart stats={stats} />}
          {tab === 'destinations' && <DestinationBreakdown tasks={study.tasks} sessions={sessions} />}
        </section>
      </main>
    </div>
  );
};

export default StudyResults;
