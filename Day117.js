// Question 1 – Square Each Number Using Map()
// Write an arrow function named squareNumbers that accepts an array of numbers and returns a new array containing the square of each number.
// Input:
// let numbers = [2, 3, 4, 5, 6];
// Expected Output:
// [4, 9, 16, 25, 36]
// Conditions:
// 1. Use an arrow function named squareNumbers.
// 2. The function must accept one parameter (array).
// 3. Use the map() array method.
// 4. Calculate the square of each number using ** 2.
// 5. Return the new array.
// 6. Print the result using console.log().

let numbers = [2, 3, 4, 5, 6];

const squareNumbers = (numbers) => {
    return numbers.map(number => number ** 2)
}

console.log(squareNumbers(numbers));


// Question 2 – Extract Student Names Using Map()
// Write an arrow function named getStudentNames that accepts an array of student objects and returns a new array containing only the student names.
// Input:
// let students = [
//     { id: 1, name: "Arun", age: 21 },
//     { id: 2, name: "Kumar", age: 22 },
//     { id: 3, name: "Ravi", age: 20 },
//     { id: 4, name: "Priya", age: 23 }
// ];
// Expected Output:
// ["Arun", "Kumar", "Ravi", "Priya"]
// Conditions:
// 1. Use an arrow function named getStudentNames.
// 2. The function must accept one parameter (array).
// 3. Use the map() array method.
// 4. Extract only the name property from each student object.
// 5. Return the new array.
// 6. Print the result using console.log().

let students = [
    { id: 1, name: "Arun", age: 21 },
    { id: 2, name: "Kumar", age: 22 },
    { id: 3, name: "Ravi", age: 20 },
    { id: 4, name: "Priya", age: 23 }
];

const getStudentNames = (students) => {
    return students.map(student => student.name)
}

console.log(getStudentNames(students));