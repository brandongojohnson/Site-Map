import { ref, get, set, push, update, remove, onValue } from 'firebase/database';
import { db } from '../config/firebase';

// Boards live at sitemapBoards/{id} = { id, name, tree, createdAt, updatedAt }.

export const blankTree = () => ({
  id: 'root',
  title: 'Home',
  slug: 'index.html',
  label: 'Home',
  icon: 'home',
  status: 'public',
  description: 'Main entry point of the site.',
  children: [],
});

export const createBoard = async (name, tree) => {
  const boardRef = push(ref(db, 'sitemapBoards'));
  const board = {
    id: boardRef.key,
    name,
    tree,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  await set(boardRef, board);
  return board;
};

export const listBoards = async () => {
  const snap = await get(ref(db, 'sitemapBoards'));
  const val = snap.val() || {};
  return Object.values(val).sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
};

export const deleteBoard = (boardId) => remove(ref(db, `sitemapBoards/${boardId}`));

export const saveBoardTree = (boardId, tree) =>
  update(ref(db, `sitemapBoards/${boardId}`), { tree, updatedAt: Date.now() });

export const renameBoard = (boardId, name) =>
  update(ref(db, `sitemapBoards/${boardId}`), { name, updatedAt: Date.now() });

// Live subscription to one board. Returns the unsubscribe fn.
export const subscribeBoard = (boardId, callback, onError) =>
  onValue(ref(db, `sitemapBoards/${boardId}`), (snap) => callback(snap.val()), onError);

// One-time migration: the app used to store a single tree at 'vellumSitemap'.
// If no boards exist yet but that legacy tree does, wrap it into a board so
// nothing the user built disappears. Uses a FIXED key (not push) so that
// concurrent calls — e.g. React StrictMode double-running the dashboard's
// load effect in dev — write the same board instead of duplicating it.
export const migrateLegacyIfNeeded = async () => {
  const boards = await get(ref(db, 'sitemapBoards'));
  if (boards.exists()) return;
  const legacy = await get(ref(db, 'vellumSitemap'));
  if (!legacy.exists()) return;
  const id = 'legacy-project-alpha';
  await set(ref(db, `sitemapBoards/${id}`), {
    id,
    name: 'Project Alpha',
    tree: legacy.val(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
};

export const timeAgo = (ts) => {
  if (!ts) return 'just now';
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'just now';
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min${m === 1 ? '' : 's'} ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hour${h === 1 ? '' : 's'} ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d} day${d === 1 ? '' : 's'} ago`;
  return new Date(ts).toLocaleDateString();
};
