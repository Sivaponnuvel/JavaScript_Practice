// 🟢 Question 1 – Product API Data
// An e-commerce API returns this JSON data:
// let jsonData = `[
//     {"name":"Laptop","price":55000},
//     {"name":"Mouse","price":1000},
//     {"name":"Keyboard","price":2000}
// ]`;
// Do the following:
// Convert jsonData into a JavaScript array using JSON.parse().
// Store it in a variable called products.
// Print the name of the first product.
// Print the price of the second product.
// Print the complete products array.
// Expected Output:
// Laptop
// 1000
// [
//   { name: "Laptop", price: 55000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 2000 }
// ]
// Condition: Use JSON.parse().

let jsonData = `[
    {"name":"Laptop","price":55000},
    {"name":"Mouse","price":1000},
    {"name":"Keyboard","price":2000}
]`;

let product = JSON.parse(jsonData);

console.log(product[0].name);
console.log(product[1].price);
console.log(product);


// 🟢 Question 2 – Convert Cart Data to JSON
// You have a shopping cart:
// let cart = [
//     { name: "Laptop", price: 55000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 }
// ];
// Do the following:
// Convert the cart array into a JSON string using JSON.stringify().
// Store it in a variable called jsonCart.
// Print jsonCart.
// Print the data type of jsonCart.
// Expected Output:
// [{"name":"Laptop","price":55000,"quantity":1},{"name":"Mouse","price":1000,"quantity":2}]
// string
// Condition: Use JSON.stringify().

let cart = [
    { name: "Laptop", price: 55000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 }
];

let jsonCart = JSON.stringify(cart);

console.log(jsonCart);
console.log(typeof(jsonCart));