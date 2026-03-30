import React from 'react';

const RightSidebar = ({ node, onUpdate, onDelete, onClose }) => {
  if (!node) return null;

  return (
    <aside className="fixed right-0 top-0 h-full w-80 bg-white border-l border-[#c6c6c6]/15 z-40 p-8 pt-24 overflow-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black">Page Properties</h2>
        <button onClick={onClose} className="material-symbols-outlined text-on-surface-variant hover:text-black transition-colors">close</button>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block">Page Title</label>
          <input
            type="text"
            value={node.title}
            onChange={e => onUpdate({ title: e.target.value })}
            className="w-full bg-[#f3f3f4] border-none rounded-lg p-4 font-bold text-black focus:ring-1 focus:ring-black focus:bg-white transition-all"
          />
        </div>

        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block">URL Slug</label>
          <div className="flex items-center bg-[#f3f3f4] rounded-lg overflow-hidden">
            <span className="pl-4 text-xs text-[#777777] font-mono">/</span>
            <input
              type="text"
              value={node.slug}
              onChange={e => onUpdate({ slug: e.target.value })}
              className="w-full bg-transparent border-none p-4 pl-1 font-mono text-xs focus:ring-0"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block">Description</label>
          <textarea
            rows={4}
            value={node.description}
            onChange={e => onUpdate({ description: e.target.value })}
            className="w-full bg-[#f3f3f4] border-none rounded-lg p-4 text-sm text-on-surface-variant focus:ring-1 focus:ring-black focus:bg-white transition-all resize-none"
            placeholder="Enter meta description for SEO..."
          />
        </div>

        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block">Navigation Status</label>
          <div className="flex gap-2">
            <button
              onClick={() => onUpdate({ status: 'public' })}
              className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors ${node.status === 'public' ? 'bg-black text-white' : 'bg-[#f3f3f4] text-on-surface-variant hover:bg-[#e8e8e8]'}`}
            >Public</button>
            <button
              onClick={() => onUpdate({ status: 'draft' })}
              className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors ${node.status === 'draft' ? 'bg-black text-white' : 'bg-[#f3f3f4] text-on-surface-variant hover:bg-[#e8e8e8]'}`}
            >Draft</button>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-[#c6c6c6]/15">
          <button
            onClick={onDelete}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-red-500/20 text-red-600 hover:bg-red-50 transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <span className="material-symbols-outlined text-sm">delete</span>
            Delete Page
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
