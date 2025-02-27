//function with return type
function add(a:number, b:number):number{
    return a + b;
}
console.log(add(5,10));

//function with return type void
function greet(name:string):void{
    console.log(`Hello ${name}`);
}
greet("Amar");

//Function default values
function multiply(a:number, b:number = 2):number{
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5,10));


//function signature
let sub: (a: number, b: number) => number; // Function type

sub = function (x: number, y: number): number {
    return x - y;
};

console.log(sub(10,5)); // 5

//function with optional parameter
function printInfo(name: string, age?: number): string {
    return age ? `${name} is ${age} years old.` : `${name}'s age is unknown.`;
}

console.log(printInfo("Aman", 25));
console.log(printInfo("Ravi"));

//arrow function
let div = (a:number, b:number):number =>{
    return a/b;
}
console.log(div(10,5));