import React, { useState, useMemo } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../config/firebase';
import { SORT_TYPES, SAMPLE_CARDS, SAMPLE_CATEGORIES, treeToCardLabels } from './sortUtils';
import SortlyLogo from '../shared/components/SortlyLogo';
import './WizardShell.css';

const StepShell = ({ eyebrow, title, subtitle, children }) => (
  <div className="wizard-step">
    <p className="wizard-step-eyebrow">{eyebrow}</p>
    <h2 className="wizard-step-title">{title}</h2>
    {subtitle && <p className="wizard-step-subtitle">{subtitle}</p>}
    {!subtitle && <div className="wizard-step-spacer" />}
    {children}
  </div>
);

// Wizard for creating a study that gets a shareable link, rather than sorting
// immediately. Adds an "intention" step — the purpose/instructions shown to
// each participant before they start sorting.
const CreateStudyForm = ({ onCreate, onExit, creating }) => {
  const [type, setType] = useState(null);
  const [studyName, setStudyName] = useState('');
  const [intention, setIntention] = useState('');
  const [cardsText, setCardsText] = useState('');
  const [categoriesText, setCategoriesText] = useState('');
  const [importing, setImporting] = useState(false);
  const [notice, setNotice] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);

  const cardLines = cardsText.split('\n').map((l) => l.trim()).filter(Boolean);
  const categoryLines = categoriesText.split('\n').map((l) => l.trim()).filter(Boolean);
  const needsCategories = type !== 'open';

  const steps = useMemo(
    () => ['type', 'name', 'intention', 'cards', ...(needsCategories ? ['categories'] : []), 'review'],
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
    intention: true,
    cards: cardLines.length >= 2,
    categories: categoryLines.length >= 1,
    review: true,
  }[step];

  const goNext = () => {
    if (!canAdvance) return;
    if (step === 'review') {
      onCreate({
        type,
        studyName: studyName.trim() || 'Untitled Study',
        intention: intention.trim(),
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
    <div className="wizard-shell">
      <header className="wizard-header">
        <div className="wizard-header-left">
          <SortlyLogo iconClassName="wizard-header-logo-icon" textClassName="wizard-header-logo-text" />
          <span className="wizard-header-divider" />
          <div>
            <h1 className="wizard-header-title">Create a Study to Send</h1>
            <p className="wizard-header-subtitle">Setup</p>
          </div>
        </div>
        <button onClick={onExit} className="wizard-cancel-btn">
          <span className="material-symbols-outlined wizard-icon-16">close</span>
          Cancel
        </button>
      </header>

      <div className="wizard-progress">
        {steps.map((s, i) => (
          <div key={s} className={`wizard-progress-bar ${i <= stepIndex ? 'is-done' : 'is-pending'}`} />
        ))}
      </div>

      <main className="wizard-main">
        {step === 'type' && (
          <StepShell eyebrow={`Step ${stepIndex + 1} of ${steps.length}`} title="Choose a sort type">
            <div className="wizard-type-grid">
              {Object.entries(SORT_TYPES).map(([key, meta]) => (
                <button
                  key={key}
                  onClick={() => {
                    setType(key);
                    setStepIndex((i) => i + 1);
                  }}
                  className={`wizard-type-card ${type === key ? 'is-selected' : ''}`}
                >
                  <div className="wizard-type-card-header">
                    <span className="material-symbols-outlined wizard-type-card-icon">{meta.icon}</span>
                    {type === key && (
                      <span className="material-symbols-outlined wizard-type-card-check">check_circle</span>
                    )}
                  </div>
                  <h3 className="wizard-type-card-title">{meta.label}</h3>
                  <p className="wizard-type-card-tagline">{meta.tagline}</p>
                  <p className="wizard-type-card-bestfor">Best for: {meta.bestFor}</p>
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {step === 'name' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Name this study"
            subtitle="Shown to you in your studies list, and in the results dashboard."
          >
            <input
              autoFocus
              className="wizard-input"
              value={studyName}
              onChange={(e) => setStudyName(e.target.value)}
              onKeyDown={onEnterAdvance}
              placeholder="e.g. Main Nav Card Sort"
            />
          </StepShell>
        )}

        {step === 'intention' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Describe the intention"
            subtitle="Tell participants what you're testing and why — this is shown before they start sorting."
          >
            <textarea
              autoFocus
              className="wizard-input wizard-textarea-intention"
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              placeholder="e.g. We're redesigning our site navigation and want to understand how you'd naturally group these pages. There are no right or wrong answers — sort the cards however makes sense to you."
            />
          </StepShell>
        )}

        {step === 'cards' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Add your cards"
            subtitle="One card per line. Add at least 2 to continue."
          >
            <div className="wizard-field-row">
              <span className="wizard-field-label">
                {cardLines.length} card{cardLines.length === 1 ? '' : 's'}
              </span>
              <div className="wizard-btn-group">
                <button onClick={importFromSitemap} disabled={importing} className="wizard-btn-primary-sm">
                  {importing ? 'Importing…' : 'Import Sitemap Pages'}
                </button>
                <button onClick={() => setCardsText(SAMPLE_CARDS.join('\n'))} className="wizard-btn-outline-sm">
                  Sample Deck
                </button>
              </div>
            </div>
            <textarea
              autoFocus
              className="wizard-input wizard-textarea-list"
              value={cardsText}
              onChange={(e) => setCardsText(e.target.value)}
              placeholder={'One card per line, e.g.\nPricing\nContact Us\nBlog'}
            />
            {notice && <p className="wizard-notice">{notice}</p>}
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
            <div className="wizard-field-row">
              <span className="wizard-field-label">
                {categoryLines.length} categor{categoryLines.length === 1 ? 'y' : 'ies'}
              </span>
              <button onClick={() => setCategoriesText(SAMPLE_CATEGORIES.join('\n'))} className="wizard-btn-outline-sm">
                Sample Categories
              </button>
            </div>
            <textarea
              autoFocus
              className="wizard-input wizard-textarea-list"
              value={categoriesText}
              onChange={(e) => setCategoriesText(e.target.value)}
              placeholder={'One category per line, e.g.\nCompany\nProduct\nSupport'}
            />
          </StepShell>
        )}

        {step === 'review' && (
          <StepShell
            eyebrow={`Step ${stepIndex + 1} of ${steps.length}`}
            title="Ready to create"
            subtitle="You'll get a shareable link on the next screen."
          >
            <div className="wizard-review-card">
              {[
                ['Sort type', SORT_TYPES[type]?.label],
                ['Study name', studyName.trim() || 'Untitled Study'],
                ['Intention', intention.trim() || '—'],
                ['Cards', `${cardLines.length} card${cardLines.length === 1 ? '' : 's'}`],
                [
                  'Categories',
                  needsCategories
                    ? `${categoryLines.length} categor${categoryLines.length === 1 ? 'y' : 'ies'}`
                    : 'Participant-defined (open sort)',
                ],
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
          {step === 'review' ? (creating ? 'Creating…' : 'Create Study & Get Link') : 'Continue'}
        </button>
      </footer>
    </div>
  );
};

export default CreateStudyForm;
