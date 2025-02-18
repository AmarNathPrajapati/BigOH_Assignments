function evaluateExpression(expression) {
    //peroform calculation
    function calculate(operands, operators) {
        let b = operands.pop();
        let a = operands.pop();
        let op = operators.pop();
        
        if (op === '+') return operands.push(a + b);
        if (op === '-') return operands.push(a - b);
        if (op === '*') return operands.push(a * b);
        if (op === '/') return operands.push(a / b);
    }

    let operands = []; // Stack for numbers
    let operators = []; // Stack for operators
    let num = 0;
    let hasNum = false;// tracking operator and operands.

    for (let i = 0; i < expression.length; i++) {
        let ch = expression[i];

        if (ch >= '0' && ch <= '9') {
            num = num * 10 + (ch - '0');//creating multi digit number
            hasNum = true;
        } else {
            if (hasNum) {
                operands.push(num);//pushed final operands
                num = 0;
                hasNum = false;
            }

            if (ch === '(') {
                operators.push(ch);
            } else if (ch === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    calculate(operands, operators);//poping operator from stack and perform calculations
                }
                operators.pop(); // Remove '('
            } else if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
                while (
                    //checking high preceding operator (already exit or not)
                    operators.length &&
                    precedence(operators[operators.length - 1]) >= precedence(ch)
                ) {
                    calculate(operands, operators);
                }
                operators.push(ch);
            }
        }
    }
    //handling last number
    if (hasNum) {
        operands.push(num);
    }
    //calculating last operations
    while (operators.length) {
        calculate(operands, operators);
    }

    return operands.pop();
}

//complete precedence function
function precedence(op){
    if(op === '+' || op ==='-'){
        return 1;
    }
    if(op === '*' || op ==='/'){
        return 2;
    }
    return 0;

}


console.log(evaluateExpression("1+(2+3)*4")); 
console.log(evaluateExpression("1+(2+3)*4-10/2+3-4")); 
console.log(evaluateExpression("10+20*3")); 
console.log(evaluateExpression("(5+2)*(10-3)")); 
console.log(evaluateExpression("100/5+3*4-2")); 
console.log(evaluateExpression("50000*2"));
