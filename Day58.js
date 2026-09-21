// 🟢 Question 1 – Employee Salary Management
// Create a class called Employee.
// The constructor should accept:
// name
// role
// salary
// Create these methods:
// displayDetails() → prints the employee details.
// increaseSalary(amount) → adds the given amount to the current salary and prints the new salary.
// Create:
// Name: Sivaponnuvel
// Role: Python Developer
// Salary: 30000
// Then call:
// employee.displayDetails();
// employee.increaseSalary(5000);
// Expected Output:
// Name: Sivaponnuvel
// Role: Python Developer
// Salary: ₹30000
// Salary increased by ₹5000
// New Salary: ₹35000
// Condition: Use this.salary to update the salary.

class Employee{
    constructor(name, role, salary){
        this.name = name;
        this.role = role;
        this.salary = salary;
    };
    displayDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Role: ${this.role}`);
        console.log(`Salary: ${this.salary}`);
    };
    increaseSalary(amount){
        this.salary += amount;
        console.log(`Salary increased by ₹${amount}`);
        console.log(`New Salary: ${this.salary}`);
    }
}

const employee = new Employee("Sivaponnuvel", "Python Developer", 30000);

employee.displayDetails();
employee.increaseSalary(5000);

