// 🟢 Question 1 – Simple To-Do List Manager
// Topics: DOM, Arrays, .value, .trim(), .push(), .join(), Event Listeners
// Consider this HTML:
// <h2>Simple To-Do List</h2>
// <input type="text" id="taskInput" placeholder="Enter a task">
// <button id="addBtn">Add Task</button>
// <p id="message"></p>
// <p id="taskList"></p>
// Use this initial array:
// let tasks = [];
// Write JavaScript code to:
// 1. Select the task input, button, message paragraph, and task list paragraph.
// 2. Add a click event listener to the button.
// 3. Read the task entered by the user.
// 4. Remove unwanted spaces using .trim().
// 5. If the input is empty or contains only spaces, display Please enter a task.
// 6. Otherwise, add the task to the tasks array using .push().
// 7. Display Task Added Successfully inside the message paragraph.
// 8. Display all tasks inside the taskList paragraph, separated by commas.
// 9. Every new task must be added without removing the previous tasks.
// Expected Output:
// Example 1:
// Input: Learn JavaScript
// Message: Task Added Successfully
// Tasks: Learn JavaScript
// Example 2 (another click):
// Input: Practice Python
// Message: Task Added Successfully
// Tasks: Learn JavaScript, Practice Python
// Example 3 (another click):
// Input: Build React Project
// Message: Task Added Successfully
// Tasks: Learn JavaScript, Practice Python, Build React Project
// Example 4:
// Input: "    "
// Message: Please enter a task
// Tasks: Learn JavaScript, Practice Python, Build React Project
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and .trim().
// - Use .push() to add tasks.
// - Use .join(", ") to display tasks.
// - Use if...else.
// - Display results using textContent.
// - Do not reset the tasks array after every click.

let tasks = [];

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function(){

    let taskInputText = taskInput.value.trim()

    if(taskInputText === ""){
        message.textContent = "Please enter a task";
    }

    else{
        tasks.push(taskInputText);

        message.textContent = "Task Added Successfully";

        taskList.textContent = `Tasks: ${tasks.join(", ")}`;
    }
})


// 🟢 Question 2 – Simple Product Inventory Stock Updater
// Topics: DOM, Arrays, Objects, Loops, Number(), Number.isInteger(), Conditional Statements
// Consider this HTML:
// <h2>Product Inventory Manager</h2>
// <input type="text" id="productInput" placeholder="Enter product name">
// <input type="number" id="stockInput" placeholder="Enter stock to add">
// <button id="updateBtn">Add Stock</button>
// <p id="result"></p>
// Use this product inventory array:
// let inventory = [
//     { name: "Laptop", stock: 5 },
//     { name: "Mouse", stock: 10 },
//     { name: "Keyboard", stock: 3 },
//     { name: "Monitor", stock: 0 }
// ];
// Write JavaScript code to:
// 1. Select both inputs, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the product name and stock quantity.
// 4. Remove unwanted spaces and convert the product name to lowercase.
// 5. If the product name is empty, display Please enter a product name.
// 6. If the stock quantity is 0, negative, or not a whole number, display Invalid Stock Quantity.
// 7. Search for the product in the inventory using a for or for...of loop.
// 8. If the product exists, add the entered stock quantity to its existing stock.
// 9. Display Stock Updated - Product: X, Total Stock: Y.
// 10. If the product does not exist, display Product Not Found.
// 11. Updated stock values must remain changed for future button clicks.
// Expected Output:
// Example 1:
// Input Product: laptop
// Stock to Add: 5
// Stock Updated - Product: Laptop, Total Stock: 10
// Example 2 (another update):
// Input Product: LAPTOP
// Stock to Add: 3
// Stock Updated - Product: Laptop, Total Stock: 13
// Example 3:
// Input Product: Monitor
// Stock to Add: 4
// Stock Updated - Product: Monitor, Total Stock: 4
// Example 4:
// Input Product: Mouse
// Stock to Add: -2
// Invalid Stock Quantity
// Example 5:
// Input Product: Mobile
// Stock to Add: 5
// Product Not Found
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value, .trim(), .toLowerCase(), and Number().
// - Use Number.isInteger() for whole-number validation.
// - Use a for or for...of loop.
// - Use if...else if...else.
// - Display results using textContent.
// - Do not use .find() or .filter().
// - Do not reset the inventory after every click.

let inventory = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 10 },
    { name: "Keyboard", stock: 3 },
    { name: "Monitor", stock: 0 }
];

let productInput = document.getElementById("productInput");
let stockInput = document.getElementById("stockInput");
let updateBtn = document.getElementById("updateBtn");
let result = document.getElementById("result");

updateBtn.addEventListener("click", function(){

    let productInputText = productInput.value.trim().toLowerCase();
    let stockInputText = Number(stockInput.value);

    if(productInputText === ""){
        result.textContent = "Please enter a product name";
    }
    
    else if(stockInputText <= 0 || isNaN(stockInputText) || !Number.isInteger(stockInputText)){
        result.textContent = "Invalid Stock Quantity";
    }

    else{
        let found = false;

        for(let product of inventory){
            if(product.name.toLowerCase() === productInputText){
                found = true;

                product.stock += stockInputText;

                result.textContent = `Stock Updated - Product: ${product.name}, Total Stock: ${product.stock}`
            }
        }

        if(!found){
            result.textContent = "Product Not Found";
        }
    }
})