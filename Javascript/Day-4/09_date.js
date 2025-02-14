//Get Current Date & Time
let now = new Date();
console.log(now);  // Current Date & Time


//Specific Date Set Karna
let customDate = new Date(2024, 4, 10); // Year, Month (0-based), Day
console.log(customDate);//date shift issue
console.log(customDate.toLocaleString());//ISO format
console.log(customDate.toLocaleDateString());
console.log(customDate.toISOString());

//Get Individual Date Components
let today = new Date();
console.log(today.getFullYear());  // Year
console.log(today.getMonth());  // Month (0-based)
console.log(today.getDate());  // Day
console.log(today.getDay());  // Day of the week (0-Sunday)
console.log(today.getHours());  // Hours
console.log(today.getMinutes());  // Minutes
console.log(today.getSeconds());  // Seconds

//formating date
let date = new Date();
console.log(date.toLocaleDateString());  // Local Date Format
console.log(date.toLocaleTimeString());  // Local Time Format
console.log(date.toISOString());  // ISO Format
