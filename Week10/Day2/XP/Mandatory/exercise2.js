/*
Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a “success” string.
*/

const promise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(resolve("success"), 4000);
  } else {
    reject("fail");
  }
});

promise.then((result) => {
  console.log(result);
});

/*
  How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
  */

const promiseToSuccess = Promise.resolve("success2");

promiseToSuccess.then((result) => {
  console.log(result);
});

/*
  Add code to catch errors and console.log ‘Ooops something went wrong’.
  */

const promiseToFail = Promise.reject(new Error("failure"));

promiseToFail.catch((result) => {
  console.log(result);
});
