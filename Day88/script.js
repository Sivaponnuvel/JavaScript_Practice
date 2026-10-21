// 🟢 Question 1 – Product Search System
// Topics: DOM, Event Listeners, Arrays, Objects, filter(), Conditional Statements
// Consider this HTML:
// <input id="searchInput" type="text" placeholder="Search products">
// <button id="searchBtn">Search</button>
// <div id="productList"></div>
// <p id="message"></p>
// You have the following product data:
// let products = [
//     { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
//     { id: 2, name: "Mouse", price: 1000, category: "Electronics" },
//     { id: 3, name: "Keyboard", price: 2000, category: "Electronics" },
//     { id: 4, name: "Office Chair", price: 5000, category: "Furniture" },
//     { id: 5, name: "Study Table", price: 8000, category: "Furniture" }
// ];
// Write JavaScript code to:
// 1. Select all the required HTML elements using DOM methods.
// 2. Add a click event listener to the Search button.
// 3. Read the search text from the input field.
// 4. Search for products whose names contain the entered text, ignoring uppercase and lowercase differences.
// 5. Display each matching product's name, price, and category inside productList.
// 6. If no products match, display No products found inside the message paragraph.
// 7. If products match, clear the message paragraph.
// Expected behavior:
// If the user searches for lap, display:
// Laptop
// Price: ₹55000
// Category: Electronics
// If the user searches for phone, display:
// No products found
// Conditions:
// - Use addEventListener("click", ...).
// - Use filter() to search the products.
// - Results must appear on the webpage.
// - Searching should work regardless of letter case.

let products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 1000, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 2000, category: "Electronics" },
    { id: 4, name: "Office Chair", price: 5000, category: "Furniture" },
    { id: 5, name: "Study Table", price: 8000, category: "Furniture" }
];

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let productList = document.getElementById("productList");
let message = document.getElementById("message");

searchBtn.addEventListener("click", function () {

    let searchText = searchInput.value.toLowerCase();

    let filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchText);
    });

    productList.innerHTML = "";

    if (filteredProducts.length > 0) {

        message.textContent = "";

        filteredProducts.forEach(function (product) {
            productList.innerHTML += `
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: ₹${product.price}</p>
                    <p>Category: ${product.category}</p>
                    <hr>
                </div>
            `;
        });

    } else {

        message.textContent = "No products found";
    }
});


// 🟢 Question 2 – Shopping Cart Total Calculator
// Topics: DOM, Event Listeners, Arrays, Objects, reduce(), Conditional Statements
// Consider this HTML:
// <h2>Shopping Cart</h2>
// <div id="cartItems"></div>
// <button id="calculateBtn">Calculate Total</button>
// <p id="totalAmount"></p>
// <p id="cartMessage"></p>
// You have the following cart data:
// let cart = [
//     { name: "Laptop", price: 55000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];
// Write JavaScript code to:
// 1. Select all the required HTML elements.
// 2. Display each cart item's name, price, and quantity inside cartItems.
// 3. Add a click event listener to the Calculate Total button.
// 4. When the button is clicked, calculate the total cost of all cart items, including their quantities.
// 5. Display the final amount inside totalAmount in this format:
// Total Amount: ₹59000
// 6. If the cart is empty, display Your cart is empty inside cartMessage.
// 7. If the cart contains items, clear cartMessage.
// Conditions:
// - Use addEventListener("click", ...).
// - Use reduce() to calculate the total.
// - The total must account for price × quantity.
// - The total should be calculated when the button is clicked.

let cart = [
    { name: "Laptop", price: 55000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

let cartItems = document.getElementById("cartItems");
let calculateBtn = document.getElementById("calculateBtn");
let totalAmount = document.getElementById("totalAmount");
let cartMessage = document.getElementById("cartMessage");

cart.forEach(function(item) {
    cartItems.innerHTML += `
        <div>
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <hr>
        </div>
    `;
});

calculateBtn.addEventListener("click", function() {

    if (cart.length === 0) {
        cartMessage.textContent = "Your cart is empty";
        totalAmount.textContent = "";
    } else {

        cartMessage.textContent = "";

        let total = cart.reduce(function(sum, item) {
            return sum + (item.price * item.quantity);
        }, 0);

        totalAmount.textContent = `Total Amount: ₹${total}`;
    }
});