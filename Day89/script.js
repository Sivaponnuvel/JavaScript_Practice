// 🟢 Question 1 – Show/Hide Product Details
// Topics: DOM, addEventListener(), textContent
// Consider this HTML:
// <h2 id="productName">Product Name</h2>
// <p id="productPrice">Price will appear here</p>
// <button id="showBtn">Show Product</button>
// Write JavaScript code to:
// 1. Select the product name, price paragraph, and button.
// 2. Add a click event listener to the button.
// 3. When the button is clicked, change the product name to "Laptop".
// 4. Change the price to "Price: ₹55000".
// Expected output after clicking the button:
// Laptop
// Price: ₹55000
// Condition: Use getElementById() and addEventListener("click", ...).

let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let showBtn = document.getElementById("showBtn");

showBtn.addEventListener("click", function(){
    productName.textContent = "Laptop";
    productPrice.textContent = "Price: ₹55000";
})


