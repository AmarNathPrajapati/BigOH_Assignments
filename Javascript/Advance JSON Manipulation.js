function generateEmployeeReport(employeesData, projectsData) {
    let employeeMap = new Map();//efficient to store key value pair, fast lookup
    
    // Initialize employees in map
    employeesData.employees.forEach(emp => {
        employeeMap.set(emp.employee_id, {
            employee_id: emp.employee_id,
            name: emp.name,
            role: emp.role,
            total_hours_worked: 0,
            total_rating: 0,
            project_count: 0,
            projects: []
        });
    });

    // Process projects
    projectsData.projects.forEach(proj => {
        proj.hours.forEach(empHours => {
            //Getting employee ID of that project.
            let employee = employeeMap.get(empHours.employee_id);
            if (employee) {
                employee.total_hours_worked += empHours.hours_worked;
                employee.total_rating += proj.rating;
                employee.project_count += 1;
                employee.projects.push({
                    project_id: proj.project_id,
                    name: proj.name,
                    hours_worked: empHours.hours_worked,
                    rating: proj.rating
                });
            }
        });
    });

    // Convert map to final structured array with average rating calculation
    let result = [];
    for (let employee of employeeMap.values()) {
        employee.average_project_rating = employee.project_count > 0 
            ? parseFloat((employee.total_rating / employee.project_count).toFixed(2)) 
            : 0;
        delete employee.total_rating;
        delete employee.project_count;
        result.push(employee);
    }
    // console.log("asdfasdsadf___asdfasdfasdadfs",JSON.stringify(result, null, 2));
    return result;
}

// Sample Data
const employeesData = {
    "employees": [
        { "employee_id": "E001", "name": "John Doe", "role": "Developer" },
        { "employee_id": "E002", "name": "Jane Smith", "role": "Designer" },
        { "employee_id": "E003", "name": "Emily Davis", "role": "Project Manager" }
    ]
};

const projectsData = {
    "projects": [
        { 
            "project_id": "P001", "name": "Project Alpha", "hours": [
                { "employee_id": "E001", "hours_worked": 120 },
                { "employee_id": "E002", "hours_worked": 80 }
            ], "rating": 4.5 
        },
        { 
            "project_id": "P002", "name": "Project Beta", "hours": [
                { "employee_id": "E001", "hours_worked": 150 },
                { "employee_id": "E003", "hours_worked": 200 }
            ], "rating": 4.7 
        },
        { 
            "project_id": "P003", "name": "Project Gamma", "hours": [
                { "employee_id": "E002", "hours_worked": 50 },
                { "employee_id": "E003", "hours_worked": 60 }
            ], "rating": 4.0 
        }
    ]
};

// Run the function
const generatedResult = generateEmployeeReport(employeesData, projectsData)
console.log(JSON.stringify(generatedResult, null, 2));
//bhai, es code ko line by line explain karana..... ye batana ki map kyu use hua... aur ye bhi dekho ki final output me "average_project_rating" kyu nahi aa raha hai...