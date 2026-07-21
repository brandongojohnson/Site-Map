import React, { useState } from 'react';
import DashboardPage from './DashboardPage';
import TemplatesPage from './TemplatesPage';
import SitemapEditor from './SitemapEditor';

// Shell for the sitemap side of the app: Dashboard (boards in progress),
// Templates, and the editor itself. Card Sort lives outside this shell, so
// navigating there is delegated up to App.
const SitemapApp = ({ onOpenCardSort }) => {
  const [view, setView] = useState('dashboard'); // dashboard | templates | editor
  const [boardId, setBoardId] = useState(null);

  const navigate = (target) => {
    if (target === 'cardsort') {
      onOpenCardSort();
      return;
    }
    // "Pages" only makes sense with a board open; fall back to the dashboard.
    if (target === 'editor' && !boardId) {
      setView('dashboard');
      return;
    }
    setView(target);
  };

  const openBoard = (id) => {
    setBoardId(id);
    setView('editor');
  };

  if (view === 'templates') {
    return <TemplatesPage onNavigate={navigate} onOpenBoard={openBoard} />;
  }

  if (view === 'editor' && boardId) {
    return <SitemapEditor boardId={boardId} onNavigate={navigate} />;
  }

  return <DashboardPage onNavigate={navigate} onOpenBoard={openBoard} />;
};

export default SitemapApp;
