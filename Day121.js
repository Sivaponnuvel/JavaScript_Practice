// Question 1 – Handle Promise Rejection Using Async/Await
// Write an async function named getProduct that retrieves product details using a Promise.
// Input:
// let product = {
//     id: 101,
//     name: "Laptop",
//     price: 50000
// };
// Expected Output:
// Error: Product not available
// Conditions:
// 1. Create a Promise.
// 2. Use reject() if the product is unavailable.
// 3. Create an async function named getProduct.
// 4. Use await to handle the Promise.
// 5. Use try and catch to handle the rejection.
// 6. Print the error message using console.log(error.message).
// 7. Call the getProduct() function.

let product = {
    id: 101,
    name: "Laptop",
    price: 50000
};

let promise = new Promise((resolve, reject) => {
    reject(new Error("Product not available"));
})

async function getProduct() {
    try {
        let data = await promise;
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

getProduct();


