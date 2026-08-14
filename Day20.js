// 🔹 Question 1 – Create and Call a Function
// Write a JavaScript program to create a function named greet.
// The function should print:
// Hello, Welcome to JavaScript
// ⚠️ Conditions
// ✅ Create a function using function keyword
// ✅ Function name should be greet
// ✅ Use console.log() inside the function
// ✅ Call the function
// ❌ Don't use arrow function
// ❌ Don't write the message directly outside the function
// 💡 Hint: First define the function, then call it.

function greet(){
    console.log("Hello, Welcome to JavaScript");
}

greet();


// 🔹 Question 2 – Function with Parameter
// Write a JavaScript program to create a function named greetUser that accepts a user's name as a parameter.
// Call the function with:
// Siva
// The output should be:
// Hello Siva
// ⚠️ Conditions
// ✅ Create a function using function keyword
// ✅ Accept one parameter
// ✅ Pass "Siva" while calling the function
// ✅ Use console.log()
// ❌ Don't use global variable for the name
// ❌ Don't use arrow function
// ❌ Don't hardcode "Hello Siva" inside console.log()
// 💡 Hint: The parameter receives the value when you call the function.

function greetUser(name){
    console.log("Hello",name);
}

greetUser("Siva");