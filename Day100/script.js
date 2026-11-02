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


// 🟢 Question 2: Student List Manager
// Topics: DOM, Arrays, Objects, createElement(), appendChild(), remove(), Event Listeners.
// HTML
// <h2>Student List Manager</h2>
// <input type="text" id="studentInput" placeholder="Enter student name">
// <button id="addBtn1">Add Student</button>
// <p id="result"></p>
// <ul id="studentList"></ul>
// Initial Array
// let students = [];
// Requirements
// 1. Select the input, button, message paragraph, and student list.
// 2. When the Add Student button is clicked, get the student name using .value and .trim().
// 3. If the input is empty, display Please enter a student name.
// 4. Otherwise, create a new <li> element using document.createElement("li").
// 5. Display the student name inside the <li> element.
// 6. Create a Delete button for each student.
// 7. When the Delete button is clicked, remove only that particular student from the displayed list.
// 8. Add each student name to the students array using .push().
// 9. Display Student Added Successfully after adding a student.
// 10. Clear the input after successfully adding a student.
// Expected Output
// Example 1: Add a student
// Input:
// Arun
// Display:
// Arun [Delete]
// result:
// Student Added Successfully
// Example 2: Add another student
// Input:
// Priya
// Display:
// Arun [Delete]
// Priya [Delete]
// Example 3: Delete a student
// Click the Delete button next to Arun.
// Display:
// Priya [Delete]
// Example 4: Empty input
// Click Add Student without entering a name.
// result:
// Please enter a student name
// Conditions
// - Use addEventListener("click", ...).
// - Use .value and .trim().
// - Use document.createElement() and appendChild().
// - Use .push() to add students to the array.
// - Use .remove() to remove the selected student from the displayed list.
// - Use textContent to display names and messages.
// - Do not remove other students when deleting one student.

let students = [];

let studentInput = document.getElementById("studentInput");
let addBtn1 = document.getElementById("addBtn1");
let result = document.getElementById("result");
let studentList = document.getElementById("studentList");

addBtn1.addEventListener("click", function(){

    let studentInputText = studentInput.value.trim();

    if(studentInputText === ""){
        result.textContent = "Please enter a student name";
    }
    else{
        let li = document.createElement("li");
        li.textContent = studentInputText;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function(){
            li.remove();
            let studentIndex = students.indexOf(studentInputText);

            if(studentIndex !== -1){
                students.splice(studentIndex, 1);
            }
        })

        li.appendChild(deleteBtn);

        studentList.appendChild(li);

        result.textContent = "Student Added Successfully";

        studentInput.value = "";

        students.push(studentInputText);
    }
})