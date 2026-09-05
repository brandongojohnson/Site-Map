import React, { useState } from 'react';
import LeftSidebar from '../dashboard/LeftSidebar';
import TopBar from '../dashboard/TopBar';
import MiniTree from './MiniTree';
import { TEMPLATES } from '../data/templates';
import { createBoard, blankTree } from './boardStore';
import { countNodes } from '../utils/treeUtils';
import './TemplatesPage.css';

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
    <div className="light templates-page">
      <LeftSidebar
        activeView="templates"
        onNavigate={onNavigate}
        primaryLabel="New Board"
        onPrimary={() => useTemplate(null)}
        hideDashboard={hideDashboard}
      />

      <TopBar onNavigate={onNavigate} />

      <main className="templates-main">
        <header className="templates-header">
          <p className="templates-eyebrow">Workspace</p>
          <h1 className="templates-title">Templates</h1>
          <p className="templates-subtitle">
            Common website structures to start from — each becomes a new board you can reshape
            freely.
          </p>
        </header>

        {error && <p className="templates-error">{error}</p>}

        <div className="templates-grid">
          <button onClick={() => onNavigate('import')} className="templates-import-tile">
            <span className="material-symbols-outlined templates-import-tile-icon">upload_file</span>
            <span className="templates-import-tile-label">Import Sitemap</span>
            <span className="templates-import-tile-desc">Paste a structure or upload a JSON file instead</span>
          </button>

          {TEMPLATES.map((template) => (
            <div key={template.id} className="templates-card">
              <div className="templates-card-thumb">
                <MiniTree tree={template.tree} className="templates-card-thumb-svg" />
              </div>

              <div className="templates-card-header">
                <span className="templates-card-icon">
                  <span className="material-symbols-outlined">{template.icon}</span>
                </span>
                <div className="templates-card-meta">
                  <h3 className="templates-card-name">{template.name}</h3>
                  <p className="templates-card-count">{countNodes(template.tree)} pages</p>
                </div>
              </div>

              <p className="templates-card-desc">{template.description}</p>

              <button
                onClick={() => useTemplate(template)}
                disabled={!!creatingId}
                className="templates-card-btn"
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
