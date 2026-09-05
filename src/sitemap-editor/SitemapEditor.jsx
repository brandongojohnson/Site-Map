import React, { useState, useRef, useCallback, useEffect } from 'react';

import LeftSidebar from '../dashboard/LeftSidebar';
import TopBar from '../dashboard/TopBar';
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

const SitemapEditor = ({ boardId, onNavigate, hideDashboard = false }) => {
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

  const handleExportJSON = useCallback(() => {
    if (!tree) return;
    const blob = new Blob([JSON.stringify(tree, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const filename = `${(boardName || 'sitemap').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')}.json`;
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [tree, boardName]);

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

  // zoom/pan get set from several different places (wheel, the +/- buttons,
  // touch pinch, trackpad pinch), so mirror them in refs the native-event
  // handlers below can read synchronously — they're registered once via
  // addEventListener, not as React props, so their closures would otherwise
  // see stale state.
  const zoomRef = useRef(zoom);
  const panRef = useRef(pan);
  useEffect(() => { zoomRef.current = zoom; }, [zoom]);
  useEffect(() => { panRef.current = pan; }, [pan]);

  const clampZoom = (z) => Math.min(2, Math.max(0.3, z));

  // Pan that keeps whichever content point was under `anchor` (in svg-local
  // coordinates) still under it after zooming from refZoom/refPan to
  // newZoom — the math every zoom gesture below shares, so the canvas zooms
  // toward the cursor/fingers instead of jumping from a fixed corner.
  const anchoredPan = (refZoom, refPan, anchor, newZoom) => {
    const ratio = newZoom / refZoom;
    return { x: anchor.x - ratio * (anchor.x - refPan.x), y: anchor.y - ratio * (anchor.y - refPan.y) };
  };

  const applyZoom = (newZoomRaw, clientX, clientY, refZoom = zoomRef.current, refPan = panRef.current) => {
    const newZoom = clampZoom(newZoomRaw);
    const rect = svgRef.current.getBoundingClientRect();
    const anchor = { x: clientX - rect.left, y: clientY - rect.top };
    const newPan = anchoredPan(refZoom, refPan, anchor, newZoom);
    zoomRef.current = newZoom;
    panRef.current = newPan;
    setZoom(newZoom);
    setPan(newPan);
  };

  const onWheel = useCallback((e) => {
    e.preventDefault();
    applyZoom(zoomRef.current - e.deltaY * 0.001, e.clientX, e.clientY);
  }, []);

  // ====================== Pinch to zoom (touch) ======================
  const pinchRef = useRef(null);
  const touchDistance = (touches) =>
    Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
  const touchMidpoint = (touches) => ({
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2,
  });

  const onTouchStart = useCallback((e) => {
    if (e.touches.length !== 2) return;
    e.preventDefault();
    pinchRef.current = { prevDist: touchDistance(e.touches), prevMidpoint: touchMidpoint(e.touches) };
  }, []);

  // Each frame recomputes pan/zoom relative to the *previous* frame's touch
  // positions (not the gesture's start) so it self-corrects continuously —
  // and so a two-finger drag with no pinch still pans, since the anchor
  // point tracks the live midpoint rather than a fixed one.
  const onTouchMove = useCallback((e) => {
    if (e.touches.length !== 2 || !pinchRef.current) return;
    e.preventDefault();

    const dist = touchDistance(e.touches);
    const midpoint = touchMidpoint(e.touches);
    const { prevDist, prevMidpoint } = pinchRef.current;

    const currentZoom = zoomRef.current;
    const currentPan = panRef.current;
    const newZoom = Math.min(2, Math.max(0.3, currentZoom * (dist / prevDist)));
    const ratio = newZoom / currentZoom;

    const rect = svgRef.current.getBoundingClientRect();
    const prevAnchor = { x: prevMidpoint.x - rect.left, y: prevMidpoint.y - rect.top };
    const newAnchor = { x: midpoint.x - rect.left, y: midpoint.y - rect.top };

    const newPan = {
      x: newAnchor.x - ratio * (prevAnchor.x - currentPan.x),
      y: newAnchor.y - ratio * (prevAnchor.y - currentPan.y),
    };

    zoomRef.current = newZoom;
    panRef.current = newPan;
    setZoom(newZoom);
    setPan(newPan);

    pinchRef.current = { prevDist: dist, prevMidpoint: midpoint };
  }, []);

  const onTouchEnd = useCallback((e) => {
    if (e.touches.length < 2) pinchRef.current = null;
  }, []);

  // ====================== Pinch to zoom (trackpad, Safari) ======================
  // Safari never sends touchstart/touchmove for a trackpad pinch — only
  // these non-standard Gesture events — so without handling them here
  // preventDefault is never called and Safari falls back to zooming the
  // whole page instead of the canvas. Chrome/Firefox trackpad pinch arrives
  // as wheel+ctrlKey instead, which onWheel above already covers.
  // e.scale is cumulative since gesturestart (not incremental like touch's
  // per-frame delta), so each change is computed fresh from the state
  // captured at gesturestart rather than the previous event.
  const gestureRef = useRef(null);

  const onGestureStart = useCallback((e) => {
    e.preventDefault();
    gestureRef.current = { baseZoom: zoomRef.current, basePan: panRef.current };
  }, []);

  const onGestureChange = useCallback((e) => {
    e.preventDefault();
    if (!gestureRef.current) return;
    const { baseZoom, basePan } = gestureRef.current;
    applyZoom(baseZoom * e.scale, e.clientX, e.clientY, baseZoom, basePan);
  }, []);

  const onGestureEnd = useCallback((e) => {
    e.preventDefault();
    gestureRef.current = null;
  }, []);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchcancel', onTouchEnd);
    el.addEventListener('gesturestart', onGestureStart, { passive: false });
    el.addEventListener('gesturechange', onGestureChange, { passive: false });
    el.addEventListener('gestureend', onGestureEnd, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('touchcancel', onTouchEnd);
      el.removeEventListener('gesturestart', onGestureStart);
      el.removeEventListener('gesturechange', onGestureChange);
      el.removeEventListener('gestureend', onGestureEnd);
    };
  }, [onWheel, onTouchStart, onTouchMove, onTouchEnd, onGestureStart, onGestureChange, onGestureEnd]);

  // ====================== Render ======================
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-xl">Loading board…</div>;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8 text-center">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => onNavigate(hideDashboard ? 'templates' : 'dashboard')}
          className="px-6 py-3 bg-[#7161EF] text-white rounded-lg font-bold text-sm uppercase tracking-normal hover:opacity-90 transition-all"
        >
          {hideDashboard ? 'Back to Templates' : 'Back to Dashboard'}
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
        hideDashboard={hideDashboard}
        onExport={handleExportJSON}
      />

      <TopBar onNavigate={onNavigate} style={{ right: selectedNode ? 320 : 0 }} />

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
