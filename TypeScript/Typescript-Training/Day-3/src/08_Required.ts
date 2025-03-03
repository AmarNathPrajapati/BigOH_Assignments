type User1 = {
    name: string;
    age?: number; // Optional Property
    isMarried?: boolean; // Optional Property
  };
  
  const user1: User1 = {
    name: "Amit",
  }; //  Works Fine

//with Required
type User2 = {
    name: string;
    age?: number;
    isMarried?: boolean;
  };
  
  const user2: Required<User2> = {
    name: "Rahul",
    age: 25,
    isMarried: false,
};
  
// const user3: Required<User> = { name: "Ravi" }; ERROR: age & isMarried missing

//Required with Function
function printUser(user: Required<User2>) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Married: ${user.isMarried}`);
}

printUser({ name: "Amit", age: 30, isMarried: true }); // Works Fine
  
  // printUser({ name: "Rahul" });  ERROR: age & isMarried missing
  

