//readonly
type Student = {
    readonly id: number,
    name:string,
    batch:number
}
let student1:Student = {
    id : 1051,
    name:"Amar Nath",
    batch : 2020-24
}
student1.name = "Chandan"
// student1.id = 2051//error
console.log(student1);

//arraw with readonly 
let studentArr:readonly number[] = [1,2,3,4]
// studentArr.push(10)//error
console.log(studentArr);