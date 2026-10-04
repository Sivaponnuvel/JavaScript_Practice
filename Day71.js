// 🟢 Question 1 – Fetch Product Using Async/Await
// Create a function:
// getProduct()
// Requirements:
// Create a Promise using new Promise().
// Use setTimeout() to resolve after 2 seconds.
// Resolve with this object:
// {
//     id: 101,
//     name: "Laptop",
//     price: 55000
// }
// Create an async function named displayProduct().
// Use await to get the product.
// Print:
// Product: Laptop
// Price: 55000
// Conditions:
// Must use new Promise()
// Must use resolve()
// Must use setTimeout()
// Must use async
// Must use await
// No loops

async function getProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "Laptop",
                price: 55000
            });
        }, 2000);
    });
}

async function displayProduct() {
    let success = await getProduct();
    console.log("Product:", success.name);
    console.log("Price:", success.price);
}

displayProduct();


