/*
Problem Description

Make a Calculator that takes function and variables as an argument and returns values based on the calculation of the function provided to it.
Do this for all the functions implemented.
Add more function tests: temperature conversion, area, etc.

Note:
Verify and validate the number of arguments allowed as per the requirement of function provided
Handle use of arrow functions
 */

function calculator(func, ...params){
    // console.log("adfasdsdgfad__afasd",func.__proto__);
    // console.log("asdfasfds__asdfasdfasdadfs",func.length);
    // console.log("adfsasdfadsasdfads___adf",params.lenght);
    if(func.length !== params.length){
        return "Error: please input correct number of paramaters"
    }
    return func(...params)
}
//function for testing
function addNumber(a, b) {
    return a + b
}
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const areaOfRectangle = (length, width) => length * width;
const areaOfCircle = (radius) => Math.PI * radius * radius;

// Testing
console.log(calculator(addNumber,2,3));
console.log(calculator(celsiusToFahrenheit, 25)); // Correct
console.log(calculator(fahrenheitToCelsius, 77)); // Correct
console.log(calculator(areaOfRectangle, 5, 10)); // Correct
console.log(calculator(areaOfCircle, 7)); // Correct
console.log(calculator(celsiusToFahrenheit, 25, 30)); // Error: Extra arguments
