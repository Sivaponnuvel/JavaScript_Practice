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


// Question 2 – Find the First Non-Repeating Character in a String
// Write a JavaScript program to find the first character that appears only once in a given string.
// Input:
// let str = "aabbcdeff";
// Expected Output:
// c
// Conditions:
// - Use loops.
// - Do not use Map or Set.
// - Do not use built-in methods that directly solve the problem.

let str = "aabbcdeff";

for(let i = 0; i < str.length; i++){
    let count = 0
    
    for(let j = 0; j < str.length; j++){
        if(str[i] === str[j]){
            count++;
        }
    }

    if(count === 1){
        console.log(str[i]);
        break;
    }
}