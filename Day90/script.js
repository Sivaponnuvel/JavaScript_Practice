// 🟢 Question 1 – Simple Price Calculator
// Topics: DOM, .value, Number(), addEventListener()
// Consider this HTML:
// <input id="price" type="number" placeholder="Enter product price">
// <button id="calculateBtn">Calculate GST</button>
// <p id="result"></p>
// Write JavaScript code to:
// 1. Select the price input, button, and result paragraph.
// 2. Add a click event listener to the button.
// 3. Read the product price entered by the user.
// 4. Calculate 18% GST on the product price.
// 5. Display the GST amount inside the result paragraph.
// Expected output:
// If the user enters 1000:
// GST Amount: ₹180
// If the user enters 2000:
// GST Amount: ₹360
// Conditions:
// - Use addEventListener("click", ...).
// - Use .value and Number().
// - Display the result using textContent.

let price = document.getElementById("price");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", function(){
    let pirceText = Number(price.value);

    let gstPrice = pirceText * (18/100);

    result.textContent = `GST Amount: ₹${gstPrice}`;
})


