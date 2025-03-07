enum Direction{
    Up, Down, Left, Right
}

function getDirection(dir:Direction):string{
    if(dir === Direction.Up){
        return "Up";
    }else if(dir === Direction.Down){
        return "Down";
    }else if(dir === Direction.Right){
        return "Right";
    }else{
        return "Left";
    }
}
//swith??
console.log(getDirection(Direction.Up));
console.log(getDirection(Direction.Down));
console.log(getDirection(Direction.Right));
console.log(getDirection(Direction.Left));