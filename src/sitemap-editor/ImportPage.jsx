import React, { useState, useRef, useMemo } from 'react';
import LeftSidebar from '../dashboard/LeftSidebar';
import TopBar from '../dashboard/TopBar';
import MiniTree from './MiniTree';
import { createBoard, blankTree } from './boardStore';
import { parseStructureText } from './importUtils';
import { countNodes } from '../utils/treeUtils';

const inputCls =
  'w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-[#7161EF] focus:ring-0';

const PLACEHOLDER = `Paste JSON:
{
  "title": "Home",
  "children": [
    { "title": "About", "children": [
      { "title": "Team" }
    ] },
    { "title": "Contact" }
  ]
}

…or an indented list — 2 spaces per level:
Home
  About
    Team
  Contact`;

const ImportPage = ({ onNavigate, onOpenBoard, hideDashboard = false }) => {
  const [boardName, setBoardName] = useState('');
  const [text, setText] = useState('');
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // Re-parses on every keystroke rather than only on submit, so a mistake in
  // the pasted structure shows up as a preview error immediately instead of
  // after clicking "Create Board".
  const { tree, parseError } = useMemo(() => {
    if (!text.trim()) return { tree: null, parseError: null };
    try {
      return { tree: parseStructureText(text), parseError: null };
    } catch (err) {
      return { tree: null, parseError: err.message };
    }
  }, [text]);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-choosing the same file after fixing it
    if (!file) return;
    const content = await file.text();
    setText(content);
    if (!boardName.trim()) setBoardName(file.name.replace(/\.[^.]+$/, ''));
  };

  const handleNewBlankBoard = async () => {
    if (creating) return;
    setCreating(true);
    setError(null);
    try {
      const board = await createBoard('Untitled Board', blankTree());
      onOpenBoard(board.id);
    } catch (err) {
      console.error('Failed to create blank board:', err);
      setError('Could not create the board. Please try again.');
      setCreating(false);
    }
  };

  const handleImport = async () => {
    if (!tree || creating) return;
    setCreating(true);
    setError(null);
    try {
      const board = await createBoard(boardName.trim() || 'Untitled Board', tree);
      onOpenBoard(board.id);
    } catch (err) {
      console.error('Failed to create board from import:', err);
      setError('Could not create the board. Please try again.');
      setCreating(false);
    }
  };

  return (
    <div className="light font-body text-on-surface bg-[#fafafa] min-h-screen">
      <LeftSidebar
        activeView="import"
        onNavigate={onNavigate}
        primaryLabel={creating ? 'Creating…' : 'New Board'}
        onPrimary={handleNewBlankBoard}
        hideDashboard={hideDashboard}
      />

      <TopBar onNavigate={onNavigate} />

      <main className="ml-64 min-h-screen p-10 pt-24 max-w-5xl">
        <header className="mb-8">
          <p className="text-[10px] uppercase tracking-normal text-[#8a8a8a] mb-2">Workspace</p>
          <h1 className="text-3xl font-black tracking-tight text-black mb-1">Import a Sitemap</h1>
          <p className="text-sm text-[#6b6b70]">
            Paste a page hierarchy or upload a file, and it becomes a new board you can reshape freely.
          </p>
        </header>

        {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3 mb-6">{error}</p>}

        <div className="mb-6 max-w-sm">
          <label className="text-[10px] uppercase tracking-normal text-[#8a8a8a] font-bold block mb-2">
            Board name
          </label>
          <input
            className={inputCls}
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            placeholder="e.g. Marketing Site Rebuild"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-normal text-[#474747] font-bold">Structure</span>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,.txt,application/json,text/plain"
                onChange={handleFile}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-normal bg-[#7161EF] text-white hover:opacity-90 transition-all"
              >
                Upload File
              </button>
            </div>
            <textarea
              autoFocus
              className={`${inputCls} h-80 resize-none font-mono text-xs leading-6`}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={PLACEHOLDER}
            />
            <p className="mt-2 text-[11px] text-[#8a8a8a]">
              Accepts JSON (an object with a <code>children</code>/<code>pages</code> array, or a bare array of
              top-level pages) or plain indented text.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-normal text-[#474747] font-bold mb-3">Preview</p>
            <div className="rounded-lg border border-[#c6c6c6]/60 bg-white h-80 overflow-hidden flex flex-col">
              {parseError ? (
                <p className="text-xs text-red-600 p-4">{parseError}</p>
              ) : !tree ? (
                <p className="text-xs text-[#8a8a8a] p-4">Nothing to preview yet.</p>
              ) : (
                <>
                  <div className="flex-1 p-3 overflow-hidden">
                    <MiniTree tree={tree} className="w-full h-full" />
                  </div>
                  <div className="px-4 py-2.5 border-t border-[#efeff2] text-[11px] text-[#8a8a8a]">
                    {countNodes(tree)} page{countNodes(tree) === 1 ? '' : 's'}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleImport}
          disabled={!tree || creating}
          className="mt-8 px-8 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-normal hover:opacity-90 active:scale-95 disabled:opacity-40 transition-all"
        >
          {creating ? 'Creating…' : 'Create Board'}
        </button>
      </main>
    </div>
  );
};

export default ImportPage;
