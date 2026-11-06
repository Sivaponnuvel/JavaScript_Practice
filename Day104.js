// Question 1 – Check Palindrome String
// Write a JavaScript program to check whether a given string is a palindrome or not.
// A palindrome reads the same forward and backward.
// Input:
// let str = "madam";
// Expected Output:
// Palindrome
// Also test with "hello".
// Condition: Do not use the built-in reverse() method.

let str = "madam";
let rev = "";

for(let i = 0; (str.length - 1) >= i; i++){
    rev = str[i] + rev;
}

if (str === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


// Question 2 – Find the Second Largest Number in an Array
// Write a JavaScript program to find the second-largest distinct number in an array.
// Input:
// let numbers = [10, 5, 20, 8, 15, 20];
// Expected Output:
// 15
// Conditions:
// - Do not use sort().
// - Do not use Math.max().
// - The second-largest number must be distinct from the largest.

let numbers = [10, 5, 20, 8, 15, 20];
let largest = -Infinity;
let seocndLargest = -Infinity;

for(let number of numbers){
    if(number > largest){
        seocndLargest = largest;
        largest = number;
    }
    else if(number > seocndLargest && number !== largest){
        seocndLargest = number;
    }
}

console.log(seocndLargest);