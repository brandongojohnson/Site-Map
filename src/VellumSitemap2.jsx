import React, { useState, useRef, useCallback, useEffect } from 'react';

import TopNav from './components/TopNav';
import LeftSidebar from './components/LeftSidebar';
import SitemapCanvas from './components/SitemapCanvas';
import RightSidebar from './components/RightSidebar';

import { defaultTree, uid } from './data/treeData';
import {
  addChild,
  updateNode,
  deleteNode,
  findNode,
  layoutTree,
  collectNodes,
  collectEdges,
} from './utils/treeUtils';

const NODE_W = 192;
const NODE_H = 96;
const H_GAP = 48;
const V_GAP = 80;

const VellumSitemap = () => {
  const [tree, setTree] = useState(defaultTree);
  const [selectedId, setSelectedId] = useState('products');
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 80, y: 40 });
  const [isPanning, setIsPanning] = useState(false);

  const panStart = useRef(null);
  const svgRef = useRef(null);

  const laidOutTree = layoutTree(tree, 0, NODE_W, NODE_H, H_GAP, V_GAP);
  const nodes = collectNodes(laidOutTree);
  const edges = collectEdges(laidOutTree, NODE_W, NODE_H);

  const selectedNode = selectedId ? findNode(laidOutTree, selectedId) : null;

  const allX = nodes.map(n => n._x);
  const allY = nodes.map(n => n._y);
  const minX = Math.min(...allX) - 60;
  const maxX = Math.max(...allX) + NODE_W + 60;
  const maxY = Math.max(...allY) + NODE_H + 100;

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
    setTree(prev => addChild(prev, parentId, newNode));
    setSelectedId(newNode.id);
  }, []);

  const handleUpdate = useCallback((patch) => {
    if (!selectedId) return;
    setTree(prev => updateNode(prev, selectedId, patch));
  }, [selectedId]);

  const handleDelete = useCallback(() => {
    if (!selectedId || selectedId === 'root') return;
    setTree(prev => deleteNode(prev, selectedId));
    setSelectedId(null);
  }, [selectedId]);

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

  const onWheel = useCallback((e) => {
    e.preventDefault();
    setZoom(z => Math.min(2, Math.max(0.3, z - e.deltaY * 0.001)));
  }, []);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [onWheel]);

  return (
    <div className="light font-body text-on-surface bg-background min-h-screen overflow-hidden">
      <TopNav />
      <LeftSidebar onNewPage={() => handleAddChild(selectedId || 'root')} />

      <SitemapCanvas
        svgRef={svgRef}
        pan={pan}
        zoom={zoom}
        minX={minX}
        nodes={nodes}
        edges={edges}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        onAddChild={handleAddChild}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        isPanning={isPanning}
        setZoom={setZoom}
        setPan={setPan}
      />

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
