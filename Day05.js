// 🔹 Question 1 – Check College Admission Eligibility
// Write a JavaScript program to check whether a student is eligible for college admission.
// Program Flow
// Create the following variables:
// marks = 85
// sportsQuota = false
// A student is eligible if:
// Marks are 80 or above, OR
// The student has a sports quota.
// Display:
// "Eligible for Admission" if eligible.
// "Not Eligible for Admission" otherwise.
// Example Output
// Eligible for Admission
// ⚠️ Conditions
// ✅ Use || (Logical OR)
// ✅ Use one if...else statement
// ✅ Use console.log()
// ❌ Don't use nested if
// ❌ Don't hardcode the output
// 💡 Hint: The condition should become true if at least one requirement is satisfied.

let marks = 85;
let sportsQuota = false;

if (marks >= 80 || sportsQuota){
    console.log("Eligible for Admission");
}
else{
    console.log("Not Eligible for Admission");
}


// 🔹 Question 2 – Check Account Access
// Write a JavaScript program to check whether a user's account is active.
// Program Flow
// Create the following variable:
// isBlocked = false
// If the account is not blocked, display:
// Access Granted
// Otherwise, display:
// Access Denied
// ⚠️ Conditions
// ✅ Use the Logical NOT (!) operator
// ✅ Use one if...else statement
// ✅ Use console.log()
// ❌ Don't compare using == true or == false
// ❌ Don't hardcode the output
// 💡 Hint: The NOT operator reverses a boolean value.

let isBlocked = false;

if (!isBlocked){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}