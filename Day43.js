// 🔹 Question 1 – Find Number Index
// Create:
// let numbers = [10, 15, 20, 25, 30];
// Using findIndex() with an arrow function:
// Find the index of the first number greater than 20
// Store the result in a new variable
// Display the result
// Expected Output:
// 3
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .findIndex()
// ✅ Use arrow function =>
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use find()
// ❌ Don't use filter()
// ❌ Don't use forEach()
// ❌ Don't use for loop

let numbers = [10, 15, 20, 25, 30];

const result = numbers.findIndex((number) => {
    return number > 20;
});

console.log(result);


