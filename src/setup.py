import os

# ──────────────────────────────────────────────────────────────
# File structure + contents
# ──────────────────────────────────────────────────────────────

files = {
    "utils/treeUtils.js": """export function findNode(tree, id) {
  if (tree.id === id) return tree;
  for (const c of tree.children) {
    const f = findNode(c, id);
    if (f) return f;
  }
  return null;
}

export function findParent(tree, id) {
  for (const c of tree.children) {
    if (c.id === id) return tree;
    const f = findParent(c, id);
    if (f) return f;
  }
  return null;
}

export function updateNode(tree, id, patch) {
  if (tree.id === id) return { ...tree, ...patch };
  return { ...tree, children: tree.children.map(c => updateNode(c, id, patch)) };
}

export function deleteNode(tree, id) {
  return {
    ...tree,
    children: tree.children
      .filter(c => c.id !== id)
      .map(c => deleteNode(c, id)),
  };
}

export function addChild(tree, parentId, node) {
  if (tree.id === parentId) {
    return { ...tree, children: [...tree.children, node] };
  }
  return { ...tree, children: tree.children.map(c => addChild(c, parentId, node)) };
}

export function addSibling(tree, siblingId, dir, node) {
  const parent = findParent(tree, siblingId);
  if (!parent) return tree;

  const idx = parent.children.findIndex(c => c.id === siblingId);
  const insertAt = dir === -1 ? idx : idx + 1;

  const newChildren = [...parent.children];
  newChildren.splice(insertAt, 0, node);

  return updateNode(tree, parent.id, { children: newChildren });
}

export function moveNodeAfter(tree, dragId, targetId) {
  const dragNode = findNode(tree, dragId);
  if (!dragNode) return tree;

  let t = deleteNode(tree, dragId);
  return addSibling(t, targetId, 1, dragNode);
}
""",

    "utils/layoutUtils.js": """export const NW = 196, NH = 96, HGAP = 56, VGAP = 88;

export function layoutTree(node, depth = 0) {
  if (!node.children.length) {
    return { ...node, _w: NW, _x: 0, _y: depth * (NH + VGAP) };
  }

  const kids = node.children.map(c => layoutTree(c, depth + 1));

  let offset = 0;
  const shifted = kids.map(k => {
    const n = { ...k };
    shiftSub(n, offset);
    offset += n._w + HGAP;
    return n;
  });

  const totalW = shifted.reduce((a, k) => a + k._w, 0) + HGAP * (shifted.length - 1);
  const lx = shifted[0]._x;
  const rx = shifted[shifted.length - 1]._x + shifted[shifted.length - 1]._w;

  return {
    ...node,
    _w: Math.max(NW, totalW),
    _x: (lx + rx) / 2 - NW / 2,
    _y: depth * (NH + VGAP),
    children: shifted,
  };
}

function shiftSub(node, dx) {
  node._x += dx;
  node.children.forEach(c => shiftSub(c, dx));
}

export function collectNodes(node, acc = []) {
  acc.push(node);
  node.children.forEach(c => collectNodes(c, acc));
  return acc;
}

export function collectEdges(node, acc = []) {
  node.children.forEach(child => {
    acc.push({
      x1: node._x + NW / 2,
      y1: node._y + NH,
      x2: child._x + NW / 2,
      y2: child._y,
      id: `${node.id}-${child.id}`,
    });
    collectEdges(child, acc);
  });
  return acc;
}

export const elbow = (x1, y1, x2, y2) => {
  const mid = (y1 + y2) / 2;
  return `M${x1},${y1} L${x1},${mid} L${x2},${mid} L${x2},${y2}`;
};
""",

    "utils/slugUtils.js": """export function buildSlugPath(tree, id, ancestors = []) {
  if (tree.id === id) return [...ancestors, tree.slug].join('/');
  for (const c of tree.children) {
    const res = buildSlugPath(c, id, [...ancestors, tree.slug]);
    if (res) return res;
  }
  return null;
}
""",

    "components/canvas/NodeCard.jsx": """import React, { useState } from 'react';
import { NW, NH } from '../../utils/layoutUtils';

export default function NodeCard({
  node, isRoot, isSelected,
  onSelect, onAddChild, onAddSibling,
  onDragStart, onDrop
}) {
  const [hov, setHov] = useState(false);

  return (
    <g
      transform={`translate(${node._x},${node._y})`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      draggable
      onDragStart={(e) => { e.stopPropagation(); onDragStart(node.id); }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.stopPropagation(); onDrop(node.id); }}
    >
      <rect width={NW} height={NH} rx={12}
        fill="white"
        stroke={isSelected ? '#000' : '#ddd'}
        onClick={() => onSelect(node.id)}
      />

      <text x={12} y={30}>{node.title}</text>

      {hov && (
        <>
          <circle cx={NW/2} cy={NH+25} r={10} fill="black"
            onClick={(e)=>{e.stopPropagation(); onAddChild(node.id)}}/>

          {!isRoot && (
            <>
              <circle cx={-20} cy={NH/2} r={8} fill="black"
                onClick={(e)=>{e.stopPropagation(); onAddSibling(node.id,-1)}}/>

              <circle cx={NW+20} cy={NH/2} r={8} fill="black"
                onClick={(e)=>{e.stopPropagation(); onAddSibling(node.id,1)}}/>
            </>
          )}
        </>
      )}
    </g>
  );
}
""",

    "components/canvas/Canvas.jsx": """import React from 'react';
import NodeCard from './NodeCard';
import { elbow } from '../../utils/layoutUtils';

export default function Canvas({
  nodes, edges, pan, zoom, minX,
  selectedId, dragId, dropTargetId,
  handlers
}) {
  return (
    <svg width="100%" height="100%">
      <g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}>
        <g transform={`translate(${-minX},48)`}>
          {edges.map(e => (
            <path key={e.id} d={elbow(e.x1,e.y1,e.x2,e.y2)}
              stroke="#ddd" fill="none"/>
          ))}
          {nodes.map(n => (
            <NodeCard key={n.id} node={n}
              isRoot={n.id === 'root'}
              isSelected={n.id === selectedId}
              {...handlers}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}
""",

    "VellumSitemap.jsx": """import React, { useState, useMemo, useCallback } from 'react';
import Canvas from './components/canvas/Canvas';

import {
  addChild, addSibling, moveNodeAfter
} from './utils/treeUtils';

import {
  layoutTree, collectNodes, collectEdges
} from './utils/layoutUtils';

let _id = 200;
const uid = () => `n${++_id}`;

export default function VellumSitemap() {
  const [tree, setTree] = useState({ id:'root', title:'Home', slug:'index', children:[] });
  const [selectedId, setSelectedId] = useState(null);
  const [dragId, setDragId] = useState(null);

  const laid = useMemo(() => layoutTree(tree), [tree]);
  const nodes = useMemo(() => collectNodes(laid), [laid]);
  const edges = useMemo(() => collectEdges(laid), [laid]);

  const handleAddChild = useCallback((id) => {
    const n = { id: uid(), title:'New', slug:'new', children:[] };
    setTree(t => addChild(t, id, n));
  }, []);

  const handleAddSibling = useCallback((id, dir) => {
    const n = { id: uid(), title:'New', slug:'new', children:[] };
    setTree(t => addSibling(t, id, dir, n));
  }, []);

  const handleDrop = useCallback((targetId) => {
    if (!dragId) return;
    setTree(t => moveNodeAfter(t, dragId, targetId));
    setDragId(null);
  }, [dragId]);

  return (
    <Canvas
      nodes={nodes}
      edges={edges}
      pan={{x:80,y:40}}
      zoom={0.85}
      minX={0}
      selectedId={selectedId}
      dragId={dragId}
      dropTargetId={null}
      handlers={{
        onSelect: setSelectedId,
        onAddChild: handleAddChild,
        onAddSibling: handleAddSibling,
        onDragStart: setDragId,
        onDrop: handleDrop
      }}
    />
  );
}
"""
}

# ──────────────────────────────────────────────────────────────
# Create files
# ──────────────────────────────────────────────────────────────

for path, content in files.items():
    dir_path = os.path.dirname(path)

    if dir_path:  # only create folders if they exist
        os.makedirs(dir_path, exist_ok=True)

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

print("✅ Project structure created successfully!")