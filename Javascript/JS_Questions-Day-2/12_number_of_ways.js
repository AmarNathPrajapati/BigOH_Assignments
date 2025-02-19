function countWays(arr, target, index = 0, currentSum = 0, memo = {}) {
    // Create a unique key for memoization
    let key = `${index},${currentSum}`;
    
    // If already computed, return the stored result
    if (memo.hasOwnProperty(key)) return memo[key];

    // Base Case: When we process all elements
    if (index === arr.length) {
        return currentSum === target ? 1 : 0;
    }

    // Recursive Step: Try adding and subtracting the current element
    let addWay = countWays(arr, target, index + 1, currentSum + arr[index], memo);
    let subWay = countWays(arr, target, index + 1, currentSum - arr[index], memo);

    // Store the result and return
    memo[key] = addWay + subWay;
    return memo[key];
}

// Example Usage
const arr = [-1, 9, 8, -3, 4];
const targetSum = 5;
console.log(countWays(arr, targetSum));  // Output: 8
