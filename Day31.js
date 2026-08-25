// 🔹 Question 1 – Remove First Element Using .shift()
// Create an array named fruits with:
// "Apple"
// "Banana"
// "Mango"
// "Orange"
// Then:
// Remove the first element using .shift()
// Store the removed element in a variable
// Display the removed element
// Display the remaining array
// Example Output
// Apple
// ["Banana", "Mango", "Orange"]
// ⚠️ Conditions
// ✅ Use let
// ✅ Use an array
// ✅ Use .shift()
// ✅ Store the removed value in a variable
// ✅ Use console.log()
// ❌ Don't use .pop()
// ❌ Don't manually remove "Apple"
// 💡 Hint: .shift() works like .pop(), but it removes the element from the beginning of the array.

let fruits = ["Apple", "Banana", "Mango", "Orange"];

let remove = fruits.shift();

console.log(remove);
console.log(fruits);


