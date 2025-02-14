class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Dog class inherits Animal
  class Dog extends Animal {
    bark() {
      console.log(`${this.name} barks!`);
    }
  }
  
  // Cat class inherits Animal
  class Cat extends Animal {
    meow() {
      console.log(`${this.name} meows!`);
    }
  }
  
  const dog = new Dog("Rocky");
  dog.speak(); // Rocky makes a sound.
  dog.bark(); // Rocky barks!
  
  const cat = new Cat("Kitty");
  cat.speak(); // Kitty makes a sound.
  cat.meow(); // Kitty meows!
  