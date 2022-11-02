var employee = {
  // Object we want to destructure
  firstname: "Jon",
  lastname: "Snow",
  dateofbirth: "1990",
};

// Destructuring the object into variables without
// assigning default values
var { firstname, lastname, country } = employee;
console.log("Without setting default values");
console.log(firstname, lastname, country);

// Destructuring the object into variables by
// assigning default values
var {
  firstname = "default firstname",
  lastname = "default lastname",
  country = "default country",
} = employee;
console.log("\n After setting default values");
console.log(firstname, lastname, country);
