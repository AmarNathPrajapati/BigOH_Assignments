function minBracketReversals(expression) {
    let n = expression.length;
    
    // If length is odd, it can't be balanced
    if (n % 2 !== 0) return -1;
    
    let open = 0, close = 0;
    
    for (let bracket of expression) {
        if (bracket === '{') {
            open++;
        } else {
            if (open > 0) {
                open--;  // A valid {} pair found
            } else {
                close++; // Extra closing bracket
            }
        }
    }
    return Math.ceil(open / 2) + Math.ceil(close / 2);
}

// **Example Test Cases**
console.log(minBracketReversals("{{{"));       // Output: -1
console.log(minBracketReversals("{{{{}}"));   // Output: 1
console.log(minBracketReversals("{}")); // Output: 2
