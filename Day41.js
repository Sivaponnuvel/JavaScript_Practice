// 🔹 Question 1 – Calculate Total
// Create:
// let numbers = [10, 20, 30, 40, 50];
// Using reduce() with an arrow function:
// Calculate the sum of all numbers
// Store the result in a new variable
// Display the result
// Expected Output:
// 150
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .reduce()
// ✅ Use arrow function =>
// ✅ Use an accumulator
// ✅ Use an initial value of 0
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't use filter()
// ❌ Don't use a for loop

let numbers = [10, 20, 30, 40, 50];

const result = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(result);


