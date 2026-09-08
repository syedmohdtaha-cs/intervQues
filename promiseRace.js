function PromiseRace(arrPromise) {
  let firstFinished = false;
  return new Promise((res, rej) => {
    arrPromise.forEach((pro) => {
      if (!firstFinished) {
        pro
          .then((val) => {
            if (!firstFinished) {
              firstFinished = true;
              res(val);
            }
          })
          .catch((err) => {
            if (!firstFinished) {
              firstFinished = true;
              rej(err);
            }
          });
      }
    });
  });
}

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("Success"), 500);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Failed"), 1000);
});

PromiseRace([p1, p2])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
