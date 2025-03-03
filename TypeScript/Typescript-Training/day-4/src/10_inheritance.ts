class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Animal makes a sound");
    }
  }
  
  //  Dog class Animal se inherit kar rahi hai
  class Dog extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name);  //  Parent class ka constructor call karna zaroori hai
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Dog barks");  //  Overriding parent method
    }
  }
  
  const myDog = new Dog("Bruno", "Labrador");
  myDog.makeSound(); // Output: Dog barks
  console.log(myDog.name); // Output: Bruno
  