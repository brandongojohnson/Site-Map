import React from 'react';
import './RightSidebar.css';

const RightSidebar = ({ node, onUpdate, onDelete, onClose }) => {
  if (!node) return null;

  return (
    <aside className="right-sidebar">
      <div className="right-sidebar-header">
        <h2 className="right-sidebar-title">Page Properties</h2>
        <button onClick={onClose} className="material-symbols-outlined right-sidebar-close">close</button>
      </div>

      <div className="right-sidebar-body">
        <div className="right-sidebar-field">
          <label className="right-sidebar-label">Page Title</label>
          <input
            type="text"
            value={node.title}
            onChange={e => onUpdate({ title: e.target.value })}
            className="right-sidebar-input"
          />
        </div>

        <div className="right-sidebar-field">
          <label className="right-sidebar-label">URL Slug</label>
          <div className="right-sidebar-slug-wrap">
            <span className="right-sidebar-slug-prefix">/</span>
            <input
              type="text"
              value={node.slug}
              onChange={e => onUpdate({ slug: e.target.value })}
              className="right-sidebar-slug-input"
            />
          </div>
        </div>

        <div className="right-sidebar-field">
          <label className="right-sidebar-label">Description</label>
          <textarea
            rows={4}
            value={node.description}
            onChange={e => onUpdate({ description: e.target.value })}
            className="right-sidebar-textarea"
            placeholder="Enter meta description for SEO..."
          />
        </div>

        <div className="right-sidebar-field">
          <label className="right-sidebar-label">Navigation Status</label>
          <div className="right-sidebar-status-row">
            <button
              onClick={() => onUpdate({ status: 'public' })}
              className={`right-sidebar-status-btn ${node.status === 'public' ? 'is-active' : 'is-inactive'}`}
            >Public</button>
            <button
              onClick={() => onUpdate({ status: 'draft' })}
              className={`right-sidebar-status-btn ${node.status === 'draft' ? 'is-active' : 'is-inactive'}`}
            >Draft</button>
          </div>
        </div>

        <div className="right-sidebar-delete-section">
          <button onClick={onDelete} className="right-sidebar-delete-btn">
            <span className="material-symbols-outlined right-sidebar-delete-icon">delete</span>
            Delete Page
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
