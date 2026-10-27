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


