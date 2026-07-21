// Aggregate analysis across many completed card-sort sessions for one study.
// Each session is expected to look like buildResults() output from sortUtils:
// { results: { groups: [{ category, cards: [label, …] }], unsorted: [label, …] } }

// Similarity matrix: cell [i][j] = share of participants who placed card i and
// card j in the same group, among participants who sorted both cards at all.
export const buildSimilarityMatrix = (cardLabels, sessions) => {
  const n = cardLabels.length;
  const together = Array.from({ length: n }, () => new Array(n).fill(0));
  const both = Array.from({ length: n }, () => new Array(n).fill(0));

  sessions.forEach((session) => {
    const groups = (session.results?.groups || []).filter((g) => g.cards.length > 0);
    const cardGroup = new Map();
    groups.forEach((g, gi) => g.cards.forEach((label) => cardGroup.set(label, gi)));

    for (let i = 0; i < n; i++) {
      if (!cardGroup.has(cardLabels[i])) continue;
      for (let j = i + 1; j < n; j++) {
        if (!cardGroup.has(cardLabels[j])) continue;
        both[i][j]++;
        both[j][i]++;
        if (cardGroup.get(cardLabels[i]) === cardGroup.get(cardLabels[j])) {
          together[i][j]++;
          together[j][i]++;
        }
      }
    }
  });

  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => {
      if (i === j) return 1;
      return both[i][j] > 0 ? together[i][j] / both[i][j] : 0;
    })
  );
};

// Agglomerative hierarchical clustering (average linkage) over a similarity
// matrix. Returns a binary tree: leaves are { type: 'leaf', label, indices },
// internal nodes are { type: 'node', left, right, distance, indices }.
export const clusterHierarchical = (matrix, labels) => {
  if (labels.length === 0) return null;
  if (labels.length === 1) return { type: 'leaf', label: labels[0], indices: [0] };

  let clusters = labels.map((label, i) => ({ type: 'leaf', label, indices: [i] }));

  const avgDistance = (a, b) => {
    let sum = 0;
    let count = 0;
    a.indices.forEach((i) => {
      b.indices.forEach((j) => {
        sum += 1 - matrix[i][j];
        count++;
      });
    });
    return sum / count;
  };

  while (clusters.length > 1) {
    let best = null;
    for (let i = 0; i < clusters.length; i++) {
      for (let j = i + 1; j < clusters.length; j++) {
        const d = avgDistance(clusters[i], clusters[j]);
        if (!best || d < best.d) best = { i, j, d };
      }
    }
    const { i, j, d } = best;
    const merged = {
      type: 'node',
      left: clusters[i],
      right: clusters[j],
      distance: d,
      indices: [...clusters[i].indices, ...clusters[j].indices],
    };
    clusters = clusters.filter((_, k) => k !== i && k !== j);
    clusters.push(merged);
  }
  return clusters[0];
};

// Category (group-name) frequency across sessions — most useful for open and
// hybrid sorts, where participants may invent or rename groups. Names are
// grouped case/whitespace-insensitively but displayed using the first-seen casing.
export const categoryFrequency = (sessions) => {
  const tally = new Map();

  sessions.forEach((session) => {
    (session.results?.groups || [])
      .filter((g) => g.cards.length > 0)
      .forEach((g) => {
        const key = g.category.trim().toLowerCase();
        if (!tally.has(key)) {
          tally.set(key, { name: g.category.trim(), count: 0, cardCounts: new Map() });
        }
        const entry = tally.get(key);
        entry.count++;
        g.cards.forEach((card) => entry.cardCounts.set(card, (entry.cardCounts.get(card) || 0) + 1));
      });
  });

  return Array.from(tally.values())
    .map((entry) => ({
      name: entry.name,
      count: entry.count,
      topCards: Array.from(entry.cardCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([label, count]) => ({ label, count })),
    }))
    .sort((a, b) => b.count - a.count);
};
