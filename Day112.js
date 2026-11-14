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


