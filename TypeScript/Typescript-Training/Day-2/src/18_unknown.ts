let userInput: unknown;
userInput = "Hello"; // Valid
userInput = 20;      // Valid

// console.log(userInput.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'unknown'

// Type Checking Required
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Now it's safe
}
