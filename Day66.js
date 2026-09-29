// 🟢 Question 1 – Bank Account Inheritance
// Create a parent class called BankAccount.
// It should have:
// accountHolder
// balance
// Create a method:
// showBalance()
// that prints:
// Account Holder: Siva
// Balance: 50000
// Then create a child class called SavingsAccount that extends BankAccount.
// Add:
// interestRate
// Create a method:
// showDetails()
// that prints:
// Account Holder: Siva
// Balance: 50000
// Interest Rate: 6%
// Create the object:
// let account1 = new SavingsAccount("Siva", 50000, 6);
// Conditions:
// Use extends ✅
// Use super() ✅
// SavingsAccount must inherit accountHolder and balance ✅
// Don't duplicate parent properties in the child class ✅

class BankAccount{
    constructor(accountHolder, balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    };
    showBalance(){
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Balance: ${this.balance}`);
    };
}

class SavingsAccount extends BankAccount{
    constructor(accountHolder, balance, rate){
        super(accountHolder, balance);
        this.rate = rate;
    };
    showDetails(){
        super.showBalance();
        console.log(`Interest Rate: ${this.rate}%`)
    };
}

let account1 = new SavingsAccount("Siva", 50000, 6);

account1.showDetails();


// 🟢 Question 2 – Method Overriding with super
// Create a parent class called Employee.
// It should have:
// constructor(name)
// and a method:
// work()
// that prints:
// Siva is working
// Create a child class called Developer that extends Employee.
// Override the work() method so that it prints:
// Siva is developing software
// Create:
// let developer1 = new Developer("Siva");
// developer1.work();
// Additional condition 🔥
// Inside the overridden work() method, first call the parent work() using super.work(), then print the Developer message.
// Expected output:
// Siva is working
// Siva is developing software
// Conditions:
// Use extends ✅
// Use super() in the constructor ✅
// Override work() ✅
// Use super.work() inside the overridden method ✅
// No separate function outside the classes ✅

class Employee{
    constructor(name){
        this.name = name;
    };
    work(){
        console.log(`${this.name} is working`);
    };
}

class Developer extends Employee{
    constructor(name){
        super(name);
    };
    work(){
        super.work();
        console.log(`${this.name} is developing software`);
    };
}

let developer1 = new Developer("Siva");

developer1.work()