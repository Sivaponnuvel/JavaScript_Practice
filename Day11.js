// 🔹 Question 1 – Print Numbers from 1 to 10
// Write a JavaScript program to print numbers from 1 to 10 using a while loop.
// Program Flow
// Create a variable with the starting value.
// Use a while loop.
// Print each number on a separate line.
// Update the variable inside the loop.
// Example Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// ⚠️ Conditions
// ✅ Use a while loop
// ✅ Use console.log()
// ✅ Update the loop variable inside the loop
// ❌ Don't use a for loop
// ❌ Don't write multiple console.log() statements
// 💡 Hint: A while loop continues running as long as its condition is true.

let num = 1;

while (num <= 10){
    console.log(num);
    num++;
}


// 🔹 Question 2 – Print Odd Numbers from 1 to 19
// Write a JavaScript program to print all odd numbers from 1 to 19 using a while loop.
// Program Flow
// Create a variable with the starting value.
// Use a while loop.
// Print only odd numbers.
// Continue until 19.
// Example Output
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
// ⚠️ Conditions
// ✅ Use a while loop
// ✅ Use console.log()
// ✅ Update the loop variable inside the loop
// ❌ Don't use a for loop
// ❌ Don't write numbers manually
// 💡 Hint: Think about whether you need to increase the variable by 1 or by 2.

let num1 = 1;

while (num1 <= 19){
    if (num1 % 2 !== 0){
        console.log(num1);
    }
    num1++;
}