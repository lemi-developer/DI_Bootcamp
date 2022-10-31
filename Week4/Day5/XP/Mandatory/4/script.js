const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let sentence;
let logAll = colors.forEach((item, index) => {
  sentence = `#${index + 1} choice is ${item}`;
  console.log(sentence);
});

//=============================================================================================

let violetCheck = colors.some((color) => color == "Violet");

console.log(violetCheck);

/*
let violetCheck = colors.some((color) => color == "Violet");

console.log(violetCheck);*/
