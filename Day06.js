// 🔹 Question 1 – Grade Calculator (else if)
// Write a JavaScript program to display a student's grade based on their marks.
// Program Flow
// Create a variable:
// marks = 78
// Display the grade based on the following conditions:
// 90 or above → Grade A
// 75 to 89 → Grade B
// 50 to 74 → Grade C
// Below 50 → Fail
// Example Output
// Grade B
// ⚠️ Conditions
// ✅ Use one if...else if...else statement
// ✅ Use console.log()
// ❌ Don't use nested if
// ❌ Don't hardcode the output
// 💡 Hint: Check the highest range first, then move to the lower ranges.

let marks = 78;

if (marks >= 90){
    console.log("Grade A");
}
else if(marks >= 75){
    console.log("Grade B");
}
else if(marks >= 50){
    console.log("Grade C");
}
else{
    console.log("Fail");
}


// 🔹 Question 2 – ATM Withdrawal (Nested if)
// Write a JavaScript program to check whether a user can withdraw money from an ATM.
// Program Flow
// Create the following variables:
// hasCard = true
// pinCorrect = true
// Rules:
// If the user has an ATM card:
// Then check whether the PIN is correct.
// If correct, display:
// Withdrawal Successful
// Otherwise, display:
// Incorrect PIN
// If the user doesn't have an ATM card, display:
// No ATM Card
// ⚠️ Conditions
// ✅ Use nested if
// ✅ Use console.log()
// ❌ Don't use &&
// ❌ Don't use else if
// 💡 Hint: First check one condition. Only if it's true should you check the second condition.

let hasCard = true;
let pinCorrect = true;

if (hasCard){
    if (pinCorrect){
        console.log("Withdrawal Successful");
    }
    else{
        console.log("Incorrect PIN");
    }
}
else{
    console.log("No ATM Card");
}