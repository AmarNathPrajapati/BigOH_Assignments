class Vehicle {
    drive() {
      console.log("Vehicle is moving...");
    }
  }
  
  class Car1 extends Vehicle {
    drive() {
      console.log("Car is driving at 80 km/h");
    }
  }
  
  class Bike extends Vehicle {
    drive() {
      console.log("Bike is moving at 60 km/h");
    }
  }
  
  const myCar1 = new Car1();
  const myBike = new Bike();
  
  myCar1.drive(); // Output: Car is driving at 80 km/h
  myBike.drive(); // Output: Bike is moving at 60 km/h
  