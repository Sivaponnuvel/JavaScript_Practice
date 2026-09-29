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


