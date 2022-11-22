/*Instructions

Part I

    Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is 
    an array which is an inventory of cars (see the array of objects below)
    The function should
        loop through the array of object and return the first car with the name “Honda”.
        then, return a string in the format This is a {car_make} {car_model} from {car_year}.
        Hint : Find an array method that returns the value of the first element in an array that pass a test.
    Use the cars inventory below:*/

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

let firstCar;

/*
for (i = 0; i < inventory.length; i++) {
  if (inventory[i].car_make == "Honda") {
    firstCar = inventory[i];
  }
}*/

firstCar = inventory.find(({ car_make }) => car_make == "Honda"); // with this notation, we must write the actual name of the object key "car_make" and not simply "x"

console.log(firstCar);
console.log(
  `This is a ${firstCar.car_make} ${firstCar.car_model} from ${firstCar.car_year}`
);
/*
Part II

    Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
    the function should return an inventory that is sorted by car_year, ascending.
    Hint : Check out this tutorial on the sort method

    Use the cars inventory below:

    const inventory = [
      { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
      { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
      { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
      { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
      { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
    ];
    
    The output should be*/
/*
    [
      { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
      { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
      { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
      { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
      { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    ];
*/

const sortedByYear = inventory.sort(function (previous, next) {
  return previous.car_year - next.car_year;
});

console.log(sortedByYear);
