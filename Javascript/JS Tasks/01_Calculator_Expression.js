/*
problem Description

Implement a method that takes an expression and performs the calculation accordingly.
example: calculation of [ 1+(2+3)*4-10/2 ]

Note: Verify that BODMAS is applied in case of complex queries and the correct result is returned.

EditPreview     
Implement a method that takes an expression and performs the calculation accordingly.
example: calculation of [ 1+(2+3)*4-10/2 ]

Note: Verify that BODMAS is applied in case of complex queries and the correct result is returned.


 */

function evaluateExpression(expression) {
    return eval(expression);
}


function evaluateExpression2(expression) {//More safer than eval()
    return new Function('return ' + expression)();//execute only mathematical expression
}

console.log(evaluateExpression("1+(2+3)*4-10/2+3-4")); 
console.log(evaluateExpression2("1+(2+3)*4-10/2+3-4")); 

//redo