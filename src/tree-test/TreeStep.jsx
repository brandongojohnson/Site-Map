import React, { useMemo } from 'react';
import { parseIndentedTree, countNodes, flattenTree } from './treeTestUtils';

const inputCls =
  'w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-[#7161EF] focus:ring-0';

// Shared "build the hierarchy" step for both the quick-test and shareable
// setup wizards — one indented-text textarea plus a live preview of how it
// parses, so a researcher can see the structure they're actually testing
// before moving on to writing tasks against it.
const TreeStep = ({ treeText, setTreeText, onImportSitemap, importing, onSample, notice }) => {
  const tree = useMemo(() => parseIndentedTree(treeText), [treeText]);
  const nodeCount = tree ? countNodes(tree) : 0;
  const preview = tree ? flattenTree(tree) : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-normal text-[#474747] font-bold">
            {nodeCount} page{nodeCount === 1 ? '' : 's'}
          </span>
          <div className="flex gap-2">
            <button
              onClick={onImportSitemap}
              disabled={importing}
              className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-normal bg-[#7161EF] text-white hover:opacity-90 disabled:opacity-50 transition-all"
            >
              {importing ? 'Importing…' : 'Import Sitemap'}
            </button>
            <button
              onClick={onSample}
              className="px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-normal bg-white border border-[#c6c6c6]/60 hover:bg-[#e8e8e8] transition-all"
            >
              Sample Tree
            </button>
          </div>
        </div>
        <textarea
          autoFocus
          className={`${inputCls} h-72 resize-none font-mono text-xs leading-6`}
          value={treeText}
          onChange={(e) => setTreeText(e.target.value)}
          placeholder={'Home\n  Products\n    Pricing\n  About\n    Contact'}
        />
        <p className="mt-2 text-[11px] text-[#8a8a8a]">
          One page per line. Indent with 2 spaces to nest a page under the one above it. The first line
          is the homepage.
        </p>
        {notice && <p className="mt-2 text-xs text-[#474747]">{notice}</p>}
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-normal text-[#474747] font-bold mb-3">Preview</p>
        <div className="rounded-lg border border-[#c6c6c6]/60 bg-[#f3f3f4] h-72 overflow-y-auto p-2">
          {preview.length === 0 ? (
            <p className="text-xs text-[#8a8a8a] p-2">Nothing to preview yet.</p>
          ) : (
            <div className="space-y-1.5">
              {preview.map((row) => (
                <div
                  key={row.id}
                  style={{ marginLeft: `${row.depth * 20}px` }}
                  className="flex items-center gap-2 rounded-lg bg-white shadow-sm border border-[#e8e8e8] px-3 py-2"
                >
                  <span className="material-symbols-outlined text-[14px] text-[#8a8a8a] flex-shrink-0">
                    {row.depth === 0 ? 'home' : 'description'}
                  </span>
                  <span className="text-sm font-medium text-black truncate">{row.title}</span>
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
