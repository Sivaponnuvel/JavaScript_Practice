// 🔹 Question 1 – Display Data Types
// Write a JavaScript program to create variables of different data types and display both the value and its data type using the typeof operator.
// Create the following variables:
// Name → "Siva"
// Age → 22
// IsStudent → true
// Salary → null
// Expected Output
// Name: Siva
// Type: string
// Age: 22
// Type: number
// IsStudent: true
// Type: boolean
// Salary: null
// Type: object
// 💡 Note: In JavaScript, typeof null returns "object". This is a well-known behavior of the language.
// ⚠️ Conditions
// ✅ Use let for all variables
// ✅ Use typeof
// ✅ Display the value and its type
// ❌ Don't use var
// ❌ Don't hardcode the data type as a string
// Example (❌ Wrong):
// console.log("Type: string");
// Use:
// console.log(typeof name);

let name = "Siva";
let age = 22;
let IsStudent = true;
let salary = null;

console.log("Name:", name);
console.log("Type:",typeof name);

console.log("Age:", age);
console.log("Type:",typeof age);

console.log("IsStudent:", IsStudent);
console.log("Type:",typeof IsStudent);

console.log("Salary:", salary);
console.log("Type:",typeof salary);


