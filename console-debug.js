const prompt = require("prompt-sync")({ sigint: true });

/*
console.log(
  "Welcome to this awesome software that can tell you your own name!"
);
let name = prompt("What is your name?");
console.log(`Your name is ${name}! see how cool!`);

/*

let x=prompt("Say Number");

if ((x%2)=0) {
console.log("x is an even number") } else { console.log("x is an odd number")};
*/
// console.log("Welcome to this software that can tell odd from even Numbers!");
// let x = prompt("Give a valid non-decimal Number X: ");

// switch (x % 2) {
//   case 0:
//     console.log("X is an even number");
//     break;
//   case 1:
//     console.log("X is an odd number");
//     break;
//   default:
//     console.log("Please enter a non-decimal Number");
// }

/*
if ((x%2)==0) {
    console.log("x is an even number")
} else{
    console.log("x is an odd number")
};
*/

//_____________________________________________case users.length >= 4

/*
const users = ["Lea123", "Princess45", "helooo@000", "123"];

switch (users.length) {
  case 0:
    console.log("no one is online");
    break;
  case 1:
    console.log(`${users[0]} is online`);
    break;
  case 2:
    console.log(`${users[0]}, ${users[1]} are online`);
    break;
  case 3:
    console.log(`${users[0]}, ${users[1]} and 1 more online`);
    break;
  default:
    console.log(
      `${users[0]}, ${users[1]}, and ${users.length - 2} more are online`
    );
}

*/

/*
const answer = prompt("what fruit do you want ?").toLowerCase();
console.log(answer);
console.log("answer");

*/

/*
let sentence = "This dinner is not that bad! You cook well";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

let sentenceStart = sentence.substring(0, wordNot);
let sentenceEnd = sentence.substring(wordBad + 3); // goes to the end

if (wordBad > wordNot == true) {
  console.log(`${sentenceStart}good${sentenceEnd}`);
} else {
  console.log("The movie is bad");
}

*/

/*
for (let i = 0; i < 16; i++) {
  if (i % 2 == !true) {
    console.log(`${i} is an even number`);
  } else {
    console.log(`${i} is an odd number`);
  }
}

*/

// MANDATORY EXERCISE

//PART I

/*
const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

console.log(people);
*/

//PART 2

/*

const people = ["Greg", "Mary", "Devon", "James"];

people.splice(3, 1, "Jason");

console.log(people);

*/

//PART 3

/*
const people = ["Greg", "Mary", "Devon", "James"];

people.push("Tuvish");

console.log(people);
*/

//PART 4

/*
const people = ["Greg", "Mary", "Devon", "James"];

console.log(people.indexOf("Mary"));

*/

//PART I
/*
const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people.splice(3, 1, "Jason");

people.push("YourName");

console.log(people.indexOf("Mary"));

people.slice(0);

console.log(people.indexOf("Foo")); //why really -1?

let last = people[people.length - 1];

console.log(last); // the length of the array is always the index of the last array element plus one

console.log(people);

//Part II - Loops
/*
for (let i = 0; i < people.length; i++) {
  if (people[i] != "Jason") {
    console.log(people[i]);
  } else {
    break;
  }
}


//for of (for in is a similar method for objects)

/*
for (let person of people) {
  console.log(person); // person will keep receiving the attribution of eache array element
}
*/

//__________________________________
/*
let names = ["john", "sarah", 23, "Rudolf", 34];

/*
let memory = names[1];
let memory2 = memory.substring(0, 1);
let memory3 = `${memory2.toUpperCase()}${memory.substring(1)}`;
console.log(memory3);


for (let i = 0; i < names.length; i++) {
  let person = names[i];
  if (typeof person !== "string") {
    continue; // breaks one iteration in the loop, and continues with the next iteration
  } else {
    let firstLetter = person.substring(0, 1);
    let fixedName = `${firstLetter.toUpperCase()}${person.substring(1)}`; //we dont really need to check 
    console.log(fixedName);
  }
}

/*

let str = "Apple, Banana, Kiwi";
let part = str.substring(0, 1);

console.log(part);

*/
/* EXERCISE 2
Instructions

    Create an array called colors where the value is a list of your five favorite colors.
    Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
    Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
    Hint : create an array of suffixes to do the Bonus


const colors = ["blue", "red", "black", "orange", "purple"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}
*/

/*
const userNumber = prompt("Please Enter a Valid Number");
if (typeof userNumber !== "Number") {
  prompt("Invalid Entry. Please Enter a Valid Number");
} else {
  while (userNumber < 10) {
    prompt("You have entered a valid Number. Now enter a higher Number");
  }
}


const userNumber = prompt("Please Enter a Valid Number");

console.log(Number(userNumber));


while (typeof userNumber != "Number") {
  prompt("Invalid Entry. Please Enter a Valid Number");
}
console.log(userNumber);

/*
while (userNumber<10)
{
  console.log(userNumber);
}
*/

//_______________________________________
/*
Review about objects

    Copy and paste the above object to your Javascript file.

    Console.log the number of floors in the building.

    Console.log how many apartments are on the floors 1 and 3.

    Console.log the name of the second tenant and the number of rooms he has in his apartment.

    Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
*/
/*
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

//(1)

console.log(`${building["numberOfFloors"]} floors in the building`);

//(2)

console.log(`${building["numberOfAptByFloor"]["firstFloor"]} on the first floor, 
${building["numberOfAptByFloor"]["secondFloor"]} on the second floor, and
${building["numberOfAptByFloor"]["thirdFloor"]} on the third floor`);

//(3)

console.log(
  `The second tenant is ${building["nameOfTenants"][1]}, he has ${building["numberOfRoomsAndRent"]["dan"][0]} rooms in his apartment`
);

//(4)

if (
  building["numberOfRoomsAndRent"]["dan"][1] <
  building["numberOfRoomsAndRent"]["sarah"][1] +
    building["numberOfRoomsAndRent"]["david"][1]
) {
  building["numberOfRoomsAndRent"]["dan"][1] = 1200;
}
console.log(`Dan's rent is now ${building["numberOfRoomsAndRent"]["dan"][1]}`);
*/

//_________________________________

/* EXERCISE 5

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
*/

/* EXERCISE 6
 

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
/*let sentenceBlock;
for (value in details) {
  sentenceBlock += `${value} ${details[value]} `;
}
console.log(sentenceBlock);

//______________________-EX 7
/*


    A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
    Hint: a string is an array of letters
    Console.log the name of their secret society. The output should be “ABJKPS”*/
/*
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

/*


for (let i of names) {
 




/*
for (value in details) {
  sentenceBlock += `${value} ${details[value]} `;
}
console.log(sentenceBlock);

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

let sentenceStart = sentence.substring(0, wordNot);
let sentenceEnd = sentence.substring(wordBad + 3); // goes to the end

if (wordBad > wordNot == true) {
  console.log(`${sentenceStart}good${sentenceEnd}`);
} else {
  console.log("The movie is bad");
}
*/
/*
let rewardMsg;
let reward;

function checkQuantityOrder(quantity, clientName) {
  let reward;

  switch (quantity) {
    case quantity >= 5 && quantity < 10:
      reward = "bouquet of flowers!";
      break;
    case quantity >= 10 && quantity < 20:
      reward = "bottle of wine!";
      break;
    case quantity >= 20:
      reward = "trip to Paris!";
      break;
    default:
      rewardMsg = "Thank you for shopping with us!";
  }

  rewardMsg = `Dear ${clientName}, you won a ${reward}`;
  return rewardMsg;
}

console.log(checkQuantityOrder(8, "John"));
console.log(checkQuantityOrder(30, "David"));

*/

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
