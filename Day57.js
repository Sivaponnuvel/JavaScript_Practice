// 🟢 Question 1 – Bank Account
// Create a class called BankAccount.
// The constructor should accept:
// accountHolder
// balance
// Create an account for:
// Account Holder: Sivaponnuvel
// Balance: 10000
// Create a method called deposit(amount) that:
// Adds the amount to the current balance.
// Prints:
// Sivaponnuvel deposited ₹5000
// Current Balance: ₹15000
// Then call:
// account.deposit(5000);
// Condition: Use this.balance to update the balance.

class BankAccount {
    constructor(accountHolder, balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    };
    deposit(amount){
        console.log(`${this.accountHolder} deposited ₹${amount}`);
        this.balance += amount;
        console.log(`Current Balance: ₹${this.balance}`);
    };
}

const account = new BankAccount("Sivaponnuvel", 10000);
account.deposit(5000);


