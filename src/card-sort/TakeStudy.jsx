import React, { useState, useEffect } from 'react';
import { getStudy, saveStudySession } from './studyStore';
import { buildResults } from './sortUtils';
import SortBoard from './SortBoard';

const inputCls =
  'w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-black focus:ring-0';

// Full-screen participant flow opened via a shared link (?cardsort=<studyId>).
// Intentionally has no path back into the researcher's editor or study list.
const TakeStudy = ({ studyId }) => {
  const [phase, setPhase] = useState('loading'); // loading | intro | sort | thanks | error
  const [study, setStudy] = useState(null);
  const [participant, setParticipant] = useState('');

  useEffect(() => {
    let cancelled = false;
    getStudy(studyId)
      .then((record) => {
        if (cancelled) return;
        if (!record) setPhase('error');
        else {
          setStudy(record);
          setPhase('intro');
        }
      })
      .catch((err) => {
        console.error('Failed to load study:', err);
        if (!cancelled) setPhase('error');
      });
    return () => {
      cancelled = true;
    };
  }, [studyId]);

  const handleFinish = (categories, assignments) => {
    const results = buildResults(study.cards, categories, assignments);
    saveStudySession(studyId, {
      participant: participant.trim(),
      completedAt: new Date().toISOString(),
      results,
    }).catch((err) => console.error('Failed to save session:', err));
    setPhase('thanks');
  };

  if (phase === 'loading') {
    return (
      <div className="min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body text-sm text-[#474747]">
        Loading study…
      </div>
    );
  }

  if (phase === 'error') {
    return (
      <div className="min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8">
        <div className="text-center max-w-md">
          <span className="material-symbols-outlined text-4xl text-[#8a8a8a]">link_off</span>
          <h1 className="text-lg font-black mt-4 mb-2">This study link isn't valid</h1>
          <p className="text-sm text-[#474747]">
            It may have been deleted, or the link was copied incorrectly. Check with whoever
            sent it to you.
          </p>
        </div>
      </div>
    );
  }

  if (phase === 'sort') {
    return (
      <SortBoard
        study={{
          type: study.type,
          studyName: study.studyName,
          cards: study.cards,
          initialCategories: study.categories,
        }}
        onFinish={handleFinish}
        onExit={() => setPhase('intro')}
      />
    );
  }

  if (phase === 'thanks') {
    return (
      <div className="min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
            <span className="material-symbols-outlined text-3xl">favorite</span>
          </div>
          <h1 className="text-xl font-black mb-2">Thanks for taking part</h1>
          <p className="text-sm text-[#474747]">
            Your responses to “{study.studyName}” have been submitted. You can close this tab.
          </p>
        </div>
      </div>
    );
  }

  // intro
  return (
    <div className="min-h-screen bg-[#f3f3f4] flex items-center justify-center font-body px-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm p-8">
        <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] font-bold mb-2">
          Card Sort
        </p>
        <h1 className="text-2xl font-black mb-4">{study.studyName}</h1>

        {study.intention && (
          <p className="text-sm text-[#474747] leading-relaxed mb-6 whitespace-pre-wrap">
            {study.intention}
          </p>
        )}

        <p className="text-xs text-[#8a8a8a] mb-6">
          You'll sort {study.cards.length} cards into groups
          {study.type === 'closed'
            ? ' that are already provided.'
            : study.type === 'hybrid'
            ? ', starting from some provided groups — feel free to add your own.'
            : ' that you create and name yourself.'}
        </p>

        <label className="block mb-6">
          <span className="text-[10px] uppercase tracking-widest text-[#474747] font-bold">
            Your name (optional)
          </span>
          <input
            className={`${inputCls} mt-2`}
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
            placeholder="e.g. Jamie R."
          />
        </label>

        <button
          onClick={() => setPhase('sort')}
          className="w-full py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all"
        >
          Begin Sorting
        </button>
      </div>
    </div>
  );
};

export default TakeStudy;
