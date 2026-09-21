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


// 🟢 Question 2 – Bank Account Withdrawal
// Create a class called BankAccount.
// The constructor should accept:
// accountHolder
// balance
// Create two methods:
// deposit(amount) → adds money to the balance.
// withdraw(amount) → subtracts money only if sufficient balance is available.
// Create:
// Account Holder: Sivaponnuvel
// Balance: 20000
// Then perform:
// account.deposit(5000);
// account.withdraw(8000);
// Expected final balance:
// Deposit: ₹5000
// Current Balance: ₹25000
// Withdrawal: ₹8000
// Current Balance: ₹17000
// If the withdrawal amount is greater than the balance, print:
// Insufficient Balance
// Condition: Use this.balance for both deposit and withdrawal.

class BankAccount{
    constructor(accountHolder, balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    };
    deposit(amount){
        this.balance += amount;
        console.log(`Deposit: ₹${amount}`);
        console.log(`Current Balance: ₹${this.balance}`);
    };
    withdraw(amount){
        if (this.balance < amount){
            console.log("Insufficient Balance");
        }
        else{
            this.balance -= amount;
            console.log(`Withdrawal: ₹${amount}`);
            console.log(`Current Balance: ₹${this.balance}`);
        }
    };
}

const account = new BankAccount("Sivaponnuvel", 20000);

account.deposit(5000);
account.withdraw(8000);