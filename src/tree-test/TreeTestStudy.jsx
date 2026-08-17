import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../config/firebase';

import SetupScreen from './SetupScreen';
import TestRunner from './TestRunner';
import ResultsScreen from './ResultsScreen';

const TreeTestStudy = ({ onExit }) => {
  const [step, setStep] = useState('setup');
  const [study, setStudy] = useState(null);
  const [session, setSession] = useState(null);
  const [saveState, setSaveState] = useState('idle');
  const [runId, setRunId] = useState(0);

  const handleStart = ({ studyName, participant, tree, tasks }) => {
    setStudy({ studyName, participant, tree, tasks });
    setRunId((n) => n + 1);
    setStep('test');
  };

  const handleFinish = (taskRecords) => {
    const newSession = {
      studyName: study.studyName,
      participant: study.participant,
      completedAt: new Date().toISOString(),
      tasks: taskRecords,
    };
    setSession(newSession);
    setStep('results');

    setSaveState('saving');
    push(ref(db, 'treeTestSessions'), newSession)
      .then(() => setSaveState('saved'))
      .catch((err) => {
        console.error('Failed to save tree test session:', err);
        setSaveState('error');
      });
  };

  if (step === 'test') {
    return (
      <TestRunner
        key={runId}
        studyName={study.studyName}
        tree={study.tree}
        tasks={study.tasks}
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
          setStep('test');
        }}
        onNewStudy={() => setStep('setup')}
        onExit={onExit}
      />
    );
  }

  return <SetupScreen onStart={handleStart} onExit={onExit} />;
};

export default TreeTestStudy;
