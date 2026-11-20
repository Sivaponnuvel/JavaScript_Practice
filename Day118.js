// Question 1 – Filter Numbers Greater Than 50
// Write an arrow function named filterNumbers that accepts an array of numbers and returns a new array containing only numbers greater than 50.
// Input:
// let numbers = [25, 60, 45, 80, 35, 90, 50, 75];
// Expected Output:
// [60, 80, 90, 75]
// Conditions:
// 1. Use an arrow function named filterNumbers.
// 2. The function must accept one parameter (array).
// 3. Use the filter() array method.
// 4. Check numbers greater than 50.
// 5. Return the filtered array.
// 6. Print the result using console.log().

let numbers = [25, 60, 45, 80, 35, 90, 50, 75];

const filterNumbers = (numbers) => {
    return numbers.filter((number) => number > 50);
}

console.log(filterNumbers(numbers));


