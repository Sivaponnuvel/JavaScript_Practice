// 🟢 Question 1 – Live Username Display
// Consider this HTML:
// <input id="username" type="text" placeholder="Enter your name">
// <p id="output">Your name will appear here</p>
// Write JavaScript code to:
// 1. Select the input element.
// 2. Select the paragraph.
// 3. Add an input event listener to the input.
// 4. Whenever the user types something, display the entered name inside the paragraph.
// Example
// If the user types:
// Siva
// The paragraph should show:
// Hello Siva
// If the user changes it to:
// Sivaponnuvel
// It should automatically change to:
// Hello Sivaponnuvel
// Condition: Use addEventListener() with the "input" event.

let userName = document.getElementById("username");
let output = document.getElementById("output");

userName.addEventListener("input", function(){
    output.textContent = `Hello ${userName.value}`;
})


// 🟢 Question 2 – Simple Login Form
// Consider this HTML:
// <input id="email" type="email" placeholder="Enter email">
// <input id="password" type="password" placeholder="Enter password">
// <button id="loginBtn">Login</button>
// <p id="message"></p>
// Write JavaScript code to:
// 1. Select the email input.
// 2. Select the password input.
// 3. Select the login button.
// 4. Select the message paragraph.
// 5. Add a click event listener to the Login button.
// 6. When the button is clicked:
//    - If email is "siva@gmail.com" and password is "12345", display:
// Login Successful
// - Otherwise, display:
// Invalid Email or Password
// Condition: Use addEventListener("click", ...) and read the input values using .value.

let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("loginBtn");
let msg = document.getElementById("message");

function auth() {
    if(email.value === "siva@gmail.com" && password.value === "12345"){
        msg.textContent = "Login Successful";
    }
    else{
        msg.textContent = "Invalid Email or Password";
    }
}

btn.addEventListener("click", auth);