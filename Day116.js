// Question 1 – Handle Division by Zero Using Try-Catch
// Write a JavaScript program using an arrow function named divideNumbers that accepts two numbers and performs division.
// Input:
// let a = 20;
// let b = 0;
// Expected Output:
// Error: Cannot divide by zero
// Conditions:
// 1. Use an arrow function named divideNumbers.
// 2. Accept two parameters.
// 3. Use try and catch blocks.
// 4. If the second number is zero, throw an error using throw new Error().
// 5. Otherwise, return the division result.
// 6. Print the result using console.log().

let a = 20;
let b = 0;

const divideNumbers = (a, b) => {
    try {
        if(b === 0){
            throw new Error("Cannot divide by zero");
        }
        
        let result = a / b;
        return result;
    } 
    
    catch (error) {
        return `Error: ${error.message}`;
    }
}

console.log(divideNumbers(a, b))

