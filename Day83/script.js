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


