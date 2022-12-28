let number = 4;

function testNum(number) {}

const proms = new Promise((resolve, reject) => {
  if (number < 10) {
    resolve("it is smaller than 10");
  } else {
    reject("the condition failed");
  }
});

proms
  .then((result) => {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
