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


