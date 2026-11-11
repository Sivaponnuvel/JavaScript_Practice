// Question 1 – Find the Second Largest Element in an Array
// Write a JavaScript program to find the second largest distinct element in an array.
// Input:
// let numbers = [10, 5, 20, 8, 20, 15];
// Expected Output:
// 15
// Conditions:
// 1. Do not use sort().
// 2. Do not use Set.
// 3. Do not use Math.max().
// 4. Use loops.
// 5. Find the second largest distinct element.

let numbers = [10, 5, 20, 8, 20, 15];

let largest = -Infinity
let secondLargest = -Infinity;

for(let number of numbers){
    if (number > largest){
        secondLargest = largest;
        largest = number;
    }
    else if(number > secondLargest && number < largest){
        secondLargest = number
    }
}

console.log(secondLargest);


