function deepOmit(obj, keys) {
  const removeSet = new Set(keys);

  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepOmit(item, keys));
  }

  if (typeof obj !== "object") {
    return obj;
  }

  const result = {};

  for (const key of Object.keys(obj)) {
    if (removeSet.has(key)) {
      continue;
    }

    result[key] = deepOmit(obj[key], keys);
  }

  return result;
}
