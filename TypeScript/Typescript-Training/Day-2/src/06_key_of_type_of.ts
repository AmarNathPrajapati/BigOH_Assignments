/***********************************************Key Of Operator **************************************************/
type Person = {
    name: string;
    age: number;
    city: string;
  };
  
type PersonKeys = keyof Person; // "name" | "age" | "city"

let key: PersonKeys;
key = "name"; 
key = "age";  
key = "city"; 
// key = "email"; 
console.log(key);


debugger; 
//key operator with generic
function getProperty<T, k extends keyof T>(obj:T, key:k):T[k]{
    return obj[key];
}

let person = { name: "Amar", age: 23, city: "Jaunpur" };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "city"));
console.log(getProperty(person, "age"));


//keyof with Mapped Types
type PersonFlags = { [K in keyof Person]: boolean };
let flags: PersonFlags = {
  name: true,
  age: false,
  city: true
};

//keyof witht array and tupples
type value= ["adf", "dsff", "asfd"];
type fruitsKeys = keyof value; // 0 | 1 | 2
let newkey: fruitsKeys;
newkey = "0"; 
newkey = "1"; 
newkey = "2"; 
// newkey = "3"; //error


/**************************************************Type of operator ***********************************/
function getType(value: any):string {
    return typeof value;
  }
  
  console.log(getType(100));       // "number"
  console.log(getType("Hello"));   // "string"
  console.log(getType(true));      // "boolean"
  console.log(getType([1, 2, 3])); // "object"
  





