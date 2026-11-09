// Question 1 – Find the Missing Number in an Unsorted Array
// An array contains numbers from 1 to N, but one number is missing. The array is not sorted.
// Write a JavaScript program to find the missing number.
// Input:
// let numbers = [4, 1, 5, 2];
// Expected Output:
// 3
// Conditions:
// - Do not use sort().
// - Do not use Math.max().
// - Use loops and mathematical logic.

let numbers = [4, 1, 5, 2];

let max = numbers[0]

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
let expectedSum = (max * (max + 1)) / 2;

let actualSum = 0;

for (let i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
}

let missingNumber = expectedSum - actualSum;

console.log(missingNumber);


