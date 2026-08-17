import { ref, push, get, set, update, onValue } from 'firebase/database';
import { db } from '../config/firebase';

// ---------- Firebase: studies ----------

// A study is owned by the Google account that created it (ownerId = auth
// uid). Alongside the study record itself, we write a
// users/{uid}/treeTestStudies/ index entry so "my studies" can be listed
// without scanning every study. Kept separate from users/{uid}/studies
// (card sort's index) so the two features can never collide on an id.
export const createStudy = async (study, ownerId) => {
  const studyRef = push(ref(db, 'treeTestStudies'));
  const id = studyRef.key;
  const record = { ...study, id, ownerId, createdAt: new Date().toISOString() };
  await update(ref(db), {
    [`treeTestStudies/${id}`]: record,
    [`users/${ownerId}/treeTestStudies/${id}`]: true,
  });
  return record;
};

// Firebase Realtime Database drops empty arrays on write (they read back as
// undefined) — normalize on read so consumers can always assume arrays.
export const getStudy = async (studyId) => {
  const snapshot = await get(ref(db, `treeTestStudies/${studyId}`));
  const study = snapshot.val();
  if (!study) return study;
  return { ...study, tasks: study.tasks || [] };
};

export const deleteStudy = async (studyId, ownerId) => {
  await update(ref(db), {
    [`treeTestStudies/${studyId}`]: null,
    [`treeTestStudySessions/${studyId}`]: null,
    [`users/${ownerId}/treeTestStudies/${studyId}`]: null,
  });
};

// All studies created by one account.
export const listMyStudies = async (ownerId) => {
  const snapshot = await get(ref(db, `users/${ownerId}/treeTestStudies`));
  if (!snapshot.exists()) return [];
  const ids = Object.keys(snapshot.val());
  const studies = await Promise.all(ids.map((id) => getStudy(id)));
  return studies.filter(Boolean);
};

// ---------- Firebase: sessions (responses) ----------

export const saveStudySession = async (studyId, session) => {
  const sessionRef = push(ref(db, `treeTestStudySessions/${studyId}`));
  await set(sessionRef, session);
  return sessionRef.key;
};

// Live-subscribes to every response for a study. Returns an unsubscribe fn.
export const subscribeStudySessions = (studyId, callback) => {
  const sessionsRef = ref(db, `treeTestStudySessions/${studyId}`);
  const unsubscribe = onValue(sessionsRef, (snapshot) => {
    const val = snapshot.val() || {};
    callback(Object.values(val));
  });
  return unsubscribe;
};

// ---------- Shareable link ----------

export const buildStudyLink = (studyId) => {
  const url = new URL(window.location.href);
  url.search = `?treetest=${studyId}`;
  url.hash = '';
  return url.toString();
};
