// 🟢 Question 1 – Safe Number Conversion
// Create a function called:
// convertToNumber(value)
// The function should convert the given value into a number using Number().
// Use try...catch to handle invalid input.
// Test:
// convertToNumber("100");
// convertToNumber("hello");
// Expected output:
// Number: 100
// Error: Invalid number
// Conditions:
// Use try...catch ✅
// Use Number() ✅
// If the value cannot be converted into a valid number, throw an error using throw new Error("Invalid number") ✅
// Do not let the program stop when "hello" is passed.

function convertToNumber(value){
    try{
        let num = Number(value);

        if(isNaN(num)){
            throw new Error("Invalid Number");
        }

        console.log(`Number: ${num}`);
    }
    catch (error){
        console.log(`Error: ${error.message}`)
    }
}

convertToNumber("100");
convertToNumber("hello");


