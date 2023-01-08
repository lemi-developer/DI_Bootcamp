/*
Exercise 1 : Comparison
Instructions
Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than 10
the promise rejects if argument is greater than 10.
*/

const compareToTen = (num) =>
  new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("It is < 10");
    } else {
      reject("It is >= 10"); // or reject(new Error("It is >= 10")) same as -> throw new Error ("You lost ...");
    }
  });

//In the example, the promise should reject
compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//In the example, the promise should resolve
compareToTen(11)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
