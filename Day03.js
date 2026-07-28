// 🔹 Question 1 – Perform Arithmetic Operations
// Write a JavaScript program to perform all arithmetic operations on two numbers.
// Program Flow
// Create two variables:
// num1 = 20
// num2 = 6
// Display the results of:
// Addition (+)
// Subtraction (-)
// Multiplication (*)
// Division (/)
// Modulus (%)
// Exponentiation (**)
// Expected Output
// Addition: 26
// Subtraction: 14
// Multiplication: 120
// Division: 3.3333333333333335
// Modulus: 2
// Exponentiation: 64000000
// ⚠️ Conditions
// ✅ Use let for both variables
// ✅ Use all six arithmetic operators
// ✅ Print each result using console.log()
// ❌ Don't use var
// ❌ Don't hardcode the answers
// Example (❌ Wrong):
// console.log("Addition: 26");
// Instead:
// console.log("Addition:", num1 + num2);

let num1 = 20;
let num2 = 6;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);


// 🔹 Question 2 – Assignment Operators
// Write a JavaScript program using assignment operators.
// Program Flow
// Create a variable:
// let number = 10;
// Perform the following operations in order:
// number += 5
// number -= 3
// number *= 2
// number /= 4
// Print the value after each operation.
// Expected Output
// After += : 15
// After -= : 12
// After *= : 24
// After /= : 6
// ⚠️ Conditions
// ✅ Use one variable only
// ✅ Use +=, -=, *=, /=
// ✅ Print the value after every operation
// ❌ Don't create extra variables
// ❌ Don't calculate manually
// Example (❌ Wrong):
// console.log(15);
// Instead:
// number += 5;
// console.log(number);

let number = 10;
number += 5;
console.log("After += :",number);
number -= 3;
console.log("After -= :",number);
number *= 2;
console.log("After *= :",number);
number /= 4;
console.log("After /= :",number);