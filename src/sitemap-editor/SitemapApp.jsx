import React, { useState, useEffect } from 'react';
import DashboardPage from './DashboardPage';
import TemplatesPage from './TemplatesPage';
import ImportPage from './ImportPage';
import SitemapEditor from './SitemapEditor';
import { useAuth } from '../card-sort/useAuth';

// Shell for the sitemap side of the app: Dashboard (boards in progress),
// Templates, and the editor itself. Card Sort and Tree Test live outside
// this shell, so navigating there is delegated up to App.
//
// Dashboard lists every board in the shared workspace (there's no per-board
// ownership yet), so it's reserved for signed-in visitors. Signed-out
// visitors can still build and edit a sitemap freely — they just land on
// Templates instead of the boards-in-progress list, and can't navigate back
// to it either.
const SitemapApp = ({ onNavigateApp }) => {
  const { user } = useAuth();
  const [view, setView] = useState(null); // null while auth state resolves
  const [boardId, setBoardId] = useState(null);

  useEffect(() => {
    if (user === undefined || view !== null) return;
    setView(user ? 'dashboard' : 'templates');
  }, [user, view]);

  const navigate = (target) => {
    if (target === 'cardsort' || target === 'treetest') {
      onNavigateApp(target);
      return;
    }
    if (target === 'dashboard' && !user) {
      setView('templates');
      return;
    }
    // "Pages" only makes sense with a board open; fall back to a safe default.
    if (target === 'editor' && !boardId) {
      setView(user ? 'dashboard' : 'templates');
      return;
    }
    setView(target);
  };

  const openBoard = (id) => {
    setBoardId(id);
    setView('editor');
  };

  if (view === null) return null;

  if (view === 'templates') {
    return <TemplatesPage onNavigate={navigate} onOpenBoard={openBoard} hideDashboard={!user} />;
  }

  if (view === 'import') {
    return <ImportPage onNavigate={navigate} onOpenBoard={openBoard} hideDashboard={!user} />;
  }

  if (view === 'editor' && boardId) {
    return <SitemapEditor boardId={boardId} onNavigate={navigate} hideDashboard={!user} />;
  }

  if (view === 'dashboard' && user) {
    return <DashboardPage onNavigate={navigate} onOpenBoard={openBoard} />;
  }

  return <TemplatesPage onNavigate={navigate} onOpenBoard={openBoard} hideDashboard={!user} />;
};

export default SitemapApp;
