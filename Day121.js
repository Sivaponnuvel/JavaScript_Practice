// Question 1 – Handle Promise Rejection Using Async/Await
// Write an async function named getProduct that retrieves product details using a Promise.
// Input:
// let product = {
//     id: 101,
//     name: "Laptop",
//     price: 50000
// };
// Expected Output:
// Error: Product not available
// Conditions:
// 1. Create a Promise.
// 2. Use reject() if the product is unavailable.
// 3. Create an async function named getProduct.
// 4. Use await to handle the Promise.
// 5. Use try and catch to handle the rejection.
// 6. Print the error message using console.log(error.message).
// 7. Call the getProduct() function.

let product = {
    id: 101,
    name: "Laptop",
    price: 50000
};

let promise = new Promise((resolve, reject) => {
    reject(new Error("Product not available"));
})

async function getProduct() {
    try {
        let data = await promise;
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

getProduct();


// Question 2 – Fetch Multiple User Details Using Promise.all()
// Write an async function named getUsers that retrieves multiple user details using Promise.all().
// Input:
// let user1 = {
//     id: 1,
//     name: "Arun"
// };

// let user2 = {
//     id: 2,
//     name: "Kumar"
// };

// let user3 = {
//     id: 3,
//     name: "Ravi"
// };
// Expected Output:
// User ID: 1, Name: Arun
// User ID: 2, Name: Kumar
// User ID: 3, Name: Ravi
// Conditions:
// 1. Create three separate Promises.
// 2. Each Promise must resolve with one user object using resolve().
// 3. Create an async function named getUsers.
// 4. Use Promise.all() to handle all three Promises.
// 5. Use await to wait for all Promises to resolve.
// 6. Use a loop to iterate through the resolved user array.
// 7. Print each user's ID and name using console.log().
// 8. Call the getUsers() function.

let user1 = {
    id: 1,
    name: "Arun"
};

let user2 = {
    id: 2,
    name: "Kumar"
};

let user3 = {
    id: 3,
    name: "Ravi"
};

let promise1 = new Promise((resolve, reject) => {
    resolve(user1);
})
let promise2 = new Promise((resolve, reject) => {
    resolve(user2);
})
let promise3 = new Promise((resolve, reject) => {
    resolve(user3);
})

async function getUsers() {
    let users = await Promise.all([
        promise1, promise2, promise3
    ]);
    for(let user of users){
        console.log(`User ID: ${user.id}, Name: ${user.name}`);
    }
}

getUsers();