// 🟢 Question 1 – Product Listing and Search
// Imagine you're developing an e-commerce website. The application stores product information in an array of objects, and the products must be displayed dynamically on the webpage.
// Use the following HTML:
// <h2>Product Store</h2>
// <input
//     type="text"
//     id="searchInput"
//     placeholder="Search products..."
// >
// <div id="productList"></div>
// Your product data:
// let products = [
//     { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
//     { id: 2, name: "Mouse", price: 1000, category: "Accessories" },
//     { id: 3, name: "Keyboard", price: 2000, category: "Accessories" },
//     { id: 4, name: "Mobile Phone", price: 25000, category: "Electronics" },
//     { id: 5, name: "Headphones", price: 1500, category: "Accessories" }
// ];
// Requirements:
// 1. Select the productList element using document.getElementById().
// 2. Display all five products dynamically inside productList.
// 3. For every product, display its:
//    - Product name
//    - Price
//    - Category
// 4. Use an appropriate array method to iterate through the products.
// 5. Select the searchInput element.
// 6. Add an "input" event listener to the search box.
// 7. Whenever the user types a product name, filter the products and display only matching results.
// 8. The search must be case-insensitive. For example, typing "lap" should find "Laptop".
// 9. If no products match, display:
// No products found
// Expected initial output:
// Product Store
// Laptop
// Price: ₹55000
// Category: Electronics
// Mouse
// Price: ₹1000
// Category: Accessories
// Keyboard
// Price: ₹2000
// Category: Accessories
// Mobile Phone
// Price: ₹25000
// Category: Electronics
// Headphones
// Price: ₹1500
// Category: Accessories
// Example search: When the user types mouse, only this product should appear:
// Mouse
// Price: ₹1000
// Category: Accessories
// Condition: Use the provided product array. Do not hardcode each product separately into the HTML.

let products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 1000, category: "Accessories" },
    { id: 3, name: "Keyboard", price: 2000, category: "Accessories" },
    { id: 4, name: "Mobile Phone", price: 25000, category: "Electronics" },
    { id: 5, name: "Headphones", price: 1500, category: "Accessories" }
];

let productList = document.getElementById("productList");
let searchInput = document.getElementById("searchInput");

function displayProducts(productArray) {
    productList.innerHTML = "";

    if (productArray.length === 0){
        productList.innerHTML = "<p>No products found</p>";
        return;
    }
    productArray.forEach(product => {
        const productDiv = document.createElement("div");
        
        productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p><p>Category: ${product.category}</p><hr>`;

        productList.appendChild(productDiv);
    });
}
displayProducts(products);

searchInput.addEventListener("input", () =>{
    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchText)
    });

    displayProducts(filteredProducts);
});


