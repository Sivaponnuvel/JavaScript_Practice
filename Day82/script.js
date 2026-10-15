// Question 1 – Safe Number Calculator
// Topic: try...catch + DOM + Event Listener
// Create a simple calculator that safely converts user input into numbers and calculates their sum.
// HTML Code
// <h2>Safe Number Calculator</h2>
// <input type="text" id="num1" placeholder="Enter first number">
// <input type="text" id="num2" placeholder="Enter second number">
// <button id="calculateBtn">Calculate Sum</button>
// <p id="result"></p>
// Requirements
// 1. Get the values from both input fields when the button is clicked.
// 2. Convert both values into numbers.
// 3. Use try...catch to handle invalid input.
// 4. If either input is empty or not a valid number, display an appropriate error message.
// 5. If both inputs are valid, calculate their sum and display the result inside the result paragraph.
// 6. Use addEventListener() to handle the button click.
// Expected Output
// Example 1:
// - First number: 10
// - Second number: 20
// - Output: Sum: 30
// Example 2:
// - First number: abc
// - Second number: 20
// - Output: Error: Please enter valid numbers.
// Example 3:
// - First number: empty
// - Second number: 20
// - Output: Error: Both fields are required.
// Condition: Do not use alert(). Display all messages on the webpage.

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", function(){
    try {
        if(num1.value === "" || num2.value === ""){
            throw new Error("Both fields are required.");
        }

        let number1 = Number(num1.value);
        let number2 = Number(num2.value);

        if(isNaN(number1) || isNaN(number2)){
            throw new Error("Please enter valid numbers.");
        }

        let sum = number1 + number2;

        result.textContent = `Sum: ${sum}`;

    } catch (error) {
        result.textContent = `Error: ${error.message}`
    }
})


// Question 2 – JSON Data Validation
// Topic: JSON.parse() + try...catch + DOM
// Create a feature that reads JSON data entered by the user and displays the parsed information on the webpage.
// HTML Code
// <h2>JSON Data Validator</h2>
// <textarea id="jsonInput" placeholder="Enter JSON data"></textarea>
// <button id="validateBtn">Validate JSON</button>
// <p id="result1"></p>
// <div id="output"></div>
// Requirements
// 1. Get the JSON text from the textarea when the button is clicked.
// 2. Use JSON.parse() to convert the JSON text into a JavaScript object.
// 3. Use try...catch to handle invalid JSON.
// 4. If the input is empty, display Please enter JSON data.
// 5. If the JSON is invalid, display Invalid JSON data.
// 6. If the JSON is valid, display Valid JSON data! inside the result paragraph.
// 7. Display the parsed object's properties and values inside the output div.
// 8. Use addEventListener() to handle the button click.
// Expected Output
// Example 1 — Valid JSON:
// Input:
// {
//   "name": "Siva",
//   "role": "Python Developer",
//   "experience": 1
// }
// Output:
// Valid JSON data!
// name: Siva
// role: Python Developer
// experience: 1
// Example 2 — Invalid JSON:
// Input:
// {"name": "Siva", "role":}
// Output:
// Invalid JSON data.
// Example 3 — Empty input:
// Output:
// Please enter JSON data.
// Condition: Do not use alert(). Display the result on the webpage. Clear the previous output when the user submits invalid or empty data.

let jsonInput = document.getElementById("jsonInput");
let validateBtn = document.getElementById("validateBtn");
let result1 =  document.getElementById("result1");
let output = document.getElementById("output");

validateBtn.addEventListener("click", function(){
    try {
        if(jsonInput.value.trim() === ""){
            output.innerHTML = "";
            throw new Error("Please enter JSON data.");
        }

        let data = JSON.parse(jsonInput.value);

        result1.textContent = "Valid JSON data!";
        output.innerHTML = "";

        for(let key in data){
            output.innerHTML += `${key} : ${data[key]}<br>`
        }

    } catch (error) {
        if(jsonInput.value.trim() !== ""){
            result1.textContent = "Invalid JSON data.";
        } else {
            result1.textContent = error.message;
        }

        output.innerHTML = "";
    }
})