import React, { useState, useRef, useCallback, useEffect } from 'react';

// ─── Data & Helpers ────────────────────────────────────────────────────────────

let idCounter = 100;
const uid = () => `node-${++idCounter}`;

const defaultTree = {
  id: 'root',
  title: 'Landing Page',
  slug: 'index.html',
  label: 'Home',
  icon: 'home',
  status: 'public',
  description: 'Main entry point of the site.',
  children: [
    {
      id: 'solutions',
      title: 'Solutions',
      slug: 'solutions',
      label: 'Parent',
      icon: 'widgets',
      status: 'public',
      description: 'Product solutions overview.',
      children: [
        {
          id: 'enterprise',
          title: 'Enterprise',
          slug: 'solutions/enterprise',
          label: 'Child',
          icon: 'business',
          status: 'public',
          description: 'Enterprise-level offerings.',
          children: [],
        },
      ],
    },
    {
      id: 'products',
      title: 'Products',
      slug: 'products',
      label: 'Selected',
      icon: 'inventory_2',
      status: 'public',
      description: 'Overview of all current product offerings and enterprise services available.',
      children: [],
    },
    {
      id: 'about',
      title: 'About Us',
      slug: 'about',
      label: 'Static',
      icon: 'info',
      status: 'draft',
      description: 'Our story and mission.',
      children: [],
    },
  ],
};

// ─── Tree utils ────────────────────────────────────────────────────────────────

function addChild(tree, parentId, newNode) {
  if (tree.id === parentId) {
    return { ...tree, children: [...tree.children, newNode] };
  }
  return { ...tree, children: tree.children.map(c => addChild(c, parentId, newNode)) };
}

function updateNode(tree, id, patch) {
  if (tree.id === id) return { ...tree, ...patch };
  return { ...tree, children: tree.children.map(c => updateNode(c, id, patch)) };
}

function deleteNode(tree, id) {
  return {
    ...tree,
    children: tree.children
      .filter(c => c.id !== id)
      .map(c => deleteNode(c, id)),
  };
}

function findNode(tree, id) {
  if (tree.id === id) return tree;
  for (const c of tree.children) {
    const found = findNode(c, id);
    if (found) return found;
  }
  return null;
}

// ─── Layout constants ──────────────────────────────────────────────────────────

const NODE_W = 192;
const NODE_H = 96;
const H_GAP = 48;   // horizontal gap between siblings
const V_GAP = 80;   // vertical gap between levels

// ─── Layout engine (top-down Reingold-Tilford style) ──────────────────────────

function layoutTree(node, depth = 0) {
  if (!node.children.length) {
    return { ...node, _w: NODE_W, _x: 0, _y: depth * (NODE_H + V_GAP), _laidOut: [] };
  }

  const kids = node.children.map(c => layoutTree(c, depth + 1));

  // Shift children so they don't overlap
  let offset = 0;
  const shifted = [];
  for (let i = 0; i < kids.length; i++) {
    const k = { ...kids[i] };
    shiftSubtree(k, offset);
    shifted.push(k);
    offset += k._w + H_GAP;
  }

  const totalW = shifted.reduce((acc, k) => acc + k._w, 0) + H_GAP * (shifted.length - 1);
  const leftX = shifted[0]._x;
  const rightX = shifted[shifted.length - 1]._x + shifted[shifted.length - 1]._w;
  const centerX = (leftX + rightX) / 2 - NODE_W / 2;

  return {
    ...node,
    _w: Math.max(NODE_W, totalW),
    _x: centerX,
    _y: depth * (NODE_H + V_GAP),
    children: shifted,
    _laidOut: shifted,
  };
}

function shiftSubtree(node, dx) {
  node._x += dx;
  node.children.forEach(c => shiftSubtree(c, dx));
}

function collectNodes(node, acc = []) {
  acc.push(node);
  node.children.forEach(c => collectNodes(c, acc));
  return acc;
}

function collectEdges(node, acc = []) {
  node.children.forEach(child => {
    acc.push({
      x1: node._x + NODE_W / 2,
      y1: node._y + NODE_H,
      x2: child._x + NODE_W / 2,
      y2: child._y,
    });
    collectEdges(child, acc);
  });
  return acc;
}

// ─── Elbow path ───────────────────────────────────────────────────────────────

function elbowPath(x1, y1, x2, y2) {
  const midY = (y1 + y2) / 2;
  return `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
}

// ─── Node Card Component ───────────────────────────────────────────────────────

function NodeCard({ node, isSelected, onSelect, onAddChild, isRoot }) {
  const [hovered, setHovered] = useState(false);

  return (
    <g
      transform={`translate(${node._x}, ${node._y})`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* Drop shadow */}
      <filter id={`shadow-${node.id}`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation={isSelected ? '6' : '3'}
          floodColor={isSelected ? '#000' : '#c6c6c6'}
          floodOpacity={isSelected ? '0.18' : '0.25'} />
      </filter>

      {/* Card background */}
      <rect
        x={0} y={0}
        width={NODE_W} height={NODE_H}
        rx={12} ry={12}
        fill="white"
        stroke={isSelected ? '#000' : hovered ? '#555' : '#e0e0e0'}
        strokeWidth={isSelected ? 2 : 1}
        filter={`url(#shadow-${node.id})`}
        onClick={() => onSelect(node.id)}
      />

      {/* Label */}
      <text x={12} y={20} fontSize={9} fill="#999" fontFamily="inherit"
        style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
        {node.label}
      </text>

      {/* Title */}
      <text x={12} y={58} fontSize={15} fill="#111" fontFamily="inherit"
        style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        onClick={() => onSelect(node.id)}>
        {node.title}
      </text>

      {/* Slug */}
      <text x={12} y={80} fontSize={10} fill="#aaa" fontFamily="monospace">
        /{node.slug}
      </text>

      {/* Status dot */}
      <circle cx={NODE_W - 14} cy={14} r={4}
        fill={node.status === 'public' ? '#22c55e' : '#f59e0b'} />

      {/* Add child button — only on hover */}
      {hovered && (
        <g onClick={(e) => { e.stopPropagation(); onAddChild(node.id); }}>
          <circle cx={NODE_W / 2} cy={NODE_H + 28} r={14}
            fill="#111" style={{ cursor: 'pointer' }} />
          <text x={NODE_W / 2} y={NODE_H + 33}
            textAnchor="middle" fontSize={18} fill="white"
            fontFamily="Material Symbols Outlined, sans-serif"
            style={{ userSelect: 'none', pointerEvents: 'none', fontWeight: 400 }}>
            +
          </text>
        </g>
      )}
    </g>
  );
}

// ─── Right Sidebar ─────────────────────────────────────────────────────────────

function RightSidebar({ node, onUpdate, onDelete, onClose }) {
  if (!node) return null;

  return (
    <aside className="fixed right-0 top-0 h-full w-80 bg-white border-l border-[#c6c6c6]/15 z-40 p-8 pt-24 overflow-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black">Page Properties</h2>
        <button
          onClick={onClose}
          className="material-symbols-outlined text-on-surface-variant hover:text-black transition-colors"
        >close</button>
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
}

// ─── Main Component ────────────────────────────────────────────────────────────

const VellumSitemap = () => {
  const [tree, setTree] = useState(defaultTree);
  const [selectedId, setSelectedId] = useState('products');
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 80, y: 40 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef(null);
  const svgRef = useRef(null);

  const laid = layoutTree(tree);
  const nodes = collectNodes(laid);
  const edges = collectEdges(laid);

  // Compute SVG viewBox size
  const allX = nodes.map(n => n._x);
  const allY = nodes.map(n => n._y);
  const minX = Math.min(...allX) - 60;
  const maxX = Math.max(...allX) + NODE_W + 60;
  const maxY = Math.max(...allY) + NODE_H + 80;
  const svgW = maxX - minX;
  const svgH = maxY;

  const selectedNode = selectedId ? findNode(laid, selectedId) : null;

  const handleAddChild = useCallback((parentId) => {
    const newNode = {
      id: uid(),
      title: 'New Page',
      slug: 'new-page',
      label: 'Child',
      icon: 'article',
      status: 'draft',
      description: '',
      children: [],
    };
    setTree(t => addChild(t, parentId, newNode));
    setSelectedId(newNode.id);
  }, []);

  const handleUpdate = useCallback((patch) => {
    if (!selectedId) return;
    setTree(t => updateNode(t, selectedId, patch));
  }, [selectedId]);

  const handleDelete = useCallback(() => {
    if (!selectedId || selectedId === 'root') return;
    setTree(t => deleteNode(t, selectedId));
    setSelectedId(null);
  }, [selectedId]);

  // Pan handlers
  const onMouseDown = (e) => {
    if (e.target.closest('g[data-node]')) return;
    setIsPanning(true);
    panStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };
  const onMouseMove = (e) => {
    if (!isPanning) return;
    setPan({ x: e.clientX - panStart.current.x, y: e.clientY - panStart.current.y });
  };
  const onMouseUp = () => setIsPanning(false);

  const onWheel = (e) => {
    e.preventDefault();
    setZoom(z => Math.min(2, Math.max(0.3, z - e.deltaY * 0.001)));
  };

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="light font-body text-on-surface bg-background min-h-screen">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#f9f9f9]/80 backdrop-blur-md border-b border-[#c6c6c6]/15 flex justify-between items-center px-8 py-4 font-medium tracking-tight">
        <div className="flex items-center gap-8">
          <span className="text-lg font-bold tracking-tighter text-black">Vellum Sitemap</span>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-[#474747] hover:text-black transition-colors duration-200">Projects</a>
            <a href="#" className="text-black border-b-2 border-black pb-1">Templates</a>
            <a href="#" className="text-[#474747] hover:text-black transition-colors duration-200">Archive</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#474747] hover:text-black transition-colors">settings</button>
          <button className="material-symbols-outlined text-[#474747] hover:text-black transition-colors">help</button>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
            <img alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDK7d1moCj-0c7pWjqc4vKLuOEI4s7kkSdRLUAiI_3zalV7eKjKK9VyVfpWvZVhdjmN3jLPqICwodtfw5iyDwa58rzpUyZl0UEv1cXpmndQ4rStG3dMKcG7QPpZG3BpP9axeVVk5OwRSBCv8P7si-Z77WNnG01msHFzUSpWWh6VkgI8bSwWh0-DK8tNNfSsI9LyZYwKRAQC5fRNXtpPUI7brVUr9w3WdqFHL1Hrg4HBU1epUAxtkhEpwxc1UHQuohPVVL2cZuMJpA"
              className="w-full h-full object-cover" />
          </div>
        </div>
      </nav>

      {/* Left Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f3f3f4] flex flex-col p-6 space-y-8 z-40">
        <div className="pt-16 pb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <div>
              <h2 className="text-xl font-black text-black leading-tight">Project Alpha</h2>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Sitemap Editor</p>
            </div>
          </div>
          <button
            onClick={() => handleAddChild(selectedId || 'root')}
            className="w-full py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-100 mb-8"
          >
            New Page
          </button>
        </div>
        <nav className="flex-grow space-y-2">
          {[
            { icon: 'dashboard', label: 'Dashboard' },
            { icon: 'layers', label: 'Pages', active: true },
            { icon: 'folder_open', label: 'Assets' },
            { icon: 'history', label: 'History' },
            { icon: 'ios_share', label: 'Export' },
          ].map(({ icon, label, active }) => (
            <a key={label} href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm uppercase tracking-widest transition-all ${active ? 'bg-white text-black font-bold shadow-sm' : 'text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1'}`}>
              <span className="material-symbols-outlined">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-[#c6c6c6]/15">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] transition-all rounded-lg text-sm uppercase tracking-widest">
            <span className="material-symbols-outlined">account_circle</span>
            <span>Account</span>
          </a>
        </div>
      </aside>

      {/* Canvas */}
      <main
        className="ml-64 pt-16 min-h-screen relative overflow-hidden"
        style={{
          background: '#fafafa',
          backgroundImage: 'radial-gradient(circle, #d0d0d0 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          cursor: isPanning ? 'grabbing' : 'grab',
          marginRight: selectedId ? '320px' : '0',
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          style={{ minHeight: 'calc(100vh - 64px)', display: 'block' }}
        >
          <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
            {/* Shift everything so minX is visible */}
            <g transform={`translate(${-minX}, 32)`}>
              {/* Edges */}
              {edges.map((e, i) => (
                <path
                  key={i}
                  d={elbowPath(e.x1, e.y1, e.x2, e.y2)}
                  fill="none"
                  stroke="#d0d0d0"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                />
              ))}

              {/* Nodes */}
              {nodes.map(node => (
                <NodeCard
                  key={node.id}
                  node={node}
                  isSelected={node.id === selectedId}
                  isRoot={node.id === 'root'}
                  onSelect={(id) => setSelectedId(id === selectedId ? null : id)}
                  onAddChild={handleAddChild}
                />
              ))}
            </g>
          </g>
        </svg>

        {/* Zoom controls */}
        <div className="fixed bottom-8 left-72 bg-white/80 backdrop-blur-md rounded-full shadow-lg p-1 flex items-center gap-1 border border-[#c6c6c6]/10 z-30">
          <button
            onClick={() => setZoom(z => Math.min(2, z + 0.1))}
            className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined"
          >zoom_in</button>
          <div className="h-4 w-[1px] bg-[#c6c6c6]/30 mx-1" />
          <span className="text-xs font-bold px-2">{Math.round(zoom * 100)}%</span>
          <div className="h-4 w-[1px] bg-[#c6c6c6]/30 mx-1" />
          <button
            onClick={() => setZoom(z => Math.max(0.3, z - 0.1))}
            className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined"
          >zoom_out</button>
          <button
            onClick={() => { setZoom(0.85); setPan({ x: 80, y: 40 }); }}
            className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined"
          >center_focus_strong</button>
        </div>
      </main>

      {/* Right Sidebar */}
      {selectedNode && (
        <RightSidebar
          node={selectedNode}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
};

export default VellumSitemap;