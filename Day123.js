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


// Question 2 – Get Employee Details Using Promise.all()
// Concept: Multiple Promises, Promise.all(), .then(), .catch(), for...of.
// You are given three employee objects. Create separate Promises for each employee and retrieve all employee details together.
// Input:
// let employee1 = {
//     id: 201,
//     name: "Arun",
//     salary: 25000
// };
// let employee2 = {
//     id: 202,
//     name: "Kumar",
//     salary: 30000
// };
// let employee3 = {
//     id: 203,
//     name: "Ravi",
//     salary: 35000
// };
// Expected Output:
// All employee details fetched successfully
// ID: 201, Name: Arun, Salary: 25000
// ID: 202, Name: Kumar, Salary: 30000
// ID: 203, Name: Ravi, Salary: 35000
// Requirements:
// 1. Create three separate Promises named promise1, promise2, and promise3.
// 2. Each Promise must resolve with its corresponding employee object.
// 3. Use Promise.all() to combine the three Promises.
// 4. Use .then() to receive all employee objects in an array.
// 5. Print "All employee details fetched successfully".
// 6. Use a for...of loop to iterate through the employee array.
// 7. Print each employee's ID, name, and salary.
// 8. Use .catch() to handle Promise rejection.

let employee1 = {
    id: 201,
    name: "Arun",
    salary: 25000
};

let employee2 = {
    id: 202,
    name: "Kumar",
    salary: 30000
};

let employee3 = {
    id: 203,
    name: "Ravi",
    salary: 35000
};

let promise1 = new Promise((resolve, reject) => {
    resolve(employee1);
})
let promise2 = new Promise((resolve, reject) => {
    resolve(employee2);
})
let promise3 = new Promise((resolve, reject) => {
    resolve(employee3);
})

Promise.all([promise1, promise2, promise3])
.then((result) => {
    console.log("All employee details fetched successfully");

    for(let employee of result){
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Salary: ${employee.salary}`);
    }
})
.catch((error) => {
    console.log(error);
})