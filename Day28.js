// 🔹 Question 1 – Reverse a String
// Create a function named reverseString that accepts a string and returns the string in reverse order.
// Call the function with:
// "hello"
// Example Output
// olleh
// ⚠️ Conditions
// ✅ Use function
// ✅ Accept one parameter
// ✅ Use a for loop
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't use .reverse()
// ❌ Don't use arrays
// ❌ Don't hardcode the output
// ❌ Don't use arrow function
// 💡 Hint: Start the loop from the last string[i]acter using string.length - 1 and move backwards using i--. Create an empty string and keep adding string[i]acters.

function reverseString(word){
    let rev = "";
    for(let i = 0; i < word.length; i++){
        rev =  word[i] + rev
    }
    return rev
}

console.log(reverseString("hello"));


