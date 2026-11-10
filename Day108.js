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


// Question 2 – Move All Zeros to the End of an Array
// Write a JavaScript program to move all zeros to the end of an array while maintaining the order of non-zero elements.
// Input:
// let numbers1 = [0, 1, 0, 3, 12];
// Expected Output:
// [1, 3, 12, 0, 0]
// Conditions:
// - Use loops.
// - Do not use sort().
// - Maintain the original order of non-zero elements.
// - Try to solve without creating another array.

let numbers1 = [0, 1, 0, 3, 12];

let insertIndex = 0;

for(let i = 0; i < numbers1.length; i++){
    if (numbers1[i] !== 0) {
        numbers1[insertIndex] = numbers1[i];
        insertIndex++;
    }
}

for(let i = insertIndex; i < numbers1.length; i++){
    numbers1[i] = 0;
}

console.log(numbers1);