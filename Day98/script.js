// 🟢 Question 1 – Simple Wallet Expense Tracker
// Topics: DOM, .value, Number(), if...else if...else, Arithmetic Operators, Event Listeners
// Consider this HTML:
// <h2>Wallet Expense Tracker</h2>
// <input type="number" id="expenseInput" placeholder="Enter expense amount">
// <button id="expenseBtn">Add Expense</button>
// <p id="result"></p>
// Use this initial wallet balance:
// let walletBalance = 8000;
// Write JavaScript code to:
// 1. Select the expense input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the expense amount using .value and Number().
// 4. If the expense amount is 0 or negative, display Invalid Expense Amount.
// 5. If the expense amount is greater than the wallet balance, display Insufficient Wallet Balance.
// 6. Otherwise, subtract the expense amount from the wallet balance.
// 7. Display the expense amount and remaining wallet balance.
// 8. The wallet balance must update after every successful expense.
// Expected Output:
// Example 1:
// Initial Wallet Balance: ₹8000
// Expense Amount: 1500
// Remaining Wallet Balance: ₹6500
// Example 2 (another expense):
// Current Wallet Balance: ₹6500
// Expense Amount: 2000
// Remaining Wallet Balance: ₹4500
// Example 3:
// Expense Amount: 5000
// Insufficient Wallet Balance
// Example 4:
// Expense Amount: -200
// Invalid Expense Amount
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Use if...else if...else.
// - Use arithmetic operators.
// - Display the result using textContent.
// - Do not reset the wallet balance after every click.

let walletBalance = 8000;

let expenseInput = document.getElementById("expenseInput");
let expenseBtn = document.getElementById("expenseBtn");
let result = document.getElementById("result");

expenseBtn.addEventListener("click", function(){

    let expenseInputText = Number(expenseInput.value);

    if(expenseInputText <= 0){
        result.textContent = "Invalid Expense Amount";
    }
    else if(walletBalance < expenseInputText){
        result.textContent = "Insufficient Wallet Balance";
    }
    else{

        let previousBalance = walletBalance;

        walletBalance -= expenseInputText;

        result.textContent = `Previous Wallet Balance: ₹${previousBalance}
        Expense Amount: ₹${expenseInputText}
        Remaining Wallet Balance: ₹${walletBalance}`;
    }
})

