// Generics - Functions

// Create a generic function identity<T>(arg: T): T that returns whatever value is passed to it.
function identity<T>(arg:T):T{
    console.log(typeof arg);
    return arg;
}
console.log(identity<number>(5));
console.log(identity<string>("Amar"));
console.log(identity<boolean>(true));
// Write a generic function that swaps the positions of two elements in an array.
function swapPosition<T>(arr:T[]):void{
    let temp:T = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    console.log(arr);
}
swapPosition(["Tony","Stark"])
swapPosition([1,2])

//imporved code
function swapPosition2<T>(arr:T[]):void{
    if(arr.length<2){
        console.error("given array have elements less than 2");
        return;
    }
    //using array destructuring
    [arr[0], arr[1]] = [arr[1],arr[0]]
    console.log(arr);
}
swapPosition(["Bruce","Banner"])
swapPosition([3,4])