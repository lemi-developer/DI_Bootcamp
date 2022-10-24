function onlyNumbers(str) {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

let confirmToPlay;

let numberGuess;

let numberActual;

function playTheGame() {
  confirm("Would you like to play a game?");

  confirmToPlay
    ? (numberGuess = prompt("Enter a number from 0 to 10"))
    : alert("No problem, Goodbye");

  if (numberGuess !== Number(numberGuess)) {
    alert("Sorry not a Number, Goodbye");
  } else if (numberGuess < 0 || numberGuess > 10) {
    alert("Sorry not a good number, Goodbye");
  } else {
    numberActual = Math.floor(Math.random() * 10);
  }
}
