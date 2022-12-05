/*
Exercise 1 : Comparison
Instructions
Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than 10
the promise rejects if argument is greater than 10.
*/

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("Optimal. The number is smaller than 10");
    } else {
      reject("Bigger than 10. Problem");
    }
  });
}

compareToTen(5)
  .then((res) => console.log(res))
  .catch((err = console.error(err)));

/*
  Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a “success” string.

*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 4000);
});

promise.then(console.log).catch(console.error);

// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?

const promise2 = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

//promise2.then(console.log).catch(console.error);

// Add code to catch errors and console.log ‘Ooops something went wrong’.

//we write the then catch in the long form (with arrow functions) to add messages

promise2
  .then((res) => console.log("Success. Result:", res))
  .catch((err) => console.error("Oops, something went wrong, err"));

/*

🌟 Exercise 3 : Resolve & Reject
Instructions
Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

*/

const promise3 = Promise.resolve(3);
promise3.then((res) => console.log(res)).catch((err) => console.error(err));

// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promiseReject = Promise.reject("boo");
promiseReject
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/*
function equalsThree(value) {
  return new Promise((resolve, reject) => {
    if (value === 3) {
      resolve("Optimal");
    } else {
      reject("Boo!");
    }
  });
}

equalsThree(3).then(console.log).catch(console.error);
*/
