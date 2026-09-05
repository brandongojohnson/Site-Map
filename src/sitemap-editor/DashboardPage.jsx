import React, { useState, useEffect, useCallback } from 'react';
import LeftSidebar from '../dashboard/LeftSidebar';
import TopBar from '../dashboard/TopBar';
import MiniTree from './MiniTree';
import {
  listBoards,
  createBoard,
  deleteBoard,
  blankTree,
  migrateLegacyIfNeeded,
  timeAgo,
} from './boardStore';
import { countNodes } from '../utils/treeUtils';
import './DashboardPage.css';

const DashboardPage = ({ onNavigate, onOpenBoard }) => {
  const [boards, setBoards] = useState(null);
  const [error, setError] = useState(null);
  const [creating, setCreating] = useState(false);

  const load = useCallback(async () => {
    try {
      await migrateLegacyIfNeeded();
      setBoards(await listBoards());
    } catch (err) {
      console.error('Failed to load boards:', err);
      setError('Could not load your boards. Check your connection and refresh.');
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleNewBoard = async () => {
    if (creating) return;
    setCreating(true);
    try {
      const board = await createBoard('Untitled Board', blankTree());
      onOpenBoard(board.id);
    } catch (err) {
      console.error('Failed to create board:', err);
      setError('Could not create a board. Please try again.');
      setCreating(false);
    }
  };

  const handleDelete = async (board) => {
    if (!window.confirm(`Delete “${board.name}”? This can't be undone.`)) return;
    try {
      await deleteBoard(board.id);
      setBoards((prev) => prev.filter((b) => b.id !== board.id));
    } catch (err) {
      console.error('Failed to delete board:', err);
    }
  };

  return (
    <div className="light dashboard-page">
      <LeftSidebar
        activeView="dashboard"
        onNavigate={onNavigate}
        primaryLabel={creating ? 'Creating…' : 'New Board'}
        onPrimary={handleNewBoard}
      />

      <TopBar onNavigate={onNavigate} />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <p className="dashboard-eyebrow">Workspace</p>
          <h1 className="dashboard-title">Boards in progress</h1>
          <p className="dashboard-subtitle">
            Pick up where you left off, or start a new structure from scratch or a template.
          </p>
        </header>

        {error && <p className="dashboard-error">{error}</p>}

        {boards === null ? (
          <p className="dashboard-loading">Loading boards…</p>
        ) : (
          <div className="dashboard-grid">
            {boards.map((board) => (
              <div
                key={board.id}
                onClick={() => onOpenBoard(board.id)}
                className="dashboard-board-card"
              >
                <div className="dashboard-board-thumb">
                  {board.tree ? (
                    <MiniTree tree={board.tree} className="dashboard-board-thumb-svg" />
                  ) : (
                    <div className="dashboard-board-thumb-empty">Empty board</div>
                  )}
                </div>

                <div className="dashboard-board-row">
                  <div className="dashboard-board-meta">
                    <h3 className="dashboard-board-name">{board.name}</h3>
                    <p className="dashboard-board-sub">
                      {countNodes(board.tree)} page{countNodes(board.tree) === 1 ? '' : 's'} · Updated{' '}
                      {timeAgo(board.updatedAt)}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(board);
                    }}
                    title="Delete board"
                    className="dashboard-board-delete"
                  >
                    <span className="material-symbols-outlined dashboard-board-delete-icon">delete</span>
                  </button>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBoard(board.id);
                  }}
                  className="dashboard-board-open-btn"
                >
                  Open Board
                </button>
              </div>
            ))}

            {/* New blank board */}
            <button onClick={handleNewBoard} disabled={creating} className="dashboard-create-tile">
              <span className="material-symbols-outlined dashboard-create-tile-icon">add_circle</span>
              <span className="dashboard-create-tile-label">New Blank Board</span>
            </button>

            {/* Templates entry */}
            <button onClick={() => onNavigate('templates')} className="dashboard-create-tile">
              <span className="material-symbols-outlined dashboard-create-tile-icon">grid_view</span>
              <span className="dashboard-create-tile-label">Browse Templates</span>
              <span className="dashboard-create-tile-desc">Start from a common website structure</span>
            </button>

            {/* Import entry */}
            <button onClick={() => onNavigate('import')} className="dashboard-create-tile">
              <span className="material-symbols-outlined dashboard-create-tile-icon">upload_file</span>
              <span className="dashboard-create-tile-label">Import Sitemap</span>
              <span className="dashboard-create-tile-desc">Paste a structure or upload a JSON file</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
