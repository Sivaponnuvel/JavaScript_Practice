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


