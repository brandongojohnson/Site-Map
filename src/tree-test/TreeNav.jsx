import React, { useState, useRef } from 'react';
import './TreeComponents.css';

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
    <div className="tree-nav">
      <div className="tree-nav-breadcrumb">
        {breadcrumb.map((node, i) => (
          <React.Fragment key={node.id}>
            {i > 0 && <span className="material-symbols-outlined tree-nav-breadcrumb-sep">chevron_right</span>}
            <button
              onClick={() => goBack(i)}
              disabled={i === breadcrumb.length - 1}
              className={`tree-nav-breadcrumb-btn ${i === breadcrumb.length - 1 ? 'is-current' : ''}`}
            >
              {node.title}
            </button>
          </React.Fragment>
        ))}
      </div>

      <div className="tree-nav-children">
        {children.length === 0 ? (
          <p className="tree-nav-empty">This page has no further sub-pages.</p>
        ) : (
          children.map((child) => (
            <button key={child.id} onClick={() => enter(child)} className="tree-nav-child-btn">
              {child.title}
              {(child.children || []).length > 0 && (
                <span className="material-symbols-outlined tree-nav-child-chevron">chevron_right</span>
              )}
            </button>
          ))
        )}
      </div>

      <div className="tree-nav-footer">
        <button onClick={() => submit(null, true)} className="tree-nav-skip-btn">
          I don't know / Skip
        </button>
        <button onClick={() => submit(current.id, false)} className="tree-nav-choose-btn">
          I'd choose this page
        </button>
      </div>
    </div>
  );
};

export default TreeNav;
