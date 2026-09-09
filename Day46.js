// 🔹 Question 1 – Sort Numbers in Ascending Order
// Create:
// let numbers = [50, 10, 40, 20, 30];
// Using sort():
// Sort the numbers in ascending order
// Store the result in a new variable
// Display the result
// Expected Output:
// [10, 20, 30, 40, 50]
// ⚠️ Conditions:
// ✅ Use let
// ✅ Use .sort()
// ✅ Use a comparison function
// ✅ Store the result in a new variable
// ✅ Use console.log()
// ❌ Don't use for loop
// ❌ Don't use forEach()
// ❌ Don't use map()
// ❌ Don't use filter()

function compareNumbers(a, b){
    return a - b;
}

let numbers = [50, 10, 40, 20, 30];

const result = numbers.sort(compareNumbers);

console.log(result);


