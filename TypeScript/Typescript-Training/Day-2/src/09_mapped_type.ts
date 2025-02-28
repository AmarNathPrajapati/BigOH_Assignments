type Person4 = { name: string; age: number; };
type OptionalPerson = { [K in keyof Person4]?: Person4[K] }; // Sabhi properties optional ho gayi

// type OptionalPerson = {
//     name?: string;
//     age?: number;
//   };
  
let p4:OptionalPerson = {
    name: "This",
    age : 4
}
const person5: OptionalPerson = {}; 
const person6: OptionalPerson = { name: "Aman" };
const person3: OptionalPerson = { age: 25};
const person4: OptionalPerson = { name: "Rahul", age: 30};
