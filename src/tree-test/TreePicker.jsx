import React from 'react';
import { flattenTree } from './treeTestUtils';
import './TreeComponents.css';

// Researcher-facing tree browser used while defining a task's correct
// answer(s). Shown fully expanded and flat (indented by depth) rather than
// as a click-through hierarchy like TreeNav — the researcher already knows
// the structure and just needs to check off the right node(s), usually one.
const TreePicker = ({ tree, selectedIds, onToggle }) => {
  const rows = flattenTree(tree);

  return (
    <div className="tree-picker">
      <div className="tree-picker-list">
        {rows.map((row) => {
          const checked = selectedIds.has(row.id);
          return (
            <label
              key={row.id}
              style={{ marginLeft: `${row.depth * 20}px` }}
              className={`tree-picker-row ${checked ? 'is-checked' : ''}`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(row.id)}
                className="tree-picker-checkbox"
              />
              <span className="material-symbols-outlined tree-picker-row-icon">
                {row.depth === 0 ? 'home' : 'description'}
              </span>
              <span className={`tree-picker-row-label ${checked ? 'is-checked' : ''}`}>{row.title}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default TreePicker;
