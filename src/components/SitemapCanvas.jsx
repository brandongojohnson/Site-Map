import React from 'react';
import NodeCard from './NodeCard';

const SitemapCanvas = ({
  svgRef, pan, zoom, minX, nodes, edges, selectedId, setSelectedId,
  onAddChild, onMouseDown, onMouseMove, onMouseUp, isPanning, setZoom, setPan
}) => {
  const elbowPath = (x1, y1, x2, y2) => {
    const midY = (y1 + y2) / 2;
    return `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
  };

  return (
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
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
          <g transform={`translate(${-minX}, 32)`}>
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

            {nodes.map(node => (
              <NodeCard
                key={node.id}
                node={node}
                isSelected={node.id === selectedId}
                onSelect={() => setSelectedId(node.id === selectedId ? null : node.id)}
                onAddChild={onAddChild}
              />
            ))}
          </g>
        </g>
      </svg>

      {/* Zoom Controls */}
      <div className="fixed bottom-8 left-72 bg-white/80 backdrop-blur-md rounded-full shadow-lg p-1 flex items-center gap-1 border border-[#c6c6c6]/10 z-30">
        <button onClick={() => setZoom(z => Math.min(2, z + 0.1))} className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined">zoom_in</button>
        <div className="h-4 w-[1px] bg-[#c6c6c6]/30 mx-1" />
        <span className="text-xs font-bold px-2">{Math.round(zoom * 100)}%</span>
        <div className="h-4 w-[1px] bg-[#c6c6c6]/30 mx-1" />
        <button onClick={() => setZoom(z => Math.max(0.3, z - 0.1))} className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined">zoom_out</button>
        <button onClick={() => { setZoom(0.85); setPan({ x: 80, y: 40 }); }} className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined">center_focus_strong</button>
      </div>
    </main>
  );
};

export default SitemapCanvas;
