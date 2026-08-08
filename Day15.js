// 🔹 Question 1 – Stop the Loop Using break
// Write a JavaScript program to print numbers from 1 to 10, but stop the loop when the number becomes 6.
// Program Flow
// Use a for loop.
// If the number is 6, stop the loop.
// Otherwise, print the number.
// Example Output
// 1
// 2
// 3
// 4
// 5
// ⚠️ Conditions
// ✅ Use a for loop
// ✅ Use the break statement
// ✅ Use console.log()
// ❌ Don't use while
// ❌ Don't use return
// 💡 Hint: Check the condition before printing the number.

let num = 10;

for (let i = 1; i <= num; i++){
    if(i === 6){
        break;
    }
    console.log(i)
}


