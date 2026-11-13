// Question 1 – Find the Intersection of Two Arrays
// Write a JavaScript program to find the common elements present in two arrays without duplicates.
// Input:
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// Expected Output:
// [3, 4, 5]
// Conditions:
// 1. Use loops.
// 2. Do not use Set.
// 3. Do not use filter().
// 4. Do not use external libraries.
// 5. The result should not contain duplicate elements.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let common = [];

for(let i = 0; i < arr1.length; i++){

    let alreadyExists = false;
    for (let k = 0; k < common.length; k++) {
        if (common[k] === arr1[i]) {
            alreadyExists = true;
            break;
        }
    }
    if (alreadyExists) {
        continue;
    }

    for(let j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]){
            common.push(arr1[i]);
            break;
        }
    }
}
console.log(common)


