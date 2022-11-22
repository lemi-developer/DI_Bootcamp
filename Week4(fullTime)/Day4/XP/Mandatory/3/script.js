/*
Using this object 
*/
const users = { user1: 18273, user2: 92833, user3: 90315 };

/*
    Using methods taught in class, turn the users object into an array:
    Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
    FYI : The number is their ID number.

    Modify the outcome of part 1, by multipling the user’s ID by 2.
    Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
*/

let arrayForm = Object.entries(users);

console.log(arrayForm);

/*
WE CAN DO IT USING "FOR"

*/

let subArrayElement;
for (i = 0; i < arrayForm.length; i++) {
  for (j = 0; j < arrayForm[i].length; j++)
    if (typeof arrayForm[i][j] === "number") {
      arrayForm[i][j] = arrayForm[i][j] * 2;
    }
}

console.log(arrayForm);
