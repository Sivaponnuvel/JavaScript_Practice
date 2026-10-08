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


// 🟢 Question 2 – User Profile Form
// Consider this HTML:
// <input id="username" type="text">
// <input id="email" type="email">
// <button id="submitBtn">Submit</button>
// <p id="result"></p>
// Write JavaScript code to:
// 1. Set the username input value to "Siva"
// 2. Set the email input value to "siva@gmail.com"
// 3. Change the button text from "Submit" to "Register"
// 4. Display this message inside result:
// User Siva registered successfully
// Condition: Use DOM methods to modify the input values, button text, and paragraph content.

let userName = "Siva"

document.getElementById("username").value = userName;

document.getElementById("email").value = "siva@gmail.com";

document.getElementById("submitBtn").textContent = "Register";

document.getElementById("result").textContent = `User ${userName} registered successfully`