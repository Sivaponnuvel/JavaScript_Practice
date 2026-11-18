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


// Question 2 – Validate User Age Using Try-Catch-Finally
// Write a JavaScript program using an arrow function named checkAge that accepts a user's age and validates it.
// Input:
// let age = 15;
// Expected Output:
// Error: Age must be 18 or above
// Validation completed
// Conditions:
// 1. Use an arrow function named checkAge.
// 2. Accept one parameter (age).
// 3. Use try, catch, and finally blocks.
// 4. If age is below 18, throw an error using throw new Error().
// 5. If age is 18 or above, return "Eligible to vote".
// 6. Catch the error and print its message using console.log(error.message).
// 7. Inside finally, print "Validation completed".

let age = 15;

const checkAge = (age) => {
    try {
        if(age < 18){
            throw new Error("Age must be 18 or above");
        }
        return "Eligible to vote"
    } 
    catch (error) {
        console.log(`Error: ${error.message}`);
    }
    finally{
        console.log("Validation completed");
    }
}

checkAge(age);