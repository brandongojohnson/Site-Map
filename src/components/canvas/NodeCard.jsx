import React, { useState } from 'react';
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
