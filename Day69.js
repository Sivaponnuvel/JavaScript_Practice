// 🟢 Question 1 – Basic Promise
// Create a Promise named orderPromise.
// Rules:
// After 2 seconds, the Promise should be resolved with:
// "Order placed successfully"
// Use .then() to print the resolved message.
// Use .catch() to handle errors.
// Expected output after 2 seconds:
// Order placed successfully
// Conditions:
// Use new Promise()
// Use resolve()
// Use reject()
// Use .then()
// Use .catch()
// Use setTimeout()

let orderPromise = new Promise((resolve, reject) => {
   
    let success = true;

    setTimeout(() => {
        if(success){
            resolve("Order placed successfully");
        }
        else{
            reject("Order not placed");
        }
    }, 2000)
});

orderPromise.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


// 🟢 Question 2 – User Login Promise
// Create a function:
// loginUser(username, password)
// The function should return a Promise.
// Rules:
// If username is empty:
// Username is required
// If password is empty:
// Password is required
// If both are provided, resolve with:
// Login successful
// Use .then() and .catch() to handle the result.
// Test:
// loginUser("", "1234");
// loginUser("Siva", "");
// loginUser("Siva", "1234");
// Expected:
// Error: Username is required
// Error: Password is required
// Login successful
// Conditions 🔥
// Must return a Promise
// Must use resolve()
// Must use reject()
// Must use .then()
// Must use .catch()
// No async/await
// No loops

function loginUser(username, password){
    return new Promise((resolve, reject) => {
        if (username === "") {
            reject("Username is required");
        }
        else if(password === ""){
            reject("Password is required");
        }
        else{
            resolve("Login successful");
        }
    });
}

loginUser("", "1234")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });

loginUser("Siva", "")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });

loginUser("Siva", "1234")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    });