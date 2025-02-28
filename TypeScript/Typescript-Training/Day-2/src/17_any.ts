let value1: any = "Hello";
value1 = 10;    
value1 = true;  
value1 = { x: 100 };

//bypass type checking
let data1: any = "Hello";
console.log(data1.toUpperCase()); //Works fine

data1 = 100;
console.log(data1.toUpperCase()); //Runtime Error
