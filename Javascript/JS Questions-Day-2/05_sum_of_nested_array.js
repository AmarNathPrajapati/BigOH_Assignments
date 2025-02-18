function sumNestedArray(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        //checking arr[i] is array or not
        if(Array.isArray(arr[i])){
            sum += sumNestedArray(arr[i]);
        }else{
            sum+=arr[i]
        }
    }
    return sum;
}
console.log(sumNestedArray([1, [2, [3, 4]], 5])); // Output: 15
console.log(sumNestedArray([[1, 2], [3, [4, 5]], 6])); // Output: 21
console.log(sumNestedArray([10, [20, [30, 40]], 50])); // Output: 150
