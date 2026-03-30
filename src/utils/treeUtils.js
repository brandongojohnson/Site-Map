export function addChild(tree, parentId, newNode) {
  if (tree.id === parentId) {
    return { ...tree, children: [...tree.children, newNode] };
  }
  return {
    ...tree,
    children: tree.children.map(c => addChild(c, parentId, newNode))
  };
}

export function updateNode(tree, id, patch) {
  if (tree.id === id) return { ...tree, ...patch };
  return {
    ...tree,
    children: tree.children.map(c => updateNode(c, id, patch))
  };
}

export function deleteNode(tree, id) {
  return {
    ...tree,
    children: tree.children
      .filter(c => c.id !== id)
      .map(c => deleteNode(c, id)),
  };
}

export function findNode(tree, id) {
  if (tree.id === id) return tree;
  for (const child of tree.children) {
    const found = findNode(child, id);
    if (found) return found;
  }
  return null;
}

export function layoutTree(node, depth = 0, NODE_W = 192, NODE_H = 96, H_GAP = 48, V_GAP = 80) {
  if (!node.children || node.children.length === 0) {
    return { ...node, _w: NODE_W, _x: 0, _y: depth * (NODE_H + V_GAP), _laidOut: [] };
  }

  const kids = node.children.map(c => layoutTree(c, depth + 1, NODE_W, NODE_H, H_GAP, V_GAP));

  let offset = 0;
  const shifted = [];
  for (let i = 0; i < kids.length; i++) {
    const k = { ...kids[i] };
    shiftSubtree(k, offset);
    shifted.push(k);
    offset += k._w + H_GAP;
  }

  const totalW = shifted.reduce((acc, k) => acc + k._w, 0) + H_GAP * (shifted.length - 1);
  const leftX = shifted[0]._x;
  const rightX = shifted[shifted.length - 1]._x + shifted[shifted.length - 1]._w;
  const centerX = (leftX + rightX) / 2 - NODE_W / 2;

  return {
    ...node,
    _w: Math.max(NODE_W, totalW),
    _x: centerX,
    _y: depth * (NODE_H + V_GAP),
    children: shifted,
    _laidOut: shifted,
  };
}

function shiftSubtree(node, dx) {
  node._x += dx;
  if (node.children) {
    node.children.forEach(c => shiftSubtree(c, dx));
  }
}

export function collectNodes(node, acc = []) {
  acc.push(node);
  if (node.children) {
    node.children.forEach(c => collectNodes(c, acc));
  }
  return acc;
}

export function collectEdges(node, NODE_W, NODE_H, acc = []) {
  if (!node.children) return acc;
  node.children.forEach(child => {
    acc.push({
      x1: node._x + NODE_W / 2,
      y1: node._y + NODE_H,
      x2: child._x + NODE_W / 2,
      y2: child._y,
    });
    collectEdges(child, NODE_W, NODE_H, acc);
  });
  return acc;
}
