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


// 🟢 Question 2 – Simple Age Checker
// Topics: DOM, .value, addEventListener(), if...else
// Consider this HTML:
// <input id="age" type="number" placeholder="Enter your age">
// <button id="checkBtn">Check Age</button>
// <p id="result"></p>
// Write JavaScript code to:
// 1. Select the age input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the age entered by the user.
// 4. If the age is 18 or above, display "You are eligible to vote".
// 5. Otherwise, display "You are not eligible to vote".
// Expected output:
// If the user enters 20:
// You are eligible to vote
// If the user enters 16:
// You are not eligible to vote
// Condition: Use .value, addEventListener(), and if...else.

let age = document.getElementById("age");
let checkBtn = document.getElementById("checkBtn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", function(){
    let ageText = Number(age.value);

    if(ageText >= 18){
        result.textContent = "You are eligible to vote";
    }
    else{
        result.textContent = "You are not eligible to vote";   
    }
})