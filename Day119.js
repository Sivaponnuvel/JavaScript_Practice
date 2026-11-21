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

