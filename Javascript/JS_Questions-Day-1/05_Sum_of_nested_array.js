/*
    problem Description:
    Write a function that takes an array of arrays (with arbitrary depth) and returns the sum of all numbers.
    NOTE: do not use any of these for, forEach
 */
function sumNestedArray(arr) {
    let newArr = arr.flat(Infinity)
    return newArr.reduce((acc,num)=>(acc+num),0)

}
        
console.log(sumNestedArray([1, [2, [3, 4]], 5])); // Output: 15
        
//redo