// Any Type

// Declare a variable of type any, assign different data types to it, and log its values.
let firstAnyVariable:any = true;
console.log(typeof firstAnyVariable, firstAnyVariable);
firstAnyVariable = "Amar";
console.log(typeof firstAnyVariable, firstAnyVariable);
firstAnyVariable = 100;
console.log(typeof firstAnyVariable, firstAnyVariable);

// Write a function that accepts a parameter of type any, checks its type at runtime, and logs whether it's a number, string, or object.
function acceptAny(anyType:any){
    console.log(typeof anyType,anyType);
}
acceptAny(true);
acceptAny("Amar");
acceptAny(1051)

// Create a function that receives a list of any type values and filters out only the numbers.
function listAcceptAny(list:any[]){
    let nums:number[] = list.filter(a =>( typeof a === "number"))
    console.log(nums);
}
listAcceptAny([true, 'Amar', 100,101, 'chanan'])

// Define an object with properties of type any. Assign different data types and demonstrate how TypeScript allows reassignment.
let anyObj:{name:any, age:any} = {
    name : "Amar",
    age : 20
}
anyObj.age = "21";
console.log(anyObj);






