function memoize(func) {
  let cachedResult = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cachedResult.has(key)) {
      return cachedResult.get(key);
    }
    const output = func.apply(this, args);
    cachedResult.set(key, output);
    return output;
  };
}
