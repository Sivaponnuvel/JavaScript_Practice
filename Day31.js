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


// 🔹 Question 2 – Add Elements Using .unshift()
// Create an array named numbers with:
// 30, 40
// Then:
// Add 20 at the beginning using .unshift()
// Add 10 at the beginning using .unshift()
// Display the final array
// Example Output
// [10, 20, 30, 40]
// ⚠️ Conditions
// ✅ Use let
// ✅ Use an array
// ✅ Use .unshift()
// ✅ Use console.log()
// ❌ Don't directly create the array with all four values
// ❌ Don't use .push()
// 💡 Hint: .unshift() adds a new element at the beginning of an array. Since you're adding one element at a time, think about what happens to the existing elements each time.

let numbers = [30, 40];

numbers.unshift(20);
numbers.unshift(10);

console.log(numbers);