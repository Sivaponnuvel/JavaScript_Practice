// Question 1 – Create an Async Function to Return a Message
// Write an async function named getMessage that returns the message "Hello, JavaScript Async!".
// Expected Output:
// Hello, JavaScript Async!
// Conditions:
// 1. Use an async function named getMessage.
// 2. The function should return "Hello, JavaScript Async!".
// 3. Call the function.
// 4. Use .then() to receive the returned value.
// 5. Print the result using console.log().

async function getMessage() {
    return "Hello, JavaScript Async!";
}

getMessage()
.then((result) => {
    console.log(result);
})


// Question 2 – Fetch User Data Using Async and Await
// Write an async function named getUserData that uses a Promise to retrieve user details after 2 seconds.
// Input:
// let user = {
//     id: 1,
//     name: "Arun",
//     role: "Python Developer"
// };
// Expected Output:
// User ID: 1
// User Name: Arun
// User Role: Python Developer
// Conditions:
// 1. Create a Promise that resolves with the user object after 2 seconds using setTimeout().
// 2. Create an async function named getUserData.
// 3. Use await to wait for the Promise result.
// 4. Store the resolved object in a variable.
// 5. Print the user ID, name, and role using console.log().
// 6. Call the getUserData() function.

let user = {
    id: 1,
    name: "Arun",
    role: "Python Developer"
};

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(user);
    }, 2000);
})

async function getUserData() {
    let data = await promise;

    console.log("User ID: ",data.id);
    console.log("User Name: ",data.name);
    console.log("User Role: ",data.role);
}

getUserData();