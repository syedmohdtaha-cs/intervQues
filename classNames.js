// classNames("foo", "bar"); // 'foo bar'
// classNames("foo", { bar: true }); // 'foo bar'
// classNames({ "foo-bar": true }); // 'foo-bar'
// classNames({ "foo-bar": false }); // ''
// classNames({ foo: true }, { bar: true }); // 'foo bar'
// classNames({ foo: true, bar: true }); // 'foo bar'
// classNames({ foo: true, bar: false, qux: true }); // 'foo qux'

function classNames(...args) {
  let classStringFinalArr = [];

  const stringifyArray = (arr) => {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        stringifyArray(element);
      } else if (typeof element === "string" && element.trim()) {
        classStringFinalArr.push(element);
      } else if (element && typeof element === "object") {
        Object.entries(element).forEach(([key, value]) => {
          if (value) {
            classStringFinalArr.push(key);
          }
        });
      } else if (element) {
        classStringFinalArr.push(element);
      }
    });
  };
  stringifyArray(args);
  return classStringFinalArr.join(" ");
}

console.log(
  classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""),
  "classNames",
);
