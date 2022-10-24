const prompt = require("prompt-sync")({ sigint: true });

function onlyNumbers(str) {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}

//===============================================================================

let sentence = [];

let numberOfWords;

while (!onlyNumbers(numberOfWords)) {
  numberOfWords = prompt("How many words would you like in your sentence? ");
}

numberOfWords = parseInt(numberOfWords);

let word;

for (i = 0; i < numberOfWords; i++) {
  word = prompt("Type a word for a sentence: ");
  sentence.push(word);
}

let arrayOfStringLengths = [];
let longestStringInArray;
let space = " ";
let arrayOfGapsOfWords = [];

for (i = 0; i < numberOfWords; i++) {
  arrayOfStringLengths.push(sentence[i].length);
  longestStringInArray = Math.max(...arrayOfStringLengths);
}

for (i = 0; i < numberOfWords; i++) {
  gapOfWord = space.repeat(longestStringInArray - arrayOfStringLengths[i] + 1);
  arrayOfGapsOfWords.push(gapOfWord.substring(0, gapOfWord.length - 1));
}

console.log(arrayOfGapsOfWords);
let star = "*";
let starLine = star.repeat(longestStringInArray + 4);

console.log(starLine);
for (i = 0; i < numberOfWords; i++) {
  console.log(`* ${sentence[i]}${arrayOfGapsOfWords[i]} *`);
}
console.log(starLine);
