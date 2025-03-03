//excluding the types
type fruits = "Mango" | "Banana" | "Grapes" | "Orange";
type myFruits = Exclude<fruits, "Mango" | "Orange">;
let a:myFruits = "Banana";
let b:myFruits = "Grapes";
// let c:myFruits = "Mango"//error

type status = "Pending" | "Approved" | "Rejected" | "On Hold";
type status2 = "Pending" | "On Hold"
type valudStatus = Exclude<status,status2 >
let s1:valudStatus = "Approved";
let s2:valudStatus = "Rejected";
// let s3:valudStatus = "Pending";//error

enum User{
    SuperAdmin,
    Admin,
    Normal
}
console.log("asdfsdsfasdf__",User);
console.log("asdfasdf__",typeof User);
type userType1 = keyof typeof User;// superAdmin | Admin | Normal
type normalUser = Exclude<userType1, "SuperAdmin" | "Admin">
let u1:normalUser = "Normal"