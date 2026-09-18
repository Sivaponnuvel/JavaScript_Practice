// 🟢 Question 1 – User Profile Update
// You have a user profile object:
// let user = {
//     name: "Sivaponnuvel",
//     age: 22,
//     role: "Python Developer"
// };
// Do the following:
// Add a new property location with value "Chennai".
// Add a new property experience with value 1.
// Change role to "Python Full Stack Developer".
// Print the complete user object.
// Expected Output:
// {
//   name: "Sivaponnuvel",
//   age: 22,
//   role: "Python Full Stack Developer",
//   location: "Chennai",
//   experience: "Fresher"
// }
// Condition: Use JavaScript object property syntax to add and update the properties.

let user = {
    name: "Sivaponnuvel",
    age: 22,
    role: "Python Developer"
};

user.role = "Python Full Stack Developer";
user.location = "Chennai";
user.experience = "Fresher";

console.log(user);


// 🟢 Question 2 – E-commerce Product
// An e-commerce application has this product object:
// let product = {
//     name: "Laptop",
//     price: 55000,
//     category: "Electronics",
//     stock: 10,
//     discount: 2000
// };
// Do the following:
// Remove the discount property.
// Add a new property brand with value "Dell".
// Change stock to 8.
// Print the complete product object.
// Print the brand separately.
// Expected Output:
// {
//   name: "Laptop",
//   price: 55000,
//   category: "Electronics",
//   stock: 8,
//   brand: "Dell"
// }
// Dell
// Condition: Use delete to remove the property.

let product = {
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    stock: 10,
    discount: 2000
};

delete product.discount;
product.brand = "Dell";
product.stock = 8

console.log(product);
console.log(product.brand);