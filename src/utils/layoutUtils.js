export const NW = 196, NH = 96, HGAP = 56, VGAP = 88;

export function layoutTree(node, depth = 0) {
  if (!node.children.length) {
    return { ...node, _w: NW, _x: 0, _y: depth * (NH + VGAP) };
  }

  const kids = node.children.map(c => layoutTree(c, depth + 1));

  let offset = 0;
  const shifted = kids.map(k => {
    const n = { ...k };
    shiftSub(n, offset);
    offset += n._w + HGAP;
    return n;
  });

  const totalW = shifted.reduce((a, k) => a + k._w, 0) + HGAP * (shifted.length - 1);
  const lx = shifted[0]._x;
  const rx = shifted[shifted.length - 1]._x + shifted[shifted.length - 1]._w;

  return {
    ...node,
    _w: Math.max(NW, totalW),
    _x: (lx + rx) / 2 - NW / 2,
    _y: depth * (NH + VGAP),
    children: shifted,
  };
}

function shiftSub(node, dx) {
  node._x += dx;
  node.children.forEach(c => shiftSub(c, dx));
}

export function collectNodes(node, acc = []) {
  acc.push(node);
  node.children.forEach(c => collectNodes(c, acc));
  return acc;
}

export function collectEdges(node, acc = []) {
  node.children.forEach(child => {
    acc.push({
      x1: node._x + NW / 2,
      y1: node._y + NH,
      x2: child._x + NW / 2,
      y2: child._y,
      id: `${node.id}-${child.id}`,
    });
    collectEdges(child, acc);
  });
  return acc;
}

export const elbow = (x1, y1, x2, y2) => {
  const mid = (y1 + y2) / 2;
  return `M${x1},${y1} L${x1},${mid} L${x2},${mid} L${x2},${y2}`;
};
