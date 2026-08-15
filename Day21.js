// 🔹 Question 1 – Function with Multiple Parameters
// Write a JavaScript program to create a function named addNumbers that accepts two parameters.
// The function should add the two numbers and display the result.
// Program Flow
// Create a function named addNumbers
// Accept two parameters
// Add the two parameters
// Display the result using console.log()
// Call the function with 10 and 20
// Example Output
// 30
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Use two parameters
// ✅ Use console.log() inside the function
// ✅ Call the function with two values
// ❌ Don't use global variables
// ❌ Don't use arrow function
// ❌ Don't hardcode 30
// 💡 Hint: function addNumbers(a, b)

function addNumbers(a, b){
    console.log(a + b);
}

addNumbers(10, 20);


// 🔹 Question 2 – Function with return
// Write a JavaScript program to create a function named square that accepts one number as a parameter and returns its square.
// Call the function with 5 and display the returned result.
// Program Flow
// Create a function named square
// Accept one parameter
// Calculate the square
// Use return
// Store the returned value in a variable
// Display the result using console.log()
// Example Output
// 25
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Use one parameter
// ✅ Use return
// ✅ Call the function with 5
// ✅ Display the returned value
// ❌ Don't use console.log() inside the function
// ❌ Don't hardcode 25
// ❌ Don't use arrow function
// 💡 Hint: The important difference is:
// return result;

function square(a){
    let result = a**2;
    return result;
}

console.log(square(5));