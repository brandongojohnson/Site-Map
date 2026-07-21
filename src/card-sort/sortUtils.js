let cardCounter = 0;
export const cardUid = () => `card-${Date.now()}-${++cardCounter}`;

let catCounter = 0;
export const catUid = () => `cat-${Date.now()}-${++catCounter}`;

export const SORT_TYPES = {
  open: {
    label: 'Open Card Sort',
    icon: 'category',
    tagline: 'Participants create and name their own groups.',
    bestFor: 'Discovering mental models and generating navigation categories.',
  },
  closed: {
    label: 'Closed Card Sort',
    icon: 'grid_view',
    tagline: 'Participants sort cards into categories you provide.',
    bestFor: 'Validating an existing information architecture.',
  },
  hybrid: {
    label: 'Hybrid Card Sort',
    icon: 'dashboard_customize',
    tagline: 'Predefined categories, but new ones can be created.',
    bestFor: 'Refining a structure while allowing flexibility.',
  },
};

export const SAMPLE_CARDS = [
  'Pricing',
  'Contact Us',
  'Blog',
  'Careers',
  'Product Tour',
  'Case Studies',
  'Help Center',
  'API Documentation',
  'About the Team',
  'Press Kit',
  'Integrations',
  'Security',
];

export const SAMPLE_CATEGORIES = ['Company', 'Product', 'Resources', 'Support'];

// Flatten a sitemap tree into card labels (page titles).
export const treeToCardLabels = (node, out = []) => {
  if (!node || typeof node !== 'object') return out;
  if (node.title) out.push(node.title);
  (node.children || []).forEach((child) => treeToCardLabels(child, out));
  return out;
};

export const makeCards = (labels) =>
  labels
    .map((l) => l.trim())
    .filter(Boolean)
    .map((label) => ({ id: cardUid(), label }));

export const makeCategories = (names, locked) =>
  names
    .map((n) => n.trim())
    .filter(Boolean)
    .map((name) => ({ id: catUid(), name, locked }));

// Build a plain results object: [{ category, cards: [labels] }, unsorted]
export const buildResults = (cards, categories, assignments) => {
  const groups = categories.map((cat) => ({
    category: cat.name,
    cards: cards.filter((c) => assignments[c.id] === cat.id).map((c) => c.label),
  }));
  const unsorted = cards.filter((c) => !assignments[c.id]).map((c) => c.label);
  return { groups, unsorted };
};

export const resultsToCsv = (results) => {
  const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
  const rows = [['Category', 'Card']];
  results.groups.forEach((g) => g.cards.forEach((card) => rows.push([g.category, card])));
  results.unsorted.forEach((card) => rows.push(['(Unsorted)', card]));
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
