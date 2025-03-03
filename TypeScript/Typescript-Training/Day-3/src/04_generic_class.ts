//generic class
class DataStorage<T>{
    //initializing 
    private data:T[] = []
    //adding data
    addItem(item:T):void{
        this.data.push(item)
    }
    //removing Data
    removeItem(item:T):void{
        this.data = this.data.filter(i => i!==item)
    }
    //getting data
    getItems():T[]{
        return this.data;
    }
}
let numberStorage = new DataStorage<number>();
numberStorage.addItem(5)
numberStorage.addItem(10)
console.log(numberStorage.getItems());
numberStorage.removeItem(10)
console.log(numberStorage.getItems());

let stringStorage = new DataStorage<string>();
stringStorage.addItem("Amar");
stringStorage.addItem("Nath");
stringStorage.addItem("Prajapati")
console.log(stringStorage.getItems());
stringStorage.removeItem("Prajapati")
console.log(stringStorage.getItems());


//generic class with multiple parameter
class Pair<T,U>{
    public first:T;
    public second:U;
    constructor(a:T,b:U){
        this.first = a;
        this.second = b;
    }
    getPair(){
        return [this.first, this.second]
    }
}
let pair1 = new Pair<string, number>("Amar",10)
let pair2 = new Pair<boolean, string>(true, "Amar")
console.log(pair1.getPair());
console.log(pair2.getPair());




