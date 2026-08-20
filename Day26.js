// 🔹 Question 1 – Convert First Letter to Uppercase
// Create a function named capitalizeFirst that accepts a string and returns the string with its first letter in uppercase.
// Program Flow
// Create function capitalizeFirst
// Accept one parameter
// Convert only the first character to uppercase
// Keep the remaining characters unchanged
// Use return
// Call with "javascript"
// Display the result
// Example Output
// Javascript
// ⚠️ Conditions
// ✅ Use function
// ✅ One parameter
// ✅ Use .toUpperCase()
// ✅ Use .slice()
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't hardcode the output
// ❌ Don't use arrow function
// 💡 Hint:
// First character → string[0]
// Remaining characters → string.slice(1)
// Think about how you can combine them.

function capitalizeFirst(word){
    return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeFirst("javascript"));


