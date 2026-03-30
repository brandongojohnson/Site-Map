import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { db } from './firebase';

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
  const [tree, setTree] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [zoom, setZoom] = useState(0.85);
  const [pan, setPan] = useState({ x: 80, y: 40 });
  const [isPanning, setIsPanning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const panStart = useRef(null);
  const svgRef = useRef(null);
  const isSavingRef = useRef(false);

  const sitemapRef = ref(db, 'vellumSitemap');

  // ====================== Firebase Listener ======================
  useEffect(() => {
    const unsubscribe = onValue(
      sitemapRef,
      (snapshot) => {
        let data = snapshot.val();

        if (data) {
          // Normalize: ensure every node has children array
          data = normalizeTree(data);
          setTree(data);
          if (!selectedId && data.children?.length > 0) {
            setSelectedId(data.children[0].id);
          }
        } else {
          // Seed default (already normalized)
          isSavingRef.current = true;
          set(sitemapRef, defaultTree)
            .then(() => {
              setTree(defaultTree);
              setSelectedId('products');
            })
            .catch(() => setError('Failed to initialize sitemap.'))
            .finally(() => { isSavingRef.current = false; });
        }
        setLoading(false);
      },
      (err) => {
        console.error('Firebase error:', err);
        setError('Failed to connect to Firebase. Check rules (allow read/write).');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // ====================== Normalize Tree (Fix undefined children) ======================
  const normalizeTree = (node) => {
    if (!node || typeof node !== 'object') return node;

    const normalized = { ...node, children: node.children || [] };

    if (Array.isArray(normalized.children)) {
      normalized.children = normalized.children.map(normalizeTree);
    }

    return normalized;
  };

  // Safe derived data
  const laidOutTree = tree ? layoutTree(tree, 0, NODE_W, NODE_H, H_GAP, V_GAP) : null;
  const nodes = laidOutTree ? collectNodes(laidOutTree) : [];
  const edges = laidOutTree ? collectEdges(laidOutTree, NODE_W, NODE_H) : [];

  const selectedNode = selectedId && laidOutTree ? findNode(laidOutTree, selectedId) : null;

  const minX = nodes.length ? Math.min(...nodes.map(n => n._x || 0)) - 60 : 0;
  const maxX = nodes.length ? Math.max(...nodes.map(n => n._x || 0)) + NODE_W + 60 : 1200;
  const maxY = nodes.length ? Math.max(...nodes.map(n => n._y || 0)) + NODE_H + 100 : 800;

  // ====================== Save Helper ======================
  const saveToFirebase = useCallback((newTree) => {
    if (isSavingRef.current || !newTree) return;
    isSavingRef.current = true;
    set(sitemapRef, newTree)
      .catch(err => console.error('Firebase save failed:', err))
      .finally(() => { isSavingRef.current = false; });
  }, []);

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

    const newTree = addChild(tree, parentId || 'root', newNode);
    const normalizedTree = normalizeTree(newTree);   // Extra safety

    setTree(normalizedTree);
    saveToFirebase(normalizedTree);
    setSelectedId(newNode.id);
  }, [tree, saveToFirebase]);

  const handleUpdate = useCallback((patch) => {
    if (!tree || !selectedId) return;
    let newTree = updateNode(tree, selectedId, patch);
    newTree = normalizeTree(newTree);
    setTree(newTree);
    saveToFirebase(newTree);
  }, [tree, selectedId, saveToFirebase]);

  const handleDelete = useCallback(() => {
    if (!tree || !selectedId || selectedId === 'root') return;
    let newTree = deleteNode(tree, selectedId);
    newTree = normalizeTree(newTree);
    setTree(newTree);
    saveToFirebase(newTree);
    setSelectedId(null);
  }, [tree, selectedId, saveToFirebase]);

  // Mouse handlers remain the same...
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
    return <div className="flex items-center justify-center min-h-screen text-xl">Loading sitemap from Firebase...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-600 p-8 text-center">{error}</div>;
  }

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