class Dog {
  constructor(name) {
    this.name = name;
  }
}
//Analyze the options below. Which constructor will successfully extend the Dog class?
// 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
}

// 2  THIS WILL CORRECTLY EXTEND OUR CLASS
class Labrador extends Dog {
  constructor(name, size) {
    // old and new parameters are called
    super(name); // the original constructor is called  with the "super" label
    this.size = size; // the additional parameter is established in the extending constructor
  }
}

// 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
}

// 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}
