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


