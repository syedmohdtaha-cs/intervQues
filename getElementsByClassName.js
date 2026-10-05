function getElementsByClassName(element, classNames) {
  const result = [];

  const classes = classNames.trim().split(/\s+/);

  function traverse(node) {
    for (const child of node.children) {
      const hasAllClasses = classes.every((className) =>
        child.classList.contains(className)
      );

      if (hasAllClasses) {
        result.push(child);
      }

      traverse(child);
    }
  }

  traverse(element);

  return result;
}
