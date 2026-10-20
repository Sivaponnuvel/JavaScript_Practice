// 🟢 Question 1 – Live Username Display
// Topic: DOM + addEventListener() + input event
// Consider this HTML:
// <input id="username" type="text" placeholder="Enter your name">
// <p id="output">Your name will appear here</p>
// Write JavaScript code to:
// 1. Select the input element.
// 2. Select the paragraph element.
// 3. Add an input event listener to the input.
// 4. Whenever the user types something, display the entered name inside the paragraph.
// Expected behavior:
// If the user types Siva, display:
// Hello Siva
// If the user changes it to Sivaponnuvel, display:
// Hello Sivaponnuvel
// Condition: Use addEventListener() with the "input" event.

let username = document.getElementById("username");
let output = document.getElementById("output");

username.addEventListener("input", function(){
    output.textContent = `Hello ${username.value}`;
})


// 🟢 Question 2 – Simple Login Form
// Topic: DOM + Event Listeners + Conditional Statements
// Consider this HTML:
// <input id="email" type="email" placeholder="Enter email">
// <input id="password" type="password" placeholder="Enter password">
// <button id="loginBtn">Login</button>
// <p id="message"></p>
// Write JavaScript code to:
// 1. Select the email input.
// 2. Select the password input.
// 3. Select the Login button.
// 4. Select the message paragraph.
// 5. Add a click event listener to the Login button.
// When the button is clicked:
// - If the email is "siva@gmail.com" and the password is "12345", display:
// Login Successful
// - Otherwise, display:
// Invalid Email or Password
// Condition: Use addEventListener("click", ...) and read input values using .value.

let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let message = document.getElementById("message");

loginBtn.addEventListener("click", function(){
    if(email.value === "siva@gmail.com" && password.value === "12345"){
        message.textContent = "Login Successful";
    }
    else{
        message.textContent = "Invalid Email or Password";
    }
})