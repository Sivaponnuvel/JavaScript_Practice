// 🔹 Question 1 – Convert String to Lowercase
// Write a JavaScript program to create a function named convertLowercase that accepts a string and returns the string in lowercase.
// Program Flow
// Create a function named convertLowercase
// Accept one parameter
// Convert the string to lowercase
// Use return
// Call the function with "JAVASCRIPT"
// Display the returned result using console.log()
// Example Output
// javascript
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Accept one parameter
// ✅ Use .toLowerCase()
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't hardcode "javascript"
// ❌ Don't use arrow function
// ❌ Don't use global variable
// 💡 Hint: Uppercase-ku .toUpperCase() use pannom. Lowercase-ku அதுக்கு opposite method என்னன்னு think pannu.

function convertLowercase(string){
    return string.toLowerCase();
}

console.log(convertLowercase("JAVASCRIPT"));


// 🔹 Question 2 – Check String Contains a Word
// Write a JavaScript program to create a function named checkWord that accepts a string and checks whether the string contains the word "JavaScript".
// Program Flow
// Create a function named checkWord
// Accept one parameter
// Check whether the string contains "JavaScript"
// If it contains → return "Word Found"
// Otherwise → return "Word Not Found"
// Call the function with:
// "I am learning JavaScript"
// Display the returned result using console.log()
// Example Output
// Word Found
// ⚠️ Conditions
// ✅ Use function keyword
// ✅ Accept one parameter
// ✅ Use if...else
// ✅ Use return
// ✅ Use a string method to check whether "JavaScript" exists
// ✅ Use console.log()
// ❌ Don't use global variables
// ❌ Don't hardcode "Word Found" outside the function
// ❌ Don't use arrow function
// 💡 Hint: String-kulla oru particular word irukka-nu check panna .includes() method useful-a irukkum.

function checkWord(sentence){
    if(sentence.includes("JavaScript")){
        return "Word Found";
    }
    else{
        return "Word Not Found";
    }
}

console.log(checkWord("I am learning JavaScript"));