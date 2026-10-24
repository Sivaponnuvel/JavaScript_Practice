// 🟢 Question 1 – Simple Shopping Discount Calculator
// Topics: DOM, .value, Number(), addEventListener(), if...else
// Consider this HTML:
// <input id="price" type="number" placeholder="Enter product price">
// <button id="discountBtn">Calculate Discount</button>
// <p id="result"></p>
// Write JavaScript code to:
// 1. Select the price input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the product price entered by the user.
// 4. If the price is ₹1000 or more, calculate a 10% discount.
// 5. Otherwise, calculate a 5% discount.
// 6. Display the discount amount inside the result paragraph.
// Expected output:
// If the user enters 2000:
// Discount Amount: ₹200
// If the user enters 500:
// Discount Amount: ₹25
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Use if...else.
// - Display the result using textContent.

let price = document.getElementById("price");
let discountBtn = document.getElementById("discountBtn");
let result = document.getElementById("result");

discountBtn.addEventListener("click", function(){
    let priceText = Number(price.value);

    if(priceText >= 1000){
        let discount = priceText * 10 / 100;
        result.textContent = `Discount Amount: ₹${discount}`;
    }
    else{
        let discount = priceText * 5 / 100;
        result.textContent = `Discount Amount: ₹${discount}`;
    }
})


// 🟢 Question 2 – Student Pass or Fail Checker
// Topics: DOM, .value, Number(), if...else, Event Listeners
// Consider this HTML:
// <input id="marks" type="number" placeholder="Enter student marks">
// <button id="checkBtn">Check Result</button>
// <p id="result1"></p>
// Write JavaScript code to:
// 1. Select the marks input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the student's marks entered by the user.
// 4. If the marks are 35 or more, display Student Passed.
// 5. Otherwise, display Student Failed.
// Expected output:
// If the user enters 75:
// Student Passed
// If the user enters 25:
// Student Failed
// Conditions:
// - Use addEventListener("click", ...).
// - Read the marks using .value and convert them with Number().
// - Use if...else.
// - Display the result using textContent.

let marks = document.getElementById("marks");
let checkBtn = document.getElementById("checkBtn");
let result1 = document.getElementById("result1");

checkBtn.addEventListener("click", function(){
    let marksText = Number(marks.value);

    if(marksText >= 35){
        result1.textContent = "Student Passed";
    }
    else{
        result1.textContent = "Student Failed";
    }
})