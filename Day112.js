// Question 1 – Print the Sum of Even Numbers
// Write a JavaScript program to calculate the sum of all even numbers from 1 to N using a for loop.
// Input:
// let n = 10;
// Expected Output:
// 30
// Explanation: 2 + 4 + 6 + 8 + 10 = 30.
// Conditions:
// 1. Use a for loop.
// 2. Do not use array methods.
// 3. Do not use external libraries.
// 4. Calculate the sum using a variable.

let n = 10;
let even = 0;

for(let i = 1; i < n + 1; i++){
    if (i % 2 === 0){
        even += i;   
    }
}

console.log(even);


// Question 2 – Print the Multiplication Table
// Write a JavaScript program to print the multiplication table of a given number from 1 to 10.
// Input:
// let num = 5;
// Expected Output:
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
// Conditions:
// 1. Use a for loop.
// 2. Do not use while or do-while.
// 3. Print the multiplication table from 1 to 10.

let num = 5;

for(let i = 1; i < 10 + 1; i++){
    console.log(`${num} X ${i} = ${num * i}`);
}