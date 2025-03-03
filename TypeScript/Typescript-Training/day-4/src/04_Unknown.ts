//unknow: A better alternative of any
let myAny:any;
myAny = 1051;
console.log(typeof myAny, myAny);
myAny = "Amar";
console.log(typeof myAny, myAny);
myAny = false;
console.log(typeof myAny, myAny);
let isMarried:boolean = myAny;
console.log(typeof isMarried, isMarried);

//power of unknown
let myUnknown: unknown;
myUnknown = "Amar"
console.log(typeof myUnknown, myUnknown);
myUnknown = 1051;
console.log(typeof myUnknown, myUnknown);
myUnknown = true;
console.log(typeof myUnknown, myUnknown);

let isEngineer:boolean;
if(typeof myUnknown === "boolean"){
    isEngineer = myUnknown;//strict direct assignment
    console.log(typeof isEngineer, isEngineer);
}

//function that accept unknown data but strict to performa any operation before using it.
function acceptUnknown(data: unknown):void{
    //perform string operatoin
    if(typeof data === 'string'){
        console.log(data.toUpperCase());
    }else if(typeof data === 'number'){
        console.log(data.toFixed(2));
    }else{
        console.log("Data is unknown");
    }
}
acceptUnknown("Amar Nath Prajapati");
acceptUnknown(1051.12345);
acceptUnknown(true)

//bypass using as keyword
let myName:unknown = "Amar";
let userName:string = myName as string;
console.log(typeof userName, userName);
