/**
 * @param {unknown} valueA
 * @param {unknown} valueB
 * @returns {boolean}
 */
function deepEqual(valueA, valueB) {
  let isDeepEqual = true;

  if (typeof valueA !== typeof valueB) {
    return false;
  }

  if (typeof valueA === "object") {
    if (valueA === null || valueB === null) {
      return valueA === valueB;
    }

    if (Array.isArray(valueA) && Array.isArray(valueB)) {
      if (valueA.length !== valueB.length) {
        return false;
      }

      valueA.forEach((value, index) => {
        if (!deepEqual(value, valueB[index])) {
          isDeepEqual = false;
        }
      });

      return isDeepEqual;
    }

    if (
      Object.getPrototypeOf(valueA) === Object.prototype &&
      Object.getPrototypeOf(valueB) === Object.prototype
    ) {
      const keysA = Object.keys(valueA);
      const keysB = Object.keys(valueB);

      if (keysA.length !== keysB.length) {
        return false;
      }

      keysA.forEach((key) => {
        if (!Object.hasOwn(valueB, key)) {
          isDeepEqual = false;
        }
        if (!deepEqual(valueA[key], valueB[key])) {
          isDeepEqual = false;
        }
      });

      return isDeepEqual;
    }

    return false;
  }

  return valueA === valueB;
}

console.log(deepEqual(0, 0));
