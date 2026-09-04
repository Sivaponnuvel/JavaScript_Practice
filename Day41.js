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


// 🔹 Question 2 – Calculate Product
// Create:
// let numbers = [2, 3, 4, 5];
// Using reduce() with an arrow function:
// Multiply all numbers together
// Store the result in a new variable
// Display the result
// Expected Output:
// 120
// 💡 Hint:
// For multiplication, use an initial value of 1.
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .reduce()
// ✅ Use arrow function =>
// ✅ Use an accumulator
// ✅ Use an initial value of 1
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't use filter()
// ❌ Don't use a for loop

let numbers1 = [2, 3, 4, 5];

const answer = numbers1.reduce((product, number) => {
    return product * number;
}, 1);

console.log(answer);