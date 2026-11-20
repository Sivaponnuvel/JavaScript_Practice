// Question 1 – Filter Numbers Greater Than 50
// Write an arrow function named filterNumbers that accepts an array of numbers and returns a new array containing only numbers greater than 50.
// Input:
// let numbers = [25, 60, 45, 80, 35, 90, 50, 75];
// Expected Output:
// [60, 80, 90, 75]
// Conditions:
// 1. Use an arrow function named filterNumbers.
// 2. The function must accept one parameter (array).
// 3. Use the filter() array method.
// 4. Check numbers greater than 50.
// 5. Return the filtered array.
// 6. Print the result using console.log().

let numbers = [25, 60, 45, 80, 35, 90, 50, 75];

const filterNumbers = (numbers) => {
    return numbers.filter((number) => number > 50);
}

console.log(filterNumbers(numbers));


// Question 2 – Filter Students Based on Age
// Write an arrow function named filterStudents that accepts an array of student objects and returns only students whose age is greater than or equal to 21.
// Input:
// let students = [
//     { id: 1, name: "Arun", age: 20 },
//     { id: 2, name: "Kumar", age: 22 },
//     { id: 3, name: "Ravi", age: 19 },
//     { id: 4, name: "Priya", age: 23 },
//     { id: 5, name: "Vijay", age: 21 }
// ];
// Expected Output:
// [
//     { id: 2, name: "Kumar", age: 22 },
//     { id: 4, name: "Priya", age: 23 },
//     { id: 5, name: "Vijay", age: 21 }
// ]
// Conditions:
// 1. Use an arrow function named filterStudents.
// 2. The function must accept one parameter (array).
// 3. Use the filter() array method.
// 4. Check student age using student.age >= 21.
// 5. Return the filtered array of student objects.
// 6. Print the result using console.log().

let students = [
    { id: 1, name: "Arun", age: 20 },
    { id: 2, name: "Kumar", age: 22 },
    { id: 3, name: "Ravi", age: 19 },
    { id: 4, name: "Priya", age: 23 },
    { id: 5, name: "Vijay", age: 21 }
];

const filterStudents = (students) => {
    return students.filter((student) => student.age >= 21);
}

console.log(filterStudents(students));