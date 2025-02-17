/*
Problem Description:

Implement a calculator to perform the following operation
1. Square, sqr Root
2. Log, ln
3. sin, tan, and cos
4. X to the power Y
5. Area of the circle.

Note:
handle cases for a negative number
use proper variable declaration
*/

// Calculator function to perform advanced operations
const calculator = (operation, num1, num2 = null) => {
    let result;

    // Check for negative numbers in functions that don't accept them
    if (num1 < 0 && (operation === 'sqrt' || operation === 'log' || operation === 'ln' || operation === 'areaCircle')) {
        return "Error: Cannot perform this operation on negative numbers.";
    }

    switch (operation) {
        case 'square':
            result = num1 * num1;
            break;

        case 'sqrt':
            result = Math.sqrt(num1);
            break;

        case 'log':
            if (num1 <= 0) {
                return "Error: Logarithm of non-positive numbers is undefined.";
            }
            result = Math.log10(num1);
            break;

        case 'ln':
            if (num1 <= 0) {
                return "Error: Natural logarithm of non-positive numbers is undefined.";
            }
            result = Math.log(num1); 
            break;

        case 'sin':
            result = Math.sin(num1);
            break;

        case 'tan':
            result = Math.tan(num1); 
            break;

        case 'cos':
            result = Math.cos(num1);
            break;

        case 'power':
            if (num2 === null) return "Error: Power operation requires two arguments.";
            result = Math.pow(num1, num2);
            break;

        case 'areaCircle':
            result = Math.PI * Math.pow(num1, 2);
            break;

        default:
            result = "Error: Invalid operation. please try this format calculator('operatioin',num1,num2).The valid operations are square, sqrt, log, ln, sin, tan, cos, power and areaCircle";
    }

    return result;
};

// Testing the calculator with different operations
console.log(calculator('square', 5));             // Output: 25
console.log(calculator('sqrt', 16));              // Output: 4
console.log(calculator('log', 100));              // Output: 2
console.log(calculator('ln', 10));                // Output: 2.302585092994046
console.log(calculator('sin', Math.PI / 2));      // Output: 1 (sin(90 degrees) = 1)
console.log(calculator('tan', Math.PI / 4));      // Output: 1 (tan(45 degrees) = 1)
console.log(calculator('cos', Math.PI));          // Output: -1 (cos(180 degrees) = -1)
console.log(calculator('power', 2, 3));           // Output: 8 (2^3)
console.log(calculator('areaCircle', 5));         // Output: 78.53981633974483
console.log(calculator('areaCircle', -5));        // Error: Radius cannot be negative.
console.log(calculator('log', -1));               // Error: Logarithm of non-positive numbers is undefined.
console.log(calculator('sqrt', -9));              // Error: Cannot perform this operation on negative numbers
console.log(calculator(1, 'adfsasdf'));
console.log(calculator("adfasfdasd", 2));
