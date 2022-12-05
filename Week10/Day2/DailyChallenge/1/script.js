/*

Instructions
1rst Daily Challenge
Create two functions. Each function should return a promise.
The first function called makeAllCaps(), takes an array of words as an argument
If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
else, reject the promise with a reason.
The second function called sortWords(), takes an array of words uppercased as an argument
If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
else, reject the promise with a reason.

*/

/*
 = new Promise((resolve, reject) => {
    resolve("OK!");
  });

const result = 
}*/

//creating a promise

function isString(arg) {
  return typeof arg === "string";
}

function makeAllCaps(words) {
  const prom = new Promise((resolve, reject) => {
    if (words.every(isString)) {
      resolve("OK!");
    } else {
      reject("Sorry, all values must be strings");
    }
  });
}

//resolving a promise

prom.then(console.log).catch(console.error);

makeAllCaps(["hello", "hi"]);
