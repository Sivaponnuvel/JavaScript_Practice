// 🟢 Question 1 – Simple Bank Deposit System
// Topics: DOM, .value, Number(), if...else, Arithmetic Operators, Event Listeners
// Consider this HTML:
// <h2>Bank Deposit System</h2>
// <input type="number" id="depositInput" placeholder="Enter deposit amount">
// <button id="depositBtn">Deposit Money</button>
// <p id="balanceResult"></p>
// Use this initial account balance:
// let balance = 5000;
// Write JavaScript code to:
// 1. Select the deposit input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the deposit amount using .value and Number().
// 4. If the amount is 0 or negative, display Invalid Deposit Amount.
// 5. Otherwise, add the deposit amount to the existing balance.
// 6. Display the deposited amount and updated balance.
// 7. The balance must update after every successful deposit.
// Expected Output:
// Example 1:
// Initial Balance: ₹5000
// Deposit Amount: 2000
// Updated Balance: ₹7000
// Example 2 (another deposit):
// Current Balance: ₹7000
// Deposit Amount: 3000
// Updated Balance: ₹10000
// Example 3:
// Deposit Amount: -500
// Invalid Deposit Amount
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Use if...else.
// - Use arithmetic operators.
// - Display the result using textContent.
// - Do not reset the balance after every click.

let balance = 5000;

let depositInput = document.getElementById("depositInput");
let depositBtn = document.getElementById("depositBtn");
let balanceResult = document.getElementById("balanceResult");

depositBtn.addEventListener("click", function(){

    let depositInputText = Number(depositInput.value);

    if(depositInputText <= 0){
        balanceResult.textContent = "Invalid Deposit Amount";
    }
    else{
        let oldBalance = balance;

        balance += depositInputText

        balanceResult.textContent = `Initial Balance: ₹${oldBalance}
        Deposit Amount: ${depositInputText}
        Updated Balance: ₹${balance}`;
    }
})


