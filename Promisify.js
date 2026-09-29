function promisify(func) {
  return function (...args) {
    const context = this;
    return new Promise((res, rej) => {
      const callback = (err, val) => {
        if (err) {
          rej(err);
        } else {
          res(val);
        }

        func.apply(context, [...args, callback]);
      };
    });
  };
}
