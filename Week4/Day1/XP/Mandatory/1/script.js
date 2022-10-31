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
