// Automatic Type Detection
let city = "Delhi"; // TypeScript automatically assumes city: string
let price = 499.99; // TypeScript assumes price: number
// city = 123; //Error: Type 'number' is not assignable to type 'string'
console.log(typeof city, city, typeof price, price);


//Function Return Type Inference
function multiply(a: number, b: number) {
    return a * b; // TypeScript automatically detects return type as 'number'
  }
let result2 = multiply(5, 4); // result: number
console.log(typeof result2, result2);
  

// Object Type Inference
let newUser = {
    name: "Arya",
    age: 24,
    isStudent: true
  };
//   newUser.age = "twenty-four"; // Error (age is already inferred as number)

//Array Type Inference
let colors = ["red", "green", "blue"]; // TypeScript infers: string[]

colors.push("yellow"); 
// colors.push(123);
