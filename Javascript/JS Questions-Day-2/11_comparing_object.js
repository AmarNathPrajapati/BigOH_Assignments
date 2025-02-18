function isDeepEqual(obj1, obj2){
    //cheking if these are object or Not
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null){
        return obj1 === obj2
    }
    //getting the keys of each objects
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    //checking if number of keys are equal or not
    if(keys1.length !== keys2.length){
        return false;
    }
    //deepSearch
    for(let key of keys1){
        if(!obj2.hasOwnProperty(key)){
            return false;
        }
        //recursion
        if(!isDeepEqual(obj1[key],obj2[key])){
            return false;
        }
    }
    return true;
}
//  **Test Cases**
console.log(isDeepEqual({bar: 6, foo: 5}, { bar: 6, foo: 5 })); //  true
// console.log(isDeepEqual({ foo: 6, bar: 5 }, { foo: 5, bar: 6 })); //  false
// console.log(isDeepEqual({ a: { b: 2 } }, { a: { b: 2 } })); //  true
// console.log(isDeepEqual({ a: { b: 2 } }, { a: { b: 3 } })); //  false
// console.log(isDeepEqual({ a: [1, 2] }, { a: [1, 2] })); //  true
// console.log(isDeepEqual({ a: [1, 2] }, { a: [2, 1] })); //  false (order matters)
// console.log(isDeepEqual(null, null)); //  true
// console.log(isDeepEqual(null, {})); //  false
// console.log(isDeepEqual({}, {})); //  true
// console.log(isDeepEqual(5, 5)); //  true
// console.log(isDeepEqual(5, "5")); //  false
