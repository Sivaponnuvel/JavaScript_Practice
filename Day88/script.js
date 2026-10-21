// 🟢 Question 1 – Product Search System
// Topics: DOM, Event Listeners, Arrays, Objects, filter(), Conditional Statements
// Consider this HTML:
// <input id="searchInput" type="text" placeholder="Search products">
// <button id="searchBtn">Search</button>
// <div id="productList"></div>
// <p id="message"></p>
// You have the following product data:
// let products = [
//     { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
//     { id: 2, name: "Mouse", price: 1000, category: "Electronics" },
//     { id: 3, name: "Keyboard", price: 2000, category: "Electronics" },
//     { id: 4, name: "Office Chair", price: 5000, category: "Furniture" },
//     { id: 5, name: "Study Table", price: 8000, category: "Furniture" }
// ];
// Write JavaScript code to:
// 1. Select all the required HTML elements using DOM methods.
// 2. Add a click event listener to the Search button.
// 3. Read the search text from the input field.
// 4. Search for products whose names contain the entered text, ignoring uppercase and lowercase differences.
// 5. Display each matching product's name, price, and category inside productList.
// 6. If no products match, display No products found inside the message paragraph.
// 7. If products match, clear the message paragraph.
// Expected behavior:
// If the user searches for lap, display:
// Laptop
// Price: ₹55000
// Category: Electronics
// If the user searches for phone, display:
// No products found
// Conditions:
// - Use addEventListener("click", ...).
// - Use filter() to search the products.
// - Results must appear on the webpage.
// - Searching should work regardless of letter case.

let products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 1000, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 2000, category: "Electronics" },
    { id: 4, name: "Office Chair", price: 5000, category: "Furniture" },
    { id: 5, name: "Study Table", price: 8000, category: "Furniture" }
];

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let productList = document.getElementById("productList");
let message = document.getElementById("message");

searchBtn.addEventListener("click", function () {

    let searchText = searchInput.value.toLowerCase();

    let filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchText);
    });

    productList.innerHTML = "";

    if (filteredProducts.length > 0) {

        message.textContent = "";

        filteredProducts.forEach(function (product) {
            productList.innerHTML += `
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: ₹${product.price}</p>
                    <p>Category: ${product.category}</p>
                    <hr>
                </div>
            `;
        });

    } else {

        message.textContent = "No products found";
    }
});


