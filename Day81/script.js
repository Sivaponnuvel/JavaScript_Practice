// Question 1 – Product Discount Calculator
// Concepts: Functions, parameters, return values, arithmetic operators, DOM, click events.
// Imagine you are developing an e-commerce website. When a user enters a product price and discount percentage, the website should calculate and display the final price.
// HTML
// <h2>Product Discount Calculator</h2>
// <label for="priceInput">Product Price:</label>
// <input type="number" id="priceInput" placeholder="Enter price">
// <br><br>
// <label for="discountInput">Discount Percentage:</label>
// <input type="number" id="discountInput" placeholder="Enter discount %">
// <br><br>
// <button id="calculateBtn">Calculate Discount</button>
// <p id="originalPrice"></p>
// <p id="discountAmount"></p>
// <p id="finalPrice"></p>
// <p id="message"></p>
// Requirements
// 1. Select all the required HTML elements using document.getElementById().
// 2. Create a function named calculateDiscount(price, discountPercentage).
// 3. The function must calculate the discount amount and return it.
// 4. When the button is clicked, get the price and discount percentage from the input fields.
// 5. Convert both input values into numbers.
// 6. If either input is empty, display "Please enter price and discount percentage".
// 7. If the price is less than or equal to 0, display "Please enter a valid price".
// 8. If the discount percentage is less than 0 or greater than 100, display "Please enter a valid discount percentage".
// 9. If the inputs are valid, calculate and display:
//    - Original price
//    - Discount amount
//    - Final price after discount
// 10. Display monetary values with two decimal places using .toFixed(2).
// Expected output
// For a price of 1000 and a discount of 20:
// Original Price: ₹1000.00
// Discount Amount: ₹200.00
// Final Price: ₹800.00
// For a price of 500 and a discount of 10:
// Original Price: ₹500.00
// Discount Amount: ₹50.00
// Final Price: ₹450.00
// For an empty price or discount input:
// Please enter price and discount percentage
// Condition: Use the calculateDiscount() function for the calculation. Do not hardcode the discount amount or final price.

let priceInput = document.getElementById("priceInput");
let discountInput = document.getElementById("discountInput");
let calculateBtn = document.getElementById("calculateBtn");

let originalPrice = document.getElementById("originalPrice");
let discountAmount = document.getElementById("discountAmount");
let finalPrice = document.getElementById("finalPrice");
let message = document.getElementById("message");

function calculateDiscount(price, discountPercentage){
    return (price * discountPercentage) / 100;
}

calculateBtn.addEventListener("click", function(){
    
    let price = Number(priceInput.value);
    let discountPercentage = Number(discountInput.value);

    if(priceInput.value === "" || discountInput.value === ""){
        message.textContent = "Please enter price and discount percentage";
        originalPrice.textContent = "";
        discountAmount.textContent = "";
        finalPrice.textContent = "";
    }

    else if(price <= 0){
        message.textContent = "Please enter a valid price";
        originalPrice.textContent = "";
        discountAmount.textContent = "";
        finalPrice.textContent = "";
    }

    else if(discountPercentage < 0 || discountPercentage > 100){
        message.textContent = "Please enter a valid discount percentage";
        originalPrice.textContent = "";
        discountAmount.textContent = "";
        finalPrice.textContent = "";
    }

    else{
        message.textContent = "";

        let discount = calculateDiscount(price, discountPercentage);
        
        let finalAmount = price - discount;

        originalPrice.textContent = `Original Price: ₹${price.toFixed(2)}`;

        discountAmount.textContent = `Discount Amount: ₹${discount.toFixed(2)}`;

        finalPrice.textContent = `Final Price: ₹${finalAmount.toFixed(2)}`;
    }
});


