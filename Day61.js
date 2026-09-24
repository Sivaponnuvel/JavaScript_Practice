// 🟢 Question 1 – Employee Joining Date
// An employee joined a company on:
// let joiningDate = new Date("2025-06-15");
// Do the following:
// Print the complete joiningDate
// Print the joining year
// Print the joining month
// Print the joining date
// Expected concept:
// 2025
// 5
// 15
// Note: JavaScript getMonth() starts from 0, so June = 5.

let joiningDate = new Date("2025-06-15");

console.log(joiningDate);
console.log(joiningDate.getFullYear());
console.log(joiningDate.getMonth());
console.log(joiningDate.getDate());


// 🟢 Question 2 – Current Date & Time
// Create a Date object representing the current date and time.
// Store it in:
// let currentDate
// Then print:
// Current year
// Current month
// Current date
// Current day
// Current hour
// Current minute
// Use JavaScript's built-in Date methods.

let currentDate = new Date();

console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());