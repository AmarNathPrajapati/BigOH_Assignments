interface Person1 {
    name: string;
    age: number;
  }
  
  const person9: Person1 = {
    name:"Raghav",
    age:50
  };
  
console.log(person9.name); 
console.log(person9.age);  

interface Employee1 extends Person1 {
    employeeId: number;
    department: string;
  }
  
  const emp2: Employee1 = {
    name: "Raj",
    age: 30,
    employeeId: 101,
    department: "IT",
  };
  
  console.log(emp2);

//Readonly and Optional Properties in Interface
interface User {
    readonly id: number;
    name: string;
    age?: number; // Optional property
  }
  
  const user1: User = {
    id: 1,
    name: "Ankit",
  };
  
  // user1.id = 5;  Error: Cannot assign to 'id' because it is a read-only property
  console.log(user1.id); // Output: 1

//Function Types in Interface
interface MathOperation {
    (a: number, b: number): number;
  }
  
  const sum: MathOperation = (x, y) => x + y;
  console.log(sum(10, 20)); // Output: 30
  