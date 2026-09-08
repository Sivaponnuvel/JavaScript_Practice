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


// 🔹 Question 2 – Check All Names Have Length 4+
// Create:
// let names = ["Siva", "Arun", "Ravi", "Kavi"];
// Using every() with an arrow function:
// Check whether all names have at least 4 characters
// Store the result in a new variable
// Display the result
// Expected Output:
// true
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .every()
// ✅ Use arrow function =>
// ✅ Use .length
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use some()
// ❌ Don't use filter()
// ❌ Don't use find()
// ❌ Don't use forEach()
// ❌ Don't manually check each name

let names = ["Siva", "Arun", "Ravi", "Kavi"];

const answer = names.every((name) => {
    return name.length >= 4;
});

console.log(answer);