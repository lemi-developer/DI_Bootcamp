// Exercise 6 : Challenges

//Evaluate these (ie True or False)

console.log([2] === [2]);
console.log({} === {});

// they are both false, for they may have equal value, but are stored at different places in the memory

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number);
console.log(object3.number);
console.log(object4.number);

/*
What is, for each object below, the value of the property number and why? 
object2 and object3 are attached to object, accessing its place in the memory and not merely taking up 5 as 
the value of "number", which is the case with object4.
object2 and object3 are equal to 4
object4 is equal to 5
*/

/*
    Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

    Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes 
    a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

    Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound 
    method that “moos” her information.
    For example: Moooo I'm a cow, named Lily and I'm brown and white
*/

class Animal {
  constructor(name1, type, color) {
    this.name1 = name1;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name1, type, color, soundByAnimal) {
    super(name1, type, color); // call the super class constructor and pass in the name parameter
    // Add a new property
    this.soundByAnimal = soundByAnimal;
  }

  sound() {
    console.log(
      `Details of the animal: ${name1}, a ${type}, of ${color} appearance, and it says ${this.soundByAnimal}`
    );
  }
}

let farmerCow = new Mamal("Lilly", "Cow", "brown and white", "soundByAnimal");

console.log(farmerCow);
farmerCow.sound();

// name1 is not defined????
