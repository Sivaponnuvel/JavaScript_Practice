// 🟢 Question 1 – Sequential Order Processing
// Create these two functions:
// checkStock()
// processPayment()
// Requirements:
// checkStock():
// Return a Promise.
// Resolve after 1 second with "Stock available".
// processPayment():
// Return a Promise.
// Resolve after 2 seconds with "Payment successful".
// Create an async function:
// placeOrder()
// Inside placeOrder():
// Use await to call checkStock().
// Print the stock result.
// Then use await to call processPayment().
// Print the payment result.
// Finally print "Order placed successfully".
// Expected output:
// Stock available
// Payment successful
// Order placed successfully
// Conditions:
// Must use new Promise()
// Must use resolve()
// Must use setTimeout()
// Must use async
// Must use await
// Operations must execute sequentially.
// No loops.

function checkStock() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Stock available")
        }, 1000);
    });
}

function processPayment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Payment successful")
        }, 2000);
    });
}

async function placeOrder() {
    let stock = await checkStock();
    console.log(stock);

    let process = await processPayment();
    console.log(process);
    
    console.log("Order placed successfully")
}

placeOrder();


// 🟢 Question 2 – Product Fetch with Error Handling
// Create a function:
// fetchProduct(productId)
// It should return a Promise.
// Rules:
// If productId is less than or equal to 0, reject with "Invalid product ID".
// If productId is valid, resolve after 1 second with:
// {
//     id: productId,
//     name: "Laptop",
//     price: 55000
// }
// Create an async function:
// displayProduct(productId)
// Inside it:
// Use try...catch.
// Use await to call fetchProduct(productId).
// If successful, print product name and price.
// If rejected, print the error with the prefix "Error: ".
// Test:
// displayProduct(101);
// displayProduct(-1);
// Expected output:
// Product: Laptop
// Price: 55000
// Error: Invalid product ID
// Conditions 🔥
// Must use new Promise()
// Must use resolve() and reject()
// Must use setTimeout(1000)
// Must use async/await
// Must use try...catch
// No .then() for the main flow
// No loops

function fetchProduct(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(productId <= 0){
                reject("Invalid product ID");
            }
            else{
                resolve({
                    id: productId,
                    name: "Laptop",
                    price: 55000
                });
            }
        }, 1000);
    });
}

async function displayProduct(productId) {
    try {
        let result = await fetchProduct(productId);
        console.log(`Product: ${result.name}`);
        console.log(`Price: ${result.price}`);

    } catch (error) {
        console.log("Error:", error);
    }
}

displayProduct(101);
displayProduct(-1);
