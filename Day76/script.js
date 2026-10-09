// 🟢 Question 1 – Button Click Greeting
// Consider this HTML:
// <h2 id="message">Welcome</h2>
// <button id="greetBtn">Click Me</button>
// Write JavaScript code to:
// 1. Select the button using getElementById().
// 2. Add a click event listener to the button.
// 3. When the button is clicked, change the <h2> text to:
// Hello Siva! Welcome to JavaScript.
// Condition: Use addEventListener().

let msg = document.getElementById("message");
let btn = document.getElementById("greetBtn");

btn.addEventListener("click", function(){
    msg.textContent = "Hello Siva! Welcome to JavaScript.";
})


// 🟢 Question 2 – Product Button
// Consider this HTML:
// <h2 id="productName">Product</h2>
// <p id="productPrice">Price</p>
// <button id="showBtn">Show Product</button>
// When the user clicks Show Product, use an event listener to change:
// Product
// to:
// Laptop
// and
// Price
// to:
// ₹55000
// Requirements:
// 1. Select the button.
// 2. Add a click event listener.
// 3. Inside the event listener, update both productName and productPrice.
// 4. The values should change only after the button is clicked.
// Condition: Use addEventListener("click", ...).

let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let showBtn = document.getElementById("showBtn");

showBtn.addEventListener("click", function(){
    productName.textContent = "Laptop";
    productPrice.textContent = "₹55000";
})