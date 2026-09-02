// 🔹 Question 1 – Double Each Number
// Create:
// let numbers = [5, 10, 15, 20];
// Using map() with an arrow function:
// Multiply each number by 2
// Store the result in a new variable
// Display the new array
// Expected Output:
// [10, 20, 30, 40]
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .map()
// ✅ Use arrow function =>
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use forEach()
// ❌ Don't use for loop
// ❌ Don't modify the original array

let numbers = [5, 10, 15, 20];

const result = numbers.map((number) => {
    return number * 2;
})

console.log(result);


