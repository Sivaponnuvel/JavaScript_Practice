// Question 1 – Reverse a String
// Write a JavaScript program to reverse a given string without using the built-in reverse() method.
// Input:
// let str = "javascript";
// Expected Output:
// tpircsavaj

let str = "javascript";
let rev = ""

for(let i = 0; i <= (str.length - 1); i++){
    rev = str[i] + rev
}

console.log(rev);


