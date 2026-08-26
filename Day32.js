// 🔹 Question 1 – Find Number of Elements
// Create an array named cities containing:
// "Chennai"
// "Mumbai"
// "Delhi"
// "Bangalore"
// "Kolkata"
// Display the total number of elements in the array.
// Example Output
// 5
// ⚠️ Conditions
// ✅ Use let
// ✅ Use an array
// ✅ Use .length
// ✅ Use console.log()
// ❌ Don't hardcode 5
// 💡 Hint: Array-la total items count panna .length use pannalam.

let cities =  ['Chennai', "Mumbai", "Delhi", "Bangalore", "Kolkata"];

console.log(cities.length);


// 🔹 Question 2 – Update an Array Element
// Create an array named languages containing:
// "Python"
// "Java"
// "C++"
// Then change "Java" to "JavaScript".
// Finally, display the updated array.
// Example Output
// ["Python", "JavaScript", "C++"]
// ⚠️ Conditions
// ✅ Use let
// ✅ Use array indexing
// ✅ Update the existing element
// ✅ Use console.log()
// ❌ Don't create a new array
// ❌ Don't use .push() or .pop()
// ❌ Don't directly create the array with "JavaScript"
// 💡 Hint: "Java" is already inside the array. Find its index position and assign the new value using =.
// Code panni anuppu 👍 நான் check pannuren.

let languages = ["Python", "Java", "C++"];

languages[1] = "JavaScript";

console.log(languages);