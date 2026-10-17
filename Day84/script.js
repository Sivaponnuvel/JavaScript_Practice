// Question 1 – Shopping Cart Total Calculator
// Topics: Array of objects, for...of, functions, conditional statements, and DOM.
// Create a feature that calculates the total price of selected products in a shopping cart.
// HTML Code
// <h2>Shopping Cart</h2>
// <div id="cartItems"></div>
// <button id="calculateBtn">Calculate Total</button>
// <div id="result"></div>
// Requirements
// 1. Create an array containing at least four product objects. Each object must have name, price, quantity, and selected properties.
// Example:
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1, selected: true },
//     { name: "Mouse", price: 500, quantity: 2, selected: true },
//     { name: "Keyboard", price: 1500, quantity: 1, selected: false },
//     { name: "Monitor", price: 12000, quantity: 1, selected: true }
// ];
// 2. Display each product's name, price, quantity, and selection status inside cartItems.
// 3. Create a function named calculateTotal().
// 4. When the Calculate Total button is clicked, use a for...of loop to calculate the total price of selected products only.
// 5. Calculate each product's subtotal using price * quantity.
// 6. Display the final total inside the result div.
// 7. If no products are selected, display No products selected.
// Expected Output
// For the example data above:
// Laptop - ₹50000 - Quantity: 1
// Mouse - ₹500 - Quantity: 2
// Keyboard - ₹1500 - Quantity: 1
// Monitor - ₹12000 - Quantity: 1
// Total: ₹62000
// Condition: Use addEventListener(). Do not use alert()

let cart = [
    { name: "Laptop", price: 50000, quantity: 1, selected: true },
    { name: "Mouse", price: 500, quantity: 2, selected: true },
    { name: "Keyboard", price: 1500, quantity: 1, selected: false },
    { name: "Monitor", price: 12000, quantity: 1, selected: true }
];

let cartItems = document.getElementById("cartItems");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

for (let product of cart){
    cartItems.innerHTML += `<p>${product.name} - ₹${product.price} - Quantity: ${product.quantity} - Selected: ${product.selected ? "Yes" : "No"}</p>`
}

function calculateTotal(){
    let total = 0
    let hasSelected = false;

    for(let product of cart){
        if(product.selected){
            total += product.price * product.quantity;
            hasSelected = true;
        }
    }

    if(hasSelected){
            result.innerHTML = `Total: ₹${total}`
        }
    else{
        result.innerHTML = "No products selected";
    }
}

calculateBtn.addEventListener("click", calculateTotal);


