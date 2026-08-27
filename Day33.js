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


// 🔹 Question 2 – Add Element Using .splice()
// Create:
// let fruits1 = ["Apple", "Banana", "Orange"];
// Using only .splice(), add "Mango" between "Banana" and "Orange".
// Expected Output:
// ["Apple", "Banana", "Mango", "Orange"]
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .splice()
// ❌ Don't use .push()
// ❌ Don't create a new array

let fruits1 = ["Apple", "Banana", "Orange"];

fruits1.splice(2,0,"Mango");

console.log(fruits1);