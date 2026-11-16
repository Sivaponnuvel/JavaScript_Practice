// Question 1 – Print Numbers from 1 to N Using While Loop
// Write a JavaScript program to print all numbers from 1 to N using a while loop.
// Input:
// let n = 10;
// Expected Output:
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
// Conditions:
// 1. Use a while loop.
// 2. Start printing from 1.
// 3. Continue until N.
// 4. Increment the counter in each iteration.
// 5. Print each number using console.log().

let n = 10;
let i = 1

while (i <= n) {
    console.log(i);
    i++;
}


// Question 2 – Find the Sum of Digits of a Number Using While Loop
// Write a JavaScript program to calculate the sum of all digits in a given number using a while loop.
// Input:
// let num = 12345;
// Expected Output:
// 15
// Explanation:
// 1 + 2 + 3 + 4 + 5 = 15
// Conditions:
// 1. Use a while loop.
// 2. Extract the last digit using the modulus operator %.
// 3. Add each digit to the sum.
// 4. Remove the last digit using Math.floor().
// 5. Print the final sum using console.log().

let num = 12345;
let sumNum = 0

while (num > 0) {
    let digit = num % 10;
    sumNum += digit;
    num = Math.floor(num / 10)
}

console.log(sumNum)