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


