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


// 🔹 Question 2 – Repeated Number Pattern
// Write a JavaScript program to print the following pattern using nested for loops:
// Example Output
// 1
// 22
// 333
// 4444
// 55555
// ⚠️ Conditions
// ✅ Use nested for loops
// ✅ Outer loop should control the rows
// ✅ Inner loop should control how many times the number is printed
// ✅ Use console.log()
// ❌ Don't write each row manually
// ❌ Don't use arrays
// ❌ Don't use while
// 💡 Hint:
// For row 1, print 1 one time.
// For row 2, print 2 two times.
// For row 3, print 3 three times...

for (let i = 1; i <= 5; i++){
    let row1 = "";
    for(let j = 1; j <= i; j++){
        row1 += i;
    }
    console.log(row1)
}