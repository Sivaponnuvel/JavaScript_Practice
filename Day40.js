// 🔹 Question 1 – Filter Even Numbers
// Create:
// let numbers = [10, 15, 20, 25, 30, 35];
// Using filter() with an arrow function:
// Select only the even numbers
// Store the result in a new variable
// Display the new array
// Expected Output:
// [10, 20, 30]
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .filter()
// ✅ Use arrow function =>
// ✅ Use a condition using %
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't use for loop

let numbers = [10, 15, 20, 25, 30, 35];

const result = numbers.filter((number)=>{
    return number % 2 === 0;
})

console.log(result);


// 🔹 Question 2 – Filter Names by Length
// Create:
// let names = ["Siva", "Kumar", "Arun", "Vijay", "Raj"];
// Using filter() with an arrow function:
// Select names whose length is greater than 4
// Store the result in a new variable
// Display the new array
// Expected Output:
// ["Kumar", "Vijay"]
// 💡 Hint:
// You can check the length using:
// name.length > 4
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .filter()
// ✅ Use arrow function =>
// ✅ Use .length
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't use for loop
// ❌ Don't manually create the result array

let names = ["Siva", "Kumar", "Arun", "Vijay", "Raj"];

const answer = names.filter((name)=>{
    return name.length > 4;
})

console.log(answer);