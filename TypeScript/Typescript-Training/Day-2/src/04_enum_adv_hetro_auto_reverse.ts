//heterogenous Enum
enum Mixedenum{
    only = 1,
    two = "two",
    three = 3
}

//Auto Increment
enum AutoInc{
    first = 10,
    second,
    third
}
console.log(AutoInc.first, AutoInc.second, AutoInc.third);

//reverse mapping
enum ReverseCheck{
    "Admin" = 1,
     user = 2   
}
console.log(ReverseCheck[1]);
console.log(ReverseCheck[2]);