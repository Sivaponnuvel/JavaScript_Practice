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


// Question 2 – Copy an Array Using .slice()
// Create:
// let numbers = [10, 20, 30, 40, 50];
// Using .slice(), create a copy of the entire array and store it in a new variable.
// Then display the copied array.
// Expected Output:
// [10, 20, 30, 40, 50]
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .slice()
// ❌ Don't manually create the same array again

let numbers = [10, 20, 30, 40, 50];

let copy = numbers.slice();

console.log(copy);