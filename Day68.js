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


