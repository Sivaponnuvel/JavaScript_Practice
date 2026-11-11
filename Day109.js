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


// Question 2 – Count the Number of Words in a String
// Write a JavaScript program to count the total number of words in a given string.
// Input:
// let str = "JavaScript is a powerful programming language";
// Expected Output:
// 6
// Conditions:
// 1. Use loops.
// 2. Do not use split().
// 3. Do not use regular expressions.
// 4. Handle multiple spaces between words.
// 5. Do not count leading or trailing spaces as words.

let str = "JavaScript is a powerful programming language";

let count = 0

for(let i = 0; i < str.length; i++){
    if(str[i] !== " " && (i === 0 || str[i - 1] === " ")){
        count++;
    }
}

console.log(count)