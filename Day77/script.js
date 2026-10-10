// 🟢 Question 1 – Live Username Display
// Consider this HTML:
// <input id="username" type="text" placeholder="Enter your name">
// <p id="output">Your name will appear here</p>
// Write JavaScript code to:
// 1. Select the input element.
// 2. Select the paragraph.
// 3. Add an input event listener to the input.
// 4. Whenever the user types something, display the entered name inside the paragraph.
// Example
// If the user types:
// Siva
// The paragraph should show:
// Hello Siva
// If the user changes it to:
// Sivaponnuvel
// It should automatically change to:
// Hello Sivaponnuvel
// Condition: Use addEventListener() with the "input" event.

let userName = document.getElementById("username");
let output = document.getElementById("output");

userName.addEventListener("input", function(){
    output.textContent = `Hello ${userName.value}`;
})


