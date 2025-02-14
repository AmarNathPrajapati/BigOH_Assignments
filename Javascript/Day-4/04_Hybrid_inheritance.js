class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Mixin
  let flying = {
    fly() {
      console.log(`${this.name} is flying.`);
    }
  };
  
  // Bird class inherits Animal
  class Bird extends Animal {
    constructor(name, color) {
      super(name);
      this.color = color;
    }
  }
  
  // Apply mixin
  Object.assign(Bird.prototype, flying);
  
  const parrot = new Bird("Parrot", "Green");
  parrot.speak(); // Parrot makes a sound.
  parrot.fly(); // Parrot is flying.
  