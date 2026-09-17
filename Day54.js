// 🔹 Question 1 – User Profile
// You are building a user profile section for a web application.
// Create an object named user with these properties:
// name → "Sivaponnuvel"
// age → 22
// role → "Python Developer"
// Then:
// Display the user's name
// Display the user's role
// Expected Output:
// Sivaponnuvel
// Python Developer
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use an object
// ✅ Use property-value pairs
// ✅ Access properties using dot notation (.)
// ✅ Use console.log()
// ❌ Don't use an array
// ❌ Don't use a loop

let properties = {
    name: "Sivaponnuvel",
    age: 22,
    role: "Python Developer"
};

console.log(properties.name);
console.log(properties.role);


// 🔹 Question 2 – Update Product Price
// You are building an e-commerce application.
// Create an object:
// let product = {
//     name: "Laptop",
//     price: 55000,
//     category: "Electronics"
// };
// The product price has been updated to ₹60000.
// Using the object:
// Update the price property to 60000
// Display the updated price
// Display the complete product object
// Expected Output:
// 60000
// {
//     name: "Laptop",
//     price: 60000,
//     category: "Electronics"
// }
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use an object
// ✅ Update the existing property
// ✅ Use dot notation (.)
// ✅ Use console.log()
// ❌ Don't create a second object
// ❌ Don't use an array
// ❌ Don't use a loop

let product = {
    name: "Laptop",
    price: 55000,
    category: "Electronics"
};

product.price = 60000

console.log(product.price);
console.log(product);