import React, { useState } from 'react';
import SortlyLogo from '../shared/components/SortlyLogo';
import './CardSortShared.css';

const StudyCreated = ({ study, link, onViewResults, onDone }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="centered-screen">
      <div className="centered-card">
        <SortlyLogo
          subtitle="Card Sort Studies"
          className="centered-logo-wrap"
          iconClassName="centered-logo-icon"
          textClassName="centered-logo-text"
        />
        <div className="centered-check-badge">
          <span className="material-symbols-outlined centered-check-icon">check</span>
        </div>
        <h1 className="centered-title">“{study.studyName}” is ready to send</h1>
        <p className="centered-desc">
          Share this link with participants. Each person who opens it gets your intention
          statement, then sorts the {study.cards.length} cards on their own device.
        </p>

        <div className="centered-link-row">
          <input
            readOnly
            value={link}
            onFocus={(e) => e.target.select()}
            className="centered-link-input"
          />
          <button onClick={copyLink} className="centered-copy-btn">
            {copied ? 'Copied' : 'Copy Link'}
          </button>
        </div>

        <p className="centered-fine-print">
          Results — including the similarity matrix, dendrogram, and category frequency
          analysis — build up automatically as responses come in.
        </p>

        <div className="centered-actions">
          <button onClick={onDone} className="results-action-outline">
            Back to Studies
          </button>
          <button onClick={onViewResults} className="results-action-primary">
            View Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyCreated;
