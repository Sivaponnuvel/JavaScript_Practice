// 🔹 Question 1 – Check for Even Number
// Create:
// let numbers = [11, 15, 21, 24, 35];
// Using some() with an arrow function:
// Check whether the array contains at least one even number
// Store the result in a new variable
// Display the result
// Expected Output:
// true
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .some()
// ✅ Use arrow function =>
// ✅ Use %
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use find()
// ❌ Don't use filter()
// ❌ Don't use forEach()
// ❌ Don't use for loop

let numbers = [11, 15, 21, 24, 35];

const result = numbers.some((number) => {
    return number % 2 === 0;
});

console.log(result);


// 🔹 Question 2 – Check for Long Name
// Create:
// let names = ["Raj", "Arun", "Siva", "Kumar"];
// Using some() with an arrow function:
// Check whether at least one name has more than 4 characters
// Store the result in a new variable
// Display the result
// Expected Output:
// true
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .some()
// ✅ Use arrow function =>
// ✅ Use .length
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use find()
// ❌ Don't use filter()
// ❌ Don't use forEach()
// ❌ Don't manually check each name

let names = ["Raj", "Arun", "Siva", "Kumar"];

const answer = names.some((name) => {
    return name.length > 4;
});

console.log(answer);