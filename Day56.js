// 🟢 Question 1 – Employee Management
// Create a class called Employee.
// The class should have a constructor with:
// name
// role
// salary
// Create one employee object with:
// Name: Sivaponnuvel
// Role: Python Developer
// Salary: 30000
// Then print:
// Employee Name: Sivaponnuvel
// Role: Python Developer
// Salary: 30000
// Condition: Use a JavaScript class, constructor, and new.

class Employee{
    constructor(name, role, salary){
        this.name = name;
        this.role = role;
        this.salary = salary;
    }
    display(){
        console.log(`Employee Name: ${this.name}`);
        console.log(`Role: ${this.role}`);
        console.log(`Salary: ${this.salary}`);
    }
}

const emp = new Employee("Sivaponnuvel", "Python Developer", 30000);

emp.display();


