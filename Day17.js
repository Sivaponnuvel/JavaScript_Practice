// 🔹 Question 1 – Square Number Pattern
// Write a JavaScript program to print the following pattern using nested for loops:
// Example Output
// 12345
// 12345
// 12345
// 12345
// 12345
// ⚠️ Conditions
// ✅ Use nested for loops
// ✅ Outer loop should control the rows
// ✅ Inner loop should control the numbers
// ✅ Use console.log()
// ❌ Don't write each row manually
// ❌ Don't use arrays
// ❌ Don't use while
// 💡 Hint: Every row contains the numbers 1 to 5.

for(let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j <= 5; j++){
        row += j
    }
    console.log(row);
}


