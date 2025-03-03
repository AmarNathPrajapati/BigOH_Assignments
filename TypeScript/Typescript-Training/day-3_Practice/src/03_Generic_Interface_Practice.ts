// Generics - Interfaces
// Create a generic interface Repository<T> with a method getAll(): T[].
interface Repository<T>{
    values:T[]
    getAll:() => T[]
}
let repo1:Repository<number> = {
    values:[1,3,4,5],
    getAll:function (){
        return this.values;
    }
}
console.log(repo1.getAll());

//**Define an interface KeyValue<T, U> that represents a key-value pair where both key and value types are generic.??
interface Dictionary<T extends string | number, U> {
    // [key: T]: U;
    key:T,
    value:U
}

const userAges: Dictionary<string, number> = { key: "Amar", value: 30 };
console.log(userAges);
