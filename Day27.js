// 🔹 Question 1 – Check First and Last Character
// Create a function named checkFirstLast that accepts a string and checks whether its first and last characters are the same.
// Call the function with:
// "level"
// If both are the same, return:
// Same
// Otherwise, return:
// Different
// Example Output
// Same
// ⚠️ Conditions
// ✅ Use function
// ✅ Accept one parameter
// ✅ Use if...else
// ✅ Use return
// ✅ Use .length
// ✅ Use console.log()
// ❌ Don't use arrays
// ❌ Don't hardcode the answer
// ❌ Don't use arrow function
// 💡 Hint:
// First character → string[0]
// Last character position can be found using .length.

function checkFirstLast(word){

    let firstletter = word[0]
    let len = word.length
    let lastletter = word[len - 1]

    if (firstletter === lastletter){
        return "Same";
    }
    else{
        return "Different";
    }

}

console.log(checkFirstLast("level"));


// 🔹 Question 2 – Replace a Word in a String
// Create a function named replaceWord that accepts a sentence and returns the sentence after replacing "Python" with "JavaScript".
// Call the function with:
// "I am learning Python"
// Example Output
// I am learning JavaScript
// ⚠️ Conditions
// ✅ Use function
// ✅ Accept one parameter
// ✅ Use .replace()
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't hardcode the final output
// ❌ Don't use arrow function
// 💡 Hint:
// .replace() needs two values:
// What you want to find
// What you want to replace it with

function replaceWord(sentence){
    return sentence.replace("Python", "JavaScript");
}

console.log(replaceWord("I am learning Python"));