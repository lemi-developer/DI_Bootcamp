let isString = (x) => {
  console.log(typeof x);
  console.log(typeof x == "string" ? true : false);
};

isString("hello");
//true
isString([1, 2, 4, 0]);
//false
