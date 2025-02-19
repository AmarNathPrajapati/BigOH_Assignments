function manageCompany(jsonObject, operation, departmentName, employee = null) {//employee detail optional

    const departments = jsonObject.company.departments;//extracting all department

    // console.log("adffasaddf__ad",departments);

    const department = departments.find(dept => dept.name === departmentName);//findiing actual department whero to perform change

    if (!department) {
        console.log(`Department '${departmentName}' not found.`);
        return null;//if department not found;
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
            //returning list of all employee
            return department.employees;

        default:
            console.log("Invalid operation.");
            return null;
    }
}

const jsonObject = {
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

//  Add Employee
manageCompany(jsonObject, "add", "Engineering", { "id": 4, "name": "Amar", "role": "TGT" });

//  Remove Employee
manageCompany(jsonObject, "remove", "HR", { "id": 3 });

//  Update Employee
manageCompany(jsonObject, "update", "Engineering", { "id": 2, "name": "Robert", "role": "Lead Engineer" });

//  Find Employees
const employees = manageCompany(jsonObject, "find", "Engineering");
console.log(employees);  
