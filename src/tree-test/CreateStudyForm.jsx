import React, { useState, useMemo } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../config/firebase';
import { parseIndentedTree, treeToIndentedText, sitemapToTestTree, cloneSampleTree } from './treeTestUtils';
import TreeStep from './TreeStep';
import TasksStep from './TasksStep';
import SortlyLogo from '../shared/components/SortlyLogo';

const inputCls =
  'w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-[#7161EF] focus:ring-0';

const StepShell = ({ eyebrow, title, subtitle, wide, children }) => (
  <div className={`w-full ${wide ? 'max-w-3xl' : 'max-w-2xl'}`}>
    <p className="text-[10px] uppercase tracking-normal text-[#8a8a8a] font-bold mb-2">{eyebrow}</p>
    <h2 className="text-2xl font-black mb-2">{title}</h2>
    {subtitle && <p className="text-sm text-[#474747] mb-8">{subtitle}</p>}
    {!subtitle && <div className="mb-8" />}
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
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col">
      <header className="flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white">
        <div className="flex items-center gap-3">
          <SortlyLogo iconClassName="text-base text-black" textClassName="text-black" />
          <span className="w-px h-8 bg-[#e6e6e9]" />
          <div>
            <h1 className="text-xl font-black leading-tight">Create a Tree Test to Send</h1>
            <p className="text-[10px] uppercase tracking-normal text-[#474747]">Setup</p>
          </div>
        </div>
        <button
          onClick={onExit}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase tracking-normal text-[#474747] hover:bg-[#e8e8e8] transition-all"
        >
          <span className="material-symbols-outlined text-base">close</span>
          Cancel
        </button>
      </header>

      <div className="flex items-center gap-2 px-8 py-4">
        {STEPS.map((s, i) => (
          <div
            key={s}
            className={`h-1.5 rounded-full flex-grow transition-all ${
              i <= stepIndex ? 'bg-[#7161EF]' : 'bg-[#dcdcdc]'
            }`}
          />
        ))}
      </div>

      <main className="flex-grow flex items-start justify-center px-8 pt-6 pb-16">
        {step === 'name' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${STEPS.length}`}
            title="Name this test"
            subtitle="Shown to you in your studies list, and in the results dashboard."
          >
            <input
              autoFocus
              className={inputCls}
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
              className={`${inputCls} h-40 resize-none leading-6`}
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
            <div className="rounded-xl bg-white shadow-sm divide-y divide-[#e8e8e8]">
              {[
                ['Study name', studyName.trim() || 'Untitled Study'],
                ['Intention', intention.trim() || '—'],
                ['Tree', tree ? `${(tree.children || []).length} top-level pages` : '—'],
                ['Tasks', `${tasks.length} task${tasks.length === 1 ? '' : 's'}`],
              ].map(([label, value]) => (
                <div key={label} className="flex items-start justify-between px-5 py-3.5 gap-6">
                  <span className="text-[10px] uppercase tracking-normal text-[#8a8a8a] font-bold flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
          </StepShell>
        )}
      </main>

      <footer className="sticky bottom-0 bg-white border-t border-[#c6c6c6]/40 px-8 py-4 flex items-center justify-between">
        <button
          onClick={goBack}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm uppercase tracking-normal text-[#474747] hover:bg-[#e8e8e8] transition-all"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          {stepIndex === 0 ? 'Cancel' : 'Back'}
        </button>
        <button
          onClick={goNext}
          disabled={!canAdvance || creating}
          className="px-8 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-normal hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:active:scale-100 transition-all"
        >
          {step === 'review' ? (creating ? 'Creating…' : 'Create Test & Get Link') : 'Continue'}
        </button>
      </footer>
    </div>
  );
};

export default CreateStudyForm;
