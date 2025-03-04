export default function exportDefaultFunction(){
    console.log("Default Function, No need use {} to use me");
}

export function multiply(a:number, b:number):number{
    return a + b;
}

export function division(a:number, b:number):number | string{
    if(b === 0){
        return "Division by zero is not possible";
    }else{
        return a/b;
    }
}
