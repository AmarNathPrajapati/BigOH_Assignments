class Employee {
    public name: string;  //  Accessible everywhere
    private salary: number;  //  Accessible only inside class
    protected department: string;  //  Accessible inside class & subclasses
  
    constructor(name: string, salary: number, department: string) {
      this.name = name;
      this.salary = salary;
      this.department = department;
    }
  
    getSalary() {
      return this.salary;  //  Allowed inside class
    }
  }
  
  class Manager extends Employee {
    constructor(name: string, salary: number, department: string) {
      super(name, salary, department);
    }
  
    showDepartment() {
      console.log(`Department: ${this.department}`); //  Allowed because protected
    }
  }
  
  const emp = new Employee("Rahul", 50000, "IT");
  console.log(emp.name);  //  Works
  console.log(emp.getSalary());  //  Works
  // console.log(emp.salary); //  Error: Property 'salary' is private
  // console.log(emp.department); //  Error: Property 'department' is protected
  