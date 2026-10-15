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


