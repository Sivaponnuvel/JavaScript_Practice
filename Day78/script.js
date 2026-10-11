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


// 🟢 Question 2 – Shopping Cart and Total Price
// Now imagine you're developing the shopping cart feature of the same e-commerce application.
// Use this HTML:
// <h2>Shopping Cart</h2>
// <div id="cartItems"></div>
// <h3 id="totalPrice">Total: ₹0</h3>
// Use the following product data:
// let cart = [
//     { id: 1, name: "Laptop", price: 55000, quantity: 1 },
//     { id: 2, name: "Mouse", price: 1000, quantity: 2 },
//     { id: 3, name: "Keyboard", price: 2000, quantity: 1 }
// ];
// Requirements:
// 1. Select the cartItems and totalPrice elements using DOM methods.
// 2. Display every cart item's:
//    - Product name
//    - Unit price
//    - Quantity
//    - Subtotal (price × quantity)
// 3. Calculate the overall cart total by adding all item subtotals.
// 4. Display the total dynamically inside totalPrice.
// 5. For each cart item, display an Increase Quantity button and a Decrease Quantity button.
// 6. When the user clicks Increase Quantity, increase that product's quantity by 1.
// 7. When the user clicks Decrease Quantity, decrease that product's quantity by 1.
// 8. A product's quantity must never go below 1.
// 9. After every button click, update the displayed quantities, subtotals and overall total.
// Expected initial output:
// Shopping Cart
// Laptop
// Unit Price: ₹55000
// Quantity: 1
// Subtotal: ₹55000
// [Decrease Quantity] [Increase Quantity]
// Mouse
// Unit Price: ₹1000
// Quantity: 2
// Subtotal: ₹2000
// [Decrease Quantity] [Increase Quantity]
// Keyboard
// Unit Price: ₹2000
// Quantity: 1
// Subtotal: ₹2000
// [Decrease Quantity] [Increase Quantity]
// Total: ₹59000
// Example interaction:
// If the user clicks Increase Quantity for Mouse:
// - Mouse quantity changes from 2 to 3.
// - Mouse subtotal changes from ₹2000 to ₹3000.
// - Overall total changes from ₹59000 to ₹60000.
// - Other product quantities remain unchanged.
// Conditions:
// - Use the provided cart array.
// - Use DOM methods to render the cart.
// - Use addEventListener() to handle button clicks.
// - Use JavaScript calculations to update the total.
// - Do not hardcode the final total.
// - Keep all product data in the array of objects.

let cart = [
    { id: 1, name: "Laptop", price: 55000, quantity: 1 },
    { id: 2, name: "Mouse", price: 1000, quantity: 2 },
    { id: 3, name: "Keyboard", price: 2000, quantity: 1 }
];

let cartItems = document.getElementById("cartItems");
let totalPrice = document.getElementById("totalPrice");

function displayCart(cartArray) {
    cartItems.innerHTML = "";

    let total = 0;

    if (cartArray.length === 0){
        cartItems.innerHTML = "<p>No products found</p>";
        totalPrice.textContent = "Total: ₹0";
        return;
    }

    cartArray.forEach(cart => {
        const cartDiv = document.createElement("div");

        const subtotal = cart.price * cart.quantity;
        total += subtotal

        cartDiv.innerHTML = `<h3>${cart.name}</h3>
        <p>Unit Price: ₹${cart.price}</p>
        <p>Quantity: ${cart.quantity}</p>
        <p>Subtotal: ₹${subtotal}</p>
        <div>
            <button class="decrease-btn">Decrease Quantity</button> 
            <button class="increase-btn">Increase Quantity</button>
        </div>`

        const decreaseBtn = cartDiv.querySelector(".decrease-btn");
        const increaseBtn = cartDiv.querySelector(".increase-btn");

        increaseBtn.addEventListener("click", () => {
            cart.quantity++;
            displayCart(cartArray);
        });

        decreaseBtn.addEventListener("click", () => {
            if (cart.quantity > 1) {
                cart.quantity--;
                displayCart(cartArray);
            }
        });

        cartItems.appendChild(cartDiv);
    });

    totalPrice.textContent = `Total: ₹${total}`;
}
displayCart(cart);