//Exercise 1 : List of people

//Part I - Review about arrays

const people = ["Greg", "Mary", "Devon", "James"];

// ( 1 ) Remove “Greg” from the people array

people.shift();

// ( 2 ) Replace “James” to “Jason”

people.splice(3, 1, "Jason");

// ( 3 ) Add your name to the end of the people array

people.push("Yourname");

// ( 4 ) console.log Mary’s index

console.log(people.indexOf("Mary"));

// ( 5 ) Make a copy of the people array using the slice method. The copy should NOT include “Mary” or your name.

console.log(people); // "Mary" is the first item, "Yourname" is the last. We slice the first and last items

let peopleCopy = people.slice(1, -1);

console.log(peopleCopy);

// ( 6 ) Write code that gives the index of “Foo”

console.log(people.indexOf("Foo"));

// why is the index equal to -1? Items that do not exist in the array such as "Foo", automatically receive -1 index

// ( 7 ) Create a variable called last which value is the last element of the array.

let last = people[people.length - 1];
console.log(last);

// the length of the array is always the index of the last array element plus one

//Part II - Loops

// ( 1 ) iterate through the people array and console.log each person

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// ( 2 ) iterate through the people array and exit the loop after you console.log “Jason”

for (let i = 0; i < people.length; i++) {
  if (people[i] != "Jason") {
    console.log(people[i]);
  } else {
    break;
  }
}

//Exercise 2 : Your favorite colors

const colors = ["blue", "red", "black", "orange", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

//Exercise 3 : Skipped

//Exercise 4 : Building Management

// ( 1 ) Consider the following object:

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// ( 2 ) console.log the number of floors in the building

console.log(`${building["numberOfFloors"]} floors in the building`);

//( 3 ) console.log how many apartments are on the floors 1 and 3.

console.log(`${building["numberOfAptByFloor"]["firstFloor"]} on the first floor, 
${building["numberOfAptByFloor"]["secondFloor"]} on the second floor, and
${building["numberOfAptByFloor"]["thirdFloor"]} on the third floor`);

//( 4 ) console.log the name of the second tenant and the number of rooms he has in his apartment

console.log(
  `The second tenant is ${building["nameOfTenants"][1]}, he has ${building["numberOfRoomsAndRent"]["dan"][0]} rooms in his apartment`
);

//( 5 ) check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

if (
  building["numberOfRoomsAndRent"]["dan"][1] <
  building["numberOfRoomsAndRent"]["sarah"][1] +
    building["numberOfRoomsAndRent"]["david"][1]
) {
  building["numberOfRoomsAndRent"]["dan"][1] = 1200;
}

console.log(`Dan's rent is now ${building["numberOfRoomsAndRent"]["dan"][1]}`);

// Exercise 5 : Family

const familyObject = {
  father: "Papa",
  mother: "Mama",
  brother: "Hermano",
  sister: "Hermana",
  uncle: "Tio",
  grandfather: "Abuelo",
  bestfriend: "Kyle",
};

for (value in familyObject) {
  console.log(value);
}

for (value in familyObject) {
  console.log(familyObject[value]);
}

// Exercise 6 : Using a for loop, console.log “my name is Rudolf the raindeer"

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

let sentenceBlock;
for (value in details) {
  sentenceBlock += `${value} ${details[value]} `;
}
console.log(sentenceBlock);

// Exercise 7 : Secret Group, console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let name;
let firstLetter;
let acronym;

for (let i = 0; i < names.length; i++) {
  name = names[i];
  firstLetter = name.substring(0, 1);
  acronym += `${firstLetter}`;
}

console.log(acronym);
