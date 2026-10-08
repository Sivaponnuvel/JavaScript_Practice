// 🟢 Question 1 – Product Display
// Consider this HTML:
// <h2 id="productName">Product Name</h2>
// <p id="productPrice">Price</p>
// <p id="productStock">Stock</p>
// Create JavaScript code to:
// 1. Change productName to "Laptop"
// 2. Change productPrice to "₹55000"
// 3. Change productStock to "In Stock"
// 4. Display all three updated values on the webpage.
// Condition: Use DOM methods such as getElementById() and textContent or innerHTML.

document.getElementById("productName").textContent = "Laptop";

document.getElementById("productPrice").textContent = "₹55000";

document.getElementById("productStock").textContent = "In Stock";


