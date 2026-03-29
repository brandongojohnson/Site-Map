export function buildSlugPath(tree, id, ancestors = []) {
  if (tree.id === id) return [...ancestors, tree.slug].join('/');
  for (const c of tree.children) {
    const res = buildSlugPath(c, id, [...ancestors, tree.slug]);
    if (res) return res;
  }
  return null;
}
