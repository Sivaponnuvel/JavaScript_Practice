// 🟢 Question 1 – Select and Update HTML Content
// Create the following HTML:
// <h1 id="title">Welcome</h1>
// <p id="message">Old message</p>
// Using JavaScript:
// Select the <h1> using getElementById().
// Change its text to:
// JavaScript DOM
// Select the <p> using getElementById().
// Change its text to:
// DOM manipulation is easy
// Change the <h1> text color to blue using JavaScript.
// Conditions:
// Must use document.getElementById()
// Must use .textContent
// Must modify the CSS using .style
// Don't modify the HTML text directly.

document.getElementById("title").textContent = "JavaScript DOM";

document.getElementById("message").textContent = "DOM manipulation is easy";

document.getElementById("title").style.color = "blue"


