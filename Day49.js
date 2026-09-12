// 🔹 Question 1 – Create a Product List for Display
// You are building an e-commerce website. You have:
// let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// Using .join():
// Combine all product names into one string
// Separate each product with " | "
// Store the result in a new variable
// Display the result
// Expected Output:
// Laptop | Mouse | Keyboard | Monitor
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use an array
// ✅ Use .join()
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use for loop
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't manually create the final string

let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

const result = products.join(" | ")

console.log(result);


// 🔹 Question 2 – Create a Breadcrumb
// You are building a website navigation bar. The current page path is stored as:
// let path = ["Home", "Products", "Electronics", "Laptops"];
// Using .join():
// Combine the items into a breadcrumb
// Separate each item with " > "
// Store the result in a new variable
// Display the result
// Expected Output:
// Home > Products > Electronics > Laptops
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use an array
// ✅ Use .join()
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use for loop
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't manually create the final string

let path = ["Home", "Products", "Electronics", "Laptops"];

const answer = path.join(" > ");

console.log(answer);