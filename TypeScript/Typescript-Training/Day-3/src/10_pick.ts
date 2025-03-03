type User5 = {
    id: number;
    name: string;
    age: number;
    password: string;
};
  
  // Selecting 'id' and 'name' only
type BasicUser = Pick<User5, "id" | "name">;
  
const user5: BasicUser = {
    id: 3,
    name: "Suresh",
};
  
  console.log(user5); 
// Output: { id: 3, name: 'Suresh' }
  
//Pick in Function
function getPublicProfile(user: Pick<User5, "name" | "age">) {
    console.log(`User: ${user.name}, Age: ${user.age}`);
}
  
  const user6 = {
    id: 4,
    name: "Neha",
    age: 28,
    password: "secret",
  };
  
  getPublicProfile(user6); // Output: User: Neha, Age: 28
  