// Question 1 – Remove Duplicate Elements from an Array
// Write a JavaScript program to remove duplicate elements from an array without using Set.
// Input:
// let numbers = [1, 2, 3, 2, 4, 1, 5, 3];
// Expected Output:
// [1, 2, 3, 4, 5]
// Conditions:
// - Do not use Set.
// - Do not use filter().
// - Use loops.

let numbers = [1, 2, 3, 2, 4, 1, 5, 3];

let freq = []

for(let number of numbers){

    let found = false;

    for(let i of freq){
        if (i === number){
            found = true;
            break;
        }
    }
    if (!found){
        freq.push(number)
    }
}

console.log(freq);


