function myStringify(val) {
  if (val === undefined) {
    return val;
  } else if (typeof val === "string") {
    return `"${val}"`;
  } else if (Array.isArray(val)) {
    const result = val
      .map((item) => {
        if (item === undefined) {
          return "null";
        }
        return myStringify(item);
      })
      .join(",");
    return `[${result}]`;
  } else if (Object.getPrototypeOf(val) === Object.prototype) {
    const keys = Object.keys(val);
    const res = keys
      .filter((k) => val[k] !== undefined)
      .map((k) => {
        if (val[k] === undefined) {
          return;
        }
        return `${myStringify(k)}:${myStringify(val[k])}`;
      })
      .join(",");
    return `{${res}}`;
  }
  return String(val);
}
