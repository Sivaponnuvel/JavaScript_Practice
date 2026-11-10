// Question 1 – Find the Most Frequent Element in an Array
// Write a JavaScript program to find the element that appears most frequently in an array.
// Input:
// let numbers = [1, 2, 3, 2, 4, 2, 5, 3];
// Expected Output:
// 2
// Conditions:
// - Use loops.
// - Do not use Map or Set.
// - Do not use sort().
// - If two elements have the same highest frequency, return either one.

let numbers = [1, 2, 3, 2, 4, 2, 5, 3];

let frequency = {};
let maxCount = 0;
let mostFrequentElement = null;

for(let i = 0; i < numbers.length; i++){
    let num =  numbers[i];

    frequency[num] = (frequency[num] || 0) + 1;

    if(frequency[num] > maxCount){
        maxCount = frequency[num]
        mostFrequentElement = num;
    }
}
console.log(mostFrequentElement);


