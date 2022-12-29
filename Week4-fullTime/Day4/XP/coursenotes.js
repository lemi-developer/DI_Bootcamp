/*
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

//instance of the class Rectangle
const square = new Rectangle(10, 10);

//calling the method
console.log(square.calcArea()); // 100

console.log(square)
//Rectangle {height: 10, width: 10}
//__proto__:
//  constructor: class Rectangle
//  calcArea: ƒ calcArea()
//__proto__: Object
*/

//Analyse the code below. Display the type of each rabbit and make them speak
/*
class Rabbit {
  constructor(type, line) {
    this.type = type;
    this.line = line;
  }
  speak() {
    console.log(`The ${this.type} rabbit says "${this.line}"`);
  }
}
let killerRabbit = new Rabbit("killer", "Hello World");
let blackRabbit = new Rabbit("black", "Hi");

console.log(killerRabbit);
killerRabbit.speak();
console.log(blackRabbit);
blackRabbit.speak();

*/

/*
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says "${line}"`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit);
killerRabbit.speak("Hello World");
console.log(blackRabbit);
blackRabbit.speak("Hi");

*/

/* 
adding aditional parameteter
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, noise) {
    super(name); // call the super class constructor and pass in the name parameter
    // Add a new property
    this.noise = noise;
  }

  speak() {
    console.log(`${this.name} barks.It says ${this.noise}`);
  }
}

let d = new Dog("Mitzie", "Wouaf");
console.log(d.name); // Mitzie
d.speak(); // Mitzie barks.It says Wouaf
console.log(d);
//Dog {name: "Mitzie", noise: "Wouaf"}
//__proto__: Animal
//  constructor: class Dog
//  speak: ƒ speak()
//__proto__: Object
