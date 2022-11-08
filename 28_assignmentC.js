class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
    } 
    const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
    const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
    const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
    const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
    const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
    const emp_vinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
    const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
    
    const array_employee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika,emp_vinay, emp_mahi];
    //  let [emp0,emp1,emp2,emp3,emp4, emp5, emp6] = array_employee;
    //  console.log( emp0,emp1,emp2,emp3,emp4, emp5, emp6);

    
console.log(`------------------------TCS Employee Name and Company Name----------------------------`);
for (const employee of array_employee) {
    if(employee.emp_company=="TCS"){
        console.log(`Employee Name : ${employee.emp_name}       Company Name: ${employee.emp_company}`);
    }
}

console.log(`-------------Employee Name Whose Salary Greater than Equal to 750000 with IT Department--------------------`);
for (const employee of array_employee) {
    if(employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(`Employee Name : ${employee.emp_name}  Company Name: ${employee.emp_company} Department: ${employee.emp_dept} Salary : ${employee.emp_salary}`);  
    }
}

console.log(`-------------Employee Name Whose Salary Greater than Equal to 750000 with IT Department--------------------`);
for (const employee of array_employee) {
        console.log(`Salaries of Employees : ${employee.emp_salary}`);
    
}

let sum = array_employee.emp_salary.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);