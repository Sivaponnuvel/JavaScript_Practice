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


