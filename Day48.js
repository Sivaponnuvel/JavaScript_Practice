// 🔹 Question 1 – Check if an Element Exists
// Create:
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// Using .includes():
// Check whether "Mango" exists in the array
// Store the result in a new variable
// Display the result
// Expected Output:
// true
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use an array
// ✅ Use .includes()
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use for loop
// ❌ Don't use forEach()
// ❌ Don't use find()
// ❌ Don't use indexOf()

let fruits = ["Apple", "Banana", "Mango", "Orange"];

const result = fruits.includes("Mango");

console.log(result);


// 🔹 Question 2 – Check if an Element Does Not Exist
// Create:
// let colors = ["Red", "Blue", "Green", "Yellow"];
// Using .includes():
// Check whether "Purple" exists in the array
// Store the result in a new variable
// Display the result
// Expected Output:
// false
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use an array
// ✅ Use .includes()
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use for loop
// ❌ Don't use forEach()
// ❌ Don't use find()
// ❌ Don't use indexOf()

let colors = ["Red", "Blue", "Green", "Yellow"];

let answer = colors.includes("Purple");

console.log(answer);