import React from 'react';
import { normalizeTree, layoutTree, collectNodes, collectEdges } from '../utils/treeUtils';

const NW = 44;
const NH = 16;
const H_GAP = 8;
const V_GAP = 14;

// Read-only thumbnail of a sitemap tree, reusing the editor's real layout
// algorithm so previews match what the canvas will actually show.
const MiniTree = ({ tree, className = '' }) => {
  const normalized = normalizeTree(tree);
  const rootId = normalized.id;
  const laid = layoutTree(normalized, 0, NW, NH, H_GAP, V_GAP);
  const nodes = collectNodes(laid);
  const edges = collectEdges(laid, NW, NH);

  const minX = Math.min(...nodes.map((n) => n._x)) - 6;
  const maxX = Math.max(...nodes.map((n) => n._x)) + NW + 6;
  const maxY = Math.max(...nodes.map((n) => n._y)) + NH + 6;

  return (
    <svg
      viewBox={`${minX} -6 ${maxX - minX} ${maxY + 6}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Sitemap preview"
    >
      {edges.map((e, i) => {
        const midY = (e.y1 + e.y2) / 2;
        return (
          <path
            key={i}
            d={`M ${e.x1} ${e.y1} L ${e.x1} ${midY} L ${e.x2} ${midY} L ${e.x2} ${e.y2}`}
            fill="none"
            stroke="#d9d9de"
            strokeWidth={1}
          />
        );
      })}
      {nodes.map((n) => (
        <rect
          key={n.id}
          x={n._x}
          y={n._y}
          width={NW}
          height={NH}
          rx={4}
          fill="white"
          stroke={n.id === rootId ? '#7161EF' : '#e0e0e3'}
          strokeWidth={n.id === rootId ? 1.5 : 1}
        />
      ))}
    </svg>
  );
};

export default MiniTree;
