//generic types
type Box<T> = {
    content:T;
}

let numberBox:Box<number> = {
    content:10
}
let stringBox:Box<string> = {
    content:"Amar"
}
console.log(numberBox.content);
console.log(stringBox.content);