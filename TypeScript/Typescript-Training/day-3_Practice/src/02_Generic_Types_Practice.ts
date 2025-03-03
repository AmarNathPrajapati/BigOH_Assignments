// Generics - Types

// Define a generic type Box<T> that has a property value of type T.
type Box<T>= {
    content: T
}
let numberBox:Box<number>={content:5};
console.log(numberBox);
let stringBox:Box<string>={content:"Amar"};
console.log(stringBox);

// Create a type alias Pair<T, U> that represents a tuple with two values of different types.
type Pair<T, U> = {
    a:T,
    b:U
}
let p1:Pair<number,string> = {a:5, b:"Amar"}
console.log(p1);
let p2:Pair<boolean, number> = {a:true,b:5}
console.log(p2);