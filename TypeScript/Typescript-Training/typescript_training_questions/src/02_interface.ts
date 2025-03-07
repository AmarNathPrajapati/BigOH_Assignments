interface Person{
    name:string,
    age:number
}

function describePerson(p:Person):string{
    return `Name: ${p.name}, Age: ${p.age}`;
}

let p:Person = {
    name : "Amar",
    age: 22
}

console.log(describePerson(p));