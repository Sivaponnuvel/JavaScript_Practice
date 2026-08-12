// 🔹 Question 1 – Increasing Number Pattern
// Write a JavaScript program using nested for loops to print:
// Example Output
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ⚠️ Conditions
// ✅ Use nested for loops
// ✅ Outer loop should control the rows
// ✅ Inner loop should control the numbers
// ✅ Use console.log()
// ✅ Build each row before printing it
// ❌ Don't write each row manually
// ❌ Don't use arrays
// ❌ Don't use while
// 💡 Hint: The number of values printed in each row increases by 1.

for (let i = 1; i <= 6; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += j;
    }
    console.log(pattern);
}


