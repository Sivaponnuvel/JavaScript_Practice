// 🟢 Question 1 – Simple ATM Withdrawal System
// Topics: DOM, .value, Number(), if...else if...else, Arithmetic Operators, Event Listeners
// Consider this HTML:
// <h2>ATM Withdrawal System</h2>
// <input type="number" id="amount" placeholder="Enter withdrawal amount">
// <button id="withdrawBtn">Withdraw</button>
// <p id="result"></p>
// Use this initial account balance:
// let balance = 10000;
// Write JavaScript code to:
// 1. Select the amount input, withdrawal button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the withdrawal amount using .value and Number().
// 4. Check the withdrawal amount using the following conditions:
//    - If the amount is 0 or negative, display Invalid Withdrawal Amount.
//    - If the amount is greater than the available balance, display Insufficient Balance.
//    - Otherwise, subtract the withdrawal amount from the account balance.
// 5. After a successful withdrawal, display the updated balance.
// 6. The balance must update after every successful withdrawal.
// Expected Output:
// Example 1:
// Initial Balance: ₹10000
// Withdrawal Amount: 3000
// Remaining Balance: ₹7000
// Example 2 (another withdrawal):
// Current Balance: ₹7000
// Withdrawal Amount: 2000
// Remaining Balance: ₹5000
// Example 3:
// Current Balance: ₹5000
// Withdrawal Amount: 6000
// Insufficient Balance
// Example 4:
// Withdrawal Amount: -500
// Invalid Withdrawal Amount
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Use if...else if...else.
// - Use arithmetic operators.
// - Display the result using textContent.
// - Do not reset the balance to ₹10000 after every click.
// - Do not use external libraries.

let balance = 10000;

let amount = document.getElementById("amount");
let withdrawBtn = document.getElementById("withdrawBtn");
let result = document.getElementById("result");

withdrawBtn.addEventListener("click", function(){

    let amountText = Number(amount.value);

    if(amountText <= 0){
        result.textContent = "Invalid Withdrawal Amount";
    }
    else if(amountText > balance){
        result.textContent = "Insufficient Balance";
    }
    else{
        let previousBalance = balance;

        balance = balance - amountText;

        result.textContent = `Initial Balance: ₹${previousBalance}\nWithdrawal Amount: ${amountText}\nRemaining Balance: ₹${balance}`;
    }
})

