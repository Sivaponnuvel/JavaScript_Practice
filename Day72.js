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


