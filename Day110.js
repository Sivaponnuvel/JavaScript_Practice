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


