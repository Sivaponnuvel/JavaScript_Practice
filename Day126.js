// Question 1 – Check Product Availability Using Promise
// Concept: Promise, resolve(), reject(), .then(), .catch(), Objects.
// You are given a product object. Create a Promise to check whether the product is available.
// Input:
// let product = {
//     name: "Laptop",
//     price: 50000,
//     stock: 5
// };
// Conditions:
// - Stock greater than 0 → Product available.
// - Stock equal to 0 → Product out of stock.
// Expected Output (Available):
// Product available!
// Product: Laptop
// Price: 50000
// Expected Output (Out of Stock):
// Error: Product out of stock
// Requirements:
// 1. Create a Promise named productPromise.
// 2. Check the product's stock inside the Promise.
// 3. If stock is greater than 0, call resolve() and pass the product object.
// 4. Otherwise, call reject() with "Product out of stock".
// 5. Use .then() to receive the product object.
// 6. Print the product name and price.
// 7. Use .catch() to handle the error.

let product = {
    name: "Laptop",
    price: 50000,
    stock: 5
};

const productPromise = new Promise((resolve, reject) => {
    if (product.stock > 0){
        resolve(product)
    }
    else{
        reject("Product out of stock")
    }
})

productPromise
.then((result) => {
    console.log("Product available!");
    console.log(`Product: ${result.name}`);
    console.log(`Price: ${result.price}`);
})
.catch((error) => {
    console.log(`Error: ${error}`);
})


