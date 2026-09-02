function throttle(func, wait) {
  let timer = null;

  return function (...args) {
    if (timer) return;

    func.apply(this, args);

    timer = setTimeout(() => {
      timer = null;
    }, wait);
  };
}
