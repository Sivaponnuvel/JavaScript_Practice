// 🔹 Question 1 – Reverse an Array
// Create:
// let numbers = [10, 20, 30, 40, 50];
// Using .reverse():
// Reverse the order of the elements
// Store the result in a new variable
// Display the result
// Expected Output:
// [50, 40, 30, 20, 10]
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use an array
// ✅ Use .reverse()
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use for loop
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't create a new array manually

let numbers = [10, 20, 30, 40, 50];

const result = numbers.reverse((number) => {
    return number;
});

console.log(result)


