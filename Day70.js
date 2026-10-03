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


