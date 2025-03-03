//Basic Record
type userRoles = Record<string,string>
let roles:userRoles = {
    SuperAdmin: "full access of DB",
    User: "No access of DB",
    Admin:"Partial Access of DB"
    // newUser : 1000
}
console.log(roles.SuperAdmin);

//Record with specific keys
type employeeRole = Record<"Manager" | "Developer" | "Tester", string>
let empRoles:employeeRole = {
    "Manager":"Manage Team",
    "Developer":"Writes Code",
    "Tester":"Test Code",
    // "Admin":"adffadsfasd"
}
console.log(empRoles.Developer);