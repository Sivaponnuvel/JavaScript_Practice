// 🔹 Question 1 – Print Numbers from 15 to 1
// Write a JavaScript program to print numbers from 15 to 1 in reverse order using a do...while loop.
// Program Flow
// Create a variable with the starting value.
// Use a do...while loop.
// Print one number per line.
// Decrease the variable after each iteration.
// Example Output
// 15
// 14
// 13
// 12
// 11
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// ⚠️ Conditions
// ✅ Use a do...while loop
// ✅ Use console.log()
// ✅ Update the loop variable inside the loop
// ❌ Don't use for
// ❌ Don't use while
// 💡 Hint: Decrease the variable using the decrement operator (--).

let i = 15;

do{
    console.log(i);
    i--;
}while(i >= 1);


// 🔹 Question 2 – Print Multiples of 4 from 4 to 40
// Write a JavaScript program to print all numbers between 4 and 40 that are divisible by 4 using a do...while loop.
// Program Flow
// Create a variable with the starting value.
// Use a do...while loop.
// Print only multiples of 4.
// Continue until 40.
// Example Output
// 4
// 8
// 12
// 16
// 20
// 24
// 28
// 32
// 36
// 40
// ⚠️ Conditions
// ✅ Use a do...while loop
// ✅ Use console.log()
// ✅ Update the loop variable inside the loop
// ❌ Don't use for
// ❌ Don't use while
// ❌ Don't write the numbers manually
// 💡 Hint: Try to solve it without using the % operator if possible.

let num = 4;

do{
    console.log(num);
    num += 4;
}while(num <= 40);