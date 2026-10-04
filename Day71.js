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


// 🟢 Question 2 – User Login with Async/Await and Try/Catch
// Create a function:
// loginUser(username, password)
// It should return a Promise.
// Rules:
// If username is empty, reject with "Username is required".
// If password is empty, reject with "Password is required".
// If both are provided, resolve with "Login successful".
// Create an async function:
// displayLogin()
// Inside it:
// Use await to call loginUser("Siva", "1234").
// Use try...catch to handle errors.
// Print the login result.
// Then test these three cases:
// loginUser("", "1234");
// loginUser("Siva", "");
// loginUser("Siva", "1234");
// For the three test calls, handle rejections so they don't become unhandled Promise rejections.
// Expected messages:
// Error: Username is required
// Error: Password is required
// Login successful
// Conditions 🔥
// Must use new Promise()
// Must use resolve() and reject()
// Must use async
// Must use await
// Must use try...catch
// No loops
// No .then() for the main displayLogin() flow

async function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        if(username === ""){
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

async function displayLogin() {

    try {
        await loginUser("", "1234");
    } 
    catch (error) {
        console.log(`Error: ${error}`);
    }

    try {
        await loginUser("Siva", "");
    } 
    catch (error) {
        console.log(`Error: ${error}`);
    }

    try {
        let result = await loginUser("Siva", "1234");
        console.log(result);
    } 
    catch (error) {
        console.log(`Error: ${error}`);
}   
}

displayLogin();