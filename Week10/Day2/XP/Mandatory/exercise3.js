const promiseTo3 = Promise.resolve(3);

promiseTo3.then((result) => {
  console.log(result);
});

const promiseToFail = Promise.reject(new Error("boo!"));

promiseToFail.catch((result) => {
  console.log(result);
});

Promise.reject("boo!");
