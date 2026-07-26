// 🔹 Question 1 – Display Personal Details
// Write a JavaScript program to display the following details using variables and console.log().
// Program Flow
// Create variables for:
// Name
// Age
// City
// Display the output like this:
// Name: Siva
// Age: 22
// City: Chennai
// ⚠️ Conditions
// ✅ Use let for all variables
// ✅ Use console.log()
// ✅ Print each detail on a separate line
// ❌ Don't use var
// ❌ Don't hardcode the entire sentence directly inside console.log()
// Example (❌ Wrong):
// console.log("Name: Siva");
// Instead, do something like:
// let name = "Siva";
// console.log("Name:", name);

let name = "Siva", age = 22, city = "Chennai";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);


// 🔹 Question 2 – Difference Between let, const, and var
// Write a JavaScript program that:
// Creates a let variable named age with value 22.
// Changes its value to 23.
// Creates a const variable named country with value "India".
// Displays both values using console.log().
// Expected Output
// Age: 23
// Country: India
// ⚠️ Conditions
// ✅ Use one let variable
// ✅ Update the let variable
// ✅ Use one const variable
// ✅ Use console.log()
// ❌ Don't use var
// ❌ Don't try to change the const variable

let age1 = 22;
age1 = 23;
const country = "India";

console.log("Age:",age1);
console.log("Country:",country);