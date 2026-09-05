import React, { useMemo } from 'react';
import { parseIndentedTree, countNodes, flattenTree } from './treeTestUtils';
import './WizardShell.css';
import './TreeComponents.css';

// Shared "build the hierarchy" step for both the quick-test and shareable
// setup wizards — one indented-text textarea plus a live preview of how it
// parses, so a researcher can see the structure they're actually testing
// before moving on to writing tasks against it.
const TreeStep = ({ treeText, setTreeText, onImportSitemap, importing, onSample, notice }) => {
  const tree = useMemo(() => parseIndentedTree(treeText), [treeText]);
  const nodeCount = tree ? countNodes(tree) : 0;
  const preview = tree ? flattenTree(tree) : [];

  return (
    <div className="tree-step-grid">
      <div>
        <div className="tree-step-col-header">
          <span className="tree-step-col-label">
            {nodeCount} page{nodeCount === 1 ? '' : 's'}
          </span>
          <div className="tree-step-btn-group">
            <button onClick={onImportSitemap} disabled={importing} className="wizard-btn-primary-sm">
              {importing ? 'Importing…' : 'Import Sitemap'}
            </button>
            <button onClick={onSample} className="wizard-btn-outline-sm">
              Sample Tree
            </button>
          </div>
        </div>
        <textarea
          autoFocus
          className="wizard-input tree-step-textarea"
          value={treeText}
          onChange={(e) => setTreeText(e.target.value)}
          placeholder={'Home\n  Products\n    Pricing\n  About\n    Contact'}
        />
        <p className="tree-step-hint">
          One page per line. Indent with 2 spaces to nest a page under the one above it. The first line
          is the homepage.
        </p>
        {notice && <p className="tree-step-notice">{notice}</p>}
      </div>

      <div>
        <p className="tree-step-preview-label">Preview</p>
        <div className="tree-step-preview-box">
          {preview.length === 0 ? (
            <p className="tree-step-preview-empty">Nothing to preview yet.</p>
          ) : (
            <div className="tree-step-preview-list">
              {preview.map((row) => (
                <div key={row.id} style={{ marginLeft: `${row.depth * 20}px` }} className="tree-node-card">
                  <span className="material-symbols-outlined tree-node-card-icon">
                    {row.depth === 0 ? 'home' : 'description'}
                  </span>
                  <span className="tree-node-card-title">{row.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreeStep;
