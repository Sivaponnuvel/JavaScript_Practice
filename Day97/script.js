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


// 🟢 Question 2 – Simple Shopping Cart Quantity Updater
// Topics: DOM, Arrays, Objects, Loops, .value, .trim(), .toLowerCase(), Event Listeners
// Consider this HTML:
// <h2>Shopping Cart Quantity Updater</h2>
// <input type="text" id="productInput" placeholder="Enter product name">
// <input type="number" id="quantityInput" placeholder="Enter quantity to add">
// <button id="updateBtn">Update Quantity</button>
// <p id="message"></p>
// Use this shopping cart array:
// let cart = [
//     { name: "Laptop", quantity: 2 },
//     { name: "Mouse", quantity: 5 },
//     { name: "Keyboard", quantity: 3 }
// ];
// Write JavaScript code to:
// 1. Select both input fields, the button, and the message paragraph.
// 2. Add a click event listener to the button.
// 3. Read the product name and quantity entered by the user.
// 4. Remove unwanted spaces and convert the product name to lowercase.
// 5. If the product name is empty, display Please enter a product name.
// 6. If the quantity is 0, negative, or not a whole number, display Invalid Quantity.
// 7. Search for the product in the cart using a for or for...of loop.
// 8. If the product exists, add the entered quantity to its existing quantity.
// 9. Display Quantity Updated - Product: X, Total Quantity: Y, replacing X and Y with the product name and updated quantity.
// 10. If the product does not exist, display Product Not Found.
// 11. The updated quantity must remain changed for future button clicks.
// Expected Output:
// Example 1:
// Input Product: laptop
// Input Quantity: 3
// Quantity Updated - Product: Laptop, Total Quantity: 5
// Example 2 (another update):
// Input Product: LAPTOP
// Input Quantity: 2
// Quantity Updated - Product: Laptop, Total Quantity: 7
// Example 3:
// Input Product: Mouse
// Input Quantity: -2
// Invalid Quantity
// Example 4:
// Input Product: Mobile
// Input Quantity: 2
// Product Not Found
// Example 5:
// Input Product: "   "
// Input Quantity: 2
// Please enter a product name
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value, .trim(), .toLowerCase(), and Number().
// - Use Number.isInteger() for whole-number validation.
// - Use a for or for...of loop.
// - Use if...else if...else.
// - Display the result using textContent.
// - Do not use .find() or .filter().
// - Do not reset the cart after every click.

let cart = [
    { name: "Laptop", quantity: 2 },
    { name: "Mouse", quantity: 5 },
    { name: "Keyboard", quantity: 3 }
];

let productInput = document.getElementById("productInput");
let quantityInput = document.getElementById("quantityInput");
let updateBtn = document.getElementById("updateBtn");
let message = document.getElementById("message");

updateBtn.addEventListener("click", function(){

    let productInputText = productInput.value.trim().toLowerCase();
    let quantityInputText = Number(quantityInput.value);

    if(productInputText === ""){
        message.textContent = "Please enter a product name";
    }
    else if(quantityInputText <= 0 || isNaN(quantityInputText) || !Number.isInteger(quantityInputText)){
        message.textContent = "Invalid Quantity";
    }
    else{
        let found = false;

        for(let product of cart){
            if(product.name.toLowerCase() === productInputText){
                found = true;

                product.quantity += quantityInputText;

                message.textContent = `Quantity Updated - Product: ${product.name}, Total Quantity: ${product.quantity}`
            }
        }

        if(!found){
            message.textContent = "Product Not Found";
        }
    }
})