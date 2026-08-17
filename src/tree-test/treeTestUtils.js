let nodeCounter = 0;
export const nodeUid = () => `node-${Date.now()}-${++nodeCounter}`;

let taskCounter = 0;
export const taskUid = () => `task-${Date.now()}-${++taskCounter}`;

// A tree-test tree is a plain hierarchy: { id, title, children: [] }. No
// icons, statuses, or visual design shown to participants — a tree test
// deliberately strips all of that so findability is measured against
// labeling and structure alone.
export const SAMPLE_TREE = {
  id: 'home',
  title: 'Home',
  children: [
    {
      id: 'products',
      title: 'Products',
      children: [
        { id: 'pricing', title: 'Pricing', children: [] },
        { id: 'enterprise', title: 'Enterprise', children: [] },
      ],
    },
    {
      id: 'solutions',
      title: 'Solutions',
      children: [{ id: 'cases', title: 'Case Studies', children: [] }],
    },
    {
      id: 'about',
      title: 'About',
      children: [
        { id: 'contact', title: 'Contact', children: [] },
        { id: 'careers', title: 'Careers', children: [] },
      ],
    },
  ],
};

export const SAMPLE_TASKS = [
  { prompt: "Find out how much the Enterprise plan costs.", correctNodeIds: ['enterprise'] },
  { prompt: 'You want to read about a past client project. Where would you look?', correctNodeIds: ['cases'] },
  { prompt: "Find a way to get in touch with the company.", correctNodeIds: ['contact'] },
];

// Deep clone so repeated "Sample Tree" clicks (and the tree that ends up
// mutated by edits afterward) never share node objects with this constant.
export const cloneSampleTree = () => JSON.parse(JSON.stringify(SAMPLE_TREE));
export const cloneSampleTasks = () => JSON.parse(JSON.stringify(SAMPLE_TASKS));

// ---------- Indented-text tree builder ----------
// A researcher types the hierarchy as indented lines (2 spaces per level).
// The first non-blank line is always the root, regardless of its own
// indentation — everything below is read relative to it.
export const parseIndentedTree = (text) => {
  const lines = text
    .split('\n')
    .map((l) => l.replace(/\t/g, '  '))
    .filter((l) => l.trim().length > 0);
  if (lines.length === 0) return null;

  const depthOf = (line) => (line.match(/^ */)[0].length / 2) | 0;
  const baseDepth = depthOf(lines[0]);

  const root = { id: nodeUid(), title: lines[0].trim(), children: [] };
  const stack = [{ node: root, depth: 0 }];

  for (let i = 1; i < lines.length; i++) {
    const depth = Math.max(0, depthOf(lines[i]) - baseDepth);
    const node = { id: nodeUid(), title: lines[i].trim(), children: [] };
    while (stack.length > 1 && stack[stack.length - 1].depth >= depth) stack.pop();
    stack[stack.length - 1].node.children.push(node);
    stack.push({ node, depth });
  }

  return root;
};

export const treeToIndentedText = (node, depth = 0) => {
  if (!node) return '';
  const line = `${'  '.repeat(depth)}${node.title}`;
  const childLines = (node.children || []).map((c) => treeToIndentedText(c, depth + 1));
  return [line, ...childLines].join('\n');
};

// Rebuilds a sitemap tree (node.title/node.children, as read from Firebase)
// into a tree-test tree with fresh, namespaced ids — the sitemap's own ids
// aren't reused, so imported and hand-built trees behave identically.
export const sitemapToTestTree = (node) => {
  if (!node || typeof node !== 'object' || !node.title) return null;
  return {
    id: nodeUid(),
    title: node.title,
    children: (node.children || []).map(sitemapToTestTree).filter(Boolean),
  };
};

// ---------- Tree traversal ----------
export const countNodes = (node) => {
  if (!node) return 0;
  return 1 + (node.children || []).reduce((sum, c) => sum + countNodes(c), 0);
};

export const findNode = (node, id) => {
  if (!node) return null;
  if (node.id === id) return node;
  for (const child of node.children || []) {
    const found = findNode(child, id);
    if (found) return found;
  }
  return null;
};

// Preorder [{ id, title, depth }] — the flat shape both TreePicker and CSV
// export want, so the tree only has to be walked once per consumer.
export const flattenTree = (node, depth = 0, out = []) => {
  if (!node) return out;
  out.push({ id: node.id, title: node.title, depth });
  (node.children || []).forEach((c) => flattenTree(c, depth + 1, out));
  return out;
};

// ---------- Scoring ----------
// "Direct" follows the standard tree-testing convention: only successes can
// be direct, and only if the participant never backed a level up (any
// backtrack — even one that still lands on the right answer — counts as
// indirect, since it means they took a wrong turn along the way).
export const scoreTask = (task, rawResult) => {
  const correct = !rawResult.skipped && (task.correctNodeIds || []).includes(rawResult.answerNodeId);
  const direct = correct && !rawResult.backtracked;
  return { correct, direct };
};

export const buildTaskRecord = (tree, task, rawResult) => {
  const { correct, direct } = scoreTask(task, rawResult);
  const answerNode = rawResult.answerNodeId ? findNode(tree, rawResult.answerNodeId) : null;
  return {
    taskId: task.id,
    prompt: task.prompt,
    answerNodeId: rawResult.answerNodeId,
    answerTitle: answerNode ? answerNode.title : null,
    path: rawResult.path,
    correct,
    direct,
    skipped: rawResult.skipped,
    durationMs: rawResult.durationMs,
  };
};

// ---------- Export ----------
export const sessionTasksToCsv = (tasks) => {
  const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const rows = [['Task', 'Answer', 'Result', 'Directness', 'Time (s)']];
  tasks.forEach((t) => {
    rows.push([
      t.prompt,
      t.skipped ? '(Skipped)' : t.answerTitle,
      t.skipped ? 'Skipped' : t.correct ? 'Correct' : 'Incorrect',
      t.correct ? (t.direct ? 'Direct' : 'Indirect') : '—',
      (t.durationMs / 1000).toFixed(1),
    ]);
  });
  return rows.map((r) => r.map(esc).join(',')).join('\n');
};

export const downloadFile = (filename, content, mime) => {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
