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


