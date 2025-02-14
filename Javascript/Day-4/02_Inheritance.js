//Simple Prototype Inheritance ---------> Prototype based Interitance
let animal = {
    eats: true,
    sleep() {
      console.log("Sleeping...");
    }
  };
  
  // Dog's prototype object is Animal
  let dog = Object.create(animal);
  
  console.log(dog.eats); // true (Inherited from `animal`)
  dog.sleep(); // Sleeping...



//Constructor Function & Prototype Inheritance ------------->Classical Inheritance
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Dog class `Animal` se inherit karega
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);//invoking parent class constructor
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} barks!`);
    }
  }
  
  const dog1 = new Dog("Rocky", "Labrador");
  dog1.speak(); // Rocky makes a sound. (inherited from Animal)
  dog1.bark(); // Rocky barks!



//Multiple Inheritance via Mixins -----------> Mutliple Inheritance
let swimming = {
    swim() {
      console.log(`${this.name} is swimming!`);
    }
  };
  
  class Animal2 {
    constructor(name) {
      this.name = name;
    }
  }
  
  // `Object.assign()`
  Object.assign(Animal2.prototype, swimming);
  
  let fish = new Animal2("Nemo");
  fish.swim(); // Nemo is swimming!
  