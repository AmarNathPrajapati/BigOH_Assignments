type User4 = {
    id: number;
    name: string;
    age: number;
    password: string;
  };
  
  // Removing 'password' from User
  type PublicUser = Omit<User4, "password">;
  
  const user4: PublicUser = {
    id: 1,
    name: "Amit",
    age: 30,
  };
  
console.log(user4); 
// Output: { id: 1, name: 'Amit', age: 30 }


// Multiple Properties Remove Karna
type AdminUser = Omit<User4, "password" | "age">;

const admin: AdminUser = {
  id: 2,
  name: "Raj",
};

console.log(admin); 
// Output: { id: 2, name: 'Raj' }
