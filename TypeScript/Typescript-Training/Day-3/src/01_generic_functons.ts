//function without generics
function indentifyNumber(value:number):number{
    return value;
}
function indentifyString(value:string):string{
    return value;
}
console.log(indentifyNumber(5));
console.log(indentifyString("Amar"));

//generic function to solve this problem
function indentify<T>(value:T):T{
    return value;
}
console.log(indentify(5));
console.log(indentify("Amar"));
console.log(indentify(true));

//function with accept generic array and return first element
function genericArray<T>(arr:T[]):T{
    return arr[0];
}
console.log(genericArray([1,2,3,4,5]));
console.log(genericArray(["amar", "nath","prajapati"]));
console.log(genericArray([true,false]));


//function with multiple generic types
function multipleTypes<T,U,V>(x:T, y:U, z:V):[T,U,V]{
    return [x,y,z];
}
console.log(multipleTypes(1,"amar",true));
console.log(multipleTypes("amar",1,true));
console.log(multipleTypes(true,"amar",1));



