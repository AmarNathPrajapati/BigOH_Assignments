abstract class Shape {
    abstract getArea(): number;  //  Ye method har subclass me implement karna padega
  
    showInfo() {
      console.log("This is a shape");
    }
  }
  
  //  Inheriting abstract class
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  // const shape = new Shape(); //  Error: Abstract classes cannot be instantiated
  
  const circle = new Circle(5);
  console.log(circle.getArea()); // Output: 78.54
  
  const rectangle = new Rectangle(4, 5);
  console.log(rectangle.getArea()); // Output: 20
  