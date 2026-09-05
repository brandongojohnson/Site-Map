import React, { useState, useRef, useMemo } from 'react';
import LeftSidebar from '../dashboard/LeftSidebar';
import TopBar from '../dashboard/TopBar';
import MiniTree from './MiniTree';
import { createBoard, blankTree } from './boardStore';
import { parseStructureText } from './importUtils';
import { countNodes } from '../utils/treeUtils';
import './ImportPage.css';

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
    <div className="light import-page">
      <LeftSidebar
        activeView="import"
        onNavigate={onNavigate}
        primaryLabel={creating ? 'Creating…' : 'New Board'}
        onPrimary={handleNewBlankBoard}
        hideDashboard={hideDashboard}
      />

      <TopBar onNavigate={onNavigate} />

      <main className="import-main">
        <header className="import-header">
          <p className="import-eyebrow">Workspace</p>
          <h1 className="import-title">Import a Sitemap</h1>
          <p className="import-subtitle">
            Paste a page hierarchy or upload a file, and it becomes a new board you can reshape freely.
          </p>
        </header>

        {error && <p className="import-error">{error}</p>}

        <div className="import-name-field">
          <label className="import-label">Board name</label>
          <input
            className="import-input"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            placeholder="e.g. Marketing Site Rebuild"
          />
        </div>

        <div className="import-columns">
          <div>
            <div className="import-col-header">
              <span className="import-col-label">Structure</span>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,.txt,application/json,text/plain"
                onChange={handleFile}
                className="import-file-input-hidden"
              />
              <button onClick={() => fileInputRef.current?.click()} className="import-upload-btn">
                Upload File
              </button>
            </div>
            <textarea
              autoFocus
              className="import-input import-textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={PLACEHOLDER}
            />
            <p className="import-hint">
              Accepts JSON (an object with a <code>children</code>/<code>pages</code> array, or a bare array of
              top-level pages) or plain indented text.
            </p>
          </div>

          <div>
            <p className="import-preview-label">Preview</p>
            <div className="import-preview-box">
              {parseError ? (
                <p className="import-preview-error">{parseError}</p>
              ) : !tree ? (
                <p className="import-preview-empty">Nothing to preview yet.</p>
              ) : (
                <>
                  <div className="import-preview-tree">
                    <MiniTree tree={tree} className="import-preview-tree-svg" />
                  </div>
                  <div className="import-preview-count">
                    {countNodes(tree)} page{countNodes(tree) === 1 ? '' : 's'}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <button onClick={handleImport} disabled={!tree || creating} className="import-submit-btn">
          {creating ? 'Creating…' : 'Create Board'}
        </button>
      </main>
    </div>
  );
};

export default ImportPage;
