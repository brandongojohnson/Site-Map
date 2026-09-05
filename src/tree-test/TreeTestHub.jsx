import React, { useState, useEffect, useCallback } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../config/firebase';
import { useAuth, signInWithGoogle } from '../card-sort/useAuth';
import { createStudy, deleteStudy, listMyStudies, buildStudyLink } from './studyStore';
import TreeTestStudy from './TreeTestStudy';
import CreateStudyForm from './CreateStudyForm';
import StudyCreated from './StudyCreated';
import StudyResults from './StudyResults';
import AccountBadge from '../shared/components/AccountBadge';
import GetStartedMenu from '../shared/components/GetStartedMenu';
import SortlyLogo from '../shared/components/SortlyLogo';
import './TreeTestHub.css';

const StudyRow = ({ study, onViewResults, onDelete }) => {
  const [copied, setCopied] = useState(false);
  const [sessionCount, setSessionCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    get(ref(db, `treeTestStudySessions/${study.id}`)).then((snap) => {
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
    <div onClick={() => onViewResults(study.id)} className="card-sort-study-row">
      <div className="card-sort-study-row-info">
        <h3 className="card-sort-study-row-name">{study.studyName}</h3>
        <p className="card-sort-study-row-meta">
          {study.tasks?.length ?? 0} task{study.tasks?.length === 1 ? '' : 's'} ·{' '}
          {sessionCount === null ? '…' : sessionCount} response{sessionCount === 1 ? '' : 's'}
        </p>
      </div>
      <div className="card-sort-study-row-actions">
        <button onClick={copyLink} className="card-sort-copy-btn">
          {copied ? 'Copied' : 'Copy Link'}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(study.id);
          }}
          title="Delete study"
          className="card-sort-delete-btn"
        >
          <span className="material-symbols-outlined card-sort-delete-icon">delete</span>
        </button>
      </div>
    </div>
  );
};

// Entry point reached from the sidebar. Offers a solo "quick test" (no
// login required, see TreeTestStudy) alongside creating a study with a
// shareable link — that requires a Google account, since studies and their
// responses are stored under the creator's account. Mirrors CardSortHub's
// structure and sign-in-resume behavior exactly.
const POST_LOGIN_INTENT_KEY = 'treeTestPostLoginIntent';

const TreeTestHub = ({ onNavigate }) => {
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

  // Resume "Create a Test" after the sign-in redirect brings the user back.
  useEffect(() => {
    if (user && sessionStorage.getItem(POST_LOGIN_INTENT_KEY) === 'create') {
      sessionStorage.removeItem(POST_LOGIN_INTENT_KEY);
      setMode('create');
    }
  }, [user]);

  const handleCreate = async ({ studyName, intention, tree, tasks }) => {
    if (!user) return;
    setCreating(true);
    try {
      const record = await createStudy({ studyName, intention, tree, tasks }, user.uid);
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
    if (!window.confirm("Delete this test and all of its responses? This can't be undone.")) return;
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
    return <TreeTestStudy onExit={() => setMode('hub')} />;
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
    <div className="card-sort-hub">
      <header className="card-sort-hub-header">
        <SortlyLogo
          subtitle="Tree Test Studies"
          iconClassName="card-sort-hub-logo-icon"
          textClassName="card-sort-hub-logo-text"
        />
        <div className="card-sort-hub-header-actions">
          <GetStartedMenu onNavigate={onNavigate} />
          <AccountBadge />
        </div>
      </header>

      <main className="card-sort-hub-main">
        {authError && <p className="card-sort-hub-error">{authError}</p>}

        <div className="card-sort-hub-cta-grid">
          <button onClick={startCreateFlow} className="card-sort-hub-cta-primary">
            <span className="material-symbols-outlined card-sort-hub-cta-icon">
              {user ? 'send' : 'login'}
            </span>
            <h2 className="card-sort-hub-cta-title">
              {user ? 'Create a Test to Send' : 'Sign In to Create a Test'}
            </h2>
            <p className="card-sort-hub-cta-desc">
              {user
                ? 'Build a hierarchy, write your tasks, and get a link to send to participants. Collects success rate, directness, time on task, and where wrong turns lead as responses come in.'
                : 'Studies and their responses are saved to your Google account, so you can come back to results from any device. Click to sign in and get started.'}
            </p>
          </button>
          <button onClick={() => setMode('quick')} className="card-sort-hub-cta-secondary">
            <span className="material-symbols-outlined card-sort-hub-cta-icon">bolt</span>
            <h2 className="card-sort-hub-cta-title">Quick Test (This Device)</h2>
            <p className="card-sort-hub-cta-desc-secondary">
              Build a tree, attempt your own tasks, and see your results immediately. No sign-in
              needed.
            </p>
          </button>
        </div>

        <h2 className="card-sort-hub-section-title">My Studies</h2>
        {!user ? (
          <p className="card-sort-hub-empty-text">Sign in to see the studies you've created.</p>
        ) : loadingStudies ? (
          <p className="card-sort-hub-empty-text">Loading…</p>
        ) : studies.length === 0 ? (
          <p className="card-sort-hub-empty-text">
            You haven't created a test yet. Create one above to get a shareable link.
          </p>
        ) : (
          <div className="card-sort-hub-list">
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

export default TreeTestHub;
