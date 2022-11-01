const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

let epicString = epic.reduce(
  (accumulateur, valeurCourante) => accumulateur + ` ` + valeurCourante
);

console.log(epicString);
