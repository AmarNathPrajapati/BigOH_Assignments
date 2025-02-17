// Validation function to handle different error cases
function validateArguments(nums, expectednumsCount) {
    // Check if the number of arguments is correct
    if (nums.length !== expectednumsCount) {
      return `Error: Expected ${expectednumsCount} arguments, but got ${nums.length}.`;
    }
  
    // Check if all arguments are numbers
    for (let arg of nums) {
      if (typeof arg !== 'number' || isNaN(arg)) {
        return `Error: '${arg}' is not a valid number.`;
      }
    }
  
    // Check if variables are declared and initialized (for simplicity, assuming variables are directly used in functions)
    for (let arg of nums) {
      if (typeof arg === 'undefined') {
        return `Error: The variable is not initialized.`;
      }
    }
  
    return null;  // If all validations pass
  }
  
  // Calculator function with switch-case
  function calculator(operation, ...nums) {
    const validationError = validateArguments(nums, 2);
    if (validationError) {
      return validationError;
    }
  
    switch (operation) {
      case 'add':
        return nums[0] + nums[1];
      
      case 'subtract':
        return nums[0] - nums[1];
  
      case 'multiply':
        return nums[0] * nums[1];
  
      case 'divide':
        if (nums[1] === 0) {
          return "Error: Cannot divide by zero.";
        }
        return nums[0] / nums[1];
  
      case 'modulus':
        return nums[0] % nums[1];
  
      default:
        return `Error: Invalid operation '${operation}'.`;
    }
  }
  
  // Example usage:
  console.log(calculator('add', 5, 10)); // 15
  console.log(calculator('subtract', 5, 10)); // -5
  console.log(calculator('multiply', 5, 10)); // 50
  console.log(calculator('divide', 5, 0)); // Error: Cannot divide by zero.
  console.log(calculator('modulus', 5, 2)); // 1
  console.log(calculator('divide', 5, "Hello")); // Error: 'Hello' is not a valid number.
  console.log(calculator('xyz', 5, 10)); // Error: Invalid operation 'xyz'.
  