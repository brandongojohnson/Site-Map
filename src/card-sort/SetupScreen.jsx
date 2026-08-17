import React, { useState, useMemo } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../config/firebase';
import { SORT_TYPES, SAMPLE_CARDS, SAMPLE_CATEGORIES, treeToCardLabels } from './sortUtils';
import SortlyLogo from '../shared/components/SortlyLogo';

const inputCls =
  'w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-[#7161EF] focus:ring-0';

const StepShell = ({ eyebrow, title, subtitle, children }) => (
  <div className="w-full max-w-2xl">
    <p className="text-[10px] uppercase tracking-normal text-[#8a8a8a] font-bold mb-2">{eyebrow}</p>
    <h2 className="text-2xl font-black mb-2">{title}</h2>
    {subtitle && <p className="text-sm text-[#474747] mb-8">{subtitle}</p>}
    {!subtitle && <div className="mb-8" />}
    {children}
  </div>
);

const SetupScreen = ({ onStart, onExit }) => {
  const [type, setType] = useState(null);
  const [studyName, setStudyName] = useState('');
  const [participant, setParticipant] = useState('');
  const [cardsText, setCardsText] = useState('');
  const [categoriesText, setCategoriesText] = useState('');
  const [importing, setImporting] = useState(false);
  const [notice, setNotice] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);

  const cardLines = cardsText.split('\n').map((l) => l.trim()).filter(Boolean);
  const categoryLines = categoriesText.split('\n').map((l) => l.trim()).filter(Boolean);
  const needsCategories = type !== 'open';

  const steps = useMemo(
    () => ['type', 'name', 'participant', 'cards', ...(needsCategories ? ['categories'] : []), 'review'],
    [needsCategories]
  );
  const step = steps[stepIndex];

  const importFromSitemap = async () => {
    setImporting(true);
    setNotice(null);
    try {
      const snapshot = await get(ref(db, 'vellumSitemap'));
      const labels = treeToCardLabels(snapshot.val());
      if (labels.length === 0) {
        setNotice('No sitemap pages found to import.');
      } else {
        setCardsText(labels.join('\n'));
        setNotice(`Imported ${labels.length} pages from your sitemap.`);
      }
    } catch (err) {
      console.error('Sitemap import failed:', err);
      setNotice('Could not load the sitemap from Firebase.');
    } finally {
      setImporting(false);
    }
  };

  const canAdvance = {
    type: !!type,
    name: studyName.trim().length > 0,
    participant: true,
    cards: cardLines.length >= 2,
    categories: categoryLines.length >= 1,
    review: true,
  }[step];

  const goNext = () => {
    if (!canAdvance) return;
    if (step === 'review') {
      onStart({
        type,
        studyName: studyName.trim() || 'Untitled Study',
        participant: participant.trim(),
        cardLabels: cardLines,
        categoryNames: needsCategories ? categoryLines : [],
      });
      return;
    }
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
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
            <h1 className="text-xl font-black leading-tight">Card Sort Study</h1>
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

      {/* Step progress */}
      <div className="flex items-center gap-2 px-8 py-4">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`h-1.5 rounded-full flex-grow transition-all ${
              i <= stepIndex ? 'bg-[#7161EF]' : 'bg-[#dcdcdc]'
            }`}
          />
        ))}
      </div>

      <main className="flex-grow flex items-start justify-center px-8 pt-6 pb-16">
        {step === 'type' && (
          <StepShell eyebrow={`Step ${stepIndex + 1} of ${steps.length}`} title="Choose a sort type">
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(SORT_TYPES).map(([key, meta]) => (
                <button
                  key={key}
                  onClick={() => {
                    setType(key);
                    setStepIndex((i) => i + 1);
                  }}
                  className={`text-left rounded-xl p-5 border-2 transition-all ${
                    type === key
                      ? 'border-[#7161EF] bg-white shadow-md'
                      : 'border-transparent bg-white/60 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="material-symbols-outlined text-2xl">{meta.icon}</span>
                    {type === key && (
                      <span className="material-symbols-outlined text-xl">check_circle</span>
                    )}
                  </div>
                  <h3 className="font-black text-base mb-1">{meta.label}</h3>
                  <p className="text-sm text-[#474747] mb-2">{meta.tagline}</p>
                  <p className="text-[11px] uppercase tracking-normal text-[#8a8a8a]">
                    Best for: {meta.bestFor}
                  </p>
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {step === 'name' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Name this study"
            subtitle="Used to label your export and saved session."
          >
            <input
              autoFocus
              className={inputCls}
              value={studyName}
              onChange={(e) => setStudyName(e.target.value)}
              onKeyDown={onEnterAdvance}
              placeholder="e.g. Main Nav Card Sort"
            />
          </StepShell>
        )}

        {step === 'participant' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Who's sorting?"
            subtitle="Optional — helps you tell sessions apart later."
          >
            <input
              autoFocus
              className={inputCls}
              value={participant}
              onChange={(e) => setParticipant(e.target.value)}
              onKeyDown={onEnterAdvance}
              placeholder="e.g. P01, Jamie R."
            />
          </StepShell>
        )}

        {step === 'cards' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Add your cards"
            subtitle="One card per line. Add at least 2 to continue."
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-normal text-[#474747] font-bold">
                {cardLines.length} card{cardLines.length === 1 ? '' : 's'}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={importFromSitemap}
                  disabled={importing}
                  className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-normal bg-[#7161EF] text-white hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  {importing ? 'Importing…' : 'Import Sitemap Pages'}
                </button>
                <button
                  onClick={() => setCardsText(SAMPLE_CARDS.join('\n'))}
                  className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
                >
                  Sample Deck
                </button>
              </div>
            </div>
            <textarea
              autoFocus
              className={`${inputCls} h-64 resize-none font-mono text-xs leading-6`}
              value={cardsText}
              onChange={(e) => setCardsText(e.target.value)}
              placeholder={'One card per line, e.g.\nPricing\nContact Us\nBlog'}
            />
            {notice && <p className="mt-2 text-xs text-[#474747]">{notice}</p>}
          </StepShell>
        )}

        {step === 'categories' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Add your categories"
            subtitle={
              type === 'closed'
                ? 'Participants can only sort cards into these categories.'
                : 'Participants start with these but can add their own.'
            }
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-normal text-[#474747] font-bold">
                {categoryLines.length} categor{categoryLines.length === 1 ? 'y' : 'ies'}
              </span>
              <button
                onClick={() => setCategoriesText(SAMPLE_CATEGORIES.join('\n'))}
                className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
              >
                Sample Categories
              </button>
            </div>
            <textarea
              autoFocus
              className={`${inputCls} h-64 resize-none font-mono text-xs leading-6`}
              value={categoriesText}
              onChange={(e) => setCategoriesText(e.target.value)}
              placeholder={'One category per line, e.g.\nCompany\nProduct\nSupport'}
            />
          </StepShell>
        )}

        {step === 'review' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Ready to sort"
            subtitle="Double-check the details, then start the session."
          >
            <div className="rounded-xl bg-white shadow-sm divide-y divide-[#e8e8e8]">
              {[
                ['Sort type', SORT_TYPES[type]?.label],
                ['Study name', studyName.trim() || 'Untitled Study'],
                ['Participant', participant.trim() || '—'],
                ['Cards', `${cardLines.length} card${cardLines.length === 1 ? '' : 's'}`],
                [
                  'Categories',
                  needsCategories
                    ? `${categoryLines.length} categor${categoryLines.length === 1 ? 'y' : 'ies'}`
                    : 'Participant-defined (open sort)',
                ],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-[10px] uppercase tracking-normal text-[#8a8a8a] font-bold">
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
          disabled={!canAdvance}
          className="px-8 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-normal hover:opacity-90 active:scale-95 disabled:opacity-40 disabled:active:scale-100 transition-all"
        >
          {step === 'review' ? 'Start Sorting' : 'Continue'}
        </button>
      </footer>
    </div>
  );
};

export default SetupScreen;
