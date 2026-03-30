import React, { useState } from 'react';

const NODE_W = 192;
const NODE_H = 96;

const NodeCard = ({ node, isSelected, onSelect, onAddChild }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <g
      transform={`translate(${node._x}, ${node._y})`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
      data-node="true"
    >
      <defs>
        <filter id={`shadow-${node.id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0" dy="2"
            stdDeviation={isSelected ? '6' : '3'}
            floodColor={isSelected ? '#000' : '#c6c6c6'}
            floodOpacity={isSelected ? '0.18' : '0.25'}
          />
        </filter>
      </defs>

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

      <text x={12} y={20} fontSize={9} fill="#999" fontFamily="inherit"
        style={{ textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
        {node.label}
      </text>

      <text x={12} y={58} fontSize={15} fill="#111" fontFamily="inherit"
        style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        onClick={() => onSelect(node.id)}>
        {node.title}
      </text>

      <text x={12} y={80} fontSize={10} fill="#aaa" fontFamily="monospace">
        /{node.slug}
      </text>

      <circle cx={NODE_W - 14} cy={14} r={4}
        fill={node.status === 'public' ? '#22c55e' : '#f59e0b'} />

      {hovered && (
        <g onClick={(e) => { e.stopPropagation(); onAddChild(node.id); }}>
          <circle cx={NODE_W / 2} cy={NODE_H + 28} r={14} fill="#111" />
          <text x={NODE_W / 2} y={NODE_H + 33} textAnchor="middle" fontSize={18} fill="white"
            fontFamily="Material Symbols Outlined, sans-serif" style={{ userSelect: 'none' }}>
            +
          </text>
        </g>
      )}
    </g>
  );
};

export default NodeCard;
