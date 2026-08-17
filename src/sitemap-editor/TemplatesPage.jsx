import React, { useState } from 'react';
import LeftSidebar from '../dashboard/LeftSidebar';
import TopBar from '../dashboard/TopBar';
import MiniTree from './MiniTree';
import { TEMPLATES } from '../data/templates';
import { createBoard, blankTree } from './boardStore';
import { countNodes } from '../utils/treeUtils';

const TemplatesPage = ({ onNavigate, onOpenBoard, hideDashboard = false }) => {
  const [creatingId, setCreatingId] = useState(null);
  const [error, setError] = useState(null);

  const useTemplate = async (template) => {
    if (creatingId) return;
    setCreatingId(template ? template.id : 'blank');
    setError(null);
    try {
      const board = await createBoard(
        template ? template.name : 'Untitled Board',
        template ? template.tree : blankTree()
      );
      onOpenBoard(board.id);
    } catch (err) {
      console.error('Failed to create board from template:', err);
      setError('Could not create the board. Please try again.');
      setCreatingId(null);
    }
  };

  return (
    <div className="light font-body text-on-surface bg-[#fafafa] min-h-screen">
      <LeftSidebar
        activeView="templates"
        onNavigate={onNavigate}
        primaryLabel="New Board"
        onPrimary={() => useTemplate(null)}
        hideDashboard={hideDashboard}
      />

      <TopBar onNavigate={onNavigate} />

      <main className="ml-64 min-h-screen p-10 pt-24">
        <header className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a8a8a] mb-2">Workspace</p>
          <h1 className="text-3xl font-black tracking-tight text-black mb-1">Templates</h1>
          <p className="text-sm text-[#6b6b70]">
            Common website structures to start from — each becomes a new board you can reshape
            freely.
          </p>
        </header>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3 mb-8">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {TEMPLATES.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-xl border border-[#e6e6e9] p-5 hover:shadow-[0_16px_40px_-16px_rgba(23,21,18,0.18)] hover:border-[#7161EF]/30 transition-all flex flex-col"
            >
              <div className="h-32 rounded-lg bg-[#fafafa] border border-[#efeff2] mb-4 p-2 overflow-hidden">
                <MiniTree tree={template.tree} className="w-full h-full" />
              </div>

              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="w-8 h-8 rounded-lg bg-[#EEECFD] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[17px] text-[#7161EF]">
                    {template.icon}
                  </span>
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm text-black truncate">{template.name}</h3>
                  <p className="text-[11px] text-[#8a8a8a]">{countNodes(template.tree)} pages</p>
                </div>
              </div>

              <p className="text-xs text-[#6b6b70] leading-relaxed mb-4 flex-1">
                {template.description}
              </p>

              <button
                onClick={() => useTemplate(template)}
                disabled={!!creatingId}
                className="w-full py-2.5 rounded-lg bg-[#f3f3f4] group-hover:bg-[#7161EF] group-hover:text-white text-black text-xs font-bold uppercase tracking-normal transition-all disabled:opacity-50"
              >
                {creatingId === template.id ? 'Creating…' : 'Use Template'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TemplatesPage;
