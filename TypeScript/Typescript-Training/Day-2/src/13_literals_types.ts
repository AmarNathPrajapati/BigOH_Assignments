//String Literals
let direction: "left" | "right" | "up" | "down";
direction = "left"; // Valid
direction = "right"; // Valid
// direction = "forward"; // Error: Type '"forward"' is not assignable


//Numeric Literals
let statusCode: 200 | 404 | 500;
statusCode = 200; //Valid
statusCode = 404; //Valid
// statusCode = 401; //  Error: Type '401' is not assignable


//boolean literal
let isLoggedIn: true; // Strictly true hona chahiye
isLoggedIn = true; //  Valid
// isLoggedIn = false; //  Error: Type 'false' is not assignable

// Literal Types in Function Parameters
function setAlignment(alignment: "left" | "center" | "right") {
    console.log(`Alignment set to ${alignment}`);
  }
  setAlignment("left"); //  Valid
  setAlignment("center"); // Valid
//   setAlignment("top"); // Error: Type '"top"' is not assignable


//Type Inference in Literals
let color: "blue" = "blue"; // Now it can only be "blue"
// color = "red"; //Error


//Using as const for Literal Type Inference
let person8 = { name: "Amit", age: 30 } as const;
// person8.name = "Rahul"; // Error: Cannot assign to 'name' because it is a read-only property

// String Union Types
type Mode = "dark" | "light" | "auto";
let theme: Mode;
theme = "dark"; 
// theme = "blue"; //error

//Numeric Union Types
type StatusCode = 200 | 400 | 500;

let response: StatusCode = 200; //Valid
// response = 404; //Error      
