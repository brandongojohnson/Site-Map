import React from 'react';
import NodeCard from './NodeCard';
import './SitemapCanvas.css';

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
      className="sitemap-canvas"
      style={{
        background: '#fafafa',
        backgroundImage: 'radial-gradient(circle, #d0d0d0 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        cursor: isPanning ? 'grabbing' : 'grab',
        marginRight: selectedId ? '320px' : '0',
        touchAction: 'none',
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
        style={{ minHeight: '100vh' }}
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
                isSelected={selectedId !== null && String(node.id) === String(selectedId)}
                onSelect={() => setSelectedId(String(node.id) === String(selectedId) ? null : node.id)}
                onAddChild={onAddChild}
              />
            ))}
          </g>
        </g>
      </svg>

      {/* Zoom Controls */}
      <div className="sitemap-canvas-zoom-controls">
        <button onClick={() => setZoom(z => Math.min(2, z + 0.1))} className="material-symbols-outlined sitemap-canvas-zoom-btn">zoom_in</button>
        <div className="sitemap-canvas-zoom-divider" />
        <span className="sitemap-canvas-zoom-pct">{Math.round(zoom * 100)}%</span>
        <div className="sitemap-canvas-zoom-divider" />
        <button onClick={() => setZoom(z => Math.max(0.3, z - 0.1))} className="material-symbols-outlined sitemap-canvas-zoom-btn">zoom_out</button>
        <button onClick={() => { setZoom(0.85); setPan({ x: 80, y: 40 }); }} className="material-symbols-outlined sitemap-canvas-zoom-btn">center_focus_strong</button>
      </div>
    </main>
  );
};

export default SitemapCanvas;
