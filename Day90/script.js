// 🟢 Question 1 – Simple Price Calculator
// Topics: DOM, .value, Number(), addEventListener()
// Consider this HTML:
// <input id="price" type="number" placeholder="Enter product price">
// <button id="calculateBtn">Calculate GST</button>
// <p id="result"></p>
// Write JavaScript code to:
// 1. Select the price input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the product price entered by the user.
// 4. Calculate 18% GST on the product price.
// 5. Display the GST amount inside the result paragraph.
// Expected output:
// If the user enters 1000:
// GST Amount: ₹180
// If the user enters 2000:
// GST Amount: ₹360
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Display the result using textContent.

let price = document.getElementById("price");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", function(){
    let pirceText = Number(price.value);

    let gstPrice = pirceText * (18/100);

    result.textContent = `GST Amount: ₹${gstPrice}`;
})


// 🟢 Question 2 – Password Length Checker
// Topics: DOM, .value, if...else, Event Listeners
// Consider this HTML:
// <input id="password" type="password" placeholder="Enter password">
// <button id="checkBtn">Check Password</button>
// <p id="message"></p>
// Write JavaScript code to:
// 1. Select the password input, button, and message paragraph.
// 2. Add a click event listener to the button.
// 3. Read the password entered by the user.
// 4. If the password contains at least 8 characters, display:
// Password is strong
// 5. Otherwise, display:
// Password must contain at least 8 characters
// Conditions:
// - Use addEventListener("click", ...).
// - Read the password using .value.
// - Use if...else to check the password length.

let password = document.getElementById("password");
let checkBtn = document.getElementById("checkBtn");
let message = document.getElementById("message");

checkBtn.addEventListener("click", function(){
    let passwordText = password.value;

    if (passwordText.length >= 8){
        message.textContent = "Password is strong";
    }
    else{
        message.textContent = "Password must contain at least 8 characters";
    }
})