// 🔹 Question 1 – Print Each Element
// Create:
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// Using forEach() with an arrow function:
// Print each fruit individually.
// Each fruit should appear on a separate line.
// Expected Output:
// Apple
// Banana
// Mango
// Orange
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use an array
// ✅ Use .forEach()
// ✅ Use arrow function =>
// ✅ Use console.log()
// ❌ Don't use for loop
// ❌ Don't use while loop

let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach((fruits) => {
    console.log(fruits);
})


// 🔹 Question 2 – Print Numbers with 2
// Create:
// let numbers = [5, 10, 15, 20];
// Using forEach() with an arrow function:
// Go through each number.
// Multiply each number by 2.
// Display the result.
// Expected Output:
// 10
// 20
// 30
// 40
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .forEach()
// ✅ Use arrow function =>
// ✅ Use console.log()
// ❌ Don't use map() yet
// ❌ Don't use for loop
// ❌ Don't create a new array

let numbers = [5, 10, 15, 20];

numbers.forEach((numbers) =>{
    console.log(numbers * 2);
})