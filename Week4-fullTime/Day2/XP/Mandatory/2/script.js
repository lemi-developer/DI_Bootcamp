/*
Exercise 2 : Kg and grams
Instructions

Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

    First, use function declaration and invoke it.
    Then, use function expression and invoke it.
    Write in a one line comment, the difference between function declaration and function expression.
    Finally, use a one line arrow function and invoke it.
*/

function kgConverter(kilograms) {
  return kilograms * 1000;
}

console.log(kgConverter(12));

const convertToGrams = function (kilograms) {
  return kilograms * 1000;
};

console.log(convertToGrams(0.4));

//the function in the function expression is nameless, called "anonymous function", and it is unhoisted, so it can only be referenced after its creation

const kgToGrams = (x) => x * 1000;

console.log(kgToGrams(14));
