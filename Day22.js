// 🔹 Question 1 – Find Largest of Two Numbers
// Write a JavaScript program to create a function named findLargest that accepts two numbers and returns the larger number.
// Program Flow
// Create a function named findLargest
// Accept two parameters
// Compare the two numbers
// Return the larger number
// Call the function with 25 and 40
// Display the returned result using console.log()
// Example Output
// 40
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Use two parameters
// ✅ Use return
// ✅ Compare the numbers using >
// ✅ Display the returned value
// ❌ Don't use Math.max()
// ❌ Don't use global variables
// ❌ Don't use arrow function
// 💡 Hint: Use if...else inside the function.

function findLargest(a, b){
    if (a > b){
        return a;
    }
    else{
        return b;
    }
}

console.log(findLargest(25, 40));


// 🔹 Question 2 – Check Even or Odd Using Function
// Write a JavaScript program to create a function named checkEvenOdd that accepts one number and returns:
// "Even" if the number is even
// "Odd" if the number is odd
// Call the function with 17 and display the returned result.
// Example Output
// Odd
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Use one parameter
// ✅ Use return
// ✅ Use % operator
// ✅ Use if...else
// ✅ Display the returned value using console.log()
// ❌ Don't use global variables
// ❌ Don't use arrow function
// ❌ Don't hardcode "Odd" outside the function
// 💡 Hint: A number is even when its remainder after dividing by 2 is 0.

function checkEvenOdd(number){
    if(number % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(checkEvenOdd(17))