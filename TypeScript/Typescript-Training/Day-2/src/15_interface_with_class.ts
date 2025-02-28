//interface with class
interface Car {
    brand: string;
    speed: number;
    accelerate(speed: number): void;
  }
  
  class Tesla implements Car {
    brand: string;
    speed: number;
  
    constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
    }
  
    accelerate(speed: number) {
      this.speed += speed;
      console.log(`New Speed: ${this.speed}`);
    }
  }
  
  const myCar = new Tesla("Tesla Model 3", 100);
  myCar.accelerate(50); 
  
//multiple interface with class
interface Animal {
    name: string;
    sound(): void;
  }
  
  interface Pet {
    owner: string;
  }
  
  class Dog implements Animal, Pet {
    name: string;
    owner: string;
  
    constructor(name: string, owner: string) {
      this.name = name;
      this.owner = owner;
    }
  
    sound() {
      console.log("Woof! Woof!");
    }
  }
  
  const myPet = new Dog("Bruno", "Amit");
  console.log(myPet.name);  
  console.log(myPet.owner); 
  myPet.sound(); 
  

