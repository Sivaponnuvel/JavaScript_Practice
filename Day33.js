// 🔹 Question 1 – Remove Elements Using .splice()
// Create an array:
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// Then:
// Remove "Mango" and "Orange" using .splice()
// Display the updated array.
// Expected Output:
// ["Apple", "Banana", "Grapes"]
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .splice()
// ❌ Don't use .pop()
// ❌ Don't use .shift()

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.splice(2,2);

console.log(fruits);


