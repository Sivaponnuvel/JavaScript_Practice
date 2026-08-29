// 🔹 Question 1 – Combine Two Arrays
// Create:
// let fruits1 = ["Apple", "Banana"];
// let fruits2 = ["Mango", "Orange"];
// Using .concat(), combine both arrays into a new variable.
// Expected Output:
// ["Apple", "Banana", "Mango", "Orange"]
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .concat()
// ✅ Store the result in a new variable
// ❌ Don't use .push()

let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Mango", "Orange"];

let result =  fruits1.concat(fruits2);

console.log(result);


// 🔹 Question 2 – Combine Three Arrays
// Create:
// let numbers1 = [10, 20];
// let numbers2 = [30, 40];
// let numbers3 = [50, 60];
// Using .concat(), combine all three arrays into one array.
// Expected Output:
// [10, 20, 30, 40, 50, 60]
// ⚠️ Conditions:
// ✅ Use .concat()
// ✅ Store the result in a new variable
// ❌ Don't manually create the final array
// ❌ Don't use .push()

let numbers1 = [10, 20];
let numbers2 = [30, 40];
let numbers3 = [50, 60];

let answer = numbers1.concat(numbers2, numbers3);

console.log(answer);