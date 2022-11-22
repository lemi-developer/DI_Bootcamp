//Exercise 1

const famousPeople = [
  {
    name: "Angelina Jolie",
    job: "actor",
    age: 80,
  },
  {
    name: "Georges Clooney",
    job: "actor",
    age: 2,
  },
  {
    name: "Paris Hilton",
    job: "actor",
    age: 5,
  },
  {
    name: "Kayne West",
    job: "singer",
    age: 16,
  },
  {
    name: "Britney Spears",
    job: "singer",
    age: 100,
  },
];
/*
Using the array above, use the map method, to create a new array that contains only the name of the people
Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in 
a paragraph, appended to a div with an id "container")
*/
const onlyNames = [];

famousPeople.map((x) => {
  onlyNames.push(x.name);
});
console.log(onlyNames);

const onlyNameAndJob = [];

famousPeople.map((x) => {
  delete x.age;
  onlyNameAndJob.push(x);
});

console.log(onlyNameAndJob);
/*
Exercise 2

const studentsFootball = [
 {name: 'Rich', score: 33}, 
 {name: 'Peter', score: 55}
];

Create a new array of objects, containing the name, score and isAboveAverage if the students has a score bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator
Result

const studentsNew = [
    {name: 'Rich', score: 33, isAboveAverage : false}, 
    {name: 'Peter', score: 55, isAboveAverage : true}
];

*/
