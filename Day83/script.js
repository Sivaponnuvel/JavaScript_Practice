// Question 1 – Product Search and Availability
// Topics: Array of objects, filter(), includes(), functions, DOM, and event listeners.
// Create a feature that allows users to search for products and check their availability.
// HTML Code
// <h2>Product Search</h2>
// <input type="text" id="searchInput" placeholder="Search product">
// <button id="searchBtn">Search</button>
// <div id="productList"></div>
// Requirements
// 1. Create an array of product objects with the properties name, price, and stock.
// 2. Add at least four products. For example:
// let products = [
//     { name: "Laptop", price: 50000, stock: 5 },
//     { name: "Mouse", price: 500, stock: 0 },
//     { name: "Keyboard", price: 1500, stock: 10 },
//     { name: "Monitor", price: 12000, stock: 3 }
// ];
// 3. When the Search button is clicked, get the search text from the input field.
// 4. Use filter() and includes() to find products whose names contain the search text, ignoring uppercase and lowercase differences.
// 5. Display each matching product's name and price.
// 6. If stock is greater than 0, display In Stock. Otherwise, display Out of Stock.
// 7. If no products match, display No products found.
// 8. If the search input is empty, display Please enter a product name.
// Expected Output
// If the user searches for moUSe:
// Mouse - ₹500
// Out of Stock
// If the user searches for lap:
// Laptop - ₹50000
// In Stock
// If the user searches for Phone:
// No products found.
// Condition: Use addEventListener(). Display all messages on the webpage; do not use alert()

let products = [
    { name: "Laptop", price: 50000, stock: 5 },
    { name: "Mouse", price: 500, stock: 0 },
    { name: "Keyboard", price: 1500, stock: 10 },
    { name: "Monitor", price: 12000, stock: 3 }
];

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let productList = document.getElementById("productList");

searchBtn.addEventListener("click", function(){

    let searchText = searchInput.value.trim();

    if (searchText === ""){
        productList.innerHTML = "Please enter a product name."
        return;
    }

    let matchProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchText.toLowerCase());
    });

    if(matchProducts.length === 0){
        productList.innerHTML = "No products found.";
        return;
    }

    let output = "";

    matchProducts.forEach(function(product){
        output += `
            <p>
                ${product.name} - ₹${product.price}<br>
                ${product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
        `;
    });

    productList.innerHTML = output;
});


// Question 2 – Student Marks and Grade Calculator
// Topics: Objects, arrays, functions, for...of, conditional statements, and DOM manipulation.
// Create a feature that calculates a student's total marks, average, and grade.
// HTML Code
// <h2>Student Grade Calculator</h2>
// <input type="text" id="studentName" placeholder="Enter student name">
// <input type="number" id="mark1" placeholder="Subject 1 marks">
// <input type="number" id="mark2" placeholder="Subject 2 marks">
// <input type="number" id="mark3" placeholder="Subject 3 marks">
// <button id="calculateBtn">Calculate Grade</button>
// <div id="result"></div>
// Requirements
// 1. Get the student's name and three subject marks when the button is clicked.
// 2. If the name or any mark is empty, display Please fill in all fields.
// 3. If any mark is below 0 or above 100, display Marks must be between 0 and 100.
// 4. Store the student's name and marks in an object.
// 5. Use a for...of loop to calculate the total marks.
// 6. Calculate the average using:
//    average = total / 3
// 7. Assign a grade according to these rules:
//    - Average greater than or equal to 90: Grade A
//    - Average greater than or equal to 75: Grade B
//    - Average greater than or equal to 50: Grade C
//    - Average below 50: Grade F
// 8. Display the student's name, total marks, average (to two decimal places), and grade inside the result div.
// Expected Output
// Example input:
// Student Name: Siva
// Subject 1: 90
// Subject 2: 80
// Subject 3: 70
// Expected output:
// Student Name: Siva
// Total Marks: 240
// Average: 80.00
// Grade: B
// Condition: Use a function to calculate the result and addEventListener() to handle the button click. Do not use alert().
// Submission Instructions
// - Submit the JavaScript code for both questions.
// - You can use the provided HTML directly.
// - I'll review your logic, check edge cases, explain any mistakes, and score each question out of 10.

const studentName = document.getElementById("studentName");
const mark1 = document.getElementById("mark1");
const mark2 = document.getElementById("mark2");
const mark3 = document.getElementById("mark3");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function calculateGrade() {
    const name = studentName.value.trim();
    const m1 = Number(mark1.value);
    const m2 = Number(mark2.value);
    const m3 = Number(mark3.value);

    if (
        name === "" ||
        mark1.value === "" ||
        mark2.value === "" ||
        mark3.value === ""
    ) {
        result.innerHTML = "Please fill in all fields";
        return;
    }

    const marks = [m1, m2, m3];

    for (const mark of marks) {
        if (mark < 0 || mark > 100) {
            result.innerHTML = "Marks must be between 0 and 100";
            return;
        }
    }

    const student = {
        name: name,
        marks: marks
    };

    let total = 0;

    for (const mark of student.marks) {
        total += mark;
    }

    const average = total / 3;

    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    result.innerHTML = `
        <h3>Student Result</h3>
        <p><strong>Student Name:</strong> ${student.name}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}

calculateBtn.addEventListener("click", calculateGrade);