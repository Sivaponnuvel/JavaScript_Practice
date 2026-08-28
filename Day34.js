// Question 1 – Extract Part of an Array
// Create:
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// Using .slice(), extract:
// ["Banana", "Mango", "Orange"]
// Store the result in a new variable and display it.
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .slice()
// ✅ Store the result in a new variable
// ❌ Don't use .splice()

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let result = fruits.slice(1, 4);

console.log(result);


