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


// Question 2 – Product Stock Status
// Concepts: if...else if...else, comparison operators, DOM, click events.
// Imagine you are developing an e-commerce website. You need to display a product's stock status based on its available quantity.
// HTML
// <h2>Product Stock Checker</h2>
// <p>Product: Wireless Mouse</p>
// <label for="stockInput">Enter stock quantity:</label>
// <input type="number" id="stockInput" placeholder="Enter quantity">
// <button id="checkBtn">Check Stock</button>
// <p id="stockMessage"></p>
// Requirements
// 1. Select the stockInput, checkBtn, and stockMessage elements using document.getElementById().
// 2. Add a click event listener to the Check Stock button.
// 3. Convert the input value into a number.
// 4. If the stock quantity is less than 0, display "Invalid stock quantity".
// 5. If the stock quantity equals 0, display "Out of stock".
// 6. If the stock quantity is between 1 and 5, display "Low stock".
// 7. If the stock quantity is between 6 and 20, display "Stock available".
// 8. If the stock quantity is greater than 20, display "Stock available in large quantity".
// 9. If the input is empty, display "Please enter stock quantity".
// 10. Update the message correctly whenever the button is clicked.
// Expected output
// Input quantity	Message
// Empty	Please enter stock quantity
// -1	Invalid stock quantity
// 0	Out of stock
// 3	Low stock
// 10	Stock available
// 25	Stock available in large quantity
// Condition: Use if, else if, and else. Check the empty input separately before evaluating the numeric value.

let stockInput = document.getElementById("stockInput");
let checkBtn = document.getElementById("checkBtn");
let stockMessage = document.getElementById("stockMessage");

checkBtn.addEventListener("click", function(){
    
    let stock = Number(stockInput.value);

    if(stockInput.value === ""){
        stockMessage.textContent = "Please enter stock quantity";
    }
    else if(stock < 0){
        stockMessage.textContent = "Invalid stock quantity";
    }
    else if(stock === 0){
        stockMessage.textContent = "Out of stock";
    }
    else if(1 <= stock && stock <= 5){
        stockMessage.textContent = "Low stock";
    }
    else if(6 <= stock && stock <= 20){
        stockMessage.textContent = "Stock available";
    }
    else{
        stockMessage.textContent = "Stock available in large quantity";
    }
});