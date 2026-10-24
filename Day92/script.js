// 🟢 Question 1 – Simple Login Username Validator
// Topics: DOM, .value, .trim(), .length, if...else, Event Listeners
// Consider this HTML:
// <h2>Username Validator</h2>
// <input type="text" id="username" placeholder="Enter username">
// <button id="validateBtn">Validate Username</button>
// <p id="message"></p>
// Write JavaScript code to:
// 1. Select the username input, button, and message paragraph.
// 2. Add a click event listener to the button.
// 3. Read the username entered by the user.
// 4. Remove unwanted spaces from the beginning and end of the username using .trim().
// 5. If the username contains 5 or more characters, display Valid Username.
// 6. Otherwise, display Username must contain at least 5 characters.
// Expected output:
// Example 1:
// Input: "  sivaponnuvel  "
// Output: Valid Username
// Example 2:
// Input: "siva"
// Output: Username must contain at least 5 characters
// Example 3:
// Input: "     "
// Output: Username must contain at least 5 characters
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and .trim().
// - Use .length to check the username.
// - Use if...else.
// - Display the result using textContent.

let username = document.getElementById("username");
let validateBtn = document.getElementById("validateBtn");
let message = document.getElementById("message");

validateBtn.addEventListener("click", function(){

    let usernameText = username.value.trim();

    if (usernameText.length >= 5){
        message.textContent = "Valid Username";
    }
    else{
        message.textContent = "Username must contain at least 5 characters";
    }
})


// 🟢 Question 2 – Simple Electricity Bill Calculator
// Topics: DOM, .value, Number(), if...else, Arithmetic Operators
// Consider this HTML:
// <h2>Electricity Bill Calculator</h2>
// <input type="number" id="units" placeholder="Enter electricity units">
// <button id="calculateBtn">Calculate Bill</button>
// <p id="billResult"></p>
// Write JavaScript code to:
// 1. Select the units input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the electricity units entered by the user.
// 4. Calculate the bill using the following rates:
//    - If units are 100 or less, charge ₹3 per unit.
//    - If units are more than 100, charge ₹5 per unit for all units.
// 5. Display the total electricity bill inside the result paragraph.
// Expected output:
// Example 1:
// Input: 80
// Output: Electricity Bill: ₹240
// Example 2:
// Input: 150
// Output: Electricity Bill: ₹750
// Example 3:
// Input: 100
// Output: Electricity Bill: ₹300
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Use if...else.
// - Use arithmetic operators.
// - Display the result using textContent.
// - Follow the given flat-rate calculation, not a slab-based calculation.

let units = document.getElementById("units");
let calculateBtn = document.getElementById("calculateBtn");
let billResult = document.getElementById("billResult");

calculateBtn.addEventListener("click", function(){
    
    let unitsText = Number(units.value);

    if(unitsText <= 100){
        let bill = unitsText * 3

        billResult.textContent = `Electricity Bill: ₹${bill}`;
    }
    else{
        let bill = unitsText * 5;
        
        billResult.textContent = `Electricity Bill: ₹${bill}`;
    }
})