// 🔹 Question 1 – Payment Callback
// You are building an online shopping application.
// Create a function makePayment that:
// Accepts amount and a callback function
// Calls the callback with the amount
// Call it with:
// 500
// The callback should display:
// Payment of ₹500 completed successfully
// ⚠️ Conditions:
// ✅ Use a normal function
// ✅ Pass a callback function as an argument
// ✅ Call the callback inside makePayment()
// ✅ Pass the amount to the callback
// ✅ Use console.log()
// ❌ Don't use arrow functions
// ❌ Don't use global variables

function makePayment(amount, callback){
    callback(amount);
}

function showSuccess(amount){
    console.log(`Payment of ₹${amount} completed successfully`);
}

makePayment(500, showSuccess);


// 🔹 Question 2 – Delivery Status Callback
// You are building an online food delivery application.
// Create a function updateDeliveryStatus that:
// Accepts an orderId, status, and a callback function
// Calls the callback with both orderId and status
// Call it with:
// "ORD205"
// "Delivered"
// The callback should display:
// Order ORD205 status: Delivered
// ⚠️ Conditions:
// ✅ Use a normal function
// ✅ Pass a callback function as an argument
// ✅ Call the callback inside updateDeliveryStatus()
// ✅ Pass both values to the callback
// ✅ Use console.log()
// ❌ Don't use arrow functions
// ❌ Don't use global variables

function updateDeliveryStatus(orderId, status, callback){
    callback(orderId, status);
}

function showStatus(id, status){
    console.log(`Order ${id} status: ${status}`);
}

updateDeliveryStatus("ORD205", "Delivered", showStatus);