// Question 1 – Handle Promise Success and Failure Using .then() and .catch()
// Concept: Promise, resolve(), reject(), .then(), .catch().
// You are given a product's price. Create a Promise that checks whether the product price is valid.
// Input:
// let product = {
//     name: "Laptop",
//     price: 50000
// };
// Expected Output (price is valid):
// Product: Laptop
// Price: 50000
// Expected Output (price is invalid):
// Error: Invalid product price
// Requirements:
// 1. Create a Promise named checkProduct.
// 2. Inside the Promise, check whether product.price is greater than 0.
// 3. If the price is greater than 0, use resolve() and pass the product object.
// 4. Otherwise, use reject() with the message "Invalid product price".
// 5. Use .then() to receive the resolved product.
// 6. Print the product name and price.
// 7. Use .catch() to handle the error and print its message.

const checkProduct = new Promise((resolve, reject) => {
    let product = {
        name: "Laptop",
        price: 50000
    };

    if (product.price > 0) {
        resolve(product);
    } else {
        reject("Invalid product price");
    }
})

checkProduct
.then((result) => {
    console.log(`Product: ${result.name}`);
    console.log(`Price: ${result.price}`);
})
.catch((error) => {
    console.log(`Error: ${error}`);
})


// Question 2 – Execute Multiple Promises Using Promise.all()
// Concept: Multiple Promises, Promise.all(), .then(), .catch().
// You are given three student objects. Each student has an ID and a name.
// Create three separate Promises. Each Promise should return one student object.
// Input:
// let student1 = {
//     id: 101,
//     name: "Arun"
// };
// let student2 = {
//     id: 102,
//     name: "Kumar"
// };   
// let student3 = {
//     id: 103,
//     name: "Ravi"
// };
// Expected Output:
// All students loaded successfully
// ID: 101, Name: Arun
// ID: 102, Name: Kumar
// ID: 103, Name: Ravi
// Requirements:
// 1. Create three separate Promises: promise1, promise2, and promise3.
// 2. Each Promise must use resolve() to return its corresponding student object.
// 3. Use Promise.all() to combine all three Promises.
// 4. Use .then() to receive the array containing all three student objects.
// 5. Print "All students loaded successfully".
// 6. Use a loop to print each student's ID and name.
// 7. Use .catch() to handle any Promise rejection.

let student1 = {
    id: 101,
    name: "Arun"
};

let student2 = {
    id: 102,
    name: "Kumar"
};

let student3 = {
    id: 103,
    name: "Ravi"
};

let promise1 = new Promise((resolve, reject) => {
    resolve(student1);
})
let promise2 = new Promise((resolve, reject) => {
    resolve(student2);
})
let promise3 = new Promise((resolve, reject) => {
    resolve(student3);
})

Promise.all([promise1, promise2, promise3])
.then((result) => {
    console.log("All students loaded successfully");
    
    result.forEach((student) =>{
        console.log(`ID: ${student.id}, Name: ${student.name}`);
    })
})
.catch((error) => {
    console.log(error);
})