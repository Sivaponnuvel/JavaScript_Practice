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


// Question 2 – Check Whether Two Strings Are Anagrams
// Two strings are called anagrams if they contain the same characters with the same frequency, but in a different order.
// Write a JavaScript program to check whether two given strings are anagrams.
// Input:
// let str1 = "listen";
// let str2 = "silent";
// Expected Output:
// Anagram
// Also test with:
// let str1 = "hello";
// let str2 = "world";
// Expected output:
// Not Anagram
// Conditions:
// - Do not use sort().
// - Do not use Map or Set.
// - Use loops and basic JavaScript logic.

let str1 = "listen";
let str2 = "silent";

if(str1.length !== str2.length){
    console.log("Not Anagram");
}
else{
    
    let isAnagram = true;

    for(let i = 0; i < str1.length; i++){
        let count1 = 0
        let count2 = 0

        for(let j = 0; j < str1.length; j++){
            if(str1[i] === str1[j]){
                count1++;
            }
            if(str1[i] === str2[j]){
                count2++;
            }
        }
        if (count1 !== count2){
            isAnagram = false;
            break;
        }
    }
    if(isAnagram){
        console.log("Anagram");
    }
    else{
        console.log("Not Anagram")
    }
}