// 🔹 Question 1 – Find Grade Using Function
// Write a JavaScript program to create a function named getGrade that accepts a student's marks and returns the grade.
// Conditions
// 90 or above → "A"
// 75 to 89 → "B"
// 50 to 74 → "C"
// Below 50 → "Fail"
// Call the function with 82 and display the returned result.
// Example Output
// B
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Accept one parameter
// ✅ Use if...else if...else
// ✅ Use return
// ✅ Display the returned value using console.log()
// ❌ Don't use global variables
// ❌ Don't hardcode "B" outside the function
// ❌ Don't use arrow function
// 💡 Hint: Check the highest marks range first.

function getGrade(marks){
    if (marks >= 90){
        return "A";
    }
    else if(marks >= 75 && marks <= 89){
        return "B";
    }
    else if(marks >= 50 && marks <= 74){
        return "C";
    }
    else{
        return "Fail"
    }
}

console.log(getGrade(82));


