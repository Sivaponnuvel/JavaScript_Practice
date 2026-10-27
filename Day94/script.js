// 🟢 Question 1 – Simple Student Grade Calculator
// Topics: DOM, .value, Number(), if...else if...else, addEventListener()
// Consider this HTML:
// <h2>Student Grade Calculator</h2>
// <input type="number" id="marks" placeholder="Enter student marks">
// <button id="gradeBtn">Calculate Grade</button>
// <p id="result"></p>
// Write JavaScript code to:
// 1. Select the marks input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the student's marks using .value and convert them using Number().
// 4. Calculate the student's grade based on the following conditions:
//    - Marks 90–100 → Grade A
//    - Marks 75–89 → Grade B
//    - Marks 50–74 → Grade C
//    - Marks 35–49 → Grade D
//    - Marks below 35 → Fail
// 5. If the marks are below 0 or above 100, display Invalid Marks.
// 6. Display the calculated grade inside the result paragraph.
// Expected Output:
// Example 1:
// Input: 95
// Output: Grade A
// Example 2:
// Input: 80
// Output: Grade B
// Example 3:
// Input: 60
// Output: Grade C
// Example 4:
// Input: 30
// Output: Fail
// Example 5:
// Input: 110
// Output: Invalid Marks
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Use if...else if...else.
// - Use comparison and logical operators.
// - Display the result using textContent.
// - Assume valid marks are whole numbers.

let marks = document.getElementById("marks");
let gradeBtn = document.getElementById("gradeBtn");
let result = document.getElementById("result");

gradeBtn.addEventListener("click", function(){

    let marksText = Number(marks.value);

    if(0 > marksText || marksText > 100){
        result.textContent = "Invalid Marks";
    }
    else if(marksText >= 90){
        result.textContent = "Grade A";
    }
    else if(marksText >= 75){
        result.textContent = "Grade B";
    }
    else if(marksText >= 50){
        result.textContent = "Grade C";
    }
    else if(marksText >= 35){
        result.textContent = "Grade D";
    }
    else{
        result.textContent = "Fail";
    }
})


// 🟢 Question 2 – Simple Shopping Cart Item Checker
// Topics: DOM, Arrays, .value, .trim(), .toLowerCase(), .includes(), Event Listeners
// Consider this HTML:
// <h2>Shopping Cart Item Checker</h2>
// <input type="text" id="itemInput" placeholder="Enter item name">
// <button id="checkBtn">Check Item</button>
// <p id="message"></p>
// Use this shopping cart array:
// let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// Write JavaScript code to:
// 1. Select the item input, button, and message paragraph.
// 2. Add a click event listener to the button.
// 3. Read the item entered by the user.
// 4. Remove unwanted spaces using .trim().
// 5. Convert the entered item name to lowercase using .toLowerCase().
// 6. Convert the cart item names to lowercase when checking for a match.
// 7. If the item already exists in the cart, display Item Already in Cart.
// 8. Otherwise, display Item Not in Cart.
// Expected Output:
// Example 1:
// Input: "laptop"
// Output: Item Already in Cart
// Example 2:
// Input: "  MOUSE  "
// Output: Item Already in Cart
// Example 3:
// Input: "Mobile"
// Output: Item Not in Cart
// Example 4:
// Input: "Keyboard"
// Output: Item Already in Cart
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value, .trim(), and .toLowerCase().
// - Use an array and .includes().
// - Use if...else.
// - Display the result using textContent.
// - Match complete item names, not partial names.
// - Do not use .filter() or .find().

let cart = ["Laptop", "Mouse", "Keyboard", "Monitor"];

let itemInput = document.getElementById("itemInput");
let checkBtn = document.getElementById("checkBtn");
let message = document.getElementById("message");

let carts = cart.map(item => item.toLowerCase());

checkBtn.addEventListener("click", function(){

    let itemInputText = itemInput.value.trim().toLowerCase();

    if(carts.includes(itemInputText)){
        message.textContent = "Item Already in Cart";
    }
    else{
        message.textContent = "Item Not in Cart"
    }
})