// 🟢 Question 1 – Product Price Validation
// Create a function:
// validatePrice(price)
// The function should validate a product price.
// Rules:
// If price is not a number → throw:
// Error: Price must be a number
// If price is less than or equal to 0 → throw:
// Error: Price must be greater than 0
// If the price is valid → print:
// Valid price: 500
// Use try...catch.
// Test:
// validatePrice(500);
// validatePrice(-100);
// validatePrice("500");
// Expected:
// Valid price: 500
// Error: Price must be greater than 0
// Error: Price must be a number
// Condition: Use throw new Error() for validation errors.

function validatePrice(price){
    try {
        if (typeof price !== "number"){
            throw new Error("Price must be a number");    
        }

        else if(price <= 0){
            throw new Error("Price must be greater than 0");
        }

        console.log(`Valid price: ${price}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}   

validatePrice(500);
validatePrice(-100);
validatePrice("500");


// 🟢 Question 2 – Bank Withdrawal Validation
// Create a function:
// withdraw(balance, amount)
// Use try...catch...finally.
// Rules:
// If amount is not a number:
// Error: Amount must be a number
// If amount <= 0:
// Error: Amount must be greater than 0
// If amount > balance:
// Error: Insufficient balance
// If everything is valid:
// Withdrawal successful
// Remaining balance: 700
// For example:
// withdraw(1000, 300);
// withdraw(1000, 1500);
// withdraw(1000, -100);
// withdraw(1000, "500");
// Expected:
// Withdrawal successful
// Remaining balance: 700
// Error: Insufficient balance
// Error: Amount must be greater than 0
// Error: Amount must be a number
// The finally block must always print:
// Transaction completed
// Conditions 🔥
// Use try ✅
// Use catch ✅
// Use finally ✅
// Use throw new Error() ✅
// No loops required
// Don't simply print the error without actually throwing it

function withdraw(balance, amount){
    try {
        if(typeof amount !== "number"){
            throw new Error("Amount must be a number");
        }

        else if(amount <= 0){
            throw new Error("Amount must be greater than 0");
        }

        else if(amount > balance){
            throw new Error("Insufficient balance");
        }

        console.log("Withdrawal successful")
        console.log(`Remaining balance: ${balance - amount}`)

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
    finally {
        console.log("Transaction completed");
    }
}

withdraw(1000, 300);
withdraw(1000, 1500);
withdraw(1000, -100);
withdraw(1000, "500");