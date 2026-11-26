// Question 1 – Calculate Total Price of Products
// Concept: map(), Objects, Arithmetic Operations.
// You are given an array of products. Each product has a name and price.
// Your task is to create a new array containing each product's name and its price after adding 10% tax.
// Input:
// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mobile", price: 20000 },
//     { name: "Tablet", price: 15000 }
// ];
// Expected Output:
// [
//     { name: "Laptop", price: 55000 },
//     { name: "Mobile", price: 22000 },
//     { name: "Tablet", price: 16500 }
// ]
// Requirements:
// 1. Create an array named products.
// 2. Use the map() method to process every product.
// 3. For each product, calculate 10% tax.
// 4. Add the tax to the original price.
// 5. Return a new object containing the product's name and updated price.
// 6. Store the new array in a variable named updatedProducts.
// 7. Print updatedProducts using console.log().

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Tablet", price: 15000 }
];

let updatedProducts = products.map(product => {
    return {
        name: product.name,
        price: product.price + (product.price * 10 / 100)
    }
})

console.log(updatedProducts);


// Question 2 – Extract Employee Names and Calculate Bonus
// Concept: map(), Objects, Conditional Logic, Arithmetic Operations.
// You are given an array of employees. Each employee has an ID, name, and salary.
// Your task is to create a new array containing each employee's name and bonus.
// Bonus condition:
// - Salary greater than or equal to ₹30,000 → 10% bonus.
// - Salary less than ₹30,000 → 5% bonus.
// Input:
// let employees = [
//     { id: 101, name: "Arun", salary: 25000 },
//     { id: 102, name: "Kumar", salary: 40000 },
//     { id: 103, name: "Ravi", salary: 20000 },
//     { id: 104, name: "Suresh", salary: 50000 }
// ];
// Expected Output:
// [
//     { name: "Arun", bonus: 1250 },
//     { name: "Kumar", bonus: 4000 },
//     { name: "Ravi", bonus: 1000 },
//     { name: "Suresh", bonus: 5000 }
// ]
// Requirements:
// 1. Create an array named employees.
// 2. Use map() to process every employee.
// 3. Check the employee's salary using an if...else condition.
// 4. If salary is greater than or equal to 30000, calculate a 10% bonus.
// 5. Otherwise, calculate a 5% bonus.
// 6. Return a new object containing only name and bonus.
// 7. Store the result in employeeBonuses.
// 8. Print employeeBonuses using console.log().

let employees = [
    { id: 101, name: "Arun", salary: 25000 },
    { id: 102, name: "Kumar", salary: 40000 },
    { id: 103, name: "Ravi", salary: 20000 },
    { id: 104, name: "Suresh", salary: 50000 }
];

let employeeBonuses = employees.map(employee => {
    let bonus;

    if (employee.salary >= 30000) {
        bonus = employee.salary * 10 / 100;
    } else {
        bonus = employee.salary * 5 / 100;
    }
    return {
        name: employee.name,
        bonus: bonus
    }
});

console.log(employeeBonuses);