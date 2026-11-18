import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Hero mockup body (hierarchy sidebar, node canvas, inspector).
// Two collaborator cursors run a scripted loop that creates and deletes nodes;
// the sidebar tree, node count and connector lines all follow the same state.

const BASE = [
  { id: 'products', label: '/products', tag: 'L1 • ACTIVE', sub: '3 sub-trees', active: true },
  { id: 'solutions', label: '/solutions', tag: 'L1 • GROUP', sub: '4 sub-trees' },
  { id: 'pricing', label: '/pricing', tag: 'L1 • DIRECT', sub: '100% direct', subBlue: true },
  { id: 'docs', label: '/docs', tag: 'L1 • DOCS', sub: 'Sync active' },
];
const DEFS = {
  blog: { id: 'blog', label: '/blog', tag: 'L1 • PAGE', sub: '0 sub-trees' },
  docs: BASE[3],
};
const SIDE_COUNT = { solutions: 24, products: 48, pricing: 6, docs: 32, blog: 0 };
const SIDE_RANK = { solutions: 0, products: 1, pricing: 2, docs: 3 };

// Keeps the tree at 3-4 nodes and returns to the starting state, so it can
// loop forever. (Only the last node is ever deleted/re-added, so order holds.)
const SCRIPT = [
  { who: 'alex', op: 'del', id: 'docs' }, //                      4 -> 3
  { who: 'sarah', op: 'edit', id: 'solutions', to: '/services' },
  { who: 'sarah', op: 'add', id: 'blog' }, //                     3 -> 4
  { who: 'alex', op: 'edit', id: 'pricing', to: '/plans' },
  { who: 'sarah', op: 'del', id: 'blog' }, //                     4 -> 3
  { who: 'sarah', op: 'edit', id: 'solutions', to: '/solutions' },
  { who: 'alex', op: 'edit', id: 'pricing', to: '/pricing' },
  { who: 'alex', op: 'add', id: 'docs' }, //                      3 -> 4
];
const USERS = {
  sarah: { name: 'Sarah', color: 'text-[#2997ff]', chip: 'bg-[#0071e3]' },
  alex: { name: 'Alex', color: 'text-amber-500', chip: 'bg-amber-500' },
};

const initialNodes = () => BASE.map((n) => ({ ...n, phase: 'idle' }));

const NodeCell = ({ node, first, last, cellRef }) => {
  const { phase } = node;
  const editing = !!node.edit;
  const fresh = phase === 'enter';
  const doomed = phase === 'doomed';
  const border = doomed ? 'border-red-500/70' : fresh || editing || node.active ? 'border-[#2997ff]' : 'border-white/10';
  const tagCls = doomed ? 'text-red-400 font-bold' : fresh || editing || node.active ? 'text-[#2997ff] font-bold' : 'text-zinc-500';
  const subCls = doomed ? 'text-red-400' : node.subBlue ? 'text-[#2997ff]' : node.active ? 'text-zinc-400' : 'text-zinc-500';
  const tag = doomed ? 'DELETING' : editing ? 'EDITING' : fresh ? 'L1 • NEW' : node.tag;
  const phaseCls = phase === 'enter' ? 'dn-in' : phase === 'leave' ? 'dn-out' : '';

  return (
    <div ref={cellRef} className={`dn-cell relative px-[5px] pt-4 ${phaseCls}`}>
      {/* connector: stem to the card, horizontal bar toward siblings, dot where it lands */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[1.5px] h-4 bg-[#a1a1aa]" />
      <span
        className="absolute top-0 h-[1.5px] bg-[#a1a1aa]"
        style={{ left: first ? '50%' : 0, right: last ? '50%' : 0 }}
      />
      <span className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#a1a1aa] z-20" />
      <div
        className={`glass-card rounded-xl border p-2.5 flex flex-col gap-0.5 overflow-hidden whitespace-nowrap transition-colors duration-300 ${border}`}
      >
        <span className={`font-mono text-[9px] ${tagCls}`}>{tag}</span>
        <div className={`text-[12px] truncate min-h-[18px] ${node.active ? 'font-bold text-white' : 'font-medium text-zinc-200'}`}>
          {node.edit === 'select' ? <span className="bg-[#2997ff]/40 rounded-sm">{node.label}</span> : node.label}
          {node.edit === 'type' && <span className="strata-caret" />}
        </div>
        <span className={`font-mono text-[10px] truncate ${subCls}`}>{node.sub}</span>
      </div>
    </div>
  );
};

const Cursor = ({ user, state }) => (
  <div
    className={`strata-cursor absolute z-30 pointer-events-none flex items-start gap-1 ${user.color}`}
    style={{ left: state.x, top: state.y }}
    aria-hidden="true"
  >
    <span className="material-symbols-outlined text-[18px] -mt-0.5">near_me</span>
    <span className={`${user.chip} text-white font-mono text-[10px] px-2.5 py-0.5 rounded-full mt-3 whitespace-nowrap`}>{state.label}</span>
    {state.click > 0 && <span key={state.click} className="cursor-ring" />}
  </div>
);

const HeroSitemapDemo = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [cur, setCur] = useState({
    sarah: { x: 40, y: 36, label: 'Sarah', click: 0 },
    alex: { x: 420, y: 56, label: 'Alex', click: 0 },
  });
  const [pressed, setPressed] = useState(false);

  const canvasRef = useRef(null);
  const addRef = useRef(null);
  const cellRefs = useRef({});
  const visibleRef = useRef(true);
  const nodesRef = useRef([]);
  nodesRef.current = nodes;

  // park the cursors in sensible spots relative to the real canvas size
  useLayoutEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const { width, height } = c.getBoundingClientRect();
    setCur((s) => ({
      sarah: { ...s.sarah, x: width * 0.1, y: height * 0.1 },
      alex: { ...s.alex, x: width * 0.74, y: height * 0.14 },
    }));
  }, []);

  // only animate while the mockup is on screen
  useEffect(() => {
    const c = canvasRef.current;
    if (!c || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; });
    io.observe(c);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let dead = false;
    const timers = new Set();
    const sleep = (ms) =>
      new Promise((resolve) => {
        const t = setTimeout(() => { timers.delete(t); resolve(); }, ms);
        timers.add(t);
      });

    const patch = (who, p) => setCur((s) => ({ ...s, [who]: { ...s[who], ...p } }));
    const setPhase = (id, phase) => setNodes((ns) => ns.map((n) => (n.id === id ? { ...n, phase } : n)));
    const pointAt = (el, fx, fy) => {
      const c = canvasRef.current.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return { x: r.left - c.left + r.width * fx, y: r.top - c.top + r.height * fy };
    };

    const addNode = (def) => {
      setNodes((ns) => [...ns, { ...def, phase: 'enter' }]);
      timers.add(setTimeout(() => setPhase(def.id, 'idle'), 1700));
    };
    const deleteNode = (id) => {
      setPhase(id, 'doomed');
      timers.add(setTimeout(() => setPhase(id, 'leave'), 500));
      timers.add(setTimeout(() => setNodes((ns) => ns.filter((n) => n.id !== id)), 980));
    };
    const setNode = (id, p) => setNodes((ns) => ns.map((n) => (n.id === id ? { ...n, ...p } : n)));
    // select the old title, then type the new one a character at a time
    const renameNode = async (id, to) => {
      setNode(id, { edit: 'select' });
      await sleep(550);
      if (dead) return;
      setNode(id, { edit: 'type', label: '' });
      for (let i = 1; i <= to.length; i += 1) {
        await sleep(95);
        if (dead) return;
        setNode(id, { label: to.slice(0, i) });
      }
      await sleep(450);
      if (dead) return;
      setNode(id, { edit: undefined });
    };

    const run = async () => {
      await sleep(1400);
      while (!dead) {
        for (const step of SCRIPT) {
          while (!dead && !visibleRef.current) await sleep(400);
          if (dead) return;
          const name = USERS[step.who].name;
          const def = DEFS[step.id];
          const adding = step.op === 'add';
          const target = adding ? addRef.current : cellRefs.current[step.id];
          if (!target || !canvasRef.current) continue;
          const current = nodesRef.current.find((n) => n.id === step.id);
          const verb = adding ? 'adding' : step.op === 'del' ? 'deleting' : 'renaming';
          const subject = adding ? def.label : current ? current.label : step.id;

          patch(step.who, {
            ...(adding ? pointAt(target, 0.28, 0.5) : step.op === 'edit' ? pointAt(target, 0.32, 0.5) : pointAt(target, 0.5, 0.5)),
            label: `${name} · ${verb} ${subject}`,
          });
          await sleep(1300);
          if (dead) return;

          setCur((s) => ({ ...s, [step.who]: { ...s[step.who], click: s[step.who].click + 1 } }));
          if (adding) {
            setPressed(true);
            timers.add(setTimeout(() => setPressed(false), 180));
            addNode(def);
            await sleep(1500);
          } else if (step.op === 'del') {
            deleteNode(step.id);
            await sleep(1500);
          } else {
            await renameNode(step.id, step.to);
            await sleep(500);
          }
          patch(step.who, { label: name });
          await sleep(350);
        }
      }
    };
    run();

    return () => {
      dead = true;
      timers.forEach(clearTimeout);
      timers.clear();
      setNodes(initialNodes());
    };
  }, []);

  const side = [...nodes].sort((a, b) => (SIDE_RANK[a.id] ?? 4) - (SIDE_RANK[b.id] ?? 4));
  const total = 138 + nodes.length;

  return (
    <div className="grid grid-cols-12 min-h-[540px] bg-black/50 relative backdrop-blur-xl">
      {/* Left Sidebar: Spatial Hierarchy */}
      <div className="hidden md:flex md:col-span-3 flex-col bg-white/[0.02] border-r border-white/10 p-4 text-[12px]">
        <div className="flex items-center justify-between text-zinc-400 mb-3 font-mono uppercase text-[10px] tracking-wider font-semibold">
          <span>Site Hierarchy ({total} Nodes)</span>
          <span className="material-symbols-outlined text-[15px] cursor-pointer hover:text-white">filter_list</span>
        </div>
        <div className="space-y-1 text-zinc-300 font-medium">
          <div className="flex items-center gap-1.5 text-white font-semibold py-1.5 px-2 rounded-lg bg-white/10 border border-white/10">
            <span className="material-symbols-outlined text-[16px] text-[#2997ff]">folder_open</span>
            <span className="truncate">/ (Root: Acme Spatial)</span>
          </div>
          <div className="pl-4 space-y-0.5 border-l border-white/10 ml-2.5">
            {side.map((n) => {
              if (n.id === 'products') {
                return (
                  <React.Fragment key={n.id}>
                    <div className="flex items-center justify-between py-1 px-2 rounded bg-[#0071e3]/20 text-[#2997ff] font-semibold border border-[#2997ff]/30">
                      <span className="truncate">/products</span>
                      <span className="font-mono text-[10px] text-[#2997ff]">48</span>
                    </div>
                    <div className="pl-4 space-y-0.5 border-l border-[#2997ff]/40 ml-2.5">
                      <div className="flex items-center justify-between py-0.5 px-2 rounded text-[#2997ff]">
                        <span className="truncate">/analytics</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]"></span>
                      </div>
                      <div className="flex items-center justify-between py-0.5 px-2 rounded text-zinc-400">
                        <span className="truncate">/spatial-mesh</span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
              const doomed = n.phase === 'doomed' || n.phase === 'leave';
              const fresh = n.phase === 'enter' || !!n.edit;
              return (
                <div
                  key={n.id}
                  className={`flex items-center justify-between py-1 px-2 rounded transition-colors duration-300 ${
                    doomed ? 'bg-red-500/10 text-red-400' : fresh ? 'bg-[#0071e3]/20 text-[#2997ff]' : 'hover:bg-white/5 text-zinc-300'
                  }`}
                >
                  <span className={`truncate ${doomed ? 'line-through' : ''}`}>{n.label}</span>
                  <span className={`font-mono text-[10px] ${doomed ? 'text-red-400' : fresh ? 'text-[#2997ff]' : 'text-zinc-500'}`}>
                    {SIDE_COUNT[n.id] ?? 0}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-white/10 space-y-2">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-zinc-400">Spatial Depth</span>
            <span className="font-mono text-zinc-200 font-semibold">4 Z-Planes</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-zinc-400">Orphaned Nodes</span>
            <span className="font-mono text-emerald-400 font-semibold">0 Detected</span>
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-zinc-400">Sort Consensus</span>
            <span className="font-mono text-[#2997ff] font-semibold">94.8%</span>
          </div>
        </div>
      </div>

      {/* Center Node Graph View */}
      <div
        ref={canvasRef}
        className="col-span-12 md:col-span-9 lg:col-span-6 relative p-6 pb-14 flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]"
      >
        <Cursor user={USERS.sarah} state={cur.sarah} />
        <Cursor user={USERS.alex} state={cur.alex} />

        {/* Root Node Card */}
        <div className="relative z-10 w-64 glass-card rounded-2xl border border-white/20 p-3.5 flex flex-col gap-1.5 hover:border-[#2997ff] transition-all">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-zinc-400 font-semibold uppercase">L0 • Root Anchor</span>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">LIVE 200</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[17px] text-[#2997ff]">layers</span>
            <span className="text-[13px] text-white font-semibold">Acme Global Portal</span>
          </div>
          <div className="font-mono text-[11px] text-zinc-400 truncate">https://acme.co/</div>
        </div>

        {/* Level 1 nodes + connectors (driven by the nodes list) */}
        <div className="relative w-full max-w-[520px] z-10">
          <div className="relative mx-auto w-[1.5px] h-4 bg-[#a1a1aa]">
            <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#a1a1aa]" />
          </div>
          <div className="flex">
            {nodes.map((n, i) => (
              <NodeCell
                key={n.id}
                node={n}
                first={i === 0}
                last={i === nodes.length - 1}
                cellRef={(el) => {
                  if (el) cellRefs.current[n.id] = el;
                  else delete cellRefs.current[n.id];
                }}
              />
            ))}
          </div>
        </div>

        {/* Subnode */}
        <div className="self-start ml-12 sm:ml-20 mt-4 z-10 glass-card rounded-xl border border-[#2997ff]/60 p-2.5 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-[#2997ff]">insights</span>
          <div>
            <div className="text-[11px] font-semibold text-white">/products/analytics</div>
            <div className="font-mono text-[9px] text-zinc-400">Confidence: 96%</div>
          </div>
          <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#0071e3]/30 text-[#2997ff] border border-[#2997ff]/40">TESTED</span>
        </div>

        {/* The control both collaborators use to create nodes */}
        <div
          ref={addRef}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 glass-card rounded-full px-3.5 py-1.5 flex items-center gap-1.5 font-mono text-[11px] text-zinc-300 transition-transform duration-150 ${
            pressed ? 'scale-90' : ''
          }`}
        >
          <span className="material-symbols-outlined text-[15px] text-[#2997ff]">add_box</span>
          Add node
        </div>
      </div>

      {/* Right Sidebar: Inspector */}
      <div className="hidden lg:flex lg:col-span-3 flex-col bg-white/[0.02] border-l border-white/10 p-4 text-[12px]">
        <div className="flex items-center justify-between text-zinc-400 mb-4 font-mono uppercase text-[10px] tracking-wider font-semibold">
          <span>Inspector • Active Node</span>
          <span className="w-2 h-2 rounded-full bg-[#2997ff]"></span>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-[11px] mb-1 font-mono uppercase">Node Label</label>
            <div className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-white text-[12px] font-medium">Product Analytics</div>
          </div>
          <div>
            <label className="block text-zinc-400 text-[11px] mb-1 font-mono uppercase">Slug</label>
            <div className="w-full bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-zinc-300 font-mono text-[11px]">/products/analytics</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-zinc-400">Card Sort Validation</span>
              <span className="font-mono text-[#2997ff] font-bold">96% Conf.</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#2997ff] h-full w-[96%]"></div>
            </div>
            <p className="text-[10px] text-zinc-500">48 of 50 users grouped under Core Products.</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-zinc-400">Tree Test Directness</span>
              <span className="font-mono text-emerald-400 font-bold">88%</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[88%]"></div>
            </div>
            <p className="text-[10px] text-zinc-500">Avg search time: 8.2s with zero backtracking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSitemapDemo;
