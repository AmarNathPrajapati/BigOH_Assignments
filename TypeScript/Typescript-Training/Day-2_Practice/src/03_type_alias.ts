// Type Alias
// Define a type alias Rectangle with properties width and height. Write a function to calculate the area of a rectangle.
type Rectangle = {
    width: number,
    height: number
}
function calculateAreaRectangle(r:Rectangle):number{
    return r.width * r.height;
}
//using destructing
function calculateAreaRectangle2({ width, height }: Rectangle): number {
    return width * height;
}

let r:Rectangle = {
    width : 10,
    height : 10
}
console.log(calculateAreaRectangle(r));
console.log(calculateAreaRectangle2(r));

// Create a type alias for User with id, name, and isActive properties. Write a function that accepts a User and returns their name.
type User = {
    readonly id:number,
    name:string,
    isActive: boolean
}
function getUserName(a:User):string{
    return a.name;
}
let user:User = {
    id :1051,
    name:"Chandan",
    isActive:false
}
console.log(getUserName(user));
//**Create a type alias for a Student with name, age, and an optional grade. Write a function to check if a student has a grade and return "Grade not assigned" if missing.
type Student = {
    name: string,
    age: number,
    grade?:string
}
function getGrade(a:Student):string {
    return a.grade ?? "Grade not assigned"
}
let student:Student = {
    name:"Chandan",
    age: 18,
    grade: 'A'
}
console.log(getGrade(student));

// Use a type alias to define a Coordinate with x and y. Write a function that calculates the distance between two coordinates.
type Point = {
    x: number,
    y: number
}
function calculateDistance(p1:Point, p2:Point){
    let x1:number = p1.x;
    let y1:number = p1.y;
    let x2:number = p2.x;
    let y2:number = p2.y;
    return Math.abs(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)))
}
//with improvement
function calculateDistance2({ x: x1, y: y1 }: Point, { x: x2, y: y2 }: Point): number {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

let point1: Point = {
    x: 10,
    y:10
}
let point2: Point = {
    x: 6,
    y: 7
}
console.log(calculateDistance(point1, point2));



