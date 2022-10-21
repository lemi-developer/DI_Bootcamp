//Exercise 1 : List of people

//Part I - Review about arrays

const people = ["Greg", "Mary", "Devon", "James"];

// ( 1 ) Remove “Greg” from the people array

people.shift();

// ( 2 ) Replace “James” to “Jason”

people.splice(3, 1, "Jason");

// ( 3 ) Add your name to the end of the people array

people.push("YourName");

// ( 4 ) console.log Mary’s index

console.log(people.indexOf("Mary"));

// ( 5 ) make a copy of the people array using the slice method. The copy should NOT include “Mary” or your name.

people.slice(0);

console.log(people);

// ( 6 )
/*
console.log(people.indexOf("Foo")); //why really -1?

let last = people[people.length - 1];
console.log(last); // the length of the array is always the index of the last array element plus one

console.log(people);

//Part II - Loops

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//for of (for in is a similar method for objects)

/*
 for (let person of people) {
   console.log(person); // person will keep receiving the attribution of eache array element
 }
 */
