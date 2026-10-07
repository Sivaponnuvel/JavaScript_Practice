// 🟢 Question 1 – Create and Add an Element
// Create this HTML:
// <div id="container"></div>
// Using JavaScript:
// 1. Select the div using getElementById().
// 2. Create a new <h2> element using document.createElement().
// 3. Set its text to:Welcome to JavaScript
// 4. Change the <h2> text color to blue.
// 5. Add the <h2> inside the <div> using appendChild().
// Expected page:
// Welcome to JavaScript
// Conditions:
// - Must use document.getElementById()
// - Must use document.createElement()
// - Must use .textContent
// - Must use .style
// - Must use .appendChild()
// - Don't write the <h2> directly in HTML.

let element = document.getElementById("container");

let h2 = document.createElement("h2");

h2.textContent = "Welcome to JavaScript";

h2.style.color = "blue";

element.appendChild(h2);


// 🟢 Question 2 – Input Value and DOM Update
// Create this HTML:
// <input id="username" type="text" placeholder="Enter your name">
// <button id="btn">Submit</button>
// <h2 id="result"></h2>
// Using JavaScript:
// 1. Get the input element using getElementById().
// 2. Get the button using getElementById().
// 3. Get the <h2> using getElementById().
// 4. When the button is clicked:
//    - Read the user's input using .value.
//    - Display:Welcome, Siva
//      if the user enters Siva.
// 5. Change the result text color to green.
// Example:
// If the user enters:
// Siva
// After clicking Submit:
// Welcome, Siva
// Conditions 🔥:
// - Must use document.getElementById()
// - Must use .value
// - Must use .textContent
// - Must use .style
// - Must use addEventListener("click", ...)
// - No onclick attribute in HTML
// - No querySelector()

let usernameInput = document.getElementById("username");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", function () {
    let username = usernameInput.value;

    result.textContent = `Welcome, ${username}`;
    result.style.color = "green";
})