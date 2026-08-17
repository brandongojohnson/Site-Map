import React from 'react';
import { flattenTree } from './treeTestUtils';

// Researcher-facing tree browser used while defining a task's correct
// answer(s). Shown fully expanded and flat (indented by depth) rather than
// as a click-through hierarchy like TreeNav — the researcher already knows
// the structure and just needs to check off the right node(s), usually one.
const TreePicker = ({ tree, selectedIds, onToggle }) => {
  const rows = flattenTree(tree);

  return (
    <div className="rounded-lg border border-[#c6c6c6]/60 bg-[#f3f3f4] max-h-72 overflow-y-auto p-2">
      <div className="space-y-1.5">
        {rows.map((row) => {
          const checked = selectedIds.has(row.id);
          return (
            <label
              key={row.id}
              style={{ marginLeft: `${row.depth * 20}px` }}
              className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 cursor-pointer text-sm shadow-sm transition-colors ${
                checked ? 'bg-[#EEECFD] border-[#7161EF]/40' : 'bg-white border-[#e8e8e8] hover:bg-[#fafafa]'
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(row.id)}
                className="rounded border-[#c6c6c6] text-[#7161EF] focus:ring-[#7161EF]"
              />
              <span className="material-symbols-outlined text-[14px] text-[#8a8a8a] flex-shrink-0">
                {row.depth === 0 ? 'home' : 'description'}
              </span>
              <span className={checked ? 'font-semibold text-black' : 'text-[#474747]'}>{row.title}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default TreePicker;
