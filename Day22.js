// 🔹 Question 1 – Find Largest of Two Numbers
// Write a JavaScript program to create a function named findLargest that accepts two numbers and returns the larger number.
// Program Flow
// Create a function named findLargest
// Accept two parameters
// Compare the two numbers
// Return the larger number
// Call the function with 25 and 40
// Display the returned result using console.log()
// Example Output
// 40
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Use two parameters
// ✅ Use return
// ✅ Compare the numbers using >
// ✅ Display the returned value
// ❌ Don't use Math.max()
// ❌ Don't use global variables
// ❌ Don't use arrow function
// 💡 Hint: Use if...else inside the function.

function findLargest(a, b){
    if (a > b){
        return a;
    }
    else{
        return b;
    }
}

console.log(findLargest(25, 40));


