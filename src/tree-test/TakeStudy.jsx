import React, { useState, useEffect } from 'react';
import { getStudy, saveStudySession } from './studyStore';
import TestRunner from './TestRunner';
import SortlyLogo from '../shared/components/SortlyLogo';
import './TreeTestShared.css';

// Full-screen participant flow opened via a shared link (?treetest=<studyId>).
// Intentionally has no path back into the researcher's editor or study list.
const TakeStudy = ({ studyId }) => {
  const [phase, setPhase] = useState('loading'); // loading | intro | test | thanks | error
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

  const handleFinish = (taskRecords) => {
    saveStudySession(studyId, {
      participant: participant.trim(),
      completedAt: new Date().toISOString(),
      tasks: taskRecords,
    }).catch((err) => console.error('Failed to save session:', err));
    setPhase('thanks');
  };

  if (phase === 'loading') {
    return (
      <div className="centered-screen-col">
        <SortlyLogo subtitle="Tree Test Studies" iconClassName="centered-logo-icon" textClassName="centered-logo-text" />
        Loading test…
      </div>
    );
  }

  if (phase === 'error') {
    return (
      <div className="centered-screen">
        <div className="centered-card">
          <SortlyLogo
            subtitle="Tree Test Studies"
            className="centered-logo-wrap"
            iconClassName="centered-logo-icon"
            textClassName="centered-logo-text"
          />
          <span className="material-symbols-outlined take-study-error-icon">link_off</span>
          <h1 className="take-study-error-title">This test link isn't valid</h1>
          <p className="take-study-error-desc">
            It may have been deleted, or the link was copied incorrectly. Check with whoever sent it
            to you.
          </p>
        </div>
      </div>
    );
  }

  if (phase === 'test') {
    return (
      <TestRunner
        studyName={study.studyName}
        tree={study.tree}
        tasks={study.tasks}
        onFinish={handleFinish}
        onExit={() => setPhase('intro')}
      />
    );
  }

  if (phase === 'thanks') {
    return (
      <div className="centered-screen">
        <div className="centered-card">
          <SortlyLogo
            subtitle="Tree Test Studies"
            className="centered-logo-wrap"
            iconClassName="centered-logo-icon"
            textClassName="centered-logo-text"
          />
          <div className="centered-check-badge">
            <span className="material-symbols-outlined centered-check-icon">favorite</span>
          </div>
          <h1 className="take-study-thanks-title">Thanks for taking part</h1>
          <p className="take-study-error-desc">
            Your responses to “{study.studyName}” have been submitted. You can close this tab.
          </p>
        </div>
      </div>
    );
  }

  // intro
  return (
    <div className="centered-screen-col">
      <SortlyLogo subtitle="Tree Test Studies" iconClassName="centered-logo-icon" textClassName="centered-logo-text" />
      <div className="take-study-intro-card">
        <h1 className="take-study-intro-title">{study.studyName}</h1>

        {study.intention && <p className="take-study-intro-intention">{study.intention}</p>}

        <p className="take-study-intro-note">
          You'll be given {study.tasks.length} task{study.tasks.length === 1 ? '' : 's'}, one at a time.
          For each, click through the pages until you reach where you'd expect to complete it, then
          confirm your answer. There's no visual design here — just page names.
        </p>

        <label className="take-study-name-label">
          <span className="take-study-name-label-text">Your name (optional)</span>
          <input
            className="take-study-name-input"
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
            placeholder="e.g. Jamie R."
          />
        </label>

        <button onClick={() => setPhase('test')} className="take-study-begin-btn">
          Begin Test
        </button>
      </div>
    </div>
  );
};

export default TakeStudy;
