function squashObject(obj) {
  const squashedObject = {};

  const updateSquashObj = (val, kee, pek) => {
    const nk = kee === "" ? pek : pek ? `${pek}.${kee}` : String(kee);
    if (Array.isArray(val)) {
      val.forEach((item, ind) => {
        updateSquashObj(item, ind, nk);
      });
    } else if (
      val !== null &&
      val !== undefined &&
      Object.getPrototypeOf(val) === Object.prototype
    ) {
      Object.keys(val).forEach((itemKey) => {
        updateSquashObj(val[itemKey], itemKey, nk);
      });
    } else {
      if (kee.length > 0) {
        squashedObject[nk] = val;
      }
    }
  };

  updateSquashObj(obj, "");

  return squashedObject;
}

// const object = {
//   a: { b: null, c: undefined },
// };

const object = {"a": 1 , "b" : 2}

console.log(squashObject(object)); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
