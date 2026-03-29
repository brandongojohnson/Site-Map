import os
from pathlib import Path

# خيار: هل نسمح بالكتابة فوق الملفات الموجودة؟
OVERWRITE = True

def write_file(path, content):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)

    if path.exists() and not OVERWRITE:
        print(f"⚠️ Skipped (exists): {path}")
        return

    with open(path, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")

    print(f"✅ Created: {path}")


# ─────────────────────────────────────────────
# 📁 FILE DEFINITIONS (FULL + COMPLETE)
# ─────────────────────────────────────────────

files = {

# ─── DATA ────────────────────────────────────
"data/defaultTree.js": """
export const defaultTree = {
  id: 'root',
  title: 'Landing Page',
  slug: 'index.html',
  label: 'Home',
  status: 'public',
  description: 'Main entry point of the site.',
  children: []
};
""",

# ─── TREE UTILS ──────────────────────────────
"utils/treeUtils.js": """
export const addChild = (tree, parentId, newNode) => {
  if (tree.id === parentId) {
    return { ...tree, children: [...tree.children, newNode] };
  }
  return {
    ...tree,
    children: tree.children.map(c => addChild(c, parentId, newNode)),
  };
};

export const updateNode = (tree, id, patch) => {
  if (tree.id === id) return { ...tree, ...patch };
  return {
    ...tree,
    children: tree.children.map(c => updateNode(c, id, patch)),
  };
};

export const deleteNode = (tree, id) => ({
  ...tree,
  children: tree.children
    .filter(c => c.id !== id)
    .map(c => deleteNode(c, id)),
});

export const findNode = (tree, id) => {
  if (tree.id === id) return tree;
  for (const c of tree.children) {
    const found = findNode(c, id);
    if (found) return found;
  }
  return null;
};
""",

# ─── LAYOUT UTILS ────────────────────────────
"utils/layoutUtils.js": """
export const NODE_W = 192;
export const NODE_H = 96;
export const H_GAP = 48;
export const V_GAP = 80;

function shift(node, dx) {
  node._x += dx;
  node.children.forEach(c => shift(c, dx));
}

export function layoutTree(node, depth = 0) {
  if (!node.children.length) {
    return {
      ...node,
      _x: 0,
      _y: depth * (NODE_H + V_GAP),
      children: []
    };
  }

  const children = node.children.map(c => layoutTree(c, depth + 1));

  let offset = 0;
  const shifted = [];

  for (const child of children) {
    const copy = { ...child };
    shift(copy, offset);
    shifted.push(copy);
    offset += NODE_W + H_GAP;
  }

  const first = shifted[0];
  const last = shifted[shifted.length - 1];

  const center = (first._x + last._x) / 2;

  return {
    ...node,
    _x: center,
    _y: depth * (NODE_H + V_GAP),
    children: shifted
  };
}

export function collectNodes(node, acc = []) {
  acc.push(node);
  node.children.forEach(c => collectNodes(c, acc));
  return acc;
}

export function collectEdges(node, acc = []) {
  node.children.forEach(child => {
    acc.push({
      x1: node._x,
      y1: node._y,
      x2: child._x,
      y2: child._y,
    });
    collectEdges(child, acc);
  });
  return acc;
}

export function elbowPath(x1, y1, x2, y2) {
  const midY = (y1 + y2) / 2;
  return `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
}
""",

# ─── HOOK ───────────────────────────────────
"hooks/usePanZoom.js": """
import { useState, useRef } from 'react';

export const usePanZoom = () => {
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 80, y: 40 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef(null);

  const onMouseDown = (e) => {
    setIsPanning(true);
    panStart.current = {
      x: e.clientX - pan.x,
      y: e.clientY - pan.y,
    };
  };

  const onMouseMove = (e) => {
    if (!isPanning) return;
    setPan({
      x: e.clientX - panStart.current.x,
      y: e.clientY - panStart.current.y,
    });
  };

  const onMouseUp = () => setIsPanning(false);

  const onWheel = (e) => {
    e.preventDefault();
    setZoom(z => Math.min(2, Math.max(0.3, z - e.deltaY * 0.001)));
  };

  return {
    zoom,
    pan,
    setZoom,
    setPan,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onWheel,
  };
};
""",

# ─── COMPONENTS ─────────────────────────────
"components/sitemap/NodeCard.jsx": """
const NodeCard = ({ node, onSelect }) => {
  return (
    <g transform={`translate(${node._x}, ${node._y})`} onClick={() => onSelect?.(node.id)}>
      <rect width="180" height="90" fill="white" stroke="#ccc" rx="10" />
      <text x="10" y="25" fontSize="12">{node.label}</text>
      <text x="10" y="55" fontSize="16" fontWeight="bold">{node.title}</text>
    </g>
  );
};

export default NodeCard;
""",

"components/sitemap/Canvas.jsx": """
import NodeCard from './NodeCard';
import { elbowPath } from '../../utils/layoutUtils';

const Canvas = ({ nodes, edges, pan, zoom, onSelect }) => {
  return (
    <svg width="100%" height="100%">
      <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>

        {edges.map((e, i) => (
          <path key={i} d={elbowPath(e.x1, e.y1, e.x2, e.y2)} stroke="#ccc" fill="none" />
        ))}

        {nodes.map(node => (
          <NodeCard key={node.id} node={node} onSelect={onSelect} />
        ))}

      </g>
    </svg>
  );
};

export default Canvas;
""",

"components/sitemap/RightSidebar.jsx": """
const RightSidebar = ({ node }) => {
  if (!node) return null;

  return (
    <aside style={{ width: 300, padding: 20, borderLeft: '1px solid #ddd' }}>
      <h3>{node.title}</h3>
      <p>{node.description}</p>
    </aside>
  );
};

export default RightSidebar;
""",

"components/sitemap/VellumSitemap.jsx": """
import { useState, useRef } from 'react';
import { defaultTree } from '../../data/defaultTree';
import { layoutTree, collectNodes, collectEdges } from '../../utils/layoutUtils';
import { findNode } from '../../utils/treeUtils';
import { usePanZoom } from '../../hooks/usePanZoom';

import Canvas from './Canvas';
import RightSidebar from './RightSidebar';

const VellumSitemap = () => {
  const [tree] = useState(defaultTree);
  const [selectedId, setSelectedId] = useState(null);

  const svgRef = useRef(null);

  const { zoom, pan } = usePanZoom();

  const laid = layoutTree(tree);
  const nodes = collectNodes(laid);
  const edges = collectEdges(laid);

  const selectedNode = selectedId
    ? findNode(laid, selectedId)
    : null;

  return (
    <div style={{ display: 'flex', height: '100vh' }}>

      <div style={{ flex: 1 }}>
        <Canvas
          nodes={nodes}
          edges={edges}
          pan={pan}
          zoom={zoom}
          onSelect={setSelectedId}
        />
      </div>

      <RightSidebar node={selectedNode} />

    </div>
  );
};

export default VellumSitemap;
"""
}

# ─────────────────────────────────────────────
# 🚀 CREATE FILES
# ─────────────────────────────────────────────

for path, content in files.items():
    write_file(path, content)

# ─────────────────────────────────────────────
# ✅ VALIDATION
# ─────────────────────────────────────────────

print("\\n🔍 Verifying files...")

missing = []
for path in files.keys():
    if not Path(path).exists():
        missing.append(path)

if not missing:
    print("🎉 All files successfully created!")
else:
    print("❌ Missing files:")
    for m in missing:
        print(" -", m)