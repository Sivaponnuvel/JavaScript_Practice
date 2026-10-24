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


