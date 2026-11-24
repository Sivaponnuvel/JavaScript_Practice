// Question 1 – Handle Promise Success and Failure Using .then() and .catch()
// Concept: Promise, resolve(), reject(), .then(), .catch().
// You are given a product's price. Create a Promise that checks whether the product price is valid.
// Input:
// let product = {
//     name: "Laptop",
//     price: 50000
// };
// Expected Output (price is valid):
// Product: Laptop
// Price: 50000
// Expected Output (price is invalid):
// Error: Invalid product price
// Requirements:
// 1. Create a Promise named checkProduct.
// 2. Inside the Promise, check whether product.price is greater than 0.
// 3. If the price is greater than 0, use resolve() and pass the product object.
// 4. Otherwise, use reject() with the message "Invalid product price".
// 5. Use .then() to receive the resolved product.
// 6. Print the product name and price.
// 7. Use .catch() to handle the error and print its message.

const checkProduct = new Promise((resolve, reject) => {
    let product = {
        name: "Laptop",
        price: 50000
    };

    if (product.price > 0) {
        resolve(product);
    } else {
        reject("Invalid product price");
    }
})

checkProduct
.then((result) => {
    console.log(`Product: ${result.name}`);
    console.log(`Price: ${result.price}`);
})
.catch((error) => {
    console.log(`Error: ${error}`);
})


