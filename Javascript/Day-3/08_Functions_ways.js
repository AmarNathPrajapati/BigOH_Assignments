console.log("let's understand the various way to creat fucntions");
//Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
//Function Expression
const greet1 = function(name) {
    return `Hello, ${name}!`;
  };

//Arrow Function Expression (ES6)  
const greet2 = (name) => `Hello, ${name}!`;
//Function Constructor
const greet3 = new Function("name", "return `Hello, ${name}!`;");
console.log(greet("Amar"));
console.log(greet1("Amit"));
console.log(greet2("Ram"));
console.log(greet3("Shyam"));



