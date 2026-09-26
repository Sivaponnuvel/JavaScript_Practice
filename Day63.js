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


