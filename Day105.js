// Question 1 – Find the Frequency of Each Character in a String
// Write a JavaScript program to count how many times each character appears in a given string.
// Input:
// let str = "javascript";
// Expected Output:
// j: 1
// a: 2
// v: 1
// s: 1
// c: 1
// r: 1
// i: 1
// p: 1
// t: 1
// Conditions:
// - Use a loop.
// - Do not use external libraries.
// - Do not use Map or Set.

let str = "javascript";
let freq = {};

for(let i = 0; i <= (str.length - 1); i++){
    if(freq[str[i]]){
        freq[str[i]] += 1
    }
    else{
        freq[str[i]] = 1;
    }
}

console.log(freq);


// Question 2 – Find Missing Number in an Array
// An array contains numbers from 1 to N, but one number is missing.
// Write a JavaScript program to find the missing number.
// Input:
// let numbers = [1, 2, 3, 5, 6];
// Expected Output:
// 4
// Conditions:
// - Numbers are in the range 1 to N.
// - Only one number is missing.
// - Do not use sort().
// - Try solving using a loop and mathematical logic.

let numbers = [1, 2, 3, 5, 6];

let n = numbers.length + 1;

let expectedSum = n * (n + 1) / 2

let actualSum = 0

for(let number of numbers){
    actualSum += number;
}

let missingNumber = expectedSum - actualSum;

console.log(missingNumber);