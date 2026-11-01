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


