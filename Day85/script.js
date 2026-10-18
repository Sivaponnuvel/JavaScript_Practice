// Question 1 – Product Discount and Price Filter
// Topics: Array of objects, filter(), map(), functions, DOM, and event listeners.
// Create a feature that filters products by their maximum price and displays their discounted prices.
// HTML Code
// <h2>Product Price Filter</h2>
// <input type="number" id="maxPrice" placeholder="Enter maximum price">
// <button id="filterBtn">Filter Products</button>
// <div id="productList"></div>
// Requirements
// 1. Create an array containing at least five product objects. Each object must have name, price, and discount properties.
// let products = [
//     { name: "Laptop", price: 50000, discount: 10 },
//     { name: "Mouse", price: 500, discount: 5 },
//     { name: "Keyboard", price: 1500, discount: 15 },
//     { name: "Monitor", price: 12000, discount: 10 },
//     { name: "Headphones", price: 2000, discount: 20 }
// ];
// 2. Create a function named filterProducts().
// 3. When the Filter Products button is clicked, get the maximum price entered by the user.
// 4. If the input is empty or the maximum price is negative, display Please enter a valid maximum price.
// 5. Use filter() to select products whose original price is less than or equal to the maximum price.
// 6. Use map() to calculate the discounted price for each matching product.
//    Formula:
//    discountedPrice = price - (price * discount / 100)
// 7. Display each matching product's name, original price, discount percentage, and discounted price.
// 8. If no products match, display No products found.
// Expected Output
// If the maximum price is 2000:
// Mouse
// Original Price: ₹500
// Discount: 5%
// Discounted Price: ₹475.00
// Keyboard
// Original Price: ₹1500
// Discount: 15%
// Discounted Price: ₹1275.00
// Headphones
// Original Price: ₹2000
// Discount: 20%
// Discounted Price: ₹1600.00
// Condition: Use addEventListener(). Display all messages on the webpage; do not use alert().

let products = [
    { name: "Laptop", price: 50000, discount: 10 },
    { name: "Mouse", price: 500, discount: 5 },
    { name: "Keyboard", price: 1500, discount: 15 },
    { name: "Monitor", price: 12000, discount: 10 },
    { name: "Headphones", price: 2000, discount: 20 }
];

let maxPrice = document.getElementById("maxPrice");
let filterBtn = document.getElementById("filterBtn");
let productList = document.getElementById("productList");

function filterProducts() {

    let maxText = Number(maxPrice.value);

    if(maxPrice.value === "" || Number(maxPrice.value) < 0){
        productList.innerHTML = "Please enter a valid maximum price.";
        return;
    }
    
    let filteredProducts  = products.filter(product => product.price <= maxText);

    if(filteredProducts.length === 0){
        productList.innerHTML = "No products found.";
        return;
    }

    let discountedProducts = filteredProducts.map(product => ({
        ...product,
        discountedPrice:
            product.price - (product.price * product.discount / 100)
    }));

    productList.innerHTML = "";

    discountedProducts.forEach(product => {
        productList.innerHTML += `
            <p>
                <strong>${product.name}</strong><br>
                Original Price: ₹${product.price}<br>
                Discount: ${product.discount}%<br>
                Discounted Price: ₹${product.discountedPrice.toFixed(2)}
            </p>
        `;
    });
}

filterBtn.addEventListener("click", filterProducts);


// Question 2 – Employee Salary Calculator
// Topics: Arrays, objects, for...of, functions, conditional statements, and DOM manipulation.
// Create a feature that calculates employee salaries after adding a bonus based on their department.
// HTML Code
// <h2>Employee Salary Calculator</h2>
// <input type="text" id="employeeName" placeholder="Enter employee name">
// <input type="number" id="salary" placeholder="Enter basic salary">
// <select id="department">
//     <option value="">Select Department</option>
//     <option value="IT">IT</option>
//     <option value="HR">HR</option>
//     <option value="Finance">Finance</option>
// </select>
// <button id="calculateBtn">Calculate Salary</button>
// <div id="result"></div>
// Requirements
// 1. Get the employee name, basic salary, and department when the button is clicked.
// 2. If any field is empty, display Please fill in all fields.
// 3. If the basic salary is zero or negative, display Salary must be greater than zero.
// 4. Store the employee details in an object with name, basicSalary, and department properties.
// 5. Create a function named calculateSalary().
// 6. Calculate the bonus percentage according to the department:
//    - IT: 20% bonus
//    - HR: 10% bonus
//    - Finance: 15% bonus
// 7. Store the basic salary and bonus in an array, then use a for...of loop to calculate the final salary.
// 8. Display the employee name, department, basic salary, bonus amount, and final salary.
// Expected Output
// Example input:
// Employee Name: Siva
// Basic Salary: 30000
// Department: IT
// Expected output:
// Employee Name: Siva
// Department: IT
// Basic Salary: ₹30000.00
// Bonus: ₹6000.00
// Final Salary: ₹36000.00
// Condition: Use addEventListener() and a reusable function. Display results on the webpage without using alert().

let employeeName = document.getElementById("employeeName");
let salary = document.getElementById("salary");
let department = document.getElementById("department");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

function calculateSalary(employee) {
    let bonusPercentage = 0;

    if (employee.department === "IT") {
        bonusPercentage = 20;
    } else if (employee.department === "HR") {
        bonusPercentage = 10;
    } else if (employee.department === "Finance") {
        bonusPercentage = 15;
    }

    let bonusAmount = employee.basicSalary * (bonusPercentage / 100);

    let salaryArray = [employee.basicSalary, bonusAmount];

    let finalSalary = 0;

    for (let amount of salaryArray) {
        finalSalary += amount;
    }

    return {
        bonusAmount,
        finalSalary
    };
}

calculateBtn.addEventListener("click", function () {

    let name = employeeName.value.trim();
    let basicSalary = Number(salary.value);
    let dept = department.value;

    if (name === "" || salary.value === "" || dept === "") {
        result.innerHTML = "Please fill in all fields";
        return;
    }

    if (basicSalary <= 0) {
        result.innerHTML = "Salary must be greater than zero";
        return;
    }

    let employee = {
        name: name,
        basicSalary: basicSalary,
        department: dept
    };

    let salaryDetails = calculateSalary(employee);

    result.innerHTML = `
        <p><strong>Employee Name:</strong> ${employee.name}</p>
        <p><strong>Department:</strong> ${employee.department}</p>
        <p><strong>Basic Salary:</strong> ₹${employee.basicSalary.toFixed(2)}</p>
        <p><strong>Bonus:</strong> ₹${salaryDetails.bonusAmount.toFixed(2)}</p>
        <p><strong>Final Salary:</strong> ₹${salaryDetails.finalSalary.toFixed(2)}</p>
    `;
});