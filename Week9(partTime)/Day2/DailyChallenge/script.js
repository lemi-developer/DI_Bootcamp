let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

//Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = groceries.fruits.forEach((x) => {
  console.log(x);
});

/* 
Create another arrow function named cloneGroceries.

    In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
        Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
    In the function, create a variable named shopping that is equal to the groceries variable.
        Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
        Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

Invoke the cloneGroceries function.

*/

const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  console.log(user);
  let shopping = groceries;
  groceries.totalPrice = "35$";
  console.log(shopping);
  groceries.other.payed = false;
  console.log(shopping);
};

// the log for user says user = "John" since the change was performed after client was attributed to the user, and changes in value do not happen at the memory level (Pass by value)

// the changes to the object will immediately be attributed to shopping since its become sourced at the memory place of the object (Pass by reference)

cloneGroceries();
