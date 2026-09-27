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


// 🟢 Question 2 – Reverse a String
// Create a recursive function called reverseString().
// The function should take a string and return the string in reverse order.
// Example:
// reverseString("hello");
// Expected Output:
// "olleh"
// Test with:
// reverseString("javascript");
// Expected Output:
// "tpircsavaj"

function reverseString(name) {
    if(name === ""){
        return "";
    }
    return reverseString(name.slice(1)) + name[0];
}

console.log(reverseString("hello"));
console.log(reverseString("javascript"));