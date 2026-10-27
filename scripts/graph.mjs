/**
 * graph.mjs — graph helpers shared by build, validate and tests.
 */

/**
 * Return one dependency cycle as a list of topic ids (first id repeated at the
 * end), or null when the graph is acyclic. Iterative DFS, so deep graphs do
 * not overflow the stack.
 */
export function findDependencyCycle(dependencies) {
  const adj = new Map();
  for (const { topicId, prerequisiteId } of dependencies) {
    if (!adj.has(topicId)) adj.set(topicId, []);
    adj.get(topicId).push(prerequisiteId);
  }
  const WHITE = 0;
  const GREY = 1;
  const BLACK = 2;
  const color = new Map();
  for (const start of adj.keys()) {
    if ((color.get(start) ?? WHITE) !== WHITE) continue;
    const stack = [[start, 0]];
    const path = [start];
    color.set(start, GREY);
    while (stack.length) {
      const frame = stack[stack.length - 1];
      const [node, i] = frame;
      const next = adj.get(node) ?? [];
      if (i < next.length) {
        frame[1]++;
        const m = next[i];
        const c = color.get(m) ?? WHITE;
        if (c === GREY) return [...path.slice(path.indexOf(m)), m];
        if (c === WHITE) {
          color.set(m, GREY);
          stack.push([m, 0]);
          path.push(m);
        }
      } else {
        color.set(node, BLACK);
        stack.pop();
        path.pop();
      }
    }
  }
  return null;
}

/** Edges whose endpoints are already connected by a longer path (A→…→C plus A→C). */
export function findRedundantEdges(dependencies) {
  const adj = new Map();
  for (const { topicId, prerequisiteId } of dependencies) {
    if (!adj.has(topicId)) adj.set(topicId, new Set());
    adj.get(topicId).add(prerequisiteId);
  }
  const reachableAvoiding = (from, target, skipDirect) => {
    const seen = new Set();
    const stack = [...(adj.get(from) ?? [])].filter((n) => !(skipDirect && n === target));
    while (stack.length) {
      const n = stack.pop();
      if (n === target) return true;
      if (seen.has(n)) continue;
      seen.add(n);
      for (const m of adj.get(n) ?? []) stack.push(m);
    }
    return false;
  };
  return dependencies.filter((d) => reachableAvoiding(d.topicId, d.prerequisiteId, true));
}
