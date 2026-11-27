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


