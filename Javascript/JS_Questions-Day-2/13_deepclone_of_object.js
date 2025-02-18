function deepClone(obj) {
    //cheking object or null
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    //initializing the cloned Array
    // let clone = {};
    let clone = Array.isArray(obj) ? [] : {};
    //recursive call
    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}
//Example Usage
const originalObj = {
    name: "Amar",
    address: {
        city: "Jaunpur", pin: [222001, 222002,
            {
                address: { city: "Jaunpur" }
            }
        ]
    },
    age: 23
};

const clonedObj = deepClone(originalObj);
clonedObj.address.city = "Mirzapur"; // Modifying the clone
clonedObj.address.pin[0] = 999999; // Nested array modification

console.log(originalObj, null, 2);
console.log(clonedObj, null, 2);  
