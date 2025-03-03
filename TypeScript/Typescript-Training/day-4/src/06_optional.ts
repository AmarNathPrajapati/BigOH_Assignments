type Gun = {
    name: string
    weight: number,
    bullets?:number,
}
let myGun:Gun = {
    name:"AK47",
    weight:2.5,
}

//print the person details with optional parameter
function printPersonDetails(p:{name:string, age?:number}):string{
    return p.age?`Name of person is ${p.name} and Age of person is ${p.age}`:`Name of person is ${p.name}`
}
console.log(printPersonDetails({name:"Amar",age:23}));
console.log(printPersonDetails({name: "chandan"}));