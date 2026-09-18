// 🟢 Question 1 – User Profile Update
// You have a user profile object:
// let user = {
//     name: "Sivaponnuvel",
//     age: 22,
//     role: "Python Developer"
// };
// Do the following:
// Add a new property location with value "Chennai".
// Add a new property experience with value 1.
// Change role to "Python Full Stack Developer".
// Print the complete user object.
// Expected Output:
// {
//   name: "Sivaponnuvel",
//   age: 22,
//   role: "Python Full Stack Developer",
//   location: "Chennai",
//   experience: "Fresher"
// }
// Condition: Use JavaScript object property syntax to add and update the properties.

let user = {
    name: "Sivaponnuvel",
    age: 22,
    role: "Python Developer"
};

user.role = "Python Full Stack Developer";
user.location = "Chennai";
user.experience = "Fresher";

console.log(user);


