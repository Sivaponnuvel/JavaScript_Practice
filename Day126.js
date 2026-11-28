// Question 1 – Check Product Availability Using Promise
// Concept: Promise, resolve(), reject(), .then(), .catch(), Objects.
// You are given a product object. Create a Promise to check whether the product is available.
// Input:
// let product = {
//     name: "Laptop",
//     price: 50000,
//     stock: 5
// };
// Conditions:
// - Stock greater than 0 → Product available.
// - Stock equal to 0 → Product out of stock.
// Expected Output (Available):
// Product available!
// Product: Laptop
// Price: 50000
// Expected Output (Out of Stock):
// Error: Product out of stock
// Requirements:
// 1. Create a Promise named productPromise.
// 2. Check the product's stock inside the Promise.
// 3. If stock is greater than 0, call resolve() and pass the product object.
// 4. Otherwise, call reject() with "Product out of stock".
// 5. Use .then() to receive the product object.
// 6. Print the product name and price.
// 7. Use .catch() to handle the error.

let product = {
    name: "Laptop",
    price: 50000,
    stock: 5
};

const productPromise = new Promise((resolve, reject) => {
    if (product.stock > 0){
        resolve(product)
    }
    else{
        reject("Product out of stock")
    }
})

productPromise
.then((result) => {
    console.log("Product available!");
    console.log(`Product: ${result.name}`);
    console.log(`Price: ${result.price}`);
})
.catch((error) => {
    console.log(`Error: ${error}`);
})


// Question 2 – Get Student Results Using Promise.all()
// Concept: Multiple Promises, Promise.all(), .then(), .catch(), for...of, Objects.
// You are given three student objects. Create separate Promises for each student and retrieve all student results together.
// Input:
// let student1 = {
//     id: 101,
//     name: "Arun",
//     marks: 85
// };
// let student2 = {
//     id: 102,
//     name: "Kumar",
//     marks: 45
// };
// let student3 = {
//     id: 103,
//     name: "Ravi",
//     marks: 92
// };
// Expected Output:
// All student results fetched successfully
// ID: 101, Name: Arun, Marks: 85, Result: Pass
// ID: 102, Name: Kumar, Marks: 45, Result: Pass
// ID: 103, Name: Ravi, Marks: 92, Result: Pass
// Requirements:
// 1. Create three separate Promises named promise1, promise2, and promise3.
// 2. Each Promise must resolve with its corresponding student object.
// 3. Use Promise.all() to combine all three Promises.
// 4. Use .then() to receive all student objects in an array.
// 5. Print "All student results fetched successfully".
// 6. Use a for...of loop to iterate through the students.
// 7. Check each student's marks:
//    - Marks greater than or equal to 40 → Pass.
//    - Marks less than 40 → Fail.
// 8. Print ID, name, marks, and result.
// 9. Use .catch() to handle Promise rejection.

let student1 = {
    id: 101,
    name: "Arun",
    marks: 85
};

let student2 = {
    id: 102,
    name: "Kumar",
    marks: 45
};

let student3 = {
    id: 103,
    name: "Ravi",
    marks: 92
};

const promise1 = new Promise((resolve, reject) => {
    resolve(student1);
})

const promise2 = new Promise((resolve, reject) => {
    resolve(student2);
})

const promise3 = new Promise((resolve, reject) => {
    resolve(student3);
})

Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log("All student results fetched successfully");
    
    for(let result of results){
        let status;

        if (result.marks >= 40) {
            status = "Pass";
        }
        else {
            status = "Fail";
        }

        console.log(`ID: ${result.id}, Name: ${result.name}, Marks: ${result.marks}, Result: ${status}`)
    }
})
.catch((error) => {
    console.log(error);
})