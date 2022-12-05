//creating a promise

function isString(arg) {
  return typeof arg === "string";
}

function makeAllCaps(words) {
  const prom = new Promise((resolve, reject) => {
    if (words.every(isString)) {
      resolve("OK!");
    } else {
      reject("Sorry, all values must be strings");
    }
  });
  prom.then(console.log).catch(console.error);
}

//resolving a promise

makeAllCaps(["hello", "hi"]);
