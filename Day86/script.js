// Question 1 – Number Checker
// Topics: Variables, functions, DOM, addEventListener(), if...else
// HTML Code
// <h2>Number Checker</h2>
// <input type="number" id="numberInput" placeholder="Enter a number">
// <button id="checkNumberBtn">Check Number</button>
// <div id="numberResult"></div>
// Requirements
// 1. Get the input, button, and result elements using getElementById().
// 2. Create a function named checkNumber().
// 3. When the button is clicked, get the number entered by the user.
// 4. If the input is empty, display Please enter a number.
// 5. If the number is greater than zero, display Positive Number.
// 6. If the number is less than zero, display Negative Number.
// 7. Otherwise, display Zero.
// Expected Output
// - Input: 10 → Positive Number
// - Input: -5 → Negative Number
// - Input: 0 → Zero
// - Empty input → Please enter a number.
// Condition: Use addEventListener(). Display all messages on the webpage; do not use alert().

let numberInput = document.getElementById("numberInput");
let checkNumberBtn = document.getElementById("checkNumberBtn");
let numberResult = document.getElementById("numberResult");

function checkNumber() {
    
    let numberText = Number(numberInput.value);

    if(numberInput.value === ""){
        numberResult.innerHTML = "<p>Please enter a number.</p>";
    }
    else if(numberText > 0){
        numberResult.innerHTML = "<p>Positive Number</p>";
    }
    else if(numberText < 0){
        numberResult.innerHTML = "<p>Negative Number</p>";
    }
    else{
        numberResult.innerHTML = "<p>Zero</p>";
    }
}

checkNumberBtn.addEventListener("click", checkNumber);


