// 🟢 Question 1 – Dynamic To-Do List with Delete Functionality
// Topics: DOM, createElement(), appendChild(), remove(), Event Listeners, Input Validation
// HTML
// <h2>My To-Do List</h2>
// <input type="text" id="taskInput" placeholder="Enter a task">
// <button id="addBtn">Add Task</button>
// <p id="message"></p>
// <ul id="taskList"></ul>
// Requirements
// Write JavaScript code to implement the following functionality:
// 1. Select the input field, Add Task button, message paragraph, and unordered list.
// 2. Add a click event listener to the Add Task button.
// 3. Read the task entered by the user and remove unwanted spaces using .trim().
// 4. If the input is empty, display Please enter a task.
// 5. Otherwise, create a new <li> element using document.createElement("li").
// 6. Set the new list item's text to the task entered by the user.
// 7. Create a Delete button for each task.
// 8. When the Delete button is clicked, remove only that particular task from the list.
// 9. Display Task Added Successfully after adding a task.
// 10. After successfully adding a task, clear the input field.
// Expected Behaviour
// Example 1 — Add a task
// Input:
// Learn JavaScript
// Output:
// Task Added Successfully
// The list should display:
// - Learn JavaScript [Delete]
// Example 2 — Add another task
// Input:
// Practice Python
// The list should display:
// - Learn JavaScript [Delete]
// - Practice Python [Delete]
// Example 3 — Delete a task
// Click the Delete button beside Learn JavaScript.
// The list should now display:
// - Practice Python [Delete]
// Example 4 — Empty input
// Click Add Task without entering anything.
// Output:
// Please enter a task
// Conditions
// - Use addEventListener("click", ...).
// - Use document.createElement().
// - Use appendChild().
// - Use .remove() to delete the selected task.
// - Use .trim() for input validation.
// - Use textContent to display messages and task names.
// - Every task must have its own Delete button.
// - Deleting one task must not delete the other tasks.

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function(){

    let taskInputText = taskInput.value.trim();

    if(taskInputText === ""){
        message.textContent = "Please enter a task";
    }
    else{

        let li = document.createElement("li");
        li.textContent = taskInputText;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function(){
            li.remove();
        })

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        message.textContent = "Task Added Successfully";

        taskInput.value = "";
    }
})

