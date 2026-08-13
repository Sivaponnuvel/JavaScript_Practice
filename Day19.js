// 🔹 Question 1 – Increasing Star Pattern
// Write a JavaScript program using nested for loops to print:
// Example Output
// *
// **
// ***
// ****
// *****
// ⚠️ Conditions
// ✅ Use nested for loops
// ✅ Outer loop should control the rows
// ✅ Inner loop should control the stars
// ✅ Use console.log()
// ✅ Build each row before printing it
// ❌ Don't write each row manually
// ❌ Don't use arrays
// ❌ Don't use while
// 💡 Hint:
// Row 1 → 1 star
// Row 2 → 2 stars
// Row 3 → 3 stars
// ...

for(let i = 1; i <= 5; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += "*";
    }
    console.log(pattern);
}


