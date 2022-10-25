//const prompt = require("prompt-sync")({ sigint: true });

function onlyNumbers(str) {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}

//============================================================

//First Part

function playTheGame() {
  let wantToPlay = confirm("Would you like to play a game? ");

  let userNumber;

  if (wantToPlay == true) {
    userNumber = prompt("Choose a number from 0 to 10 ");
  } else {
    alert("No problem, Goodbye");
  }

  let computerNumber;

  if (!onlyNumbers(userNumber)) {
    alert("Sorry, not a number. Goodbye ");
  } else if (userNumber < 0 || userNumber > 10) {
    alert("Sorry, it's not a good number. Goodbye ");
  } else {
    computerNumber = Math.floor(Math.random() * 10);
    compareNumbers(userNumber, computerNumber);
  }

  return;
}

//Second Part

function compareNumbers(userNumber, computerNumber) {
  while (userNumber != computerNumber) {
    if (userNumber > computerNumber) {
      alert(`Your number is bigger than the computer's, guess again! `);
    } else if (userNumber < computerNumber) {
      alert(`Your number is smaller than the computer's, guess again! `);
    }
    userNumber = prompt("Choose a number from 0 to 10 (while) ");
  }
  alert(`YOU WIN `);
}
