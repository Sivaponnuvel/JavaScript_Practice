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


