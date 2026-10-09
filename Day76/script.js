// 🟢 Question 1 – Button Click Greeting
// Consider this HTML:
// <h2 id="message">Welcome</h2>
// <button id="greetBtn">Click Me</button>
// Write JavaScript code to:
// 1. Select the button using getElementById().
// 2. Add a click event listener to the button.
// 3. When the button is clicked, change the <h2> text to:
// Hello Siva! Welcome to JavaScript.
// Condition: Use addEventListener().

let msg = document.getElementById("message");
let btn = document.getElementById("greetBtn");

btn.addEventListener("click", function(){
    msg.textContent = "Hello Siva! Welcome to JavaScript.";
})


