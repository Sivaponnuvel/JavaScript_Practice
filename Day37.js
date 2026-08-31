// 🔹 Question 1 – Arrow Function with Multiple Parameters
// Create an arrow function named calculateTotal that takes three numbers as parameters.
// Then:
// Pass 10, 20, and 30 to the function
// Add all three numbers
// Return the result
// Display the result
// Expected Output:
// 60
// ⚠️ Conditions:
// ✅ Use const
// ✅ Use arrow function =>
// ✅ Use three parameters
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't use normal function syntax

const calculateTotal = (a, b, c) =>{
    return a + b + c;
}
console.log(calculateTotal(10, 20, 30));


// 🔹 Question 2 – Arrow Function with One Parameter
// Create an arrow function named isEven that takes one number as a parameter.
// Then:
// Pass 8 to the function
// Check whether the number is even
// Return true if it is even
// Display the result
// Expected Output:
// true
// 💡 Hint:
// Use the modulus operator %.
// number % 2 === 0
// ⚠️ Conditions:
// ✅ Use const
// ✅ Use arrow function =>
// ✅ Use one parameter
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't use if...else
// ❌ Don't use normal function syntax

const isEven = (number) => {
    return number % 2 === 0;
}

console.log(isEven(8));