
const allSettled = (promises) => {
    // map the promises to return a custom response.
    const mappedPromises = promises.map((p) => Promise.resolve(p)
    .then(
    val => ({ status: 'fulfilled', value: val }),
    err => ({ status: 'rejected', reason: err })
    ));
    // run all the promises once with .all
    return Promise.all(mappedPromises);
}

const myAllSettled = (promises) => {
    const results = new Array(promises.length);
    let counter = 0;
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((val) => {
            results[index] = { status: "fulfilled", value: val };
          })
          .catch((err) => {
            results[index] = { status: "rejected", reason: err };
          })
          .finally(() => {
            counter++;
            if (counter === promises.length) {
              resolve(results);
            }
          });
      });
    });
  };

const a = new Promise((resolve) => setTimeout(() => { resolve(3) },200));
const b = new Promise((resolve,reject) => reject(9));
const c = new Promise((resolve) => resolve(5));
allSettled([a, b, c]).then((val)=> {console.log(val)});