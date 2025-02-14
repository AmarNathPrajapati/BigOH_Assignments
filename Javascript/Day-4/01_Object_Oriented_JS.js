//creating a function class
class Person {
  // Constructor Method
    lang;
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.lang = "javaScript";
    }
    
    // Instance Method
    sayHello() {
      return `asdfasfasdf____Hello, my name is ${this.name} and language is ${this.lang}`;
    }
  }
  
  // Object Creation
  const person1 = new Person("Amar", 25);
  let person2 = new Person()
  console.log(person2.sayHello());
  console.log(person1.sayHello());
  console.log("asdfasfdasdf____asdfas",person1.lang);
  
//creating a class without constructor
class Car{
    sayName(){
        console.log("this is a car");
    }
}
let car1 = new Car();
car1.sayName()
let car2 = new Car("asdfasddf")//No Error
car2.sayName()

//constructor with default value
class Bike {
    constructor(brand = "Royal") {
      this.brand = brand;
    }
  
    getBrand() {
      return `Bike brand: ${this.brand}`;
    }
  }
  
  const bike1 = new Bike("pulsar");
  console.log(bike1.getBrand()); // Car brand: Tesla
  
  const bike2 = new Bike();
  console.log(bike2.getBrand()); // Car brand: Toyota (Default Value)

//Creating class with some instance method
  class Employee {
    constructor(name, salary, department) {
      this.name = name;
      this.salary = salary;
      this.department = department;
    }
    getDetails(){
        return `Name of Employee: ${this.name} \nDepartment of Employee ${this.department}`
    }
    getSalary() {
      return `Salary of ${this.name} is ${this.salary}`;
    }
  }
  
  const emp1 = new Employee("Rahul", 50000, "IT");
  console.log(emp1.getSalary()); // Salary of Rahul is 50000
  console.log(emp1.getDetails());
  
//Instance vs Static Properties
class Student {
    constructor(name) {
      this.name = name; // Instance Property
    }
  
    static schoolName = "ABC School"; // Static Property
    static getSchoolDetails(){
        return "School Name: ABC School\nSchool Address: Jaunpur U.P."
    }
  }
  
  const student1 = new Student("Amit");
  console.log(student1.name); // Amit
  console.log(Student.schoolName); // ABC School
  console.log(student1.schoolName); // Undefined
  console.log(Student.getSchoolDetails());


//Exploring "this" with arrow function
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    printName() {
      console.log("asdfdasdf",this);
      console.log("asdfasfasf__",typeof this);
      console.log("asdfasfasdfa__",this.name);
    }

    printDetails = () =>{
        console.log("asfdasdfasfsasdsf__",this);
        console.log("asdsfsfdafa__this.name",this.name);
    }
  }
  
  const dog = new Animal("Tommy");
  dog.printName(); // Tommy
  const cat = new Animal("Kitty");
  setTimeout(cat.printDetails, 1000); // Kitty (Lexical this ki wajah se)  

