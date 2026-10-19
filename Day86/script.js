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


// Question 2 – Simple Electricity Bill Calculator
// Topics: Variables, functions, conditional statements, DOM manipulation, event listeners.
// HTML Code
// <h2>Electricity Bill Calculator</h2>
// <input type="number" id="units" placeholder="Enter electricity units">
// <button id="calculateBtn">Calculate Bill</button>
// <div id="billResult"></div>
// Requirements
// 1. Get the input, button, and result elements using getElementById().
// 2. Create a function named calculateBill().
// 3. When the button is clicked, get the electricity units entered by the user.
// 4. If the input is empty or the units are negative, display Please enter valid units.
// 5. Calculate the electricity bill using these conditions:
//    - Units up to 100: ₹2 per unit.
//    - Units from 101 to 200: ₹3 per unit.
//    - Units above 200: ₹5 per unit.
// 6. For this question, apply the rate to all units based on the matching range. For example, 150 units = 150 × ₹3 = ₹450.
// 7. Display the entered units and the total bill amount.
// Expected Output
// - Input: 80 → Total Bill: ₹160
// - Input: 150 → Total Bill: ₹450
// - Input: 250 → Total Bill: ₹1250
// - Empty input → Please enter valid units.
// Condition: Use addEventListener() and a reusable function. Display results on the webpage without using alert().

let units = document.getElementById("units");
let calculateBtn = document.getElementById("calculateBtn");
let billResult = document.getElementById("billResult");

function calculateBill() {
    
    let unitsText = Number(units.value);

    if(units.value === "" || unitsText < 0){
        billResult.innerHTML = "<p>Please enter valid units.</p>";
    }
    else if(unitsText <= 100){
        billResult.innerHTML = `<p>Units: ${unitsText}</p><p>Total Bill: ₹${unitsText * 2}</p>`   
    }
    else if(unitsText <= 200){
        billResult.innerHTML = `<p>Units: ${unitsText}</p><p>Total Bill: ₹${unitsText * 3}</p>`   
    }
    else{
        billResult.innerHTML = `<p>Units: ${unitsText}</p><p>Total Bill: ₹${unitsText * 5}</p>`   
    }
}

calculateBtn.addEventListener("click", calculateBill);