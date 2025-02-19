// Initial Data to create the company structure
const initialData = {
  "company": {
    "departments": [
      {
        "name": "Engineering",
        "employees": [
          { "id": 1, "name": "Alice", "role": "Engineer" },
          { "id": 2, "name": "Bob", "role": "Senior Engineer" }
        ]
      },
      {
        "name": "HR",
        "employees": [
          { "id": 3, "name": "Carol", "role": "HR Manager" }
        ]
      }
    ]
  }
};

// Function to initialize company structure and manage operations
function createCompanyStructure(initialData) {
  // Adding manageCompany method to the jsonObject
  initialData.manageCompany = function (operation, departmentName, employee) {
    //finding actual department where to perform changes
    const department = initialData.company.departments.find(dep => dep.name === departmentName);

    if (!department) {
      console.log("Department not found");
      return;
    }

    switch (operation) {
      case "add":
        //checking required filed to insert an employee
        if (!employee || !employee.id || !employee.name || !employee.role) {
          console.log("Invalid employee data for addition.");
          return null;
        }
        //adding new employee
        department.employees.push(employee);
        console.log(`Employee ${employee.name} added to ${departmentName}.`);
        break;
      case "remove":
        //finding the employee on the basis of employee ID
        const index = department.employees.findIndex(emp => emp.id === employee.id);
        //handing issue if employee not found.
        if (index === -1) {
          console.log(`Employee with ID ${employee.id} not found in ${departmentName}.`);
          return null;
        }
        //removing that employee
        department.employees.splice(index, 1);
        console.log(`Employee with ID ${employee.id} removed from ${departmentName}.`);
        break;
      case "update":
        //finding the employee on the basis of employee ID
        const empToUpdate = department.employees.find(emp => emp.id === employee.id);
        //handing issue if employee not found.
        if (!empToUpdate) {
          console.log(`Employee with ID ${employee.id} not found in ${departmentName}.`);
          return null;
        }
        //updating details of employee
        Object.assign(empToUpdate, employee);
        console.log(`Employee with ID ${employee.id} updated in ${departmentName}.`);
        break;
      case "find":
        return department.employees;
      case "findOne":
        return department.employees.find(emp => emp.id === employee.id || emp.name === employee.name);
      default:
        console.log("Invalid operation");
    }
  };

  return initialData;
}

// Creating the company structure with the initial data
const jsonObject = createCompanyStructure(initialData);

// Example Usage:

// 1. Add a new employee to the Engineering department
jsonObject.manageCompany("add", "Engineering", { "id": 4, "name": "Dave", "role": "Intern" });

// 2. Remove an employee from the HR department
jsonObject.manageCompany("remove", "HR", { "id": 3 });

// 3. Update an employee's information in the Engineering department
jsonObject.manageCompany("update", "Engineering", { "id": 2, "name": "Robert", "role": "Lead Engineer" });

// 4. Find all employees in the Engineering department
const employees = jsonObject.manageCompany("find", "Engineering");
console.log(employees);  // Outputs the list of employees in the Engineering department

// 5. Find one specific employee in the Engineering department
const employee = jsonObject.manageCompany("findOne", "Engineering", { id: 1 });
console.log(employee);  // Outputs the employee object with id 1
