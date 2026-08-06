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
    <div className="light font-body text-on-surface bg-[#fafafa] min-h-screen">
      <LeftSidebar
        activeView="dashboard"
        onNavigate={onNavigate}
        primaryLabel={creating ? 'Creating…' : 'New Board'}
        onPrimary={handleNewBoard}
      />

      <TopBar onNavigate={onNavigate} />

      <main className="ml-64 min-h-screen p-10 pt-24">
        <header className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a8a8a] mb-2">Workspace</p>
          <h1 className="text-3xl font-black tracking-tight text-black mb-1">Boards in progress</h1>
          <p className="text-sm text-[#6b6b70]">
            Pick up where you left off, or start a new structure from scratch or a template.
          </p>
        </header>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3 mb-8">{error}</p>
        )}

        {boards === null ? (
          <p className="text-sm text-[#8a8a8a]">Loading boards…</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {boards.map((board) => (
              <div
                key={board.id}
                onClick={() => onOpenBoard(board.id)}
                className="group bg-white rounded-xl border border-[#e6e6e9] p-5 cursor-pointer hover:shadow-[0_16px_40px_-16px_rgba(23,21,18,0.18)] hover:border-[#7161EF]/30 transition-all"
              >
                <div className="h-28 rounded-lg bg-[#fafafa] border border-[#efeff2] mb-4 p-2 overflow-hidden">
                  {board.tree ? (
                    <MiniTree tree={board.tree} className="w-full h-full" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#c0c0c6] text-xs">
                      Empty board
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-black truncate">{board.name}</h3>
                    <p className="text-[11px] text-[#8a8a8a] mt-0.5">
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
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#b0b0b6] hover:bg-[#f3f3f4] hover:text-red-600 transition-all flex-shrink-0 opacity-0 group-hover:opacity-100"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBoard(board.id);
                  }}
                  className="mt-4 w-full py-2 rounded-lg bg-[#f3f3f4] group-hover:bg-[#7161EF] group-hover:text-white text-black text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Open Board
                </button>
              </div>
            ))}

            {/* New blank board */}
            <button
              onClick={handleNewBoard}
              disabled={creating}
              className="min-h-[220px] rounded-xl border-2 border-dashed border-[#d8d8dd] flex flex-col items-center justify-center gap-2 text-[#8a8a8a] hover:border-[#7161EF] hover:text-[#7161EF] transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-3xl">add_circle</span>
              <span className="text-xs font-bold uppercase tracking-widest">New Blank Board</span>
            </button>

            {/* Templates entry */}
            <button
              onClick={() => onNavigate('templates')}
              className="min-h-[220px] rounded-xl border-2 border-dashed border-[#d8d8dd] flex flex-col items-center justify-center gap-2 text-[#8a8a8a] hover:border-[#7161EF] hover:text-[#7161EF] transition-all"
            >
              <span className="material-symbols-outlined text-3xl">grid_view</span>
              <span className="text-xs font-bold uppercase tracking-widest">Browse Templates</span>
              <span className="text-[11px] normal-case tracking-normal">
                Start from a common website structure
              </span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
