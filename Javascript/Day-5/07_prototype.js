let person = {
    greet: function () {
        console.log("Hello!");
    }
};

let user = Object.create(person);  // user object inherits from person

user.greet();  // "Hello!"  (Prototype se inherited)

//function prototype
function Person1(name) {
    this.name = name;
}




console.log(Person1.prototype);  // {} (By default empty object)
//prototype based inheritance
function Person(name) {
    this.name = name;
}

// Adding a method to prototype
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

let user1 = new Person("Rahul");
let user2 = new Person("Ankit");

user1.sayHello();  // "Hello, my name is Rahul"
user2.sayHello();  // "Hello, my name is Ankit"





//Prototype Chain (Parent-Child Inheritance)
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function () {
    console.log("Animal sound...");
};

function Dog(name, breed) {
    Animal.call(this, name);  // Call parent constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Inheriting from Animal
Dog.prototype.constructor = Dog; // Resetting constructor

Dog.prototype.bark = function () {
    console.log("Woof! Woof!");
};

let myDog = new Dog("Bruno", "Labrador");
myDog.makeSound();  // "Animal sound..." (Inherited)
myDog.bark();       // "Woof! Woof!"




//Overriding Prototype Methods
function Car(name) {
    this.name = name;
}

Car.prototype.drive = function () {
    console.log("Driving...");
};

let myCar = new Car("Tesla");

// Overriding drive method for myCar instance only
myCar.drive = function () {
    console.log("Tesla is self-driving...");
};

myCar.drive();  // "Tesla is self-driving..."
