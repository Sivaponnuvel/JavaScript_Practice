// 🔹 Question 1 – Find a Number
// Create:
// let numbers = [10, 15, 20, 25, 30];
// Using find() with an arrow function:
// Find the first number greater than 20
// Store the result in a new variable
// Display the result
// Expected Output:
// 25
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .find()
// ✅ Use arrow function =>
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't use filter()
// ❌ Don't use a for loop

let numbers = [10, 15, 20, 25, 30];

const result = numbers.find((number) => {
    return number > 20;
});

console.log(result);


