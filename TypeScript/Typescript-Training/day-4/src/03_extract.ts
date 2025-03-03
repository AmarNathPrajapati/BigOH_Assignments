type MyTypes = "apple" | "banana" | "mango" | "orange";
type yourTypes = "banana" | "orange" | "grapes";
type ExtractType = Extract<MyTypes, yourTypes>;//common in both

let a1: ExtractType = "banana";
let a2: ExtractType = "orange";
// let a3: ExtractType = "grapes"//error

//real life examples
type UserRoles = "Admin" | "Manager" | "Team Lead" | "Developer";
type AdminRoles = Extract<UserRoles, "Admin" | "Manager">;
let u11:AdminRoles = "Admin";
let u21:AdminRoles = "Manager"
