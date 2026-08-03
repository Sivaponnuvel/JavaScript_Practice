// 🔹 Question 1 – Print Numbers from 1 to 10
// Write a JavaScript program to print numbers from 1 to 10.
// Program Flow
// Use a for loop.
// Print each number on a separate line.
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
// ✅ Use a for loop
// ✅ Use console.log()
// ❌ Don't write 10 console.log() statements
// 💡 Hint: Think about the three parts of a for loop: initialization, condition, and update.

for(let i = 1; i <= 10; i++){
    console.log(i);
}


// 🔹 Question 2 – Print Even Numbers from 2 to 20
// Write a JavaScript program to print all even numbers from 2 to 20.
// Program Flow
// Use a for loop.
// Print only even numbers.
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
// ✅ Use a for loop
// ✅ Use console.log()
// ❌ Don't print odd numbers
// ❌ Don't write each number manually
// 💡 Hint: There are multiple ways to print even numbers. Choose the one you think is simplest.

for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}