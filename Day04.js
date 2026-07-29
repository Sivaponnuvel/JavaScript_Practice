// 🔹 Question 1 – Compare Two Numbers
// Write a JavaScript program to compare two numbers.
// Program Flow
// Create two variables:
// num1 = 15
// num2 = 20
// Check and display the results of the following comparison operators:
// Greater than (>)
// Less than (<)
// Greater than or equal to (>=)
// Less than or equal to (<=)
// Equal to (==)
// Strict equal to (===)
// Not equal to (!=)
// Strict not equal to (!==)
// Example Output
// Greater Than: false
// Less Than: true
// ...
// ⚠️ Conditions
// ✅ Use let for both variables
// ✅ Use all comparison operators listed above
// ✅ Display each result using console.log()
// ❌ Don't use var
// ❌ Don't hardcode the answers
// 💡 Hint: Every comparison operator returns either true or false.

let num1 = 15;
let num2 = 20;

console.log("Greater Than:", num1 > num2);
console.log("Less Than:", num1 < num2);
console.log("Greater than or equal to:", num1 >= num2);
console.log("Less than or equal to:", num1 <= num2);
console.log("Equal to:", num1 == num2);
console.log("Strict equal to:", num1 === num2);
console.log("Not equal to:", num1 != num2);
console.log("Strict Not equal to:", num1 !== num2);


// 🔹 Question 2 – Check Eligibility Using Logical Operators
// Write a JavaScript program to check whether a person is eligible to apply for a job.
// Program Flow
// Create the following variables:
// Age = 22
// HasDegree = true
// Display whether the person is eligible based on these conditions:
// Age should be 18 or above
// HasDegree should be true
// If both conditions are satisfied, display:
// Eligible for Job
// Otherwise, display:
// Not Eligible for Job
// ⚠️ Conditions
// ✅ Use && (Logical AND)
// ✅ Use one if...else statement
// ✅ Use console.log() for the output
// ❌ Don't use nested if
// ❌ Don't hardcode the output
// 💡 Hint: Think about how to combine two conditions into a single expression.

let Age = 22;
let HasDegree = true;

if(Age >= 18 && HasDegree){
    console.log("Eligible for Job");
}
else{
    console.log("Not Eligible for Job");
}