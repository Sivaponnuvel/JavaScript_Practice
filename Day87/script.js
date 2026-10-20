// 🟢 Question 1 – Live Username Display
// Topic: DOM + addEventListener() + input event
// Consider this HTML:
// <input id="username" type="text" placeholder="Enter your name">
// <p id="output">Your name will appear here</p>
// Write JavaScript code to:
// 1. Select the input element.
// 2. Select the paragraph element.
// 3. Add an input event listener to the input.
// 4. Whenever the user types something, display the entered name inside the paragraph.
// Expected behavior:
// If the user types Siva, display:
// Hello Siva
// If the user changes it to Sivaponnuvel, display:
// Hello Sivaponnuvel
// Condition: Use addEventListener() with the "input" event.

let username = document.getElementById("username");
let output = document.getElementById("output");

username.addEventListener("input", function(){
    output.textContent = `Hello ${username.value}`;
})


