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


// 🔹 Question 2 – Find Name Index
// Create:
// let names = ["Arun", "Kumar", "Siva", "Vijay", "Raj"];
// Using findIndex() with an arrow function:
// Find the index of the first name whose length is greater than 4
// Store the result in a new variable
// Display the result
// Expected Output:
// 1
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .findIndex()
// ✅ Use arrow function =>
// ✅ Use .length
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use find()
// ❌ Don't use filter()
// ❌ Don't use forEach()
// ❌ Don't manually select the index

let names = ["Arun", "Kumar", "Siva", "Vijay", "Raj"];

const answer = names.findIndex((name)=>{
    return name.length > 4;
});

console.log(answer)