//method-1
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
  
// Example Usage
const originalObj = { name: "Amar", address: { city: "Jaunpur" }, age: 23 };
const clonedObj = deepClone(originalObj);
clonedObj.address.city = "Mirzapur"; // Modifying the clone
console.log("aasdfasdf___adsf___deepclone",originalObj); 
console.log("asdfadsf___asdfasd__deepclone",clonedObj);  
  
//using structuredClone()
const obj = { name: "Amar", address: { city: "Jaunpur" } };
const clonedObjBuilt = structuredClone(obj);
clonedObjBuilt.address.city = "Sultanpur";
console.log("adffdasdfaa__structuredClone",obj);
console.log("asdfasddsdfsdf__structutredclone",clonedObjBuilt);


//shallow clog
const originalObj2 = { name: "Amar", address: { city: "Jaunpur" }, age: 23 };
const cloneObj2 = originalObj2;
cloneObj2.address.city = "Mirzapur";
console.log("adfdadsfd__shallow_clone",originalObj2);
console.log("afsadfdsf__shallow_clone",cloneObj2);
//redo