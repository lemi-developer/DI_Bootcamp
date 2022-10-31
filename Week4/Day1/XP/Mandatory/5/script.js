const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

let sentence = colors.forEach((item, index) => {
  let order;
  switch (index) {
    case 0:
      order = ordinal[1];
      break;
    case 1:
      order = ordinal[2];
      break;
    case 2:
      order = ordinal[3];
      break;
    default:
      order = ordinal[0];
  }
  console.log(`${index + 1}${order} choice is ${item}`);
});
