//public and privated properties
class User {
    #privateData; // Private property
    
    constructor(name, age) {
      this.name = name; // Public property
      this.#privateData = age; // Private property
    }
  
    // Public method
    showInfo() {
      console.log(`Name: ${this.name}, Age: ${this.#privateData}`);
    }
  }
  
  let user1 = new User("Alice", 25);
  
  console.log(user1.name); //Alice (Public hai)
//   console.log(user1.#privateData); //Error: Private property cannot be accessed
  user1.showInfo(); // Name: Alice, Age: 25


//getter and setter method
class User2 {
    #age; // Private property
  
    constructor(name, age) {
      this.name = name; // Public property
      this.#age = age;
    }
  
    // Getter (Read Private Property)
    get userAge1() {
      return this.#age;
    }
  
    // Setter (Modify Private Property with Validation)
    set userAge(newAge) {
      if (newAge > 0) {
        this.#age = newAge;
      } else {
        console.log("Invalid Age!");
      }
    }
  }
  
  let user2 = new User2("Bob", 30);
  
  console.log("asdfasdadfs___asdfasfd",user2.userAge1); //30 (Getter used)
  user2.userAge = 35; // Sets new age
  console.log(user1.userAge); // 35
  user2.userAge = -5; // ❌ Invalid Age!
  

  //static method in class
  class MathUtils {
    // Static Method
    static add(a, b) {
      return a + b;
    }
  }
  
  // Static method ko direct class ke through call karna hoga
  console.log(MathUtils.add(5, 10)); //15
  
  let obj = new MathUtils();
  // console.log(obj.add(5, 10)); Error: add is not a function
  

  //Combining Private, Public, Getter, Setter, and Static Methods
  class BankAccount {
    #balance; // Private property
  
    constructor(accountHolder, balance) {
      this.accountHolder = accountHolder; // Public property
      this.#balance = balance;
    }
  
    // Getter (Read balance)
    get getBalance() {
      return this.#balance;
    }
  
    // Setter (Deposit money with validation)
    set deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposit Successful! New Balance: ${this.#balance}`);
      } else {
        console.log("Invalid Deposit Amount!");
      }
    }
  
    // Static Method (Bank Information)
    static bankInfo() {
      console.log("Welcome to XYZ Bank!");
    }
  }
  
  let myAccount = new BankAccount("Amar Nath", 5000);
  
  // Using Getter
  console.log(myAccount.getBalance); //5000
  
  // Using Setter
  myAccount.deposit = 2000; // Deposit Successful! New Balance: 7000
  myAccount.deposit = -500; // Invalid Deposit Amount!
  
  // Static Method
  BankAccount.bankInfo(); // Welcome to XYZ Bank!
  
  // Private property access (Error)
  // console.log(myAccount.#balance); Error: Private property cannot be accessed
  