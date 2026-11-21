// Question 1 – Find the Sum of All Even Numbers in an Array
// Write a JavaScript program using an arrow function named sumEvenNumbers that accepts an array of numbers and returns the sum of all even numbers.
// Input:
// let numbers = [10, 15, 20, 25, 30, 35, 40];
// Expected Output:
// 100
// Explanation:
// 10 + 20 + 30 + 40 = 100
// Conditions:
// 1. Use an arrow function named sumEvenNumbers.
// 2. The function must accept one parameter (array).
// 3. Use a loop to iterate through the array.
// 4. Check even numbers using % 2 === 0.
// 5. Calculate the sum of even numbers.
// 6. Return the final sum.
// 7. Print the result using console.log().

let numbers = [10, 15, 20, 25, 30, 35, 40];

const sumEvenNumbers = (numbers) => {
    let totalCount = 0;
    for(let number of numbers){
        if (number % 2 === 0){
            totalCount += number;
        }
    }
    return totalCount;
}

console.log(sumEvenNumbers(numbers));


// Question 2 – Remove Duplicate Elements from an Array
// Write a JavaScript program using an arrow function named removeDuplicates that accepts an array and returns a new array containing only unique elements.
// Input:
// let numbers = [10, 20, 10, 30, 40, 20, 50, 30];
// Expected Output:
// [10, 20, 30, 40, 50]
// Conditions:
// 1. Use an arrow function named removeDuplicates.
// 2. The function must accept one parameter (array).
// 3. Do not use the Set method.
// 4. Use a loop and conditional logic.
// 5. Use includes() to check whether an element already exists.
// 6. Add only unique elements to a new array using push().
// 7. Return the new array.
// 8. Print the result using console.log().

let nums = [10, 20, 10, 30, 40, 20, 50, 30];

const removeDuplicates = (nums) => {
    let uniqueNums = [];
    for(let num of nums){
        if (!uniqueNums.includes(num)){
            uniqueNums.push(num);
        }
    }
    return uniqueNums;
}

console.log(removeDuplicates(nums));