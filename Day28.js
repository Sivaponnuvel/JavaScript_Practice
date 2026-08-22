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


// 🔹 Question 2 – Count Vowels in a String
// Create a function named countVowels that accepts a string and returns the total number of vowels.
// Vowels are:
// a, e, i, o, u
// Call the function with:
// "javascript"
// Example Output
// 3
// ⚠️ Conditions
// ✅ Use function
// ✅ Accept one parameter
// ✅ Use a for loop
// ✅ Use if
// ✅ Use return
// ✅ Use console.log()
// ❌ Don't manually count the answer
// ❌ Don't use arrays
// ❌ Don't use arrow function
// 💡 Hint: Create a variable like count = 0. Loop through each string[i]acter and check whether it is one of the vowels using logical OR (||). If yes, increase the count.

function countVowels(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(
            string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ||
            string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U'
        ){
            count += 1
        }
    }
    return count;
}

console.log(countVowels("javascript"));