// Question 1 – Filter Eligible Voters
// Concept: filter(), Objects, Conditional Operators.
// You are given an array of people. Each person has a name and age.
// Your task is to filter people who are eligible to vote.
// Condition:
// - Age greater than or equal to 18 → Eligible.
// - Age less than 18 → Not eligible.
// Input:
// let people = [
//     { name: "Arun", age: 25 },
//     { name: "Kumar", age: 16 },
//     { name: "Ravi", age: 18 },
//     { name: "Suresh", age: 15 },
//     { name: "Vijay", age: 30 }
// ];
// Expected Output:
// [
//     { name: "Arun", age: 25 },
//     { name: "Ravi", age: 18 },
//     { name: "Vijay", age: 30 }
// ]
// Requirements:
// 1. Create an array named people.
// 2. Use the filter() method.
// 3. Check each person's age.
// 4. Filter people whose age is greater than or equal to 18.
// 5. Store the result in eligibleVoters.
// 6. Print eligibleVoters using console.log().

let people = [
    { name: "Arun", age: 25 },
    { name: "Kumar", age: 16 },
    { name: "Ravi", age: 18 },
    { name: "Suresh", age: 15 },
    { name: "Vijay", age: 30 }
];

const eligibleVoters = people.filter(people => {
    if(people.age >= 18){
        return{
            name: people.name,
            age: people.age
        }
    }
})

console.log(eligibleVoters);


// Question 2 – Filter Employees Based on Salary
// Concept: filter(), Objects, Conditional Logic, Comparison Operators.
// You are given an array of employees. Each employee has an ID, name, and salary.
// Your task is to filter employees whose salary is greater than or equal to ₹30,000.
// Condition:
// - Salary greater than or equal to ₹30,000 → Include.
// - Salary less than ₹30,000 → Exclude.
// Input:
// let employees = [
//     { id: 101, name: "Arun", salary: 25000 },
//     { id: 102, name: "Kumar", salary: 40000 },
//     { id: 103, name: "Ravi", salary: 20000 },
//     { id: 104, name: "Suresh", salary: 50000 },
//     { id: 105, name: "Vijay", salary: 30000 }
// ];
// Expected Output:
// [
//     { id: 102, name: "Kumar", salary: 40000 },
//     { id: 104, name: "Suresh", salary: 50000 },
//     { id: 105, name: "Vijay", salary: 30000 }
// ]
// Requirements:
// 1. Create an array named employees.
// 2. Use the filter() method.
// 3. Check each employee's salary.
// 4. Filter employees whose salary is greater than or equal to 30000.
// 5. Store the result in highSalaryEmployees.
// 6. Print highSalaryEmployees using console.log().

let employees = [
    { id: 101, name: "Arun", salary: 25000 },
    { id: 102, name: "Kumar", salary: 40000 },
    { id: 103, name: "Ravi", salary: 20000 },
    { id: 104, name: "Suresh", salary: 50000 },
    { id: 105, name: "Vijay", salary: 30000 }
];

const highSalaryEmployees = employees.filter(employee => {
    if (employee.salary >= 30000){
        return{
            id: employee.id,
            name: employee.name,
            salary: employee.salary
        }
    }
})

console.log(highSalaryEmployees);