//Namespace
namespace MyNameSpace{
    export function greet(name:string):string{
        return `Hello ${name}`
    }

    function add(a:number, b:number):number{
        return a + b;
    }
}

console.log(MyNameSpace.greet("Amar"));
// console.log(MyNameSpace.add());

namespace yourSpace{
    export function greet(name:string):string{
        return `Hi ${name}`
    }
    function add(a:number, b:number):number{
        return a + b;
    }
}
console.log(yourSpace.greet("Chandan"));
// console.log(yourSpace.add());