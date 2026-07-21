import React, { useMemo } from 'react';
import { clusterHierarchical } from './analysisUtils';

const ROW_H = 26;
const LABEL_W = 200;
const TREE_W = 420;
const MARGIN = 16;

// Leaf order follows the tree structure (left-subtree then right-subtree) so
// that cards merged together end up visually adjacent, rather than using
// original card order.
const collectLeavesInOrder = (node, out = []) => {
  if (!node) return out;
  if (node.type === 'leaf') {
    out.push(node.label);
    return out;
  }
  collectLeavesInOrder(node.left, out);
  collectLeavesInOrder(node.right, out);
  return out;
};

const Dendrogram = ({ labels, matrix }) => {
  const tree = useMemo(() => clusterHierarchical(matrix, labels), [matrix, labels]);

  const { segments, leafPositions, maxDistance } = useMemo(() => {
    if (!tree) return { segments: [], leafPositions: [], maxDistance: 1 };

    const order = collectLeavesInOrder(tree);
    const yOf = new Map(order.map((label, i) => [label, i * ROW_H + ROW_H / 2]));

    let maxD = 0;
    const findMax = (node) => {
      if (!node || node.type === 'leaf') return;
      maxD = Math.max(maxD, node.distance);
      findMax(node.left);
      findMax(node.right);
    };
    findMax(tree);
    maxD = maxD || 1;

    // distance 0 (leaves) sits at the right, near the labels; the root (max
    // distance) sits at the left — branches converge leftward as cards agree less.
    const xScale = (distance) => (TREE_W - MARGIN) - (distance / maxD) * (TREE_W - MARGIN * 2);

    const segs = [];
    const leafPos = [];

    const walk = (node) => {
      if (node.type === 'leaf') {
        const y = yOf.get(node.label);
        leafPos.push({ label: node.label, x: xScale(0), y });
        return { x: xScale(0), y };
      }
      const left = walk(node.left);
      const right = walk(node.right);
      const x = xScale(node.distance);
      segs.push({ x1: left.x, y1: left.y, x2: x, y2: left.y });
      segs.push({ x1: right.x, y1: right.y, x2: x, y2: right.y });
      segs.push({ x1: x, y1: left.y, x2: x, y2: right.y });
      return { x, y: (left.y + right.y) / 2 };
    };
    walk(tree);

    return { segments: segs, leafPositions: leafPos, maxDistance: maxD };
  }, [tree]);

  if (!tree) return null;

  const height = labels.length * ROW_H + MARGIN;
  const width = TREE_W + LABEL_W;

  return (
    <div>
      <p className="text-xs text-[#474747] mb-3">
        Cards that join close to their labels (right) were sorted together often; joins pulled
        further left happened only because every card has to merge eventually.
      </p>
      <div className="overflow-auto rounded-lg border border-[#e1e0d9] bg-[#fcfcfb]" style={{ maxHeight: 560 }}>
        <svg width={width} height={height} role="img" aria-label="Card sort dendrogram">
          <g>
            {segments.map((s, i) => (
              <line
                key={i}
                x1={s.x1}
                y1={s.y1}
                x2={s.x2}
                y2={s.y2}
                stroke="#898781"
                strokeWidth={2}
                strokeLinecap="round"
              />
            ))}
            {leafPositions.map((leaf) => (
              <text
                key={leaf.label}
                x={leaf.x + 8}
                y={leaf.y}
                dominantBaseline="middle"
                fontSize={11}
                fill="#0b0b0b"
              >
                {leaf.label}
              </text>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Dendrogram;
