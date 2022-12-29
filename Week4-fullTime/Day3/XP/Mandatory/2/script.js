//Exercise 2 : Employees

const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

/*
Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :

const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
*/

const names = [];

users.forEach((item, index) => names.push(`Hello ${users[index].firstName}`));

console.log(names);

//const welcomeStudents = users.map((x) => post.id);

/*
2. Using the filter() method, create a new array, containing only the Full Stack Residents.
*/

let newArray;
for (i = 0; i < users.length; i++) {
  newArray = users.filter((x) => x.role == "Full Stack Resident");
}
console.log(newArray);
/*

3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
*/
//we continue with the "newArray" we aqcuired from before

const lastNamesArray = [];

newArray.forEach((item, index) => lastNamesArray.push(users[index].lastName));

console.log(lastNamesArray);
