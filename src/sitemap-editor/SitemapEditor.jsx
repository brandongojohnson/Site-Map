import React, { useState, useRef, useCallback, useEffect } from 'react';

import LeftSidebar from '../dashboard/LeftSidebar';
import SitemapCanvas from './SitemapCanvas';
import RightSidebar from '../dashboard/RightSidebar';

import { uid } from '../data/treeData';
import { subscribeBoard, saveBoardTree } from './boardStore';
import {
  normalizeTree,
  addChild,
  updateNode,
  deleteNode,
  findNode,
  layoutTree,
  collectNodes,
  collectEdges,
} from '../utils/treeUtils';

const NODE_W = 192;
const NODE_H = 96;
const H_GAP = 48;
const V_GAP = 80;

const SitemapEditor = ({ boardId, onNavigate }) => {
  const [tree, setTree] = useState(null);
  const [boardName, setBoardName] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 80, y: 40 });
  const [isPanning, setIsPanning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const panStart = useRef(null);
  const svgRef = useRef(null);
  const isSavingRef = useRef(false);
  const saveTimerRef = useRef(null);
  const pendingTreeRef = useRef(null);

  // ====================== Load board (live) ======================
  useEffect(() => {
    setLoading(true);
    setError(null);
    setTree(null);
    setSelectedId(null);

    const unsubscribe = subscribeBoard(
      boardId,
      (board) => {
        // Firebase fires onValue locally for our own writes too; skipping
        // those keeps typing in the properties panel from being re-ingested
        // (and previously, from re-selecting a node after every save).
        if (isSavingRef.current) return;
        if (!board) {
          setError('This board no longer exists.');
          setLoading(false);
          return;
        }
        setBoardName(board.name || 'Untitled Board');
        setTree(normalizeTree(board.tree));
        setLoading(false);
      },
      (err) => {
        console.error('Firebase error:', err);
        setError('Failed to connect to Firebase. Check rules (allow read/write).');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [boardId]);

  // ====================== Debounced save ======================
  const flushSave = useCallback(() => {
    const pending = pendingTreeRef.current;
    if (!pending) return;
    pendingTreeRef.current = null;
    isSavingRef.current = true;
    saveBoardTree(boardId, pending)
      .catch((err) => console.error('Firebase save failed:', err))
      .finally(() => {
        isSavingRef.current = false;
      });
  }, [boardId]);

  const queueSave = useCallback(
    (newTree) => {
      pendingTreeRef.current = newTree;
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = setTimeout(flushSave, 400);
    },
    [flushSave]
  );

  // Flush any pending edit when leaving the editor.
  useEffect(
    () => () => {
      clearTimeout(saveTimerRef.current);
      flushSave();
    },
    [flushSave]
  );

  // Safe derived data
  const laidOutTree = tree ? layoutTree(tree, 0, NODE_W, NODE_H, H_GAP, V_GAP) : null;
  const nodes = laidOutTree ? collectNodes(laidOutTree) : [];
  const edges = laidOutTree ? collectEdges(laidOutTree, NODE_W, NODE_H) : [];

  const selectedNode = selectedId && laidOutTree ? findNode(laidOutTree, selectedId) : null;

  const minX = nodes.length ? Math.min(...nodes.map(n => n._x || 0)) - 60 : 0;

  // ====================== Handlers ======================
  const handleAddChild = useCallback((parentId) => {
    if (!tree) return;

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

    const newTree = normalizeTree(addChild(tree, parentId || 'root', newNode));
    setTree(newTree);
    queueSave(newTree);
    setSelectedId(newNode.id);
  }, [tree, queueSave]);

  const handleUpdate = useCallback((patch) => {
    if (!tree || !selectedId) return;
    const newTree = normalizeTree(updateNode(tree, selectedId, patch));
    setTree(newTree);
    queueSave(newTree);
  }, [tree, selectedId, queueSave]);

  const handleDelete = useCallback(() => {
    if (!tree || !selectedId || selectedId === 'root') return;
    const newTree = normalizeTree(deleteNode(tree, selectedId));
    setTree(newTree);
    queueSave(newTree);
    setSelectedId(null);
  }, [tree, selectedId, queueSave]);

  // ====================== Pan & zoom ======================
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

  // ====================== Render ======================
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-xl">Loading board…</div>;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8 text-center">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => onNavigate('dashboard')}
          className="px-6 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="light font-body text-on-surface bg-background min-h-screen overflow-hidden">
      <LeftSidebar
        title={boardName}
        subtitle="Sitemap Editor"
        activeView="editor"
        onNavigate={onNavigate}
        primaryLabel="New Page"
        onPrimary={() => handleAddChild(selectedId || 'root')}
      />

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

export default SitemapEditor;
