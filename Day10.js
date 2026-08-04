//  🔹 Question 1 – Print Numbers from 10 to 1
//  Write a JavaScript program to print numbers from 10 to 1 in reverse order.
//  Program Flow
//  Use a for loop.
//  Print one number per line.
//  Example Output
//  10
//  9
//  8
//  7
//  6
//  5
//  4
//  3
//  2
//  1
//  ⚠️ Conditions
//  ✅ Use a for loop
//  ✅ Use console.log()
//  ❌ Don't use while
//  ❌ Don't write multiple console.log() statements
//  💡 Hint: Think about whether the loop variable should increase or decrease.

for(let i = 10; i >= 1; i--){
    console.log(i);
}


// 🔹 Question 2 – Count Multiples of 5 from 1 to 50
// Write a JavaScript program to print all numbers between 1 and 50 that are divisible by 5.
// Program Flow
// Use a for loop.
// Print each multiple of 5 on a separate line.
// Example Output
// 5
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45
// 50
// ⚠️ Conditions
// ✅ Use a for loop
// ✅ Use console.log()
// ❌ Don't write the numbers manually
// ❌ Don't use arrays
// 💡 Hint: Use the remainder (%) operator to check divisibility.

for(let i = 1; i <= 50; i++){
    if (i % 5 === 0){
        console.log(i);
    }
}