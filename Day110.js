// Question 1 – Find the Largest Difference Between Two Elements
// Write a JavaScript program to find the maximum difference between two elements in an array, where the larger element must appear after the smaller element.
// Input:
// let numbers = [7, 1, 5, 3, 6, 4];
// Expected Output:
// 5
// Explanation: The maximum difference is 6 - 1 = 5.
// Conditions:
// 1. Use loops.
// 2. Do not use sort().
// 3. Do not use Math.max() or Math.min().
// 4. The larger element must appear after the smaller element.
// 5. If no positive difference exists, return -1.

let numbers = [7, 1, 5, 3, 6, 4];

let minElement = numbers[0];
let maxDifference = -1;

for(let i = 1; i < numbers.length; i++){

    let difference = numbers[i] - minElement;

    if(difference > maxDifference){
        maxDifference = difference;
    }

    if(numbers[i] < minElement){
        minElement = numbers[i];
    }
}

if(maxDifference > 0){
    console.log(maxDifference);
}else{
    console.log(-1);
}


// Question 2 – Check Whether a String Is a Palindrome
// Write a JavaScript program to check whether a given string is a palindrome.
// A palindrome reads the same forward and backward.
// Input 1:
// let str = "madam";
// Expected Output:
// Palindrome
// Input 2:
// let str = "hello";
// Expected Output:
// Not Palindrome
// Conditions:
// 1. Use loops.
// 2. Do not use reverse().
// 3. Do not use any external libraries.
// 4. Compare characters from both ends of the string.

let str = "madam";

let rev = "";

for(let i = 0; i < str.length; i++){
    rev = str[i] + rev
}

if (rev === str){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}