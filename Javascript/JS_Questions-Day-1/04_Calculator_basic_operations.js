/*
Problem description:

Implement a calculator to perform the following operation
- Simple algebraic operations like add, subtract, multiply, divide, modulus, etc.
*/

function calculator(a,operator,b){
    switch(operator){
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break;
        case '/':
            if(b===0){
                return "Error: Cannot divide by zero";
            }
            console.log(a/b);
            break;
        case '%':
            console.log(a%b);
            break;
        default:
            console.log("try with correct format calculator(a, 'operator', b) ");
    }
}
calculator(2,'+',3)