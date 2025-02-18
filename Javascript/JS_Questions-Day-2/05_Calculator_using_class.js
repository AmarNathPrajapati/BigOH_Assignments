class Calculator{
  constructor(){
    this.result = 0;
  }
  add(value){
    this.result += value;
    return this;
  }
  subtract(value){
    this.result -=value;
    return this;
  }
  multiply(value){
    this.result *= value;
    return this;
  }
  divide(value){
    if(value === 0){
      console.error("Can't divide by zero")
      return this;
    }
    this.result /= value;
    return this;
  }
  getResult(){
    return this.result;
  }
  reset(){
    return this.result = 0;
  }
};
  
  // **Usage**
  const calc = new Calculator();
  console.log(calc.add(10).multiply(2).subtract(5).divide(3).getResult());
  