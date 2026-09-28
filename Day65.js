// 🟢 Question 1 – Employee Inheritance
// Create a parent class called Employee.
// It should have:
// name
// salary
// Create a method:
// displayInfo()
// that prints:
// Name: Siva
// Salary: 30000
// Then create a child class called Developer that extends Employee.
// Add one additional property:
// language
// Create a Developer object:
// let developer1 = new Developer("Siva", 30000, "JavaScript");
// Print:
// Name: Siva
// Salary: 30000
// Language: JavaScript
// Conditions:
// Use class
// Use extends
// Use super()
// Developer must inherit displayInfo() from Employee
// Don't duplicate the name and salary properties inside Developer

class Employee{
    constructor (name, salary){
        this.name = name;
        this.salary = salary;
    };
    displayInfo(){
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    };
}

class Developer extends Employee{
    constructor(name, salary, language){
        super(name, salary);
        this.language = language;
    }
    displayInfo(){
        super.displayInfo();
        console.log(`Language: ${this.language}`);
    }
}

const developer1 = new Developer("Siva", 30000, "JavaScript");

developer1.displayInfo();


// 🟢 Question 2 – Method Overriding
// Create a parent class called Vehicle.
// Create a method:
// start()
// that prints:
// Vehicle is starting
// Create a child class called Car that extends Vehicle.
// Inside Car, override the start() method so that it prints:
// Car engine is starting
// Create objects:
// let vehicle1 = new Vehicle();
// let car1 = new Car();
// Call:
// vehicle1.start();
// car1.start();
// Expected Output:
// Vehicle is starting
// Car engine is starting
// Conditions:
// Use extends ✅
// Override the start() method in Car ✅
// Do not create a separate function outside the classes ✅

class Vehicle{
    start(){
        console.log("Vehicle is starting");
    };
}

class Car extends Vehicle{
    start(){
        console.log("Car engine is starting");
    };
}

let vehicle1 = new Vehicle();
let car1 = new Car();

vehicle1.start();
car1.start();