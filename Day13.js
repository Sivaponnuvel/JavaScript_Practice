// 🔹 Question 1 – Print Numbers from 20 to 10
// Write a JavaScript program to print numbers from 20 to 10 in reverse order using a while loop.
// Program Flow
// Create a variable with the starting value.
// Use a while loop.
// Print one number per line.
// Decrease the variable after each iteration.
// Example Output
// 20
// 19
// 18
// 17
// 16
// 15
// 14
// 13
// 12
// 11
// 10
// ⚠️ Conditions
// ✅ Use a while loop
// ✅ Use console.log()
// ✅ Update the loop variable inside the loop
// ❌ Don't use a for loop
// ❌ Don't write multiple console.log() statements
// 💡 Hint: Think about how to decrease the loop variable after every iteration.

num = 20

while(num >= 10){
    console.log(num);
    num--;
}


// 🔹 Question 2 – Print Multiples of 3 from 3 to 30
// Write a JavaScript program to print all numbers between 3 and 30 that are divisible by 3 using a while loop.
// Program Flow
// Create a variable with the starting value.
// Use a while loop.
// Print only multiples of 3.
// Continue until 30.
// Example Output
// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30
// ⚠️ Conditions
// ✅ Use a while loop
// ✅ Use console.log()
// ✅ Update the loop variable inside the loop
// ❌ Don't use a for loop
// ❌ Don't use arrays
// ❌ Don't write the numbers manually
// 💡 Hint: Use the remainder (%) operator to check divisibility.

num1 = 3

while (num1 <= 30){
    if (num1 % 3 === 0){
        console.log(num1);
    }
    num1++;
}