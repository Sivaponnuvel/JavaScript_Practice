// 🟢 Question 1 – Sum of Numbers
// Create a recursive function called sumNumbers().
// The function should take a positive integer n and return the sum of all numbers from 1 to n.
// Example:
// sumNumbers(5);
// Expected Output:
// 15
// Because:
// 1 + 2 + 3 + 4 + 5 = 15
// Test with:
// sumNumbers(10);
// Expected Output:
// 55
// Condition:
// Must use recursion.
// Do not use for, while, or do...while.

function sumNumbers(n){
    if(n <= 1){
        return 1;
    }
    return n + sumNumbers(n - 1);
}

console.log(sumNumbers(5));
console.log(sumNumbers(10));


