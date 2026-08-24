// 🔹 Question 1 – Add Elements Using .push()
// Create an array named colors with:
// "Red"
// "Blue"
// Then:
// Add "Green" using .push()
// Add "Yellow" using .push()
// Display the final array.
// Example Output
// ["Red", "Blue", "Green", "Yellow"]
// ⚠️ Conditions
// ✅ Use let
// ✅ Use an array
// ✅ Use .push()
// ✅ Use console.log()
// ❌ Don't directly add all four values while creating the array
// ❌ Don't use unshift()
// 💡 Hint: .push() adds a new element at the end of an array.

let colors = ["Red", "Blue",];

colors.push("Green");
colors.push("Yellow");

console.log(colors);


// 🔹 Question 2 – Remove Elements Using .pop()
// Create an array named numbers with:
// 10
// 20
// 30
// 40
// Then:
// Remove the last element using .pop()
// Display the removed element.
// Display the remaining array.
// Example Output
// 40
// [10, 20, 30]
// ⚠️ Conditions
// ✅ Use let
// ✅ Use .pop()
// ✅ Store the removed element in a variable
// ✅ Use console.log()
// ❌ Don't manually remove 40
// ❌ Don't use .splice()
// 💡 Hint: .pop() not only removes the last element, it also returns the removed value.

let numbers = [10, 20, 30, 40];

let remove = numbers.pop();

console.log(remove);
console.log(numbers);