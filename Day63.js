// 🟢 Question 1 – Countdown
// Create a recursive function called countdown().
// The function should take a number and print numbers from that number down to 1.
// Example:
// countdown(5);
// Expected Output:
// 5
// 4
// 3
// 2
// 1
// Condition: Use recursion.
// Do not use for, while, or do...while.

function countdown(n){
    if(n < 1){
        return;
    }
    console.log(n);
    countdown(n - 1);
}

countdown(5);


// 🟢 Question 2 – Calculate Factorial
// Create a recursive function called factorial() that calculates the factorial of a number.
// Example:
// factorial(5);
// Expected Output:
// 120
// Because:
// 5 × 4 × 3 × 2 × 1 = 120
// Test your function with:
// factorial(6);
// Expected Output:
// 720
// Condition: Use recursion.
// Do not use loops.

function factorial(a) {
    if (a <= 1){
        return 1;
    }
    return a * factorial(a - 1);
}

console.log(factorial(5));
console.log(factorial(6));