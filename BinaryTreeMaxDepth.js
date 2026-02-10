/// https://www.greatfrontend.com/questions/algo/binary-tree-maximum-depth?practice=practice&tab=coding

export default function maxDepth(root) {
  if (root === null) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
