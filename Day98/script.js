// 🟢 Question 1 – Simple Wallet Expense Tracker
// Topics: DOM, .value, Number(), if...else if...else, Arithmetic Operators, Event Listeners
// Consider this HTML:
// <h2>Wallet Expense Tracker</h2>
// <input type="number" id="expenseInput" placeholder="Enter expense amount">
// <button id="expenseBtn">Add Expense</button>
// <p id="result"></p>
// Use this initial wallet balance:
// let walletBalance = 8000;
// Write JavaScript code to:
// 1. Select the expense input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the expense amount using .value and Number().
// 4. If the expense amount is 0 or negative, display Invalid Expense Amount.
// 5. If the expense amount is greater than the wallet balance, display Insufficient Wallet Balance.
// 6. Otherwise, subtract the expense amount from the wallet balance.
// 7. Display the expense amount and remaining wallet balance.
// 8. The wallet balance must update after every successful expense.
// Expected Output:
// Example 1:
// Initial Wallet Balance: ₹8000
// Expense Amount: 1500
// Remaining Wallet Balance: ₹6500
// Example 2 (another expense):
// Current Wallet Balance: ₹6500
// Expense Amount: 2000
// Remaining Wallet Balance: ₹4500
// Example 3:
// Expense Amount: 5000
// Insufficient Wallet Balance
// Example 4:
// Expense Amount: -200
// Invalid Expense Amount
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Use if...else if...else.
// - Use arithmetic operators.
// - Display the result using textContent.
// - Do not reset the wallet balance after every click.

let walletBalance = 8000;

let expenseInput = document.getElementById("expenseInput");
let expenseBtn = document.getElementById("expenseBtn");
let result = document.getElementById("result");

expenseBtn.addEventListener("click", function(){

    let expenseInputText = Number(expenseInput.value);

    if(expenseInputText <= 0){
        result.textContent = "Invalid Expense Amount";
    }
    else if(walletBalance < expenseInputText){
        result.textContent = "Insufficient Wallet Balance";
    }
    else{

        let previousBalance = walletBalance;

        walletBalance -= expenseInputText;

        result.textContent = `Previous Wallet Balance: ₹${previousBalance}
        Expense Amount: ₹${expenseInputText}
        Remaining Wallet Balance: ₹${walletBalance}`;
    }
})


// 🟢 Question 2 – Simple Student Marks Updater
// Topics: DOM, Arrays, Objects, Loops, .value, .trim(), .toLowerCase(), Number.isInteger()
// Consider this HTML:
// <h2>Student Marks Updater</h2>
// <input type="text" id="studentInput" placeholder="Enter student name">
// <input type="number" id="marksInput" placeholder="Enter new marks">
// <button id="updateBtn">Update Marks</button>
// <p id="message"></p>
// Use this student array:
// let students = [
//     { name: "Arun", marks: 75 },
//     { name: "Priya", marks: 82 },
//     { name: "Karthik", marks: 60 },
//     { name: "Siva", marks: 90 }
// ];
// Write JavaScript code to:
// 1. Select both input fields, button, and message paragraph.
// 2. Add a click event listener to the button.
// 3. Read the student name and new marks entered by the user.
// 4. Remove unwanted spaces and convert the student name to lowercase.
// 5. If the student name is empty, display Please enter a student name.
// 6. If the marks are below 0, above 100, or not a whole number, display Invalid Marks.
// 7. Search for the student in the array using a for or for...of loop.
// 8. If the student exists, replace their existing marks with the new marks.
// 9. Display Marks Updated - Student: X, New Marks: Y, replacing X and Y with the student's name and updated marks.
// 10. If the student does not exist, display Student Not Found.
// 11. The updated marks must remain changed for future button clicks.
// Expected Output:
// Example 1:
// Input Student: arun
// New Marks: 85
// Marks Updated - Student: Arun, New Marks: 85
// Example 2:
// Input Student: SIVA
// New Marks: 95
// Marks Updated - Student: Siva, New Marks: 95
// Example 3:
// Input Student: Priya
// New Marks: 120
// Invalid Marks
// Example 4:
// Input Student: Rahul
// New Marks: 70
// Student Not Found
// Example 5:
// Input Student: "   "
// New Marks: 80
// Please enter a student name
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value, .trim(), .toLowerCase(), and Number().
// - Use Number.isInteger() for whole-number validation.
// - Use a for or for...of loop.
// - Use if...else if...else.
// - Display the result using textContent.
// - Do not use .find() or .filter().
// - Do not reset the student array after every click.

let students = [
    { name: "Arun", marks: 75 },
    { name: "Priya", marks: 82 },
    { name: "Karthik", marks: 60 },
    { name: "Siva", marks: 90 }
];

let studentInput = document.getElementById("studentInput");
let marksInput = document.getElementById("marksInput");
let updateBtn = document.getElementById("updateBtn");
let message = document.getElementById("message");

updateBtn.addEventListener("click", function(){

    let studentInputText = studentInput.value.trim().toLowerCase();
    let marksInputText = Number(marksInput.value);

    if(studentInputText === ""){
        message.textContent = "Please enter a student name";
    }
    else if(marksInputText < 0 || marksInputText > 100 || !Number.isInteger(marksInputText)){
        message.textContent = "Invalid Marks";
    }
    else{
        let found = false;

        for(let student of students){
            if(student.name.toLowerCase() === studentInputText){
                found = true;

                student.marks = marksInputText;

                message.textContent = `Marks Updated - Student: ${student.name}, New Marks: ${student.marks}`;

                break;
            }
        }

        if(!found){
            message.textContent = "Student Not Found";
        }
    }
})