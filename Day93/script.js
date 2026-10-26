// 🟢 Question 1 – Simple Email Validator
// Topics: DOM, .value, .trim(), .includes(), if...else, addEventListener()
// Consider this HTML:
// <h2>Email Validator</h2>
// <input type="text" id="email" placeholder="Enter your email">
// <button id="validateBtn">Validate Email</button>
// <p id="message"></p>
// Write JavaScript code to:
// 1. Select the email input, button, and message paragraph.
// 2. Add a click event listener to the button.
// 3. Read the email entered by the user.
// 4. Remove unwanted spaces from the beginning and end using .trim().
// 5. Check whether the email contains both @ and . characters.
// 6. If both characters are present, display Valid Email.
// 7. Otherwise, display Invalid Email.
// Expected Output:
// Example 1:
// Input: "  siva@gmail.com  "
// Output: Valid Email
// Example 2:
// Input: "sivagmail.com"
// Output: Invalid Email
// Example 3:
// Input: "siva@gmailcom"
// Output: Invalid Email
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and .trim().
// - Use .includes() to check the characters.
// - Use if...else.
// - Display the result using textContent.
// - Follow the specified character checks; a complete email-format validation is not required.

let email = document.getElementById("email");
let validateBtn = document.getElementById("validateBtn");
let message = document.getElementById("message");

validateBtn.addEventListener("click", function(){

    let emailText = email.value.trim();

    if(emailText.includes("@") && emailText.includes(".")){
        message.textContent = "Valid Email";
    }
    else{
        message.textContent = "Invalid Email";
    }
})


