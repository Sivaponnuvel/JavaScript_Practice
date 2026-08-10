// 🔹 Question 1 – Multiplication Table
// Write a JavaScript program to print the multiplication table of 5 from 1 to 10.
// Example Output
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50
// ⚠️ Conditions
// ✅ Use a for loop
// ✅ Use console.log()
// ✅ Use multiplication operator *
// ❌ Don't write 10 console.log() statements
// ❌ Don't use while
// ❌ Don't hardcode the answers
// 💡 Hint: The table number can remain fixed while another variable goes from 1 to 10.

let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


// 🔹 Question 2 – Nested Loop: Print Number Pattern
// Write a JavaScript program to print the following pattern using nested for loops.
// Example Output
// 1
// 12
// 123
// 1234
// 12345
// ⚠️ Conditions
// ✅ Use nested for loops
// ✅ Use console.log()
// ✅ Outer loop should control the rows
// ✅ Inner loop should control the numbers in each row
// ❌ Don't write each row manually
// ❌ Don't use arrays
// ❌ Don't use while
// 💡 Hint: Think about how many numbers should be printed in each row.
// Important: For this question, you'll need to understand how to build a row before printing it.

for (let i = 1; i <= 5; i++){
    let pattern = "";
    for (let j = 1; j <= i; j++){
        pattern += j;
    }
    console.log(pattern);
}