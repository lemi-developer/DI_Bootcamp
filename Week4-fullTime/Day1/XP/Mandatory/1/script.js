// #1

function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:

funcOne();

// #1.2 What will happen if the variable is declared
// with const instead of let ? "a" will not change and out console will display an error
//#2

const a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree();
funcTwo();
funcThree();
// #2.2 What will happen if the variable is declared
// with const instead of let ? "a" will remain unchaged and equal to 0, and the console will display an error at funcTwo()

//#3
function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// using the window object, "a" from funcFive() will be displayed successfully

// #3.1 - run in the console:
funcFour();
funcFive();

//#4
const a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix();
// #4.2 What will happen if the variable is declared
// with const instead of let ? remains the same as with "let" as the variable is changed inside the function

//#5

const a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ? remains the same as with "let" as the variable is changed inside the function

//==================================================

//ANOTHER SOLUTION

/*
Exercise 1 : Scope
Instructions
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file. Explain your predictions.
*/

// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne();

// a will be displayed as 3, since it was declared as "let" inside the function, and changed inside the function

// #1.2 What will happen if the variable is declared
// with const instead of let ?

// no alert will be displayed, as the value of a appears to have been corrupted

//#2
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // this will display an alert where a = 0
funcTwo(); // a will become equal to 5
funcThree(); // this next display will have a = 5

// #2.2 What will happen if the variable is declared
// with const instead of let ? a will be displayed as zero at first, after that, the alert will no longer be displayed

//#3
function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive();

//a will be displayed as equal to "hello"

/*
The window object is a global object that has the properties pertaining to the
current DOM document, which is what's in the tab of a browser. The document
property of the window object has the DOM document and associated nodes and
methods that we can use to manipulate the DOM nodes and listen to events for
each node.
*/

//#4
let a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix();
// a will be displayed as "test" since funcSix is capable of changing the value of a as it is being run

// #4.2 What will happen if the variable is declared
// with const instead of let ? nothing will be displayed, as the value will become corrupted

//#5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// each according to their scope: inside the if block a=5, outside a=2

// #5.2 What will happen if the variable is declared
// with const instead of let ? only the scope outside of if will be displayed
