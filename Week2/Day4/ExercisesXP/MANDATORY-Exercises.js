//Exercise 1 : Information

//Part I : a function with no parameters:

function infoAboutMe() {
  return console.log("My name is Dave i am 30 and i love to surf");
}

// we call the function:
infoAboutMe();

// Part II : a function with three parameters:

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  return console.log(
    `My name is ${personName} i am ${personAge} and my favorite color is ${personFavoriteColor}`
  );
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//==================================================================

//Exercise 2 : Tips

function calculateTip() {
  let tip;

  let cost = prompt("How much did the bill cost?");

  cost = parseInt(cost);

  if (cost < 50) {
    tip = Math.floor(cost * 0.2);
  } else if (cost > 50 && cost < 200) {
    tip = Math.floor(cost * 0.15);
  } else {
    tip = Math.floor(cost * 0.1);
  }

  return console.log(`The total cost bill plus tip is ${cost + tip}`);
}

calculateTip();

//==================================================================

// Exercise 3 : Find the numbers divisible by 23

function isDivisible() {
  let divisables = [];

  for (let i = 1; i < 501; i++) {
    i % 23 == 0 ? divisables.push(i) : false;
  }

  let sumOfAll = divisables.reduce((x, y) => x + y, 0);

  return console.log(
    `All the numbers, from 1 to 500, divisible by 23, are given in the array ${divisables} and their total sum is ${sumOfAll}`
  );
}

isDivisible();

//Bonus: Add a parameter divisor to the function

function isDivisibleByDivisor(divisor) {
  let divisables = [];

  for (let i = 1; i < 501; i++) {
    i % divisor == 0 ? divisables.push(i) : false;
  }

  let sumOfAll = divisables.reduce((x, y) => x + y, 0);

  return console.log(
    `All the numbers, from 1 to 500, divisible by ${divisor}, are given in the sequence: ${divisables} and their total sum is ${sumOfAll}`
  );
}

isDivisibleByDivisor(24);
isDivisibleByDivisor(101);

//==================================================================

//Exercise 4 : Shopping List

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

/*Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. 
It means that you have 1 banana, 1 orange and 1 apple in your cart.
*/

function myBill() {
  for (const item of shoppingList) {
    const quantityInStock = stock[item];
    if (quantityInStock > 0) {
      const price = prices[item];
      console.log(
        "the price of",
        item,
        " is",
        price,
        "and we have this many in stock:",
        stock[item]
      );
      stock[item] = stock[item] - 1;
    } else {
      console.log("there is no", item, "in stock");
    }
  }
  return;
}

myBill();

//==================================================================

//Exercise 5 : What’s in my wallet ?

function changeEnough(itemPrice, amountOfChange) {
  // amountofChange [quarter, dime, nickel, penny];

  let amountOfMoney =
    amountOfChange[0] * 0.25 +
    amountOfChange[1] * 0.1 +
    amountOfChange[2] * 0.05 +
    amountOfChange[3] * 0.01;

  return console.log(amountOfMoney >= itemPrice ? true : false);
}

changeEnough(4.25, [25, 20, 5, 0]);
changeEnough(14.11, [2, 100, 0, 0]);
changeEnough(0.75, [0, 0, 20, 5]);

//==================================================================

//Exercise 6 : Vacations Costs

// ( 1 ) Hotel Cost

// we want to identify answers which may inlude non-numbers so that the program will reject them

function onlyNumbers(str) {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}

// a function to make sure the prompted data receives only numbers

function hotelCost() {
  let nightsAnswer;

  while (!onlyNumbers(nightsAnswer)) {
    nightsAnswer = prompt(
      "For how many nights are you staying? (Answer in numbers only) "
    );
  }

  const numberOfNights = Number(nightsAnswer);
  let hotelBill = numberOfNights * 140;
  return hotelBill;
}

//hotelCost();

// ( 2 ) Plane Ride Cost

// we do not want the input to include numbers so we use regex to exclude that possibility

function includesNumbers(str) {
  const regex = new RegExp(/\d/);
  return regex.test(str);
}

function planeRideCost() {
  let flightDestination = "";

  while (flightDestination == "" || includesNumbers(flightDestination)) {
    flightDestination = prompt("Where would you like to fly to? ");
  }

  let flightCost;

  if (flightDestination == "London" || flightDestination == "london") {
    flightCost = 183;
  } else if (flightDestination == "Paris" || flightDestination == "paris") {
    flightCost = 220;
  } else {
    flightCost = 300;
  }

  return flightCost;
}

//planeRideCost();

// ( 3 ) Rental Car Cost

/*  we activate our only-numbers check once more

function onlyNumbers(str) {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}

*/

function rentalCarCost() {
  let rentDays;

  while (!onlyNumbers(rentDays)) {
    rentDays = prompt(
      "For how many days are you renting the car? (Answer in numbers only) "
    );
  }

  let rentalCost;

  if (rentDays > 10) {
    rentalCost = rentDays * 40 - rentDays * 2;
  } else {
    rentalCost = rentDays * 40;
  }

  return rentalCost;
}

//rentalCarCost();

// ( 4 ) Adding all three costs together

function totalVacationCost() {
  const hotelTotal = hotelCost();
  const planeTotal = planeRideCost();
  const carTotal = rentalCarCost();

  let totalCostMsg = `The hotel cost: ${hotelTotal}; the plane ticket cost: ${planeTotal}; the car rental cost: ${carTotal};`;

  return totalCostMsg;
}

// ( 5 )

console.log(totalVacationCost());

// ( 6 ) Bonus

//=========================================================================

// Daily challenge: Words in the stars
