function doubleArray(nums:number[]):number[]{
    let newArr = nums.map(i => i*2);
    return newArr;
}
console.log(doubleArray([1,2,3]));