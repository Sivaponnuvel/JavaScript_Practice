// Question 1 – Shopping Cart Total Calculator
// Topics: Array of objects, for...of, functions, conditional statements, and DOM.
// Create a feature that calculates the total price of selected products in a shopping cart.
// HTML Code
// <h2>Shopping Cart</h2>
// <div id="cartItems"></div>
// <button id="calculateBtn">Calculate Total</button>
// <div id="result"></div>
// Requirements
// 1. Create an array containing at least four product objects. Each object must have name, price, quantity, and selected properties.
// Example:
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1, selected: true },
//     { name: "Mouse", price: 500, quantity: 2, selected: true },
//     { name: "Keyboard", price: 1500, quantity: 1, selected: false },
//     { name: "Monitor", price: 12000, quantity: 1, selected: true }
// ];
// 2. Display each product's name, price, quantity, and selection status inside cartItems.
// 3. Create a function named calculateTotal().
// 4. When the Calculate Total button is clicked, use a for...of loop to calculate the total price of selected products only.
// 5. Calculate each product's subtotal using price * quantity.
// 6. Display the final total inside the result div.
// 7. If no products are selected, display No products selected.
// Expected Output
// For the example data above:
// Laptop - ₹50000 - Quantity: 1
// Mouse - ₹500 - Quantity: 2
// Keyboard - ₹1500 - Quantity: 1
// Monitor - ₹12000 - Quantity: 1
// Total: ₹62000
// Condition: Use addEventListener(). Do not use alert()

let cart = [
    { name: "Laptop", price: 50000, quantity: 1, selected: true },
    { name: "Mouse", price: 500, quantity: 2, selected: true },
    { name: "Keyboard", price: 1500, quantity: 1, selected: false },
    { name: "Monitor", price: 12000, quantity: 1, selected: true }
];

let cartItems = document.getElementById("cartItems");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

for (let product of cart){
    cartItems.innerHTML += `<p>${product.name} - ₹${product.price} - Quantity: ${product.quantity} - Selected: ${product.selected ? "Yes" : "No"}</p>`
}

function calculateTotal(){
    let total = 0
    let hasSelected = false;

    for(let product of cart){
        if(product.selected){
            total += product.price * product.quantity;
            hasSelected = true;
        }
    }

    if(hasSelected){
            result.innerHTML = `Total: ₹${total}`
        }
    else{
        result.innerHTML = "No products selected";
    }
}

calculateBtn.addEventListener("click", calculateTotal);


// Question 2 – Employee Search and Department Filter
// Topics: Array of objects, filter(), includes(), toLowerCase(), functions, and DOM.
// Create a feature that allows users to search employees by name and filter them by department.
// HTML Code
// <h2>Employee Directory</h2>
// <input type="text" id="searchInput" placeholder="Search employee name">
// <select id="departmentFilter">
//     <option value="all">All Departments</option>
//     <option value="IT">IT</option>
//     <option value="HR">HR</option>
//     <option value="Finance">Finance</option>
// </select>
// <button id="filterBtn">Search Employees</button>
// <div id="employeeList"></div>
// Requirements
// 1. Create an array containing at least five employee objects with name, department, and salary properties.
// Example:
// let employees = [
//     { name: "Arun", department: "IT", salary: 30000 },
//     { name: "Priya", department: "HR", salary: 25000 },
//     { name: "Kumar", department: "Finance", salary: 35000 },
//     { name: "Divya", department: "IT", salary: 40000 },
//     { name: "Ravi", department: "HR", salary: 28000 }
// ];
// 2. Create a function named filterEmployees().
// 3. When the Search Employees button is clicked, get the search text and selected department.
// 4. Use filter() to return employees who match both conditions:
//    - Their name contains the search text, ignoring uppercase and lowercase differences.
//    - Their department matches the selected department, unless all is selected.
// 5. Display each matching employee's name, department, and salary.
// 6. If no employees match, display No employees found.
// 7. If the search input is empty and the department is all, display all employees.
// Expected Output
// If the user enters a and selects IT:
// Arun - IT - ₹30000
// Divya - IT - ₹40000
// If the user enters Priya and selects HR:
// Priya - HR - ₹25000
// If the user enters Siva and selects Finance:
// No employees found.
// Condition: Use addEventListener() and display all results on the webpage. Do not use alert().

let employees = [
    { name: "Arun", department: "IT", salary: 30000 },
    { name: "Priya", department: "HR", salary: 25000 },
    { name: "Kumar", department: "Finance", salary: 35000 },
    { name: "Divya", department: "IT", salary: 40000 },
    { name: "Ravi", department: "HR", salary: 28000 }
];

let searchInput = document.getElementById("searchInput");
let departmentFilter = document.getElementById("departmentFilter");
let filterBtn = document.getElementById("filterBtn");
let employeeList = document.getElementById("employeeList");

function filterEmployees() {

    let searchText = searchInput.value.toLowerCase().trim();
    let selectedDepartment = departmentFilter.value;

    let filteredEmployees = employees.filter(employee => {

        let nameMatch = employee.name
            .toLowerCase()
            .includes(searchText);

        let departmentMatch =
            selectedDepartment === "all" ||
            employee.department === selectedDepartment;

        return nameMatch && departmentMatch;
    });

    employeeList.innerHTML = "";

    if (filteredEmployees.length === 0) {
        employeeList.innerHTML = "<p>No employees found.</p>";
        return;
    }

    filteredEmployees.forEach(employee => {
        let p = document.createElement("p");

        p.textContent =
            `${employee.name} - ${employee.department} - ₹${employee.salary}`;

        employeeList.appendChild(p);
    });
}

filterBtn.addEventListener("click", filterEmployees);

filterEmployees();