import React, { useState, useEffect, useMemo } from 'react';
import { getStudy, subscribeStudySessions, buildStudyLink } from './studyStore';
import { buildSimilarityMatrix, categoryFrequency } from './analysisUtils';
import { downloadFile } from './sortUtils';
import SimilarityMatrix from './SimilarityMatrix';
import Dendrogram from './Dendrogram';
import CategoryFrequency from './CategoryFrequency';

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
    return (
      <div className="min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body text-sm text-[#474747]">
        Loading results…
      </div>
    );
  }

  const hasEnoughData = sessions.length >= 2;

  return (
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black">
      <header className="flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">insights</span>
          </div>
          <div>
            <h1 className="text-xl font-black leading-tight">{study.studyName}</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#474747]">
              {sessions.length} response{sessions.length === 1 ? '' : 's'} · Live
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyLink}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            {copied ? 'Link Copied' : 'Copy Share Link'}
          </button>
          <button
            onClick={onExit}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all"
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

        {!hasEnoughData && (
          <div className="rounded-lg border-2 border-dashed border-[#c6c6c6]/70 p-6 text-center mb-8">
            <span className="material-symbols-outlined text-3xl text-[#8a8a8a]">hourglass_top</span>
            <p className="mt-2 text-sm text-[#474747]">
              {sessions.length === 0
                ? 'No responses yet. Share the link above to start collecting sorts.'
                : 'Waiting on at least one more response — the similarity matrix and dendrogram need 2+ participants to be meaningful.'}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs uppercase tracking-widest font-bold transition-all ${
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
              onClick={exportMatrixCsv}
              disabled={!hasEnoughData}
              className="px-3 py-2 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] disabled:opacity-40 transition-all"
            >
              Export Matrix CSV
            </button>
            <button
              onClick={exportSessionsJson}
              disabled={sessions.length === 0}
              className="px-3 py-2 rounded-lg text-[10px] uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] disabled:opacity-40 transition-all"
            >
              Export Raw JSON
            </button>
          </div>
        </div>

        <section className="rounded-xl bg-white shadow-sm p-6">
          {tab === 'matrix' &&
            (hasEnoughData ? (
              <SimilarityMatrix labels={cardLabels} matrix={matrix} />
            ) : (
              <p className="text-sm text-[#8a8a8a]">Not enough responses yet.</p>
            ))}
          {tab === 'dendrogram' &&
            (hasEnoughData ? (
              <Dendrogram labels={cardLabels} matrix={matrix} />
            ) : (
              <p className="text-sm text-[#8a8a8a]">Not enough responses yet.</p>
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
