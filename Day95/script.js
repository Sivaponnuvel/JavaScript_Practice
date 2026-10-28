// 🟢 Question 1 – Employee Salary Bonus Calculator
// Topics: DOM, .value, Number(), if...else, Arithmetic Operators, Event Listeners
// Consider this HTML:
// <h2>Employee Salary Bonus Calculator</h2>
// <input type="number" id="salary" placeholder="Enter monthly salary">
// <button id="calculateBtn">Calculate Bonus</button>
// <p id="result"></p>
// Write JavaScript code to:
// 1. Select the salary input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the employee's monthly salary using .value and Number().
// 4. Calculate the bonus based on the following conditions:
//    - Salary ₹20,000 or more → 10% bonus.
//    - Salary below ₹20,000 → 5% bonus.
// 5. Calculate the total salary by adding the bonus to the original salary.
// 6. Display both the bonus amount and total salary.
// 7. If the salary is negative, display Invalid Salary instead of calculating.
// Expected Output:
// Example 1:
// Input: 30000
// Bonus Amount: ₹3000
// Total Salary: ₹33000
// Example 2:
// Input: 15000
// Bonus Amount: ₹750
// Total Salary: ₹15750
// Example 3:
// Input: -5000
// Invalid Salary
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Use if...else.
// - Use arithmetic operators.
// - Display the result using textContent.
// - Display both amounts in the same result paragraph.

let salary = document.getElementById("salary");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", function(){

    let salaryText = Number(salary.value);

    let bonus;

    if(salaryText < 0){
        result.textContent = "Invalid Salary";
    }
    else{
        if(salaryText >= 20000){
            bonus = salaryText * 10 / 100;
        }    
        else{
            bonus = salaryText * 5 / 100;
        }

        let total = salaryText + bonus;

        result.textContent = `Bonus Amount: ₹${bonus}\nTotal Salary: ₹${total}`;
    }
})


// 🟢 Question 2 – Student Name Search
// Topics: DOM, Arrays, .value, .trim(), .toLowerCase(), .includes(), Event Listeners
// Consider this HTML:
// <h2>Student Name Search</h2>
// <input type="text" id="studentInput" placeholder="Enter student name">
// <button id="searchBtn">Search Student</button>
// <p id="message"></p>
// Use this student array:
// let students = ["Arun", "Priya", "Karthik", "Divya", "Siva"];
// Write JavaScript code to:
// 1. Select the student input, button, and message paragraph.
// 2. Add a click event listener to the button.
// 3. Read the student name entered by the user.
// 4. Remove unwanted spaces using .trim().
// 5. Convert the entered name to lowercase using .toLowerCase().
// 6. Check whether the student exists in the array, ignoring uppercase and lowercase differences.
// 7. If the student exists, display Student Found.
// 8. If the student does not exist, display Student Not Found.
// 9. If the input is empty or contains only spaces, display Please enter a student name.
// Expected Output:
// Example 1:
// Input: "siva"
// Output: Student Found
// Example 2:
// Input: "  PRIYA  "
// Output: Student Found
// Example 3:
// Input: "Rahul"
// Output: Student Not Found
// Example 4:
// Input: "    "
// Output: Please enter a student name
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value, .trim(), and .toLowerCase().
// - Use an array and .includes().
// - Use if...else if...else.
// - Use textContent.
// - Match complete student names, not partial names.
// - Do not use .filter() or .find().

let students = ["Arun", "Priya", "Karthik", "Divya", "Siva"];

let studentInput = document.getElementById("studentInput");
let searchBtn = document.getElementById("searchBtn");
let message = document.getElementById("message");

let studentsList = students.map(student => student.toLowerCase())

searchBtn.addEventListener("click", function(){

    let studentInputText = studentInput.value.trim().toLowerCase();

    if(studentInputText === ""){
        message.textContent = "Please enter a student name";
    }
    else if(studentsList.includes(studentInputText)){
        message.textContent = "Student Found";
    }
    else{
        message.textContent = "Student Not Found";
    }
})