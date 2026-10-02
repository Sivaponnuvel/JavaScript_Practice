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


