// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// let n = 123456789; //n must be a natural number

// function sumOfDigits() {
//   let sum = 0;
//   let digits = ("" + n).split("");
//   digits.map(Number);

//   console.log(digits);
//   console.log(digits.length);

// do {
//   for (i = 0; i < digits.length; i++) {
//     sum = sum + digits[i];
//     console.log(sum);
//   }
// } while (digits.length >= 1);

// console.log(sum);
//   return sum;
// }

// sumOfDigits();
/*
function calcDigit(num) {
  let arr = new String(num).split("");
  let ret = 0;
  for (i in arr) {
    ret = ret + Number(arr[i]);
  }
  if (ret < 10) {
    return ret;
  }
  return calcDigit(ret);
}
console.log(calcDigit(493193));
*/
/*

let numbers = [1, 2, 3];

function double() {
  console.log(
    numbers.forEach((item) => {
      item * 2;
    })
  );
}

double();

let multiplyNumbers = (arr) => {
    let new_arr = [];
    for (num of arr) new_arr.push(num*2);
    return new_arr
}

*/
/*
const array = [0, 1, 3, 5, 5, 2, 8];
function filterBiggerThanThree() {
  let newArray = [];
  array.forEach((item) => {
    if (item > 3) {
      newArray.push(item);
    }
  });
  console.log(newArray);
}

filterBiggerThanThree();.
*/
/*
const names = ["tim", "john", "sandy", "sara"];

function filterWord() {
  const result = names.filter((item) => item.indexOf("sa") == 0);

  console.log(result);
}

filterWord();
*/
/*
let users = [
  { id: 1, name: "Tim", email: "tim@hotmail.com", password: "123456" },
  { id: 2, name: "Jhon", email: "john@gmail.com", password: "1234567" },
  { id: 3, name: "Sara", email: "sara@gmail.com", password: "1234568" },
];
/*
let password;
users.forEach((item) => {
  if (item.email == "sara@gmail.com") {
    password = item.password;
  }
});
console.log(password);

let emailArray = [];
for (let u of users) {
  emailArray.push(u.email);
}

console.log(emailArray);

let filteredEmailArray = emailArray.filter(
  (item) => item.indexOf("gmail.com") > -1
);

console.log(filteredEmailArray);
*/
/*
let findSara = users1.find((item) => item.email == 'sara@gmail.com');

findSara.password = '888888';

console.log(findSara);
*/
/*
function sumAll(numbers) {
  let total = 0;
  for (num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumAll([1, 5, 10, 30]));
*/
/*
let account = [
  { dollars: 2 },
  { dollars: 5 },
  { dollars: 10 },
  { dollars: 100 },
];

let total = account.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.dollars;
}, 0);

console.log(total);
*/

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function sumOfNumbers(num) {
  num = String(num).split("");
  while (num.length > 1) {
    num = String(
      num.reduce((total, item) => parseInt(total) + parseInt(item))
    ).split("");
  }
  num = parseInt(num.join(""));
  return num;
}

console.log(sumOfNumbers(13));
