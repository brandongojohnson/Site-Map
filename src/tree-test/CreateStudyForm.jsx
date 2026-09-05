import React, { useState, useMemo } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../config/firebase';
import { parseIndentedTree, treeToIndentedText, sitemapToTestTree, cloneSampleTree } from './treeTestUtils';
import TreeStep from './TreeStep';
import TasksStep from './TasksStep';
import SortlyLogo from '../shared/components/SortlyLogo';
import './WizardShell.css';

const StepShell = ({ eyebrow, title, subtitle, wide, children }) => (
  <div className={`wizard-step ${wide ? 'is-wide' : ''}`}>
    <p className="wizard-step-eyebrow">{eyebrow}</p>
    <h2 className="wizard-step-title">{title}</h2>
    {subtitle && <p className="wizard-step-subtitle">{subtitle}</p>}
    {!subtitle && <div className="wizard-step-spacer" />}
    {children}
  </div>
);

const STEPS = ['name', 'intention', 'tree', 'tasks', 'review'];

// Wizard for creating a tree test that gets a shareable link, rather than
// running the test immediately. Adds an "intention" step — the purpose/
// instructions shown to each participant before they start.
const CreateStudyForm = ({ onCreate, onExit, creating }) => {
  const [studyName, setStudyName] = useState('');
  const [intention, setIntention] = useState('');
  const [treeText, setTreeText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [importing, setImporting] = useState(false);
  const [notice, setNotice] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);

  const tree = useMemo(() => parseIndentedTree(treeText), [treeText]);
  const step = STEPS[stepIndex];

  const importFromSitemap = async () => {
    setImporting(true);
    setNotice(null);
    try {
      const snapshot = await get(ref(db, 'vellumSitemap'));
      const imported = sitemapToTestTree(snapshot.val());
      if (!imported) {
        setNotice('No sitemap pages found to import.');
      } else {
        setTreeText(treeToIndentedText(imported));
        setNotice('Imported your sitemap structure.');
        setTasks([]);
      }
    } catch (err) {
      console.error('Sitemap import failed:', err);
      setNotice('Could not load the sitemap from Firebase.');
    } finally {
      setImporting(false);
    }
  };

  const useSample = () => {
    setTreeText(treeToIndentedText(cloneSampleTree()));
    setNotice(null);
    setTasks([]);
  };

  const canAdvance = {
    name: studyName.trim().length > 0,
    intention: true,
    tree: !!tree && (tree.children || []).length > 0,
    tasks: tasks.length >= 1,
    review: true,
  }[step];

  const goNext = () => {
    if (!canAdvance) return;
    if (step === 'review') {
      onCreate({ studyName: studyName.trim() || 'Untitled Study', intention: intention.trim(), tree, tasks });
      return;
    }
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const goBack = () => {
    if (stepIndex === 0) onExit();
    else setStepIndex((i) => i - 1);
  };

  const onEnterAdvance = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && canAdvance) {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div className="wizard-shell">
      <header className="wizard-header">
        <div className="wizard-header-left">
          <SortlyLogo iconClassName="wizard-header-logo-icon" textClassName="wizard-header-logo-text" />
          <span className="wizard-header-divider" />
          <div>
            <h1 className="wizard-header-title">Create a Tree Test to Send</h1>
            <p className="wizard-header-subtitle">Setup</p>
          </div>
        </div>
        <button onClick={onExit} className="wizard-cancel-btn">
          <span className="material-symbols-outlined wizard-icon-16">close</span>
          Cancel
        </button>
      </header>

      <div className="wizard-progress">
        {STEPS.map((s, i) => (
          <div key={s} className={`wizard-progress-bar ${i <= stepIndex ? 'is-done' : 'is-pending'}`} />
        ))}
      </div>

      <main className="wizard-main">
        {step === 'name' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${STEPS.length}`}
            title="Name this test"
            subtitle="Shown to you in your studies list, and in the results dashboard."
          >
            <input
              autoFocus
              className="wizard-input"
              value={studyName}
              onChange={(e) => setStudyName(e.target.value)}
              onKeyDown={onEnterAdvance}
              placeholder="e.g. Main Nav Tree Test"
            />
          </StepShell>
        )}

        {step === 'intention' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${STEPS.length}`}
            title="Describe the intention"
            subtitle="Tell participants what you're testing and why — this is shown before they start."
          >
            <textarea
              autoFocus
              className="wizard-input wizard-textarea-intention"
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              placeholder="e.g. We're testing whether our proposed navigation makes sense. You'll be given a few tasks and asked to click through the pages until you find where you'd expect to complete each one. There's no visual design here — just labels — and no wrong turns you can't recover from."
            />
          </StepShell>
        )}

        {step === 'tree' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${STEPS.length}`}
            title="Build the hierarchy"
            subtitle="This is the structure participants will navigate — no visual design, just labels."
            wide
          >
            <TreeStep
              treeText={treeText}
              setTreeText={(t) => {
                setTreeText(t);
                setTasks([]);
              }}
              onImportSitemap={importFromSitemap}
              importing={importing}
              onSample={useSample}
              notice={notice}
            />
          </StepShell>
        )}

        {step === 'tasks' && tree && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${STEPS.length}`}
            title="Write your tasks"
            subtitle="Add at least one. Each participant attempts every task, in order."
            wide
          >
            <TasksStep tree={tree} tasks={tasks} setTasks={setTasks} />
          </StepShell>
        )}

        {step === 'review' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${STEPS.length}`}
            title="Ready to create"
            subtitle="You'll get a shareable link on the next screen."
          >
            <div className="wizard-review-card">
              {[
                ['Study name', studyName.trim() || 'Untitled Study'],
                ['Intention', intention.trim() || '—'],
                ['Tree', tree ? `${(tree.children || []).length} top-level pages` : '—'],
                ['Tasks', `${tasks.length} task${tasks.length === 1 ? '' : 's'}`],
              ].map(([label, value]) => (
                <div key={label} className="wizard-review-row is-align-start">
                  <span className="wizard-review-label is-shrink">{label}</span>
                  <span className="wizard-review-value">{value}</span>
                </div>
              ))}
            </div>
          </StepShell>
        )}
      </main>

      <footer className="wizard-footer">
        <button onClick={goBack} className="wizard-back-btn">
          <span className="material-symbols-outlined wizard-icon-16">arrow_back</span>
          {stepIndex === 0 ? 'Cancel' : 'Back'}
        </button>
        <button onClick={goNext} disabled={!canAdvance || creating} className="wizard-next-btn">
          {step === 'review' ? (creating ? 'Creating…' : 'Create Test & Get Link') : 'Continue'}
        </button>
      </footer>
    </div>
  );
};

export default CreateStudyForm;
