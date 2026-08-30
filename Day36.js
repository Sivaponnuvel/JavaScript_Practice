// 🔹 Question 1 – Create a Function
// Create a function named greet that takes a name as a parameter.
// Then:
// Pass "Siva" to the function
// Return "Hello Siva"
// Display the returned value.
// Expected Output:
// Hello Siva
// ⚠️ Conditions:
// ✅ Use function
// ✅ Function name should be greet
// ✅ Use one parameter
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't use arrow function

function greet(name){
    return "Hello " + name;
}

console.log(greet("Siva"));


// 🔹 Question 2 – Arrow Function
// Create an arrow function named multiply that takes two numbers.
// Then:
// Pass 10 and 5
// Multiply both numbers
// Return the result
// Display the result.
// Expected Output:
// 50
// ⚠️ Conditions:
// ✅ Use const
// ✅ Use arrow function =>
// ✅ Use two parameters
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't use normal function syntax

const multiply = (a, b)=>{
    return a * b;
}

console.log(multiply(10, 5));