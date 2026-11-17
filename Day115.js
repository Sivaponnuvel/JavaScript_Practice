// Question 1 – Filter Even Numbers Using an Arrow Function
// Write an arrow function named filterEven that accepts an array of numbers and returns a new array containing only even numbers.
// Input:
// let numbers = [10, 15, 20, 25, 30, 35, 40];
// Expected Output:
// [10, 20, 30, 40]
// Conditions:
// 1. Use an arrow function.
// 2. The function must accept one parameter (array).
// 3. Use the filter() array method.
// 4. Check even numbers using the modulus operator %.
// 5. Return the filtered array.
// 6. Print the result using console.log().

let numbers = [10, 15, 20, 25, 30, 35, 40];

const filterEven = (numbers) => {
    return numbers.filter((number) => number % 2 === 0);
}

console.log(filterEven(numbers));


// Question 2 – Find the Second Largest Number Using an Arrow Function
// Write an arrow function named findSecondLargest that accepts an array of numbers and returns the second-largest distinct number.
// Input:
// let numbers1 = [10, 25, 40, 30, 40, 15];
// Expected Output:
// 30
// Explanation:
// - Largest number = 40
// - Second-largest distinct number = 30
// Conditions:
// 1. Use an arrow function.
// 2. The function must accept one parameter (array).
// 3. Do not sort the array.
// 4. Use loops and conditional statements.
// 5. Find the second-largest distinct number.
// 6. Return the result.
// 7. Print the result using console.log().

let numbers1 = [10, 25, 40, 30, 40, 15];

const findSecondLargest = (numbers) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let number of numbers){
        if(number > largest){
            secondLargest = largest;
            largest = number;
        }
        else if(number > secondLargest && largest > number){
            secondLargest = number;
        }
    }
    return secondLargest;
}

console.log(findSecondLargest(numbers1));