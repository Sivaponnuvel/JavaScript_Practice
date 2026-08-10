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


