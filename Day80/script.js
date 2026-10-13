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


