function sumAll(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(10, 20));       
console.log(sumAll());             

//rest with undefined 
function sum3(...nums: number[]) {
    console.log(nums);
}
// sum3(10, 20, undefined, 30); error

//rest with null
function displayNames(...names: string[]) {
    console.log(names);
}
// displayNames("Amar", null, "Raj"); // Error: Type 'null' is not assignable to type 'string'

