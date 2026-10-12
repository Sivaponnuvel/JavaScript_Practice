// Question 1 – Login Form Validation
// Concepts: if...else, comparison operators, logical operators, DOM, click events.
// Imagine you are developing a login form. You need to validate the username and password entered by the user.
// HTML
// <h2>Login Form</h2>
// <input type="text" id="username" placeholder="Enter username">
// <br><br>
// <input type="password" id="password" placeholder="Enter password">
// <br><br>
// <button id="loginBtn">Login</button>
// <p id="message"></p>
// Requirements
// 1. Select the username, password, login button, and message elements using document.getElementById().
// 2. Add a click event listener to the login button using addEventListener().
// 3. Get the username and password values.
// 4. If both username and password are empty, display "Please enter username and password".
// 5. If only the username is empty, display "Username is required".
// 6. If only the password is empty, display "Password is required".
// 7. If the username is "admin" and the password is "12345", display "Login successful".
// 8. If the credentials are incorrect, display "Invalid username or password".
// 9. Use the correct validation order so that the condition for both empty fields is checked first.
// Expected output
// Username	Password	Message
// Empty	Empty	Please enter username and password
// admin	Empty	Password is required
// Empty	12345	Username is required
// admin	12345	Login successful
// siva	12345	Invalid username or password
// Condition: Use JavaScript conditional statements to display messages. Do not hardcode the messages into the HTML.

let userName = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let message = document.getElementById("message");

loginBtn.addEventListener("click", function(){
    if(userName.value === "" && password.value === ""){
        message.textContent = "Please enter username and password";
    }
    else if(userName.value === "" ){
        message.textContent = "Username is required";
    }
    else if(password.value === "" ){
        message.textContent = "Password is required";
    }
    else if(userName.value === "admin" && password.value === "12345"){
        message.textContent = "Login successful";
    }
    else{
        message.textContent = "Invalid username or password";
    }
})


