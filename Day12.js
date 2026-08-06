// 🔹 Question 1 – Print Numbers from 1 to 10
// Write a JavaScript program to print numbers from 1 to 10 using a do...while loop.
// Program Flow
// Create a variable with the starting value.
// Use a do...while loop.
// Print one number per line.
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
// ✅ Use a do...while loop
// ✅ Use console.log()
// ✅ Update the loop variable inside the loop
// ❌ Don't use for
// ❌ Don't use while
// 💡 Hint: In a do...while loop, the condition comes after the loop body.

let i =  1

do{
    console.log(i);
    i++;
} while(i <= 10);


// 🔹 Question 2 – Print Even Numbers from 2 to 20
// Write a JavaScript program to print all even numbers from 2 to 20 using a do...while loop.
// Program Flow
// Create a variable with the starting value.
// Use a do...while loop.
// Print only even numbers.
// Continue until 20.
// Example Output
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// ⚠️ Conditions
// ✅ Use a do...while loop
// ✅ Use console.log()
// ✅ Update the loop variable inside the loop
// ❌ Don't use for
// ❌ Don't use while
// ❌ Don't write the numbers manually
// 💡 Hint: You can use the % operator to check if a number is even.

let num = 2;

do{
    console.log(num);
    num += 2;
}while(num <= 20);
