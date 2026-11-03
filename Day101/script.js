// 🟢 Question 1 – Product List Manager with Search and Delete
// Topics: DOM, Arrays, createElement(), appendChild(), remove(), Event Listeners, Input Validation, forEach(), includes(), toLowerCase().
// HTML
// <h2>Product List Manager</h2>
// <input type="text" id="productInput" placeholder="Enter product name">
// <button id="addProductBtn">Add Product</button>
// <br><br>
// <input type="text" id="searchInput" placeholder="Search product">
// <p id="productMessage"></p>
// <ul id="productList"></ul>
// Initial Array
// let products = [];
// Requirements
// Write JavaScript code to implement the following functionality:
// 1. Select the product input, Add Product button, search input, message paragraph, and product list.
// 2. Add a click event listener to the Add Product button.
// 3. Get the product name and remove unwanted spaces using .trim().
// 4. If the product input is empty, display Please enter a product name.
// 5. Otherwise, add the product name to the products array using .push().
// 6. Create a new <li> element using document.createElement("li") and display the product name.
// 7. Create a Delete button for each product.
// 8. When the Delete button is clicked, remove only that product from the displayed list and remove its name from the products array.
// 9. Display Product Added Successfully after adding a product.
// 10. Clear the product input after successfully adding a product.
// 11. When the user types in the search input, display only the products whose names contain the search text.
// 12. The search must be case-insensitive.
// 13. If no products match the search, display No matching products found.
// 14. When the search input is empty, display all available products.
// Expected Behaviour
// Example 1 — Add products
// Input:
// Laptop
// Output:
// Laptop [Delete]
// Message:
// Product Added Successfully
// Add another product:
// Mobile
// Keyboard
// The list should display:
// Laptop [Delete]
// Mobile [Delete]
// Keyboard [Delete]
// Example 2 — Search products
// Search input:
// lap
// Output:
// Laptop [Delete]
// Example 3 — Case-insensitive search
// Search input:
// MOB
// Output:
// Mobile [Delete]
// Example 4 — No matching product
// Search input:
// Tablet
// Output:
// No matching products found
// Example 5 — Delete a product
// Click Delete beside Laptop.
// The product must be removed from both the displayed list and the products array.
// Conditions
// - Use addEventListener().
// - Use .value and .trim().
// - Use .push() to add products to the array.
// - Use document.createElement() and appendChild().
// - Use .remove() to delete the selected product.
// - Use .splice() to remove the deleted product from the array.
// - Use .forEach() to display matching products.
// - Use .includes() and .toLowerCase() for case-insensitive searching.
// - Use textContent to display messages and product names.
// - Every product must have its own Delete button.
// - Searching must not permanently delete products that do not match.
// - Deleting one product must not delete other products.

let products = [];

let productInput = document.getElementById("productInput");
let addProductBtn = document.getElementById("addProductBtn");
let searchInput = document.getElementById("searchInput");
let productMessage = document.getElementById("productMessage");
let productList = document.getElementById("productList");

addProductBtn.addEventListener("click", function(){

    let productInputText = productInput.value.trim();

    if(productInputText === ""){
        productMessage.textContent = "Please enter a product name";
    }
    else{
        
        products.push(productInputText);

        let li = document.createElement("li");
        li.textContent = productInputText;

        let deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";

        deletebtn.addEventListener("click", function(){
            li.remove();
            let productIndex = products.indexOf(productInputText);

            if(productIndex !== -1){
                products.splice(productIndex, 1);
            }
        })
        li.appendChild(deletebtn);

        productList.appendChild(li);

        productMessage.textContent = "Product Added Successfully";

        productInput.value = "";
    }
})

searchInput.addEventListener("input", function(){

    let searchText = searchInput.value.trim().toLowerCase();

    productList.innerHTML = "";

    let found = false;

    products.forEach(function(product){

        if(
            searchText === "" ||
            product.toLowerCase().includes(searchText)
        ){

            found = true;

            let li = document.createElement("li");
            li.textContent = product;

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", function(){

                li.remove();

                let productIndex = products.indexOf(product);

                if(productIndex !== -1){
                    products.splice(productIndex, 1);
                }

            });

            li.appendChild(deleteBtn);
            productList.appendChild(li);
        }

    });

    if(!found){
        productMessage.textContent = "No matching products found";
    }
    else{
        productMessage.textContent = "";
    }

});


