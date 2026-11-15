// Question 1 – Find the Square of a Number Using Arrow Function
// Write an arrow function named square that accepts a number and returns its square.
// Input:
// let num = 5;
// Expected Output:
// 25
// Conditions:
// 1. Use an arrow function.
// 2. The function must accept one parameter.
// 3. Return the square of the given number.
// 4. Call the function and print the result using console.log().

let num = 5;

let square = (num) => {
    return num ** 2;
}

console.log(square(num));


// Question 2 – Find the Largest of Two Numbers Using Arrow Function
// Write an arrow function named findLargest that accepts two numbers and returns the largest number.
// Input:
// let a = 25;
// let b = 40;
// Expected Output:
// 40
// Conditions:
// 1. Use an arrow function.
// 2. The function must accept two parameters.
// 3. Use conditional logic to compare both numbers.
// 4. Return the largest number.
// 5. Call the function and print the result using console.log().

let a = 25;
let b = 40;

const findLargest = (a, b) => {
    if (a > b){
        return a;
    } else{
        return b;
    }
}

console.log(findLargest(a, b));