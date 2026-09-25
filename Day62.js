// 🟢 Question 1 – Employee Appointment Date
// A hospital stores an appointment date:
// let appointmentDate = new Date("2026-10-15T14:30:00");
// Do the following:
// Print the year
// Print the month
// Print the date
// Print the hour
// Print the minutes
// Create and print a formatted output in this style:
// 15/10/2026
// Condition: Use JavaScript Date methods.
// Don't manually hardcode 15/10/2026.

let appointmentDate = new Date("2026-10-15T14:30:00");

console.log(appointmentDate.getFullYear());
console.log(appointmentDate.getMonth()+1);
console.log(appointmentDate.getDate());
console.log(appointmentDate.getHours());
console.log(appointmentDate.getMinutes());

console.log(`${appointmentDate.getDate()}/${appointmentDate.getMonth()+1}/${appointmentDate.getFullYear()}`);


