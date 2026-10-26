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


// 🟢 Question 2 – Simple Product Search
// Topics: DOM, Arrays, .value, .toLowerCase(), .includes(), Event Listeners
// Consider this HTML:
// <h2>Product Search</h2>
// <input type="text" id="searchInput" placeholder="Search product">
// <button id="searchBtn">Search</button>
// <p id="result"></p>
// Use this product array:
// let products = ["Laptop", "Mobile", "Keyboard", "Mouse", "Monitor"];
// Write JavaScript code to:
// 1. Select the search input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the product name entered by the user.
// 4. Convert the entered product name to lowercase using .toLowerCase().
// 5. Convert the product names to lowercase when checking for a match.
// 6. Check whether the entered product name exists in the array.
// 7. If the product exists, display Product Available.
// 8. Otherwise, display Product Not Available.
// Expected Output:
// Example 1:
// Input: "laptop"
// Output: Product Available
// Example 2:
// Input: "MOBILE"
// Output: Product Available
// Example 3:
// Input: "Tablet"
// Output: Product Not Available
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and .toLowerCase().
// - Use an array and the .includes() method.
// - Use if...else.
// - Match complete product names, not partial names.
// - Display the result using textContent.
// - Do not use .filter() or .find() for this question.

let products = ["Laptop", "Mobile", "Keyboard", "Mouse", "Monitor"];

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let result = document.getElementById("result");

searchBtn.addEventListener("click", function(){

    let searchInputText = searchInput.value.toLowerCase();

    let lowerProducts = products.map(product => 
        product.toLowerCase()
    )

    if(lowerProducts.includes(searchInputText)){
        result.textContent = "Product Available";
    }
    else{
        result.textContent = "Product Not Available";
    }
})