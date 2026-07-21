import React, { useState } from 'react';

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
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black flex items-center justify-center px-8">
      <div className="w-full max-w-xl text-center">
        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
          <span className="material-symbols-outlined text-3xl">check</span>
        </div>
        <h1 className="text-2xl font-black mb-2">“{study.studyName}” is ready to send</h1>
        <p className="text-sm text-[#474747] mb-8">
          Share this link with participants. Each person who opens it gets your intention
          statement, then sorts the {study.cards.length} cards on their own device.
        </p>

        <div className="flex items-center gap-2 bg-white rounded-lg border border-[#c6c6c6]/60 p-2 mb-3">
          <input
            readOnly
            value={link}
            onFocus={(e) => e.target.select()}
            className="flex-grow bg-transparent px-3 py-2 text-sm text-[#474747] focus:outline-none"
          />
          <button
            onClick={copyLink}
            className="flex-shrink-0 px-4 py-2 bg-black text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all"
          >
            {copied ? 'Copied' : 'Copy Link'}
          </button>
        </div>

        <p className="text-xs text-[#8a8a8a] mb-10">
          Results — including the similarity matrix, dendrogram, and category frequency
          analysis — build up automatically as responses come in.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={onDone}
            className="px-6 py-3 rounded-lg text-sm uppercase tracking-widest bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
          >
            Back to Studies
          </button>
          <button
            onClick={onViewResults}
            className="px-6 py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all"
          >
            View Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyCreated;
