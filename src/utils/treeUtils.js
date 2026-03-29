export function findNode(tree, id) {
  if (tree.id === id) return tree;
  for (const c of tree.children) {
    const f = findNode(c, id);
    if (f) return f;
  }
  return null;
}

export function findParent(tree, id) {
  for (const c of tree.children) {
    if (c.id === id) return tree;
    const f = findParent(c, id);
    if (f) return f;
  }
  return null;
}

export function updateNode(tree, id, patch) {
  if (tree.id === id) return { ...tree, ...patch };
  return { ...tree, children: tree.children.map(c => updateNode(c, id, patch)) };
}

export function deleteNode(tree, id) {
  return {
    ...tree,
    children: tree.children
      .filter(c => c.id !== id)
      .map(c => deleteNode(c, id)),
  };
}

export function addChild(tree, parentId, node) {
  if (tree.id === parentId) {
    return { ...tree, children: [...tree.children, node] };
  }
  return { ...tree, children: tree.children.map(c => addChild(c, parentId, node)) };
}

export function addSibling(tree, siblingId, dir, node) {
  const parent = findParent(tree, siblingId);
  if (!parent) return tree;

  const idx = parent.children.findIndex(c => c.id === siblingId);
  const insertAt = dir === -1 ? idx : idx + 1;

  const newChildren = [...parent.children];
  newChildren.splice(insertAt, 0, node);

  return updateNode(tree, parent.id, { children: newChildren });
}

export function moveNodeAfter(tree, dragId, targetId) {
  const dragNode = findNode(tree, dragId);
  if (!dragNode) return tree;

  let t = deleteNode(tree, dragId);
  return addSibling(t, targetId, 1, dragNode);
}
