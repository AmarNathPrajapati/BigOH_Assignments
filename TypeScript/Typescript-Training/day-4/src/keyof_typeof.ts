//generic function likhna hai jo kisi enum ya object ke valid keys ko check kare.
enum Colors{
    red = "Red",
    blue = "Blue",
    green = "Green"
}
function checkProperkey<T extends object, U extends keyof T>(obj:T,key:U){
    return obj[key]
}
let colorKey:keyof typeof Colors = "red";
console.log(checkProperkey(Colors,colorKey));