import React, { useState, useRef } from 'react';

// The actual "click through the hierarchy" surface a participant uses to
// attempt one task. Deliberately plain — a breadcrumb, a list of child
// labels, and nothing else — since a tree test measures findability from
// labeling and structure alone, not from any visual design.
//
// Mounted with key={task.id} by TestRunner, so its internal state (breadcrumb,
// timer, backtrack tracking) always starts fresh per task.
const TreeNav = ({ tree, onSubmit }) => {
  const [breadcrumb, setBreadcrumb] = useState([tree]);
  const backtrackedRef = useRef(false);
  const startRef = useRef(Date.now());

  const current = breadcrumb[breadcrumb.length - 1];
  const children = current.children || [];

  const enter = (child) => {
    setBreadcrumb((prev) => [...prev, child]);
  };

  const goBack = (toIndex) => {
    if (toIndex < breadcrumb.length - 1) backtrackedRef.current = true;
    setBreadcrumb((prev) => prev.slice(0, toIndex + 1));
  };

  const submit = (answerNodeId, skipped) => {
    onSubmit({
      answerNodeId,
      path: breadcrumb.map((n) => n.id),
      backtracked: backtrackedRef.current,
      durationMs: Date.now() - startRef.current,
      skipped,
    });
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm p-6">
      <div className="flex flex-wrap items-center gap-1 mb-5 text-xs">
        {breadcrumb.map((node, i) => (
          <React.Fragment key={node.id}>
            {i > 0 && <span className="material-symbols-outlined text-[13px] text-[#c6c6c6]">chevron_right</span>}
            <button
              onClick={() => goBack(i)}
              disabled={i === breadcrumb.length - 1}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                i === breadcrumb.length - 1
                  ? 'font-bold text-black'
                  : 'text-[#8a8a8a] hover:text-[#7161EF] hover:bg-[#f3f3f4]'
              }`}
            >
              {node.title}
            </button>
          </React.Fragment>
        ))}
      </div>

      <div className="space-y-2 mb-5">
        {children.length === 0 ? (
          <p className="text-xs text-[#8a8a8a] py-4 text-center">This page has no further sub-pages.</p>
        ) : (
          children.map((child) => (
            <button
              key={child.id}
              onClick={() => enter(child)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#f3f3f4] hover:bg-[#e8e8e8] text-left text-sm font-medium transition-colors"
            >
              {child.title}
              {(child.children || []).length > 0 && (
                <span className="material-symbols-outlined text-base text-[#8a8a8a]">chevron_right</span>
              )}
            </button>
          ))
        )}
      </div>

      <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#e8e8e8]">
        <button
          onClick={() => submit(null, true)}
          className="text-xs uppercase tracking-normal text-[#8a8a8a] hover:text-[#474747] transition-colors"
        >
          I don't know / Skip
        </button>
        <button
          onClick={() => submit(current.id, false)}
          className="px-5 py-2.5 bg-[#7161EF] text-white rounded-lg font-bold text-xs uppercase tracking-normal hover:opacity-90 active:scale-95 transition-all"
        >
          I'd choose this page
        </button>
      </div>
    </div>
  );
};

export default TreeNav;
