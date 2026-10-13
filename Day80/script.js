// Question 1 – Display Product List
// Concepts: for loop, arrays, objects, DOM, innerHTML or textContent.
// Imagine you are developing an e-commerce website. You need to display product names and prices dynamically when the user clicks a button.
// HTML
// <h2>Available Products</h2>
// <button id="showBtn">Show Products</button>
// <div id="productList"></div>
// Given data
// let products = [
//     { name: "Laptop", price: 55000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 2000 },
//     { name: "Headphones", price: 1500 }
// ];
// Requirements
// 1. Select showBtn and productList using document.getElementById().
// 2. Add a click event listener to the Show Products button.
// 3. When the button is clicked, use a for loop to iterate through the products array.
// 4. Display each product's name and price.
// 5. Display the ₹ symbol before each price.
// 6. Display each product on a separate line or inside a separate <div>.
// 7. Clicking the button multiple times must not create duplicate product lists.
// 8. Use the provided products array. Do not hardcode individual products into the HTML.
// Expected output
// After clicking the button:
// Available Products
// Laptop
// Price: ₹55000
// Mouse
// Price: ₹1000
// Keyboard
// Price: ₹2000
// Headphones
// Price: ₹1500

let products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Headphones", price: 1500 }
];

let showBtn = document.getElementById("showBtn");
let productList = document.getElementById("productList");

showBtn.addEventListener("click", function(){

    productList.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        productList.innerHTML += `<div><h3>${products[i].name}</h3><p>Price: ₹${products[i].price}</p></div>`
    }
});


// Question 2 – Calculate Total Marks
// Concepts: for...of loop, arrays, conditional statements, DOM, button click events.
// Imagine you are developing a student result page. You need to display the student's marks, calculate the total, and display a performance message.
// HTML
// <h2>Student Result</h2>
// <button id="calculateBtn">Calculate Result</button>
// <div id="marksList"></div>
// <p id="totalMarks"></p>
// <p id="result"></p>
// Given data
// let marks = [80, 65, 90, 45, 70];
// Requirements
// 1. Select calculateBtn, marksList, totalMarks, and result using document.getElementById().
// 2. Add a click event listener to the Calculate Result button.
// 3. Use a for...of loop to display each subject's marks.
// 4. Use a loop to add all the marks and calculate the total.
// 5. Display the total marks inside the totalMarks element.
// 6. If the total marks are greater than or equal to 250, display "Good Performance".
// 7. If the total marks are less than 250, display "Needs Improvement".
// 8. Clicking the button multiple times must not duplicate the displayed marks.
// 9. Calculate the total from the provided array. Do not hardcode the total.
// 10. Use a for...of loop for the total calculation. Do not use reduce().
// Expected output
// After clicking the button:
// Student Result
// Subject 1: 80
// Subject 2: 65
// Subject 3: 90
// Subject 4: 45
// Subject 5: 70
// Total Marks: 350
// Good Performance

let marks = [80, 65, 90, 45, 70];

let calculateBtn = document.getElementById("calculateBtn");
let marksList = document.getElementById("marksList");
let totalMarks = document.getElementById("totalMarks");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", function(){

    marksList.innerHTML = "";
    
    let total = 0;
    let subject = 1;

    for(let mark of marks){
        marksList.innerHTML += `<div>Subject ${subject}: ${mark}</div>`;

        total += mark;
        subject++;
    }

    totalMarks.textContent = `Total Marks: ${total}`;

    if(total >= 250){
        result.textContent = "Good Performance";
    }
    else{
        result.textContent = "Needs Improvement"
    }
});