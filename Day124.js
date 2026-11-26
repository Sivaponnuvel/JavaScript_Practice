// Question 1 – Calculate Total Price of Products
// Concept: map(), Objects, Arithmetic Operations.
// You are given an array of products. Each product has a name and price.
// Your task is to create a new array containing each product's name and its price after adding 10% tax.
// Input:
// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Tablet", price: 15000 }
// ];
// Expected Output:
// [
//     { name: "Laptop", price: 55000 },
//     { name: "Mobile", price: 22000 },
//     { name: "Tablet", price: 16500 }
// ]
// Requirements:
// 1. Create an array named products.
// 2. Use the map() method to process every product.
// 3. For each product, calculate 10% tax.
// 4. Add the tax to the original price.
// 5. Return a new object containing the product's name and updated price.
// 6. Store the new array in a variable named updatedProducts.
// 7. Print updatedProducts using console.log().

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Tablet", price: 15000 }
];

let updatedProducts = products.map(product => {
    return {
        name: product.name,
        price: product.price + (product.price * 10 / 100)
    }
})

console.log(updatedProducts);


