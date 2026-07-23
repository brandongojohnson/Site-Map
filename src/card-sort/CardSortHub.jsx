import React, { useState, useEffect, useCallback } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../config/firebase';
import { useAuth, signInWithGoogle, signOutUser } from './useAuth';
import { createStudy, deleteStudy, listMyStudies, buildStudyLink } from './studyStore';
import { makeCards, makeCategories, SORT_TYPES } from './sortUtils';
import CardSortStudy from './CardSortStudy';
import CreateStudyForm from './CreateStudyForm';
import StudyCreated from './StudyCreated';
import StudyResults from './StudyResults';

const StudyRow = ({ study, onViewResults, onDelete }) => {
  const [copied, setCopied] = useState(false);
  const [sessionCount, setSessionCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    get(ref(db, `cardSortStudySessions/${study.id}`)).then((snap) => {
      if (!cancelled) setSessionCount(snap.exists() ? Object.keys(snap.val()).length : 0);
    });
    return () => {
      cancelled = true;
    };
  }, [study.id]);

  const copyLink = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(buildStudyLink(study.id));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div
      onClick={() => onViewResults(study.id)}
      className="flex items-center justify-between bg-white rounded-xl shadow-sm px-5 py-4 cursor-pointer hover:shadow-md transition-all"
    >
      <div className="min-w-0">
        <h3 className="font-bold text-sm truncate">{study.studyName}</h3>
        <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mt-1">
          {SORT_TYPES[study.type]?.label} · {study.cards?.length ?? 0} cards ·{' '}
          {sessionCount === null ? '…' : sessionCount} response{sessionCount === 1 ? '' : 's'}
        </p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={copyLink}
          className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest bg-[#f3f3f4] hover:bg-[#e8e8e8] transition-all"
        >
          {copied ? 'Copied' : 'Copy Link'}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(study.id);
          }}
          title="Delete study"
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[#8a8a8a] hover:bg-[#f3f3f4] hover:text-[#7161EF] transition-all"
        >
          <span className="material-symbols-outlined text-base">delete</span>
        </button>
      </div>
    </div>
  );
};

// Sign-in opens a Google popup (see useAuth.js) rather than redirecting —
// the page itself never navigates away, so there's no "pending" state to
// show while it's open.
const AuthControl = ({ user }) => {
  if (user === undefined) {
    return <span className="text-xs text-[#8a8a8a]">…</span>;
  }

  if (!user) {
    return (
      <button
        onClick={() => signInWithGoogle().catch((err) => console.error('Sign-in failed:', err))}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs uppercase tracking-widest bg-[#7161EF] text-white hover:opacity-90 transition-all"
      >
        <span className="material-symbols-outlined text-base">login</span>
        Sign In with Google
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {user.photoURL ? (
        <img src={user.photoURL} alt="" className="w-7 h-7 rounded-full" referrerPolicy="no-referrer" />
      ) : (
        <div className="w-7 h-7 rounded-full bg-[#7161EF] text-white flex items-center justify-center text-xs font-bold">
          {(user.displayName || user.email || '?')[0].toUpperCase()}
        </div>
      )}
      <span className="text-xs text-[#474747] max-w-[10rem] truncate hidden sm:inline">
        {user.displayName || user.email}
      </span>
      <button
        onClick={() => signOutUser().catch((err) => console.error('Sign-out failed:', err))}
        className="text-[10px] uppercase tracking-widest text-[#8a8a8a] hover:text-[#7161EF] transition-all"
      >
        Sign Out
      </button>
    </div>
  );
};

// Entry point reached from the sidebar. Offers a solo "quick sort" (unchanged,
// see CardSortStudy, no login required) alongside creating a study with a
// shareable link — that requires a Google account, since studies and their
// responses are stored under the creator's account.
// Sign-in redirects the whole page away and back, so "click create while
// signed out" can't just resume in memory — the intent survives the round
// trip in sessionStorage and is replayed once a real user shows up.
const POST_LOGIN_INTENT_KEY = 'cardSortPostLoginIntent';

const CardSortHub = ({ onExit }) => {
  const { user, authError } = useAuth();
  const [mode, setMode] = useState('hub'); // hub | quick | create | created | results
  const [studies, setStudies] = useState([]);
  const [loadingStudies, setLoadingStudies] = useState(true);
  const [creating, setCreating] = useState(false);
  const [lastCreated, setLastCreated] = useState(null);
  const [activeStudyId, setActiveStudyId] = useState(null);

  const loadStudies = useCallback(() => {
    if (!user) {
      setStudies([]);
      setLoadingStudies(false);
      return;
    }
    setLoadingStudies(true);
    listMyStudies(user.uid).then((results) => {
      setStudies(results);
      setLoadingStudies(false);
    });
  }, [user]);

  useEffect(() => {
    if (mode === 'hub') loadStudies();
  }, [mode, loadStudies]);

  // Guard against reaching "create" while signed out (e.g. the session
  // expired in another tab) — bounce back to the hub rather than crash.
  useEffect(() => {
    if (mode === 'create' && user === null) setMode('hub');
  }, [mode, user]);

  // Resume "Create a Study" after the sign-in redirect brings the user back.
  useEffect(() => {
    if (user && sessionStorage.getItem(POST_LOGIN_INTENT_KEY) === 'create') {
      sessionStorage.removeItem(POST_LOGIN_INTENT_KEY);
      setMode('create');
    }
  }, [user]);

  const handleCreate = async ({ type, studyName, intention, cardLabels, categoryNames }) => {
    if (!user) return;
    setCreating(true);
    try {
      const record = await createStudy(
        {
          type,
          studyName,
          intention,
          cards: makeCards(cardLabels),
          categories: makeCategories(categoryNames, type !== 'open'),
        },
        user.uid
      );
      setLastCreated(record);
      setMode('created');
    } catch (err) {
      console.error('Failed to create study:', err);
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = async (studyId) => {
    if (!user) return;
    if (!window.confirm('Delete this study and all of its responses? This can\'t be undone.')) return;
    try {
      await deleteStudy(studyId, user.uid);
      setStudies((prev) => prev.filter((s) => s.id !== studyId));
    } catch (err) {
      console.error('Failed to delete study:', err);
    }
  };

  const startCreateFlow = () => {
    if (user) {
      setMode('create');
      return;
    }
    sessionStorage.setItem(POST_LOGIN_INTENT_KEY, 'create');
    signInWithGoogle().catch((err) => {
      console.error('Sign-in failed:', err);
      sessionStorage.removeItem(POST_LOGIN_INTENT_KEY);
    });
  };

  if (mode === 'quick') {
    return <CardSortStudy onExit={() => setMode('hub')} />;
  }

  if (mode === 'create') {
    if (!user) return null; // the effect above will bounce back to 'hub'
    return <CreateStudyForm onCreate={handleCreate} onExit={() => setMode('hub')} creating={creating} />;
  }

  if (mode === 'created' && lastCreated) {
    return (
      <StudyCreated
        study={lastCreated}
        link={buildStudyLink(lastCreated.id)}
        onDone={() => setMode('hub')}
        onViewResults={() => {
          setActiveStudyId(lastCreated.id);
          setMode('results');
        }}
      />
    );
  }

  if (mode === 'results' && activeStudyId) {
    return <StudyResults studyId={activeStudyId} onExit={() => setMode('hub')} />;
  }

  return (
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black">
      <header className="flex items-center justify-between px-8 py-5 border-b border-[#c6c6c6]/40 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#7161EF] rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">style</span>
          </div>
          <div>
            <h1 className="text-xl font-black leading-tight">Card Sort</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#474747]">Studies</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <AuthControl user={user} />
          <button
            onClick={onExit}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Editor
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-10">
        {authError && (
          <p className="text-xs text-red-600 bg-red-50 rounded-lg px-4 py-2.5 mb-6">{authError}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <button
            onClick={startCreateFlow}
            className="text-left rounded-xl p-6 bg-[#7161EF] text-white hover:opacity-90 transition-all"
          >
            <span className="material-symbols-outlined text-2xl mb-3 block">
              {user ? 'send' : 'login'}
            </span>
            <h2 className="font-black text-base mb-1">
              {user ? 'Create a Study to Send' : 'Sign In to Create a Study'}
            </h2>
            <p className="text-sm text-white/70">
              {user
                ? 'Describe your intention, define the deck, and get a link to send to participants. Collects a similarity matrix, dendrogram, and category frequency analysis as responses come in.'
                : 'Studies and their responses are saved to your Google account, so you can come back to results from any device. Click to sign in and get started.'}
            </p>
          </button>
          <button
            onClick={() => setMode('quick')}
            className="text-left rounded-xl p-6 bg-white hover:shadow-md transition-all"
          >
            <span className="material-symbols-outlined text-2xl mb-3 block">bolt</span>
            <h2 className="font-black text-base mb-1">Quick Sort (This Device)</h2>
            <p className="text-sm text-[#474747]">
              Sort a deck yourself, right now, and see your own results immediately. No sign-in
              needed.
            </p>
          </button>
        </div>

        <h2 className="text-sm uppercase tracking-widest font-bold mb-4">My Studies</h2>
        {!user ? (
          <p className="text-sm text-[#8a8a8a]">Sign in to see the studies you've created.</p>
        ) : loadingStudies ? (
          <p className="text-sm text-[#8a8a8a]">Loading…</p>
        ) : studies.length === 0 ? (
          <p className="text-sm text-[#8a8a8a]">
            You haven't created a study yet. Create one above to get a shareable link.
          </p>
        ) : (
          <div className="space-y-3">
            {studies.map((study) => (
              <StudyRow
                key={study.id}
                study={study}
                onViewResults={(id) => {
                  setActiveStudyId(id);
                  setMode('results');
                }}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CardSortHub;
