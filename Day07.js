// 🔹 Question 1 – Display Day Name
// Write a JavaScript program to display the day name based on the day number.
// Program Flow
// Create a variable:
// day = 3
// Display:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// For any other number, display:
// Invalid Day
// Example Output
// Wednesday
// ⚠️ Conditions
// ✅ Use switch
// ✅ Use break for every case
// ✅ Use default
// ✅ Use console.log()
// ❌ Don't use if...else
// 💡 Hint: Each case should end with break to prevent execution from continuing into the next case.

let day = 3

switch (day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day")
}


// 🔹 Question 2 – Simple Calculator
// Write a JavaScript program to perform a calculation based on an operator.
// Program Flow
// Create the following variables:
// num1 = 20
// num2 = 10
// operator = "+"
// Perform the corresponding operation based on the operator.
// Supported operators:
// +
// -
// *
// /
// If the operator is invalid, display:
// Invalid Operator
// Example Output
// 30
// ⚠️ Conditions
// ✅ Use switch
// ✅ Use break for every case
// ✅ Use default
// ✅ Use console.log()
// ❌ Don't use if...else
// 💡 Hint: Compare the operator variable in each case.

let num1 = 20;
let num2 = 10;
let operator = "+";

switch (operator){
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator")
}