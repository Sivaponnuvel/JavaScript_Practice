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


// Question 2 – Find the Largest Number in an Array
// Write a JavaScript program to find the largest number in an array without using the built-in Math.max() method.
// Input:
// let numbers = [12, 45, 7, 89, 23, 56];
// Expected Output:
// 89

let numbers = [12, 45, 7, 89, 23, 56];
let largest = numbers[0]

for(let number of numbers){
    if(number > largest){
        largest = number
    }
}

console.log(largest);