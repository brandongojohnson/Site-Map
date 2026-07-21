import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../config/firebase';

import SetupScreen from './SetupScreen';
import SortBoard from './SortBoard';
import ResultsScreen from './ResultsScreen';
import { makeCards, makeCategories, buildResults } from './sortUtils';

const CardSortStudy = ({ onExit }) => {
  const [step, setStep] = useState('setup');
  const [study, setStudy] = useState(null);
  const [session, setSession] = useState(null);
  const [saveState, setSaveState] = useState('idle');
  const [runId, setRunId] = useState(0);

  const handleStart = ({ type, studyName, participant, cardLabels, categoryNames }) => {
    setStudy({
      type,
      studyName,
      participant,
      cards: makeCards(cardLabels),
      // Predefined categories can't be renamed or deleted in closed/hybrid sorts.
      initialCategories: makeCategories(categoryNames, type !== 'open'),
    });
    setRunId((n) => n + 1);
    setStep('sort');
  };

  const handleFinish = (categories, assignments) => {
    const newSession = {
      studyName: study.studyName,
      participant: study.participant,
      type: study.type,
      completedAt: new Date().toISOString(),
      results: buildResults(study.cards, categories, assignments),
    };
    setSession(newSession);
    setStep('results');

    setSaveState('saving');
    push(ref(db, 'cardSortSessions'), newSession)
      .then(() => setSaveState('saved'))
      .catch((err) => {
        console.error('Failed to save card sort session:', err);
        setSaveState('error');
      });
  };

  if (step === 'sort') {
    return (
      <SortBoard
        key={runId}
        study={study}
        onFinish={handleFinish}
        onExit={() => setStep('setup')}
      />
    );
  }

  if (step === 'results') {
    return (
      <ResultsScreen
        session={session}
        saveState={saveState}
        onRestart={() => {
          setRunId((n) => n + 1);
          setStep('sort');
        }}
        onNewStudy={() => setStep('setup')}
        onExit={onExit}
      />
    );
  }

  return <SetupScreen onStart={handleStart} onExit={onExit} />;
};

export default CardSortStudy;
