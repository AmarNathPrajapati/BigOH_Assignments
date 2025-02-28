//dynamic object
type salary = {
    [employeeName : string]:number
}

//employee salary
let employee:salary = {
    "Aman": 100000,
    "Ravi": 200000,
}

//Index Signature with Fixed Properties
type Product = {
    id: number; // Fixed property
    name: string; // Fixed property
    [feature: string]: string | number; // Dynamic properties
  };
  
  let laptop: Product = {
    id: 101,
    name: "MacBook Pro",
    processor: "M1 Chip",
    RAM: "16GB",
    SSD: "512GB"
  };
laptop.id = 102;
console.log("adsfafasdf___adf",laptop);


//Readonly Index Signature
type accoundDetails = {
    readonly [bankName:string]:number
}

let personAccount: accoundDetails = {
    "SBI": 50000
}
// personAccount.SBI = 10000;//Index signature in type 'accoundDetails' only permits reading.


//restricting key type
type marks = {
    [rollNo:number]:string
}

let studentMarks:marks = {
    1001:"A",
    1011:"B",
    1051:"A+"
}


//mix
type detail = {
    [x:number|string]:string|number
}
let p:detail = {
    "one": 1,
    2: "two"
}
