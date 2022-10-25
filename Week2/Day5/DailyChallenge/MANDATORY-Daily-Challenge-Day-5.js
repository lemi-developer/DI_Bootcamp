const prompt = require("prompt-sync")();

//console.log the lyrics of our own 99 Bottles of Beer song. Prompt the user for a number to begin counting down bottles.

function constructSongOfBottle() {
  let bottleNumber = prompt("How many bottles? ");

  if (bottleNumber > 1) {
    for (i = 1; i < bottleNumber; i++) {
      console.log(`
  ${bottleNumber} bottles of beer on the wall,
  ${bottleNumber} bottles of beer.
  Take ${i} down, pass them around,`);

      bottleNumber = bottleNumber - i;

      console.log(`
  ${bottleNumber} bottles of beer on the wall!`);
    }
  }

  if (bottleNumber > 1) {
    console.log(`
  ${bottleNumber} bottles of beer on the wall
  ${bottleNumber} bottles of beer
  Take ${bottleNumber} down, pass them around!
  
  No bottles of beer on the wall!`);

    bottleNumber = 0;
  }

  if (bottleNumber == 1) {
    console.log(
      `
  One bottle of beer on the wall,
  One bottle of beer.
  Take one down, pass it around,
                
  No bottles of beer on the wall!
  
  `
    );
  }
}

constructSongOfBottle();
