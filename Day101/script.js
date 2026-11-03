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


// 🟢 Question 2 – Student Marks Manager
// Topics: DOM, Arrays, Objects, createElement(), appendChild(), remove(), Event Listeners, Input Validation, Conditional Statements, forEach().
// HTML
// <h2>Student Marks Manager</h2>
// <input type="text" id="studentNameInput" placeholder="Enter student name">
// <input type="number" id="marksInput" placeholder="Enter marks">
// <button id="addStudentBtn">Add Student</button>
// <p id="studentMessage"></p>
// <ul id="studentMarksList"></ul>
// Initial Array
// let students = [];
// Requirements
// Write JavaScript code to implement the following functionality:
// 1. Select the student name input, marks input, Add Student button, message paragraph, and student list.
// 2. Add a click event listener to the Add Student button.
// 3. Get the student name using .value and .trim().
// 4. Get the marks using Number().
// 5. If the student name is empty, display Please enter a student name.
// 6. If the marks input is empty, display Please enter student marks.
// 7. If the marks are less than 0 or greater than 100, display Marks must be between 0 and 100.
// 8. If the inputs are valid, create a student object containing the student's name and marks.
// 9. Add the student object to the students array using .push().
// 10. Create a new <li> element and display the student's name, marks, and result.
// 11. If the marks are 35 or above, display Pass. Otherwise, display Fail.
// 12. Create a Delete button for every student.
// 13. When the Delete button is clicked, remove only that student's entry from the displayed list.
// 14. Also remove the corresponding student object from the students array.
// 15. Display Student Added Successfully after adding a student.
// 16. Clear both input fields after successfully adding a student.
// Expected Behaviour
// Example 1 — Add a student
// Input:
// Student Name: Arun
// Marks: 85
// Output:
// Arun - Marks: 85 - Pass [Delete]
// Message:
// Student Added Successfully
// Example 2 — Add another student
// Input:
// Student Name: Priya
// Marks: 25
// Output:
// Arun - Marks: 85 - Pass [Delete]
// Priya - Marks: 25 - Fail [Delete]
// Example 3 — Invalid marks
// Input:
// Student Name: Karthik
// Marks: 120
// Output:
// Marks must be between 0 and 100
// Karthik should not be added to the list or array.
// Example 4 — Empty student name
// Input:
// Student Name: (empty)
// Marks: 70
// Output:
// Please enter a student name
// Example 5 — Delete a student
// Click Delete beside Arun.
// Output:
// Priya - Marks: 25 - Fail [Delete]
// Only Arun should be removed from the displayed list and the array.
// Conditions
// - Use addEventListener("click", ...).
// - Use .value and .trim().
// - Use Number() to convert marks into a number.
// - Use an array of student objects.
// - Use .push() to add student objects.
// - Use document.createElement() and appendChild().
// - Use .remove() to remove the selected student from the displayed list.
// - Use .splice() to remove the corresponding student from the array.
// - Use conditional statements to determine Pass or Fail.
// - Use textContent to display student information and messages.
// - Validate all inputs before adding a student.
// - Deleting one student must not delete other students.

let students = [];

let studentNameInput = document.getElementById("studentNameInput");
let marksInput = document.getElementById("marksInput");
let addStudentBtn = document.getElementById("addStudentBtn");
let studentMessage = document.getElementById("studentMessage");
let studentMarksList = document.getElementById("studentMarksList");

addStudentBtn.addEventListener("click", function(){

    let studentNameInputText = studentNameInput.value.trim();
    let marksInputText = Number(marksInput.value);

    if(studentNameInputText === ""){
        studentMessage.textContent = "Please enter a student name";
    }
    else if(marksInput.value === ""){
        studentMessage.textContent = "Please enter student marks";
    }
    else if(marksInputText < 0 || marksInputText > 100){
        studentMessage.textContent = "Marks must be between 0 and 100";
    }
    else{
        
        let student = {
            name: studentNameInputText,
            marks: marksInputText
        }

        students.push(student);

        let result;

        if(marksInputText >= 35){
            result = "Pass";
        }else{
            result = "Fail";
        }

        let li = document.createElement("li");
        li.textContent = `${studentNameInputText} - Marks: ${marksInputText} - ${result}`;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function(){
            li.remove();
            let studentIndex = students.indexOf(student);

            if(studentIndex !== -1){
                students.splice(studentIndex, 1);
            }
        })

        li.appendChild(deleteBtn);
        studentMarksList.appendChild(li);

        studentMessage.textContent = "Student Added Successfully";

        studentNameInput.value = "";
        marksInput.value = "";
    }
})