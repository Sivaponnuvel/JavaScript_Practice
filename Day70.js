// 🟢 Question 1 – Product Data Promise
// Create a function:
// getProduct()
// The function should return a Promise.
// Rules:
// After 2 seconds, resolve with this object:
// {
//     id: 101,
//     name: "Laptop",
//     price: 55000
// }
// Use .then() to print:
// Product: Laptop
// Price: 55000
// Use .catch() to handle errors.
// Conditions:
// Must use new Promise()
// Must use resolve()
// Must use reject()
// Must use setTimeout()
// Must use .then()
// Must use .catch()

function getProduct() {
    let myPromise = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(myPromise){
            resolve({
                id: 101,
                name: "Laptop",
                price: 55000
            });
            }
            else{
                reject("Error fetching product");
            }
        },2000);
    });
}

getProduct()
    .then((result) => {
        console.log(`Product: ${result.name}`);
        console.log(`Price: ${result.price}`);
    })
    .catch((error) => {
        console.log(error);
    })


// 🟢 Question 2 – Promise Chaining
// Create a function:
// loginUser(username, password)
// It should return a Promise.
// Step 1 – Login
// If both username and password are provided, resolve with:
// Login successful
// Otherwise reject with the appropriate error.
// Step 2 – Get User Profile
// Create another function:
// getUserProfile()
// It should return a Promise and resolve after 1 second with:
// {
//     name: "Siva",
//     role: "Python Full Stack Developer"
// }
// Use Promise chaining:
// loginUser()
//     ↓
// .then()
//     ↓
// getUserProfile()
//     ↓
// .then()
//     ↓
// Display profile
//     ↓
// .catch()
// Expected output:
// Login successful
// Name: Siva
// Role: Python Full Stack Developer
// Conditions 🔥
// Must use new Promise()
// Must use resolve() and reject()
// Must use .then()
// Must use .catch()
// Q2 must use Promise chaining
// getUserProfile() must use setTimeout(1000)
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

function getUserProfile() {
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success){
                resolve({
                    name: "Siva",
                    role: "Python Full Stack Developer"
                });
            }
            else{
                reject("Error fetching Profile");
            }
        }, 1000);
    })
}


loginUser("Siva", "1234")
    .then((message) => {
        console.log(message);
        return getUserProfile();
    })
    .then((profile) => {
        console.log("Name: ", profile.name);
        console.log("Role: ", profile.role);
    })
    .catch((error) => {
        console.log(error);
    })