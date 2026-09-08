// 🔹 Question 1 – Check All Numbers Are Positive
// Create:
// let numbers = [10, 20, 30, 40, 50];
// Using every() with an arrow function:
// Check whether all numbers are greater than 0
// Store the result in a new variable
// Display the result
// Expected Output:
// true
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .every()
// ✅ Use arrow function =>
// ✅ Use a condition
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use some()
// ❌ Don't use filter()
// ❌ Don't use find()
// ❌ Don't use forEach()
// ❌ Don't use a for loop


let numbers = [10, 20, 30, 40, 50];

const result = numbers.every((number) => {
    return number > 0;
});

console.log(result);


