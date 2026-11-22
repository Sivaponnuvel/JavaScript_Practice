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


