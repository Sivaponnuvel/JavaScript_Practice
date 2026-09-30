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


// 🟢 Question 2 – User Login Validation
// Create a function:
// login(username, password)
// Use try...catch...finally.
// Conditions:
// If username is empty:
// Error: Username is required
// If password is empty:
// Error: Password is required
// If both are provided:
// Login successful
// The finally block should always print:
// Login attempt completed
// Test:
// login("", "1234");
// login("Siva", "");
// login("Siva", "1234");
// Expected output:
// Error: Username is required
// Login attempt completed
// Error: Password is required
// Login attempt completed
// Login successful
// Login attempt completed
// Conditions 🔥
// Use try ✅
// Use catch ✅
// Use finally ✅
// Use throw new Error() for validation errors ✅
// Don't use if...else alone without error handling.

function login(username, password){
    try {
        if(username === ""){
            throw new Error("Username is required");
        }
        else if(password === ""){
            throw new Error("Password is required");
        }
        console.log("Login successful");
    }

    catch (error) {
        console.log(`Error: ${error.message}`);
    }
    
    finally{
        console.log("Login attempt completed");
    }
}

login("", "1234");
login("Siva", "");
login("Siva", "1234");