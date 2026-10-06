// 🟢 Question 1 – Select and Update HTML Content
// Create the following HTML:
// <h1 id="title">Welcome</h1>
// <p id="message">Old message</p>
// Using JavaScript:
// Select the <h1> using getElementById().
// Change its text to:
// JavaScript DOM
// Select the <p> using getElementById().
// Change its text to:
// DOM manipulation is easy
// Change the <h1> text color to blue using JavaScript.
// Conditions:
// Must use document.getElementById()
// Must use .textContent
// Must modify the CSS using .style
// Don't modify the HTML text directly.

document.getElementById("title").textContent = "JavaScript DOM";

document.getElementById("message").textContent = "DOM manipulation is easy";

document.getElementById("title").style.color = "blue"


// 🟢 Question 2 – Product Card DOM Manipulation
// Create this HTML:
// <div id="product">
//     <h2 id="productName">Mobile</h2>
//     <p id="productPrice">Price: ₹15000</p>
//     <p id="productStock">In Stock</p>
// </div>
// Using JavaScript:
// Select the product name and change it to:
// iPhone 15
// Change the price to:
// Price: ₹55000
// Change the stock message to:
// Out of Stock
// Change the stock message color to red.
// Change the product <div> background color using JavaScript.
// Conditions 🔥:
// Must use document.getElementById()
// Must use .textContent
// Must use .style
// No querySelector() for this question
// No inline CSS in HTML
// All changes must be done using JavaScript.

document.getElementById("productName").textContent = "iPhone 15";

document.getElementById("productPrice").textContent = "Price: ₹55000";

document.getElementById("productStock").textContent = "Out of Stock";

document.getElementById("productStock").style.color = "red";

document.getElementById("product").style.backgroundColor = "green"