// 🔹 Question 1 – Display Month Name
// Write a JavaScript program to display the month name based on the month number.
// Program Flow
// Create a variable:
// month = 8
// Display:
// 1 → January
// 2 → February
// 3 → March
// 4 → April
// 5 → May
// 6 → June
// 7 → July
// 8 → August
// 9 → September
// 10 → October
// 11 → November
// 12 → December
// For any other number, display:
// Invalid Month
// Example Output
// August
// ⚠️ Conditions
// ✅ Use switch
// ✅ Use break for every case
// ✅ Use default
// ✅ Use console.log()
// ❌ Don't use if...else
// 💡 Hint: Each month number should have its own case.

let month = 8;

switch (month){
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;
        
    case 3:
        console.log("March");
        break;
        
    case 4:
        console.log("April");
        break;
        
    case 5:
        console.log("May");
        break;
        
    case 6:
        console.log("June");
        break;
        
    case 7:
        console.log("July");
        break;
        
    case 8:
        console.log("August");
        break;
        
    case 9:
        console.log("September");
        break;
    
    case 10:
        console.log("October");
        break;
        
    case 11:
        console.log("November");
        break;
        
    case 12:
        console.log("December");
        break;
        
    default:
        console.log("Invalid Month");
}


// 🔹 Question 2 – Traffic Signal
// Write a JavaScript program to display the action based on the traffic signal color.
// Program Flow
// Create a variable:
// signal = "red"
// Display:
// "red" → Stop
// "yellow" → Get Ready
// "green" → Go
// For any other value, display:
// Invalid Signal
// Example Output
// Stop
// ⚠️ Conditions
// ✅ Use switch
// ✅ Use break for every case
// ✅ Use default
// ✅ Use console.log()
// ❌ Don't use if...else
// 💡 Hint: Since the variable contains text, each case should also use string values.


let signal = "red";

switch(signal){
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}