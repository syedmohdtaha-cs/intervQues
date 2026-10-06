function curry(func) {
  function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return function (nextArg) {
      return curried.apply(this, [...args, nextArg]);
    };
  }

  return curried;
}
