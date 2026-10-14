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


// Question 2 – Registration Form Validation
// Concepts: Functions, parameters, return values, conditional statements, string methods, DOM, click events.
// Imagine you are developing a registration form. The website should validate the user's name and email address before displaying a registration message.
// HTML
// <h2>User Registration</h2>
// <label for="nameInput">Full Name:</label>
// <input type="text" id="nameInput" placeholder="Enter your name">
// <br><br>
// <label for="emailInput">Email:</label>
// <input type="text" id="emailInput" placeholder="Enter your email">
// <br><br>
// <button id="registerBtn">Register</button>
// <p id="registrationMessage"></p>
// Requirements
// 1. Select the name input, email input, register button, and message element using document.getElementById().
// 2. Create a function named validateRegistration(name, email).
// 3. The function must accept the name and email as parameters and return an appropriate validation message.
// 4. If both fields are empty, return "Please enter your name and email".
// 5. If only the name is empty, return "Name is required".
// 6. If only the email is empty, return "Email is required".
// 7. If the name contains only spaces, treat it as empty. Use .trim().
// 8. If the email does not contain @ or does not contain a . after the @, return "Please enter a valid email".
// 9. If all validations pass, return "Registration successful".
// 10. Add a click event listener to the Register button. Call the validation function and display its returned message inside registrationMessage.
// Expected output
// Name	Email	Message
// Empty	Empty	Please enter your name and email
// Empty	siva@gmail.com	Name is required
// Siva	Empty	Email is required
// Siva	sivagmail.com	Please enter a valid email
// Siva	siva@gmail.com	Registration successful
// Condition: Put the validation logic inside validateRegistration(). The click event handler should call the function and display its returned message.

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let registerBtn = document.getElementById("registerBtn");
let registrationMessage = document.getElementById("registrationMessage");

function validateRegistration(name, email){
    
    name = name.trim();
    email = email.trim();

    if(name === "" && email === ""){
        return "Please enter your name and email";
    }
    else if(name === "" ){
        return "Name is required";
    }
    else if(email === ""){
        return "Email is required";
    }

    let atIndex = email.indexOf("@");

    if(atIndex === -1 || !email.includes(".",atIndex)){
        return "Please enter a valid email";
    }
        
    return "Registration successful";
}

registerBtn.addEventListener("click", function(){
    registrationMessage.textContent = validateRegistration(nameInput.value, emailInput.value);
});