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


// 🟢 Question 2 – Product Management
// Create a class called Product.
// The constructor should accept:
// name
// price
// category
// Create a product object with:
// Name: Laptop
// Price: 55000
// Category: Electronics
// Then print:
// Product: Laptop
// Price: 55000
// Category: Electronics
// Condition: Create the object using new Product(...) and access the values using object properties.

class Product{
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
    showAnswer(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Category: ${this.category}`);
    }
}

const pro = new Product("Laptop", 55000, "Electronics");

pro.showAnswer();