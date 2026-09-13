import { uid } from '../data/treeData';

const slugify = (s) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'page';

// Accepts whatever shape a researcher's export happens to use — title/name/
// label for the page name, children/pages/items/nodes for its sub-pages —
// and normalizes it into our board node shape, generating ids and
// hierarchical slugs (parent/child, mirroring src/data/templates.js) for
// whatever fields the source didn't already provide.
const toNode = (raw, parentSlug, isRoot) => {
  const title = String(raw?.title ?? raw?.name ?? raw?.label ?? 'Untitled').trim() || 'Untitled';
  const childrenRaw = raw?.children ?? raw?.pages ?? raw?.items ?? raw?.nodes ?? [];
  const slug = raw?.slug
    ? String(raw.slug).replace(/^\/+/, '')
    : isRoot
    ? 'index.html'
    : parentSlug
    ? `${parentSlug}/${slugify(title)}`
    : slugify(title);

  return {
    id: uid(),
    title,
    slug,
    label: isRoot ? 'Home' : 'Page',
    icon: raw?.icon || (isRoot ? 'home' : 'article'),
    status: raw?.status === 'draft' ? 'draft' : 'public',
    description: raw?.description ? String(raw.description) : '',
    children: (Array.isArray(childrenRaw) ? childrenRaw : []).map((c) =>
      toNode(c, isRoot ? '' : slug, false)
    ),
  };
};

// A JSON object becomes the root directly; a bare array is treated as the
// root's top-level pages (there's no single homepage node to anchor to, so
// one is synthesized) — covers both "here's my tree" and "here's my nav"
// exports.
export const parseJsonStructure = (text) => {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("That doesn't look like valid JSON — check for a missing comma or bracket.");
  }
  if (Array.isArray(data)) {
    if (data.length === 0) throw new Error('That JSON array is empty — nothing to import.');
    return toNode({ title: 'Home', children: data }, '', true);
  }
  if (data && typeof data === 'object') {
    return toNode(data, '', true);
  }
  throw new Error('Expected a JSON object or array describing the page hierarchy.');
};

// Indented plain text: 2 spaces per level, first non-blank line is the
// homepage regardless of its own indentation. Same convention as the tree
// test builder (src/tree-test/treeTestUtils.js), reused here so pasting a
// hierarchy feels the same everywhere in the app.
export const parseIndentedStructure = (text) => {
  const lines = text
    .split('\n')
    .map((l) => l.replace(/\t/g, '  '))
    .filter((l) => l.trim().length > 0);
  if (lines.length === 0) throw new Error('Paste at least one page.');

  const depthOf = (line) => (line.match(/^ */)[0].length / 2) | 0;
  const baseDepth = depthOf(lines[0]);

  const makeNode = (title, parentSlug, isRoot) => ({
    id: uid(),
    title,
    slug: isRoot ? 'index.html' : parentSlug ? `${parentSlug}/${slugify(title)}` : slugify(title),
    label: isRoot ? 'Home' : 'Page',
    icon: isRoot ? 'home' : 'article',
    status: 'public',
    description: '',
    children: [],
  });

  const root = makeNode(lines[0].trim(), '', true);
  // Each stack entry's `slug` is the prefix its own children's slugs build
  // on — '' for the root (so its children get flat slugs like 'about', not
  // 'index.html/about'), and the node's own slug for everyone else.
  const stack = [{ node: root, depth: 0, slug: '' }];

  for (let i = 1; i < lines.length; i++) {
    const depth = Math.max(0, depthOf(lines[i]) - baseDepth);
    while (stack.length > 1 && stack[stack.length - 1].depth >= depth) stack.pop();
    const parent = stack[stack.length - 1];
    const node = makeNode(lines[i].trim(), parent.slug, false);
    parent.node.children.push(node);
    stack.push({ node, depth, slug: node.slug });
  }

  return root;
};

// Auto-detects JSON vs. indented text so one textarea (and one file picker)
// can accept either.
export const parseStructureText = (text) => {
  const trimmed = text.trim();
  if (!trimmed) throw new Error('Paste a structure, or upload a file, to see a preview.');
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) return parseJsonStructure(trimmed);
  return parseIndentedStructure(trimmed);
};
