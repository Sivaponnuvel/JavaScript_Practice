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


// 🟢 Question 2 – JSON Data to Object
// You receive this JSON data from an API:
// let jsonData = '{"name":"Sivaponnuvel","role":"Python Developer","experience":1}';
// Do the following:
// Convert the JSON string into a JavaScript object using JSON.parse().
// Store it in a variable called user.
// Print the user's name.
// Print the user's role.
// Print the user's experience.
// Print the data type of user.
// Expected Output:
// Sivaponnuvel
// Python Developer
// 1
// object
// Condition: Use JSON.parse().

let jsonData1 = '{"name":"Sivaponnuvel","role":"Python Developer","experience":1}';

let user1 = JSON.parse(jsonData1);

console.log(user1.name);
console.log(user1.role);
console.log(user1.experience);
console.log(typeof(user1));