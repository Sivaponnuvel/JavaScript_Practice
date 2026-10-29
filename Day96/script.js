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


// 🟢 Question 2 – Simple Product Stock Checker
// Topics: DOM, Arrays, Objects, .value, .trim(), .toLowerCase(), Loops, Conditional Statements
// Consider this HTML:
// <h2>Product Stock Checker</h2>
// <input type="text" id="productInput" placeholder="Enter product name">
// <button id="checkBtn">Check Stock</button>
// <p id="message"></p>
// Use this product array:
// let products = [
//     { name: "Laptop", stock: 5 },
//     { name: "Mouse", stock: 0 },
//     { name: "Keyboard", stock: 10 },
//     { name: "Monitor", stock: 3 }
// ];
// Write JavaScript code to:
// 1. Select the product input, button, and message paragraph.
// 2. Add a click event listener to the button.
// 3. Read the product name entered by the user.
// 4. Remove unwanted spaces using .trim() and convert the input to lowercase using .toLowerCase().
// 5. Search for the product in the array using a loop.
// 6. If the product exists and its stock is greater than 0, display Product Available - Stock: X, where X is the available quantity.
// 7. If the product exists but its stock is 0, display Product Out of Stock.
// 8. If the product does not exist, display Product Not Found.
// 9. If the input is empty or contains only spaces, display Please enter a product name.
// Expected Output:
// Example 1:
// Input: "laptop"
// Output: Product Available - Stock: 5
// Example 2:
// Input: "MOUSE"
// Output: Product Out of Stock
// Example 3:
// Input: "  Keyboard  "
// Output: Product Available - Stock: 10
// Example 4:
// Input: "Mobile"
// Output: Product Not Found
// Example 5:
// Input: "    "
// Output: Please enter a product name
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value, .trim(), and .toLowerCase().
// - Use a for loop or for...of loop to search the array.
// - Use if...else if...else.
// - Display the result using textContent.
// - Match complete product names, not partial names.
// - Do not use .find() or .filter().

let products = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 0 },
    { name: "Keyboard", stock: 10 },
    { name: "Monitor", stock: 3 }
];

let productInput = document.getElementById("productInput");
let checkBtn = document.getElementById("checkBtn");
let message = document.getElementById("message");

checkBtn.addEventListener("click", function(){

    let productInputText = productInput.value.trim().toLowerCase();

    if(productInputText === ""){
        message.textContent = "Please enter a product name";
    }
    
    else{
        let found = false;

        for(let product of products){
            if(product.name.toLowerCase() === productInputText){

                found = true;

                if(product.stock > 0){
                    message.textContent = `Product Available - Stock: ${product.stock}`;
                }
                else{
                    message.textContent = "Product Out of Stock"
                }

                break
            }
        }

        if(!found){
            message.textContent = "Product Not Found"
        }
    }
})