import React from 'react';
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
