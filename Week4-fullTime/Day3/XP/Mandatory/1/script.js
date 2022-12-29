//Exercise 1 : Analyzing

//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); // if the called items are arrays the each item of the array will be displayed one by one

//------2------
const country = "USA";
console.log([...country]); // if a string value is called up then an array where each character of the string is placed separately will be displayed

//------Bonus------
let newArray = [...[, ,]];
console.log(newArray); // undefined, since nothing was actually called up
