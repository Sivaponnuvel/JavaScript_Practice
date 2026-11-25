// Question 1 – Check User Login Using Promise
// Concept: Promise, resolve(), reject(), .then(), .catch().
// You are given a username and password. Create a Promise to check whether the login details are correct.
// Input:
// let user = {
//     username: "admin",
//     password: "12345"
// };
// Correct login expected output:
// Login successful!
// Welcome admin
// If login details are incorrect:
// Error: Invalid username or password
// Requirements:
// 1. Create a Promise named loginPromise.
// 2. Inside the Promise, check:
//    - Username must be "admin".
//    - Password must be "12345".
// 3. If both conditions are true, call resolve() and pass the username.
// 4. Otherwise, call reject() with "Invalid username or password".
// 5. Use .then() to receive the username.
// 6. Print the success message and welcome message.
// 7. Use .catch() to handle the error.

const loginPromise = new Promise((resolve, reject) => {
    let user = {
        username: "admin",
        password: "12345"
    };

    if (user.username === "admin" && user.password === "12345"){
        resolve(user.username);
    }
    else{
        reject("Invalid username or password");
    }
})

loginPromise
.then((result) => {
    console.log("Login successful!");
    console.log("Welcome admin");
})
.catch((error) => {
    console.log(`Errro: ${error}`);
})


