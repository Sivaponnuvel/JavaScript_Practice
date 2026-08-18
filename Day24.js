// 🔹 Question 1 – Find String Length Using Function
// Write a JavaScript program to create a function named findLength that accepts a string and returns its length.
// Program Flow
// Create a function named findLength
// Accept one parameter
// Find the length of the string
// Use return
// Call the function with "JavaScript"
// Display the returned result using console.log()
// Example Output
// 10
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Accept one parameter
// ✅ Use .length
// ✅ Use return
// ✅ Display result using console.log()
// ❌ Don't hardcode 10
// ❌ Don't use arrow function
// ❌ Don't use a global variable
// 💡 Hint:
// A string has a .length property.

function findLength(string){
    let result = string.length;
    return result;
}

console.log(findLength("JavaScript"));


// 🔹 Question 2 – Convert String to Uppercase
// Write a JavaScript program to create a function named convertUppercase that accepts a string and returns the string in uppercase.
// Program Flow
// Create a function named convertUppercase
// Accept one parameter
// Convert the string to uppercase
// Use return
// Call the function with "javascript"
// Display the returned result using console.log()
// Example Output
// JAVASCRIPT
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Accept one parameter
// ✅ Use .toUpperCase()
// ✅ Use return
// ✅ Display the returned value using console.log()
// ❌ Don't hardcode "JAVASCRIPT"
// ❌ Don't use arrow function
// ❌ Don't use a global variable
// 💡 Hint:
// There is a built-in string method that converts all characters to uppercase.

function convertUppercase(language){
    let result = language.toUpperCase();
    return result;
}

console.log(convertUppercase("javascript"));