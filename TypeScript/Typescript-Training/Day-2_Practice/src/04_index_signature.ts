// Index Signatures

// Create an object with an index signature that allows dynamic string keys with number values.
type empSalary  = {
    [userName:string]: number
}

let empSalaryDetails: empSalary = {
    "Amar": 10000000,
    "Chandan":1100000,
    "Raghu": 100000
}
console.log(empSalaryDetails);

// Write a function that accepts an object with string keys and number values and returns the sum of all values.

// Modify the previous function to filter out values below a given threshold.

// Implement a function that accepts an index-signature-based object and prints each key-value pair.