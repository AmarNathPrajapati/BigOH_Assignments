/*
Problem Description:

Implement a calculator function that performs basic calculation operations but the number of arguments provided is not known beforehand.
ex: Addition of 9,4,12,16,23 and 43
*/
function addDynamic(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0);
}
console.log(addDynamic(9));
console.log(addDynamic(9,4));
console.log(addDynamic(9,4,12));
console.log(addDynamic(9,4,12,16));
console.log(addDynamic(9,4,12,16,23));
console.log(addDynamic(9,4,12,16,23,43));