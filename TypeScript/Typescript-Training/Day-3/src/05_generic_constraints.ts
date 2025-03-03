//Generic Function with Constraints
function printLength<T extends {length:number}>(value:T):void{
    console.log(value.length);
}
printLength("Amar")
printLength([1,2,3])
// printLength(100)

//generic constraints with custom interface
interface HasName{
    name:string;
}

class PersonInfo<T extends HasName>{
    public person:T;
    constructor(a:T){
        this.person = a;
    }
    getName(){
        return this.person.name;
    }
}
let person1 = new PersonInfo({age:20,name:'Amar'})
console.log(person1.getName());
// let person2 = new PersonInfo({age:20})//error

//generic constraints with multiple constraints

interface NameRequired{
    name:string
}
interface hasId{
    id:string;
}
class PersonDetails<T extends NameRequired & hasId>{
    public person:T
    constructor(person:T){
        this.person = person
    }
    getDetails(){
        console.log(`Name of person is ${this.person.id} and id of person is ${this.person.name}`);
    }
}
let p1 = new PersonDetails({name:"Amar", id:"EC-521"})
console.log(p1.getDetails());
// let p2 = new PersonDetails({name:"Chandan"})//error