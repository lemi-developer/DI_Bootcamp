//Part I
/*
function makeJuice(sizeOfBeverage) {
  function addIngredients(ingredient1, ingredient2, ingredient3) {
    return console.log(
      `The client wants a ${sizeOfBeverage} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`
    );
  }
  addIngredients("orange", "lemon", "sugar");
}

makeJuice("large");
*/
//Part II

function makeJuice(sizeOfBeverage) {
  let ingredients = [];
  const firstPart = `The client wants a ${sizeOfBeverage} juice, containing `;
  let secondPart = "";

  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1);
    ingredients.push(ingredient2);
    ingredients.push(ingredient3);
  }

  addIngredients("orange", "lemon", "sugar");
  addIngredients("orange", "lemon", "sugar");

  function displayJuice(ingredients) {
    const isLastElement = (array, index) => index === array.length - 1;
    ingredients.forEach(
      (igredient, index) =>
        (secondPart += `${igredient}${
          isLastElement(ingredients, index) ? "." : ", "
        }`)
    );
    const sentence = firstPart + secondPart;
    console.log(sentence);

    const element = document.createElement("p");
    element.innerText = sentence;
    document.body.appendChild(element);
  }
  displayJuice(ingredients);
}

makeJuice("large");
