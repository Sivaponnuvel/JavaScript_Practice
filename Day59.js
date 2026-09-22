// 🟢 Question 1 – User Data
// You have this JavaScript object:
// let user = {
//     name: "Sivaponnuvel",
//     age: 22,
//     role: "Python Developer"
// };
// Do the following:
// Convert the user object into a JSON string using JSON.stringify().
// Store the result in a variable called jsonData.
// Print jsonData.
// Print its data type using typeof.
// Expected Output:
// {"name":"Sivaponnuvel","age":22,"role":"Python Developer"}
// string
// Condition: Use JSON.stringify().

let user = {
    name: "Sivaponnuvel",
    age: 22,
    role: "Python Developer"
};

let jsonData = JSON.stringify(user);

console.log(jsonData);
console.log(typeof(jsonData));


