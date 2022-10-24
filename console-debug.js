/*
//=================================================================

function whichTextToPrompt(question) {
  let text;
  switch (question) {
    case 1:
      text = "For how many nights are you staying? (Answer in numbers only) ";
      break;
    case 2:
      text = "Where would you like to fly to? ";
      break;
    case 3:
      text =
        "For how many days are you renting the car? (Answer in numbers only) ";
      break;
  }
  let calculateCost = prompt(text);
  return calculateCost;
}

//=================================================================

