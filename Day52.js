// 🔹 Question 1 – User Login Callback
// You are building a login system.
// Create a function loginUser that:
// Accepts a username and a callback function
// Calls the callback after receiving the username
// Call it with:
// "Siva"
// The callback should display:
// Welcome, Siva
// ⚠️ Conditions:
// ✅ Use a normal function
// ✅ Pass a callback function as an argument
// ✅ Call the callback inside loginUser()
// ✅ Use console.log()
// ❌ Don't use arrow functions
// ❌ Don't use global variables

function loginUser(username, callback){
    callback(username);
}

function showWelcome(name){
    console.log(`Welcome, ${name}`);
}

loginUser("Siva", showWelcome);


// 🔹 Question 2 – Order Processing Callback
// You are building an online shopping system.
// Create a function processOrder that:
// Accepts an orderId and a callback function
// Calls the callback with the orderId
// Call it with:
// "ORD101"
// The callback should display:
// Order ORD101 processed successfully
// ⚠️ Conditions:
// ✅ Use a normal function
// ✅ Pass a callback function as an argument
// ✅ Call the callback inside processOrder()
// ✅ Use console.log()
// ❌ Don't use arrow functions
// ❌ Don't use global variables

function processOrder(orderId, callback){
    callback(orderId);
}

function showOrder(id){
    console.log(`Order ${id} processed successfully`);
}

processOrder("ORD101", showOrder);